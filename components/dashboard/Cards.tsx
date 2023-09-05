import { TbNumbers } from 'react-icons/tb';
import { FaGraduationCap } from 'react-icons/fa';
import { BsFillCalendarDateFill } from 'react-icons/bs';

import { getAcademicYear } from "@/utils/date/date";

import style from "@/public/css/dashboard-cards.module.css";

function Cards() {
    return (
        <div className={`${style.dashboard_container} mb-3`}>
            <article className={`${style.dashboard_card}`}>
                <div className={`${style.card_info}`}>
                    <p className={`${style.card_value}`}>{getAcademicYear()}</p>
                    <p className={`${style.card_label}`}>Current Academic Year</p>
                </div>
                <BsFillCalendarDateFill />
            </article>
            <article className={`${style.dashboard_card}`}>
                <div className={`${style.card_info}`}>
                    <p className={`${style.card_value}`}>First</p>
                    <p className={`${style.card_label}`}>Current Quarter</p>
                </div>
                <TbNumbers />
            </article>
            <article className={`${style.dashboard_card}`}>
                <div className={`${style.card_info}`}>
                    <p className={`${style.card_value}`}>6 - Peace</p>
                    <p className={`${style.card_label}`}>Grade Level & Section</p>
                </div>
                <FaGraduationCap />
            </article>
        </div>
    );
}

export default Cards;