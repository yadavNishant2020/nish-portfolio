import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import SectionHeading from "../components/SectionHeading";

function Contact() {
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm('service_m7sv5ln', 'template_7jhf4mj', form.current, 'user_13jdfxcM0vv1Xlo9hL6WK')
                .then(
                    (result) => {
                        console.log('SUCCESS!', result.text);
                        alert('Your email has been sent successfully!');
                        form.current?.reset();
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                        alert('There was an error sending your email. Please try again later.');
                    }
                );
        }
    };
    return (
        <section className="body-font relative bg-[#161616] flex items-center mb-20">
            <div className="container mx-auto">
                <div className="mb-12 flex w-full flex-col text-center">
                    <SectionHeading Heading={"CONTACT ME"} Subheading={"Feel free to reach out to me! Whether you have a question, feedback, or a collaboration proposal."} />
                </div>
                <div className="mx-auto md:w-2/3 lg:w-1/2">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="flex">
                            <div className="w-1/2 p-2">
                                <div className="relative">
                                    <input type="text" id="name" name="name" className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Name" />
                                    <label htmlFor="name" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Name</label>
                                </div>
                            </div>
                            <div className="w-1/2 p-2">
                                <div className="relative">
                                    <input type="email" id="email" name="email" className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Email" />
                                    <label htmlFor="email" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Email</label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 w-full p-2">
                            <div className="relative">
                                <textarea id="message" name="message" className="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Message"></textarea>
                                <label htmlFor="message" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Message</label>
                            </div>
                        </div>
                        <div className="w-full p-2">
                            <button
                                type="submit"
                                className="self-center md:self-start text-gray-900 bg-white border border-gray-50 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm px-5 py-2.5 dark:bg-gray-950 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
