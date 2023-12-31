import Link from "next/link";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

import { KayquitAccount } from "@/types/global";

function KayquitAccount({ kayquitAccount }: { kayquitAccount: KayquitAccount }) {
    return (
        <article>
            <p className="fw-bold">Kayquit Email Account</p>
            <FloatingLabel className="mb-3 w-100" label={"Kayquit Email Account"}>
                <Form.Control
                    type={"text"}
                    name={"email"}
                    defaultValue={kayquitAccount.email}
                    placeholder={"Enter kayquit email account"}
                    disabled={true}
                />
            </FloatingLabel>
            <FloatingLabel className="mb-3 w-100" label={"Default Password"}>
                <Form.Control
                    type={"text"}
                    name={"defaultPassword"}
                    defaultValue={kayquitAccount.defaultPassword}
                    placeholder={"Enter default password"}
                    disabled={true}
                />
            </FloatingLabel>
            <p>You will have to change your password when you login for the first time. To change your password <Link href="/teacher/password" style={{ color: "hsl(165, 100%, 39%)" }}>click here</Link>.</p>
        </article>
    );
}

export default KayquitAccount;