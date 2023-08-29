// React Bootstrap Components
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

import { ContactDetails } from "@/types/global";

function ContactDetails({ contactDetails }: { contactDetails: ContactDetails }) {
    return (
        <div>
            <p className="fw-bold">Contact Details</p>
            <FloatingLabel className="mb-3 w-100" label={"Address"}>
                <Form.Control
                    type={"text"}
                    name={"gradeLevel"}
                    defaultValue={contactDetails.address}
                    placeholder={"Enter grade level"}
                    disabled={true}
                />
            </FloatingLabel>
            <FloatingLabel className="mb-3 w-100" label={"Contact Number"}>
                <Form.Control
                    type={"text"}
                    name={"contactNumber"}
                    defaultValue={contactDetails.contactNumber}
                    placeholder={"Enter contact number"}
                    disabled={true}
                />
            </FloatingLabel>
        </div>
    );
}

export default ContactDetails;