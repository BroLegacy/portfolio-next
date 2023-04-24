import { FC, useEffect, useState } from 'react';
import { IWork } from "@/@types/work";
import { CldImage } from 'next-cloudinary';

const WorkComponent: FC = () => {
    const [works, setWorks] = useState<IWork[]>([]);

    useEffect(() => {
        const fetchWorks = async () => {
            const response = await fetch('/api/works');
            const data = await response.json();
            setWorks(data.works);
        };

        fetchWorks();
    }, []);
    return (
        <>
            <div className="w-3/4 overflow-scroll pt-16">
                <div className={"flex align-middle mb-4"}>
                    <h1 className={"text-2xl pr-8"}>Mes Projets</h1>
                    <div>
                        <nav>
                            <ul className={"flex gap-2"}>
                                <li className={"py-2 px-4 text-sm bg-gray-800 text-white rounded-full cursor-pointer hover:bg-gray-800"}>
                                    Tout
                                </li>
                                <li className={"py-2 px-4 text-sm bg-gray-100 text-black rounded-full cursor-pointer hover:bg-gray-800 hover:text-white"}>
                                    PHP
                                </li>
                                <li className={"py-2 px-4 text-sm bg-gray-100 text-black rounded-full cursor-pointer hover:bg-gray-800 hover:text-white"}>
                                    JS
                                </li>
                                <li className={"py-2 px-4 text-sm bg-gray-100 text-black rounded-full cursor-pointer hover:bg-gray-800 hover:text-white"}>
                                    HTML/CSS
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className={"grid grid-cols-2 gap-y-8 gap-x-2"}>
                    {works.map((work) => (
                        <div key={work._id}>
                            <CldImage
                                className="w-full"
                                width="600"
                                height="600"
                                src={work.coverImage}
                                 alt="image work"
                            />
                            <div className={"flex justify-between pt-2"}>
                                <span className={"font-light"}>{work.title}</span>
                                <span className={"py-2 px-4 text-sm bg-gray-100 rounded-full"}>{work.tag}</span>
                            </div>
                            <span className={"font-light"}>{work.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default WorkComponent;