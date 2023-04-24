import { FC } from 'react';
import Link from "next/link";
import { signOut, useSession } from 'next-auth/react'

const Admin: FC = () => {
    return (
        <>
            <div className="m-auto w-1/2">
                <h1 className="text-2xl mt-8 mb-8">Admin</h1>
                <ul className="space-y-4">
                    <li>
                        <Link href="/admin/works" className="text-blue-600 hover:text-blue-800">
                            Travaux
                        </Link>
                    </li>
                    <li>
                        <button className="text-red-600 hover:text-red-800 focus:outline-none" onClick={() => signOut()}>Se déconnecter</button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Admin;