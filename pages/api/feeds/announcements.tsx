import fs from 'fs';

import type { NextApiRequest, NextApiResponse } from "next";
import { generateGradeLevel } from '@/utils/feeds';
import { ObjectId } from 'mongodb';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const sectionsSourceFilePath = './feeds/sections-source.json';
        const data = fs.readFileSync(sectionsSourceFilePath, "utf8");
        const sections = JSON.parse(data);

        const sectionsFilePath = './feeds/announcements.json';
        const sectionsData = await getAnnouncements(sections);
        fs.writeFileSync(sectionsFilePath, JSON.stringify(sectionsData));

        res.status(200).json({ isSuccess: true, message: "Announcements created successfully" });
    } catch (e) {
        console.error(e);
    }
}

const getAnnouncements = (sections: any[]): Record<string, any>[] => {
    const allSections: Record<string, any>[] = [];

    sections.filter(section => {
        const academicYears: string[] = Object.keys(section);

        for (let i = 0; i < academicYears.length; i++) {
            const academicYear: string = academicYears[i];

            const currentYearNarraIds: string[] = section[academicYear]["narra"]["narraSectionsId"];
            const currentYearNarraStudents: string[] = section[academicYear]["narra"]["narraStudents"];
            const currentYearAkasyaIds: string[] = section[academicYear]["akasya"]["akasyaSectionsId"];
            const currentYearAkasyaStudents: string[] = section[academicYear]["akasya"]["akasyaStudents"];

            for (let s = 0; s < 7; s++) {
                const narraSection: Record<string, any> = {
                    "_id": {
                        "$oid": (new ObjectId).toString()
                    },
                    "gradeLevel": generateGradeLevel(s),
                    "section": "Narra",
                    "academicYear": academicYear,
                    "announcements": [
                        {
                            "title": "Spring Sports Registration",
                            "description": "Spring sports registration opens on January 15th. Get ready to join our baseball, softball, or track and field teams. Details on tryouts and practices to follow.",
                            "createdAt": {
                                "$date": "2023-09-05T12:00:00.000Z"
                            }
                        },
                        {
                            "title": "New Student Orientation",
                            "description": "Welcome to all our new students! New student orientation will be held on January 8th to help you get acclimated to our school community.",
                            "createdAt": {
                                "$date": "2023-09-04T14:00:00.000Z"
                            }
                        },
                        {
                            "title": "Winter Break Closure",
                            "description": "School will be closed for Winter Break from December 23rd to January 3rd. Enjoy the holidays and stay safe!",
                            "createdAt": {
                                "$date": "2023-09-03T10:00:00.000Z"
                            }
                        },
                        {
                            "title": "Yearbook Pre-Orders Open",
                            "description": "Don't miss out on the memories! Yearbook pre-orders are now open. Order your copy by December 20th to secure the lowest price.",
                            "createdAt": {
                                "$date": "2023-09-02T16:00:00.000Z"
                            }
                        },
                        {
                            "title": "Winter Concert Save the Date",
                            "description": "Our Winter Concert is scheduled for December 15th. Enjoy the musical talents of our students as they perform holiday classics and seasonal favorites.",
                            "createdAt": {
                                "$date": "2023-09-01T20:00:00.000Z"
                            }
                        },
                        {
                            "title": "National Honor Society Induction",
                            "description": "Congratulations to our outstanding students! The National Honor Society induction ceremony will take place on November 12th. Parents and members, please RSVP.",
                            "createdAt": {
                                "$date": "2023-08-31T18:00:00.000Z"
                            }
                        },
                        {
                            "title": "Parent Workshop Series",
                            "description": "Enhance your parenting skills with our workshop series. Topics include effective communication, homework help, and managing screen time. First session on November 5th.",
                            "createdAt": {
                                "$date": "2023-08-30T14:00:00.000Z"
                            }
                        },
                        {
                            "title": "Halloween Costume Contest",
                            "description": "Get ready for the spookiest day of the year! We'll be hosting a Halloween costume contest on October 31st. Prizes for the best costumes, so start planning your outfits now.",
                            "createdAt": {
                                "$date": "2023-08-29T12:00:00.000Z"
                            }
                        },
                        {
                            "title": "Fall Festival Fundraiser",
                            "description": "Our Fall Festival fundraiser is on October 28th. Bring your family for games, food, and entertainment. All proceeds support school programs and activities.",
                            "createdAt": {
                                "$date": "2023-08-28T10:00:00.000Z"
                            }
                        },
                        {
                            "title": "College Fair for High School Students",
                            "description": "High school students, mark your calendars for the College Fair on October 20th. Explore college options, meet admissions representatives, and gather valuable information for your future.",
                            "createdAt": {
                                "$date": "2023-08-27T08:00:00.000Z"
                            }
                        },
                        {
                            "title": "PTA Meeting Invitation",
                            "description": "All parents are invited to our Parent-Teacher Association (PTA) meeting on October 15th at 7:00 PM. Join us to discuss upcoming events, fundraising, and ways to support our school.",
                            "createdAt": {
                                "$date": "2023-08-26T16:00:00.000Z"
                            }
                        },
                        {
                            "title": "Spirit Week Announcement",
                            "description": "Spirit Week is back! From October 9th to 13th, show your school spirit by participating in themed dress-up days, contests, and fun activities. Get creative with your outfits!",
                            "createdAt": {
                                "$date": "2023-08-25T14:00:00.000Z"
                            }
                        },
                        {
                            "title": "Book Fair Coming Soon",
                            "description": "Get ready for our annual Book Fair from October 2nd to 6th. Explore a world of books and reading adventures. Stay tuned for more information on featured titles and special events.",
                            "createdAt": {
                                "$date": "2023-08-24T12:00:00.000Z"
                            }
                        },
                        {
                            "title": "School Picture Day",
                            "description": "Smile! School picture day is on September 25th. Dress your best and capture memories with your classmates. Picture package information will be distributed in advance.",
                            "createdAt": {
                                "$date": "2023-08-23T10:00:00.000Z"
                            }
                        },
                        {
                            "title": "Parent-Teacher Conferences Scheduled",
                            "description": "Parent-teacher conferences will be held on September 18th. This is a valuable opportunity to discuss your child's progress and academic goals. Sign-up details coming soon.",
                            "createdAt": {
                                "$date": "2023-08-23T02:16:13.451Z"
                            }
                        },
                        {
                            "title": "Spring Sports Registration",
                            "description": "Spring sports registration opens on January 15th. Get ready to join our baseball, softball, or track and field teams. Details on tryouts and practices to follow.",
                            "createdAt": {
                                "$date": "2023-08-23T02:16:13.450Z"
                            }
                        },
                        {
                            "title": "New Student Orientation",
                            "description": "Welcome to all our new students! New student orientation will be held on January 8th to help you get acclimated to our school community.",
                            "createdAt": {
                                "$date": "2023-08-23T02:16:13.449Z"
                            }
                        }
                    ],
                    "createdAt": {
                        "$date": "2023-08-23T02:16:13.451Z"
                    },
                    "updatedAt": {
                        "$date": "2023-08-23T02:16:13.451Z"
                    }
                };

                allSections.push(narraSection);

                const akasyaSection: Record<string, any> = {
                    "_id": {
                        "$oid": (new ObjectId).toString()
                    },
                    "gradeLevel": generateGradeLevel(s),
                    "section": "Akasya",
                    "academicYear": academicYear,
                    "announcements": [
                        {
                            "title": "Spring Sports Registration",
                            "description": "Spring sports registration opens on January 15th. Get ready to join our baseball, softball, or track and field teams. Details on tryouts and practices to follow.",
                            "createdAt": {
                                "$date": "2023-09-05T12:00:00.000Z"
                            }
                        },
                        {
                            "title": "New Student Orientation",
                            "description": "Welcome to all our new students! New student orientation will be held on January 8th to help you get acclimated to our school community.",
                            "createdAt": {
                                "$date": "2023-09-04T14:00:00.000Z"
                            }
                        },
                        {
                            "title": "Winter Break Closure",
                            "description": "School will be closed for Winter Break from December 23rd to January 3rd. Enjoy the holidays and stay safe!",
                            "createdAt": {
                                "$date": "2023-09-03T10:00:00.000Z"
                            }
                        },
                        {
                            "title": "Yearbook Pre-Orders Open",
                            "description": "Don't miss out on the memories! Yearbook pre-orders are now open. Order your copy by December 20th to secure the lowest price.",
                            "createdAt": {
                                "$date": "2023-09-02T16:00:00.000Z"
                            }
                        },
                        {
                            "title": "Winter Concert Save the Date",
                            "description": "Our Winter Concert is scheduled for December 15th. Enjoy the musical talents of our students as they perform holiday classics and seasonal favorites.",
                            "createdAt": {
                                "$date": "2023-09-01T20:00:00.000Z"
                            }
                        },
                        {
                            "title": "National Honor Society Induction",
                            "description": "Congratulations to our outstanding students! The National Honor Society induction ceremony will take place on November 12th. Parents and members, please RSVP.",
                            "createdAt": {
                                "$date": "2023-08-31T18:00:00.000Z"
                            }
                        },
                        {
                            "title": "Parent Workshop Series",
                            "description": "Enhance your parenting skills with our workshop series. Topics include effective communication, homework help, and managing screen time. First session on November 5th.",
                            "createdAt": {
                                "$date": "2023-08-30T14:00:00.000Z"
                            }
                        },
                        {
                            "title": "Halloween Costume Contest",
                            "description": "Get ready for the spookiest day of the year! We'll be hosting a Halloween costume contest on October 31st. Prizes for the best costumes, so start planning your outfits now.",
                            "createdAt": {
                                "$date": "2023-08-29T12:00:00.000Z"
                            }
                        },
                        {
                            "title": "Fall Festival Fundraiser",
                            "description": "Our Fall Festival fundraiser is on October 28th. Bring your family for games, food, and entertainment. All proceeds support school programs and activities.",
                            "createdAt": {
                                "$date": "2023-08-28T10:00:00.000Z"
                            }
                        },
                        {
                            "title": "College Fair for High School Students",
                            "description": "High school students, mark your calendars for the College Fair on October 20th. Explore college options, meet admissions representatives, and gather valuable information for your future.",
                            "createdAt": {
                                "$date": "2023-08-27T08:00:00.000Z"
                            }
                        },
                        {
                            "title": "PTA Meeting Invitation",
                            "description": "All parents are invited to our Parent-Teacher Association (PTA) meeting on October 15th at 7:00 PM. Join us to discuss upcoming events, fundraising, and ways to support our school.",
                            "createdAt": {
                                "$date": "2023-08-26T16:00:00.000Z"
                            }
                        },
                        {
                            "title": "Spirit Week Announcement",
                            "description": "Spirit Week is back! From October 9th to 13th, show your school spirit by participating in themed dress-up days, contests, and fun activities. Get creative with your outfits!",
                            "createdAt": {
                                "$date": "2023-08-25T14:00:00.000Z"
                            }
                        },
                        {
                            "title": "Book Fair Coming Soon",
                            "description": "Get ready for our annual Book Fair from October 2nd to 6th. Explore a world of books and reading adventures. Stay tuned for more information on featured titles and special events.",
                            "createdAt": {
                                "$date": "2023-08-24T12:00:00.000Z"
                            }
                        },
                        {
                            "title": "School Picture Day",
                            "description": "Smile! School picture day is on September 25th. Dress your best and capture memories with your classmates. Picture package information will be distributed in advance.",
                            "createdAt": {
                                "$date": "2023-08-23T10:00:00.000Z"
                            }
                        },
                        {
                            "title": "Parent-Teacher Conferences Scheduled",
                            "description": "Parent-teacher conferences will be held on September 18th. This is a valuable opportunity to discuss your child's progress and academic goals. Sign-up details coming soon.",
                            "createdAt": {
                                "$date": "2023-08-23T02:16:13.451Z"
                            }
                        },
                        {
                            "title": "Spring Sports Registration",
                            "description": "Spring sports registration opens on January 15th. Get ready to join our baseball, softball, or track and field teams. Details on tryouts and practices to follow.",
                            "createdAt": {
                                "$date": "2023-08-23T02:16:13.450Z"
                            }
                        },
                        {
                            "title": "New Student Orientation",
                            "description": "Welcome to all our new students! New student orientation will be held on January 8th to help you get acclimated to our school community.",
                            "createdAt": {
                                "$date": "2023-08-23T02:16:13.449Z"
                            }
                        }
                    ],
                    "createdAt": {
                        "$date": "2023-08-23T02:16:13.451Z"
                    },
                    "updatedAt": {
                        "$date": "2023-08-23T02:16:13.451Z"
                    }
                };

                allSections.push(akasyaSection);
            }

        }
    });

    return allSections;
}

