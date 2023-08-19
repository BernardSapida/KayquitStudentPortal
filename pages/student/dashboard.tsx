// Next Modules
import { GetServerSideProps, GetServerSidePropsContext } from "next";

// Next-Auth Modules
import { getSession } from "next-auth/react";

// Components
import Cards from "@/components/student/dashboard/Cards";
import News from "@/components/student/dashboard/news";


// CSS
import style from "@/public/css/student-dashboard.module.css";

// Utilities
import { getGreeting } from "@/utils/greetings";

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    try {
        const { req } = context;
        const session = await getSession({ req: req });

        if (!session) {
            return {
                props: {},
                redirect: {
                    destination: "/",
                },
            };
        }

        return {
            props: {
                user: session.user,
            },
        };
    } catch (error) {
        return {
            props: {
                error: "Error",
            },
        };
    }
};

function Dashboard() {
    return (
        <div className="mb-5">
            <div className={`${style.title}`}>{getGreeting()}</div>
            <div className={`${style.container} mb-3`}>
                {/* Components / Contents Goes here */}
                <Cards />
            </div>
            <News />
        </div>
    );
}

export default Dashboard;