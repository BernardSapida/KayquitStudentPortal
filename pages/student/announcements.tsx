// Next Modules
import { GetServerSideProps, GetServerSidePropsContext } from "next";

// Next-Auth Modules
import { getSession } from "next-auth/react";

// React-Icons
import { FaGraduationCap } from 'react-icons/fa';

// Components
import Event from "@/components/student/announcements/Event";

// Utilities
import { getAcademicYear } from "@/utils/date/date";

// CSS
import style from "@/public/css/student-announcements.module.css";

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    try {
        const { req } = context;
        const session = await getSession({ req: req });

        if (!session || session.user.role != "student") {
            return { notFound: true }
        }

        return {
            props: {
                user: session.user,
            },
        };
    } catch (error) {
        return {
            props: { error: "Error" },
        };
    }
};

function Announcements() {
    return (
        <div className="mb-5">
            <div className={`${style.title}`}>
                <h1><FaGraduationCap /> Class Announcement(s) {getAcademicYear()}</h1>
            </div>
            <div className={`${style.container}`}>
                {/* Components / Contents Goes here */}
                <Event />
                <Event />
                <Event />
            </div>
        </div>
    );
}

export default Announcements;