import { FC } from 'react';
import Link from "next/link";

const Index: FC = () => {
    return (
        <>
            <header className={"w-1/4 flex justify-center shadow-md items-center"}>
                <div className={"w-fit h-min"}>
                    <span className={"text-4xl font-bold"}>Menu</span>
                    <nav className={"pt-8"}>
                        <ul className={"text-left text-gray-700"}>
                            <li className={"pb-1.5"}><Link className="text-base hover:text-black" href="/">Accueil</Link></li>
                            <li className={"pb-1.5"}><Link className="text-base hover:text-black" href="/contact">Contact</Link></li>
                            <li className={"pb-1.5"}><Link className="text-base hover:text-black" href="/about">À propos</Link></li>
                            <li><Link className="text-base" href="/work">Projets</Link></li>
                        </ul>
                        <span className={"text-gray-700 text-xs font-light flex flex-nowrap pt-4"}>© 2023 Corantyn Vignon</span>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Index;