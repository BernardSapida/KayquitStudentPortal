db.students.insertOne({
    personalDetails: {
        fullname: "Bernard Sapida",
        birthdate: `20${Math.floor(Math.random() * 24).toString().padStart(2, "0")}-${(Math.floor(Math.random() * 12) + 1).toString().padStart(2, "0")}-${(Math.floor(Math.random() * 28) + 1).toString().padStart(2, "0")}`,
        sex: ["Male", "Female"][Math.floor(Math.random() * 2)],
        religion: "Christianity",
        civilStatus: "Single",
    },
    enrollmentDetails: {
        currentGradeLevel: Math.floor(Math.random() * 6) + 1,
        currentSection: `${["Narra", "Akasya"][Math.floor(Math.random() * 2)]}`,
        lrn: Date.now().toString(),
        academicYear: ["2019-2020", "2020-2021", "2021-2022", "2022-2023", "2023-2024"][Math.floor(Math.floor(Math.random() * 5))],
        studentNumber: "20230" + Math.floor(Math.random() * 999) + 2000
    },
    class: [
        {
            section: ObjectId(),
            grades: [
                {
                    subjectName: "English",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Math",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Filipino",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "MTB",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Araling Panlipunan",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "ESP",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Science",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "MAPEH",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Intermediate",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                }
            ]
        },
        {
            section: ObjectId(),
            grades: [
                {
                    subjectName: "English",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Math",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Filipino",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "MTB",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Araling Panlipunan",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "ESP",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Science",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "MAPEH",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Intermediate",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                }
            ]
        },
        {
            section: ObjectId(),
            grades: [
                {
                    subjectName: "English",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Math",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Filipino",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "MTB",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Araling Panlipunan",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "ESP",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Science",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "MAPEH",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Intermediate",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                }
            ]
        },
        {
            section: ObjectId(),
            grades: [
                {
                    subjectName: "English",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Math",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Filipino",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "MTB",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Araling Panlipunan",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "ESP",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Science",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "MAPEH",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Intermediate",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                }
            ]
        },
        {
            section: ObjectId(),
            grades: [
                {
                    subjectName: "English",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Math",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Filipino",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "MTB",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Araling Panlipunan",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "ESP",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Science",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "MAPEH",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Intermediate",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                }
            ]
        },
        {
            section: ObjectId(),
            grades: [
                {
                    subjectName: "English",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Math",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Filipino",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "MTB",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Araling Panlipunan",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "ESP",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Science",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "MAPEH",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Intermediate",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                }
            ]
        },
        {
            section: ObjectId(),
            grades: [
                {
                    subjectName: "English",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Math",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Filipino",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "MTB",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Araling Panlipunan",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "ESP",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Science",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "MAPEH",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: "Intermediate",
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                }
            ]
        }
    ],
    contactDetails: {
        address: "Imus, Cavite",
        guardian: "Christian R. Sapida",
        contactNumber: "09474556173"
    },
    kayquitAccount: {
        email: "bernard.sapida@kayquit.edu.ph",
        defaultPassword: "@Password123",
        password: "@Password123"
    },
    createdAt: new Date(),
    updatedAt: new Date()
});