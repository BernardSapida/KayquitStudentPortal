// React Bootstrap Components
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

// React Modules
import { Dispatch, SetStateAction, useState } from "react";

// Formik Modules
import { Formik } from "formik";

// React-Icons
import { BsFillSendFill } from 'react-icons/bs';
import { MdNotificationsActive } from 'react-icons/md';

// React-Ripples
import Ripples from 'react-ripples'

// Helpers
import { initialValues, validationSchema } from "@/helpers/teacher/announcements/Form";

// Components
import Field from "@/components/form/InputField";
import TextAreaField from "@/components/form/TextAreaField";

// CSS
import style from "@/public/css/teacher-modal.module.css";

function ModalForm({
    modalShow,
    setModalShow,
    teacher
}: {
    modalShow: boolean;
    setModalShow: Dispatch<SetStateAction<boolean>>;
    teacher: any;
}) {
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (
        values: { title: string; description: string },
        { resetForm }: { resetForm: any }
    ) => {
        const { title, description } = values;
        const res = {
            gradeLevel: teacher.gradeLevel,
            section: teacher.section,
            academicYear: teacher.academicYear,
            adviserEmail: teacher.email,
            announcement: values
        }

        setLoading(true);

        // Save to db
        // console.log(res)

        if ("success") {
            resetForm();
        }

        setTimeout(() => setLoading(false), 2000);
    };

    return (
        <Modal
            show={modalShow}
            onHide={() => {
                setModalShow(false);
            }}
            backdrop="static"
            size="lg"
            centered
        >
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ handleSubmit, handleChange, values, resetForm }) => (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                <MdNotificationsActive /> Announcement
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleSubmit} id="modalForm">
                                <Field
                                    type="text"
                                    name="title"
                                    label="Title"
                                    handleChange={handleChange}
                                    value={values.title}
                                    loading={loading}
                                />
                                <TextAreaField
                                    name="description"
                                    label="Description"
                                    handleChange={handleChange}
                                    value={values.description}
                                    loading={loading}
                                />
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Ripples color="rgba(255, 255, 255, 0.3)" during={2000} className="d-grid rounded">
                                <Button
                                    type="submit"
                                    form="modalForm"
                                    className={`d-block ms-auto ${style.btn_post}`}
                                    onClick={() => setModalShow(true)}
                                    disabled={loading}
                                >
                                    {
                                        loading ? (<><Spinner animation="grow" size="sm" /> Posting...</>) :
                                            (<><BsFillSendFill /> Post Announcement</>)
                                    }
                                </Button>
                            </Ripples>
                        </Modal.Footer>
                    </>
                )}
            </Formik>
        </Modal>
    );
}

export default ModalForm;