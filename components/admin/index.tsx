import { FC } from 'react';
import Link from "next/link";

const Admin: FC = () => {
    return (
        <>
            <div className={"m-auto w-1/2"}>
                <h1 className={"text-2xl mt-8 mb-8"}>Admin</h1>
                <ul>
                    <li>
                        <Link href="/admin/works">Travaux</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Admin;