import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const { email } = req.body;

        const client = await clientPromise;
        const db = client.db("student_portal");
        const data = await db.collection("students").findOne({ "kayquitAccount.email": email });

        res.json(data);
    } catch (e) {
        console.error(e);
    }
}