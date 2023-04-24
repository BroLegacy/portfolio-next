import { IWork } from "@/@types/work"
import { FC, useEffect, useState } from "react"
import Link from 'next/link'
import { useRouter } from 'next/router';

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

    const router = useRouter();

    const handleDelete = (id: string) => {
        if (confirm('Are you sure you want to delete this work?')) {
            fetch(`/api/works/${id}`, {
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then((data) => {
                    setWorks((prevWorks) => prevWorks.filter((work) => work._id !== data.deletedWorkId));
                    router.reload();
                })
                .catch((error) => console.error(error))
        }
    }

    if (isLoading) return <p className="text-center mt-10 text-xl">Loading...</p>

    if (works)
        return (
            <>
                <div className="mx-auto max-w-screen-xl mt-10">
                    <h1 className="text-2xl font-bold mb-6">List travaux</h1>
                    <ul className="space-y-4">
                        {works.map((work) => (
                            <li className="bg-white rounded p-4 flex justify-between items-center" key={work._id}>
                                <span className="text-lg font-semibold pr-8">{work.title}</span>
                                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={() => handleDelete(work._id)}>Supprimer</button>
                            </li>
                        ))}
                    </ul>
                    <Link href={"/admin/works/create"} className="inline-block mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                        Créer un travail
                    </Link>
                </div>
            </>
        )

    return <p className="text-center mt-10 text-xl">Erreur</p>
}

export default Admin
