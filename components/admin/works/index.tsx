import { IWork } from "@/@types/work"
import { FC, useEffect, useState } from "react"
import Link from 'next/link'
import {router} from "next/client";

const Admin: FC = () => {
    const [works, setWorks] = useState<IWork[] | null>(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('/api/works')
            .then((res) => res.json())
            .then((data) => {
                setWorks(data.works)
                setLoading(false)
            })
    }, [])

    const handleDelete = (id: string) => {
        if (confirm('Are you sure you want to delete this work?')) {
            fetch(`/api/works/${id}`, {
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then((data) => {
                    // @ts-ignore
                    setWorks((prevWorks) => prevWorks.filter((work) => work._id !== data.deletedWorkId))
                })
                .catch((error) => console.error(error))
        }
    }

    if (isLoading) return <p>Loading...</p>

    if (works)
        return (
            <>
                <div>
                    <h1 className="m-[40px] text-xl">List travaux</h1>
                    <ul className="m-[100px] list-disc">
                        <li className="p-[15px]">traveaux</li>
                        <li className="p-[15px]">traveaux</li>
                        <li className="p-[15px]">traveaux</li>
                        {works.map((work) => (
                            <li className="p-[15px]" key={work._id}>
                                {work.title}
                                <Link href={`/admin/works/${work._id}`}>
                                    <a>Modifier</a>
                                </Link>
                                <button onClick={() => handleDelete(work._id)}>Supprimer</button>
                            </li>
                        ))}
                    </ul>
                    <Link href={"/admin/works/create"}>Créer un travail</Link>
                </div>
            </>
        )

    return <p>Erreur</p>
}

export default Admin
