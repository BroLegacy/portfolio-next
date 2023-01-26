import { FC } from 'react';

const Index: FC = () => {
    return (
        <>
            <header className={"w-1/4 flex justify-center shadow-md items-center"}>
                <div className={"w-fit h-min"}>
                    <span className={"text-4xl font-bold"}>Menu</span>
                    <nav className={"pt-8"}>
                        <ul className={"text-left text-gray-700"}>
                            <li className={"pb-1.5"}><a className={"text-base hover:text-black"} href="/">Accueil</a></li>
                            <li className={"pb-1.5"}><a className={"text-base hover:text-black"} href="/contact">Contact</a></li>
                            <li className={"pb-1.5"}><a className={"text-base hover:text-black"} href="/about">À propos</a></li>
                            <li><a className={"text-base"} href="/work">Projets</a></li>
                        </ul>
                        <span className={"text-gray-700 text-xs font-light flex flex-nowrap pt-4"}>© 2023 Corantyn Vignon</span>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Index;