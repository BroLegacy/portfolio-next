import { FC } from 'react';

const ContactForm: FC = () => {
    return (
        <>
            <div className="m-auto w-1/2">
                <h1 className="text-2xl mt-8 mb-8">Contactez-moi</h1>
                <form className="h-full" name="contact" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="flex flex-col">
                        <label className="text-xs font-semibold pb-2" htmlFor="name">PRENOM</label>
                        <input className="bg-gray-100 rounded mb-6 text-sm pb-2 pt-2 pl-4" type="text" id="name" name="name" placeholder="Prenom" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xs font-semibold pb-2" htmlFor="email">E-MAIL</label>
                        <input className="bg-gray-100 rounded mb-6 text-sm pb-2 pt-2 pl-4" type="email" id="email" name="email" placeholder="Email" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xs font-semibold pb-2" htmlFor="message">MESSAGE</label>
                        <textarea className="bg-gray-100 rounded mb-6 text-sm pb-2 pt-2 pl-4 h-[25vh]" id="message" name="message" placeholder="Message" />
                    </div>
                    <button className="text-xs text-white bg-black p-2 rounded font-semibold" type="submit">ENVOYER</button>
                </form>
            </div>
        </>
    )
}

export default ContactForm;
