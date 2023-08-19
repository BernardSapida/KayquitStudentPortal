// Next Modules
import dynamic from "next/dynamic";

// React Bootstrap Components
import { InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";

// React-Icons
import { MdGrade } from 'react-icons/md';
import { AiOutlineSearch } from "react-icons/ai";

// Components
const TableList = dynamic(() => import("@/components/teacher/grades/TableList"), {
    ssr: false,
});

// CSS
import style from "@/public/css/teacher-students.module.css";

function Students() {
    return (
        <div className="mb-5">
            <div className={`${style.title}`}>
                <h1><MdGrade /> Student Grade</h1>
            </div>
            <div className={`${style.container}`}>
                <div className={`${style.table_header}`}>
                    <InputGroup className="ms-auto mb-3">
                        <InputGroup.Text id="basic-addon1"><AiOutlineSearch /></InputGroup.Text>
                        <Form.Control
                            type="text"
                            name="keyword"
                            // onChange={handleChange}
                            // value={value}
                            placeholder="Search student"
                        />
                    </InputGroup>
                </div>
                <TableList />
            </div>
        </div>
    );
}

export default Students;