import Head from 'next/head'
import Image from 'next/image'
import propImg from "@/assets/propal.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"h-full bg-gray-50 flex items-center"}>
          <div className={"flex m-auto items-center justify-center gap-[3vw]"}>
              <Image className="w-[15%] object-cover rounded-[10px]" src={propImg} alt="Hero Image"/>
              <div className={"max-w-[50%]"}>
                  <h1 className={"text-4xl font-bold pb-4"}>Corantyn Vignon</h1>
                  <p className={"text-base text-gray-700"}>Développeur front-end junior avec une solide compréhension des technologies HTML, CSS, JavaScript, PHP et les frameworks PHP, JS. Passionné par la création d'expériences utilisateur fluides et attrayantes.</p>
              </div>
          </div>
        </main>
    </>
    )
}