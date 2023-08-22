import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import axios from "axios";

type Data = {
    sucess: string;
    message: string;
    data: Array<number | string | Array<any>>;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const client = await clientPromise;
        const db = client.db("student_portal");

        const { searchTerms } = req.body;
        let searchTerm = "";
        let category = ""; // Grades, PersonalInformation, 
        let searchQuery = {}

        if (searchTerm) {
            searchQuery = {
                $or: [
                    { "personalDetails.fullname": { $regex: searchTerm, $options: "i" } },
                    { "enrollmentDetails.lrn": { $regex: searchTerm, $options: "i" } },
                    { "enrollmentDetails.studentNumber": { $regex: searchTerm, $options: "i" } },
                    { "combinedGradeSection": { $regex: searchTerm, $options: "i" } }
                ]
            }
        }

        const data = await db.collection("students").aggregate([
            {
                $unwind: "$classes"
            },
            {
                $lookup: {
                    from: "sections",
                    localField: "classes.section",
                    foreignField: "_id",
                    as: "classes.sectionDetails",
                },
            },
            {
                $unwind: "$classes.sectionDetails"
            },
            {
                $group: {
                    _id: "$_id",
                    personalDetails: { $first: "$personalDetails" },
                    enrollmentDetails: { $first: "$enrollmentDetails" },
                    contactDetails: { $first: "$contactDetails" },
                    kayquitAccount: { $first: "$kayquitAccount" },
                    createdAt: { $first: "$createdAt" },
                    updatedAt: { $first: "$updatedAt" },
                    classes: {
                        $push: {
                            section: "$classes.section",
                            sectionDetails: "$classes.sectionDetails",
                            grades: "$classes.grades"
                        }
                    }
                }
            },
            {
                $addFields: {
                    combinedGradeSection: {
                        $concat: [{ $toString: "$enrollmentDetails.currentGradeLevel" }, " - ", "$enrollmentDetails.currentSection"]
                    }
                }
            },
            {
                $match: searchQuery
            },
            {
                $project: {
                    _id: 0,
                    "personalDetails.fullname": 1,
                    "enrollmentDetails": {
                        "lrn": 1,
                        "studentNumber": 1
                    },
                    "classes": 1,
                    "kayquitAccount.email": 1,
                },
            }
        ]).toArray();
        // const data = await db.collection("students").find({}).skip(10).limit(10).toArray();
        // console.log(data.length)
        res.json(data);
    } catch (e) {
        console.error(e);
    }
}