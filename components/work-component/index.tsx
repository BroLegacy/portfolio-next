import { FC } from 'react';
import Image from "next/image";
import screen from "@/assets/screen.png";

const WorkComponent: FC = () => {
    return (
        <>
            <div className={"w-3/4"}>
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
                    <div>
                        <Image className="border rounded" src={screen} alt="chevron"/>
                        <div className={"flex justify-between pt-2"}>
                            <span className={"font-light"}>Mon portfolio</span>
                            <span className={"py-2 px-4 text-sm bg-gray-100 rounded-full"}>JS</span>
                        </div>
                        <span className={"font-light"}>2022/07/31</span>
                    </div>
                    <div>
                        <Image className="border rounded" src={screen} alt="chevron"/>
                        <div className={"flex justify-between pt-2"}>
                            <span className={"font-light"}>Mon portfolio</span>
                            <span className={"py-2 px-4 text-sm bg-gray-100 rounded-full"}>JS</span>
                        </div>
                        <span className={"font-light"}>2022/07/31</span>
                    </div>
                    <div>
                        <Image className="border rounded" src={screen} alt="chevron"/>
                        <div className={"flex justify-between pt-2"}>
                            <span className={"font-light"}>Mon portfolio</span>
                            <span className={"py-2 px-4 text-sm bg-gray-100 rounded-full"}>JS</span>
                        </div>
                        <span className={"font-light"}>2022/07/31</span>
                    </div>
                    <div>
                        <Image className="border rounded" src={screen} alt="chevron"/>
                        <div className={"flex justify-between pt-2"}>
                            <span className={"font-light"}>Mon portfolio</span>
                            <span className={"py-2 px-4 text-sm bg-gray-100 rounded-full"}>JS</span>
                        </div>
                        <span className={"font-light"}>2022/07/31</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkComponent;