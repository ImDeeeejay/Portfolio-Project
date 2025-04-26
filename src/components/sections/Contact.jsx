import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Github, Check, Notebook } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const formTitles = ["Rojane Gacu", "Deejay Sarinas", "Gwayne Adrian Santos", "Ron Mar Kyle Guerrero"];

    const emailConfigs = [
        { serviceId: 'service_hr0d0vo', templateId: 'template_h9j9zhb', publicKey: 'cSjM__AB62ZxQPhwU' },
        { serviceId: 'service_nh4glej', templateId: 'template_45zydlo', publicKey: 'iOQDSmhXqM018JKMp' },
        { serviceId: 'service_vvz0osf', templateId: 'template_0fp7as8', publicKey: 'wheTHij97B-KIBR68' },
        { serviceId: 'service_3zp6t2p', templateId: 'template_cn9a981', publicKey: 'WS1iET6iy6Z8c6J8Y' },
    ];

    const socialLinks = [
        {
            facebook: 'https://facebook.com/miane.rain',
            instagram: 'https://instagram.com/amara.miane_',
            github: 'https://github.com/rojaneAmaraMiane8214',
        },
        {
            facebook: 'https://facebook.com/jaydee.sarinas',
            instagram: 'https://instagram.com/deejay.sarinas_',
            github: 'https://github.com/ImDeeeejay',
        },
        {
            facebook: 'https://facebook.com/gwayne',
            instagram: 'https://instagram.com/gwayne',
            github: 'https://github.com/gwayne',
        },
        {
            facebook: 'https://facebook.com/ronmar',
            instagram: 'https://instagram.com/ronmar',
            github: 'https://github.com/ronmar',
        },
    ];

    const formRefs = useRef([]);

    const sendEmail = (e, i) => {
        e.preventDefault();
        const { serviceId, templateId, publicKey } = emailConfigs[i];
        const form = formRefs.current[i];

        emailjs.sendForm(serviceId, templateId, form, publicKey)
            .then(() => {
                alert(`Message sent successfully to ${formTitles[i]}!`);
                form.reset();
            })
            .catch((error) => {
                console.error("Failed to send email:", error);
                alert("Something went wrong. Please try again.");
            });
    };

    return (
        <div className="bg-black text-white">
            <section className="min-h-screen flex flex-col justify-center items-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h1 className="text-red-500 text-sm tracking-widest font-extrabold">GET IN TOUCH</h1>
                    <h2 className="text-5xl md:text-7xl font-extrabold text-center">
                        Contact <span className="bg-gradient-to-r from-red-400 to-white text-transparent bg-clip-text">Me</span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
                        Got a question or proposal? Let’s connect! I’d love to hear from you.
                    </p>
                </motion.div>
            </section>

            <section className="py-20 px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {[{
                        icon: <Notebook className="mx-auto mb-2 text-red-500" size={32} />,
                        title: "Step 1",
                        detail: "Fill all the Text Fields"
                    }, {
                        icon: <Mail className="mx-auto mb-2 text-red-500" size={32} />,
                        title: "Step 2",
                        detail: "Enter your Message"
                    }, {
                        icon: <Check className="mx-auto mb-2 text-red-500" size={32} />,
                        title: "Step 3",
                        detail: "Press Send"
                    }].map(({ icon, title, detail }, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="bg-[#111111] p-6 rounded-2xl border border-gray-800 shadow-md text-center"
                        >
                            {icon}
                            <h3 className="text-lg font-semibold mb-2">{title}</h3>
                            <p className="text-gray-400 text-sm">{detail}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 max-w-6xl mx-auto">
                    {formTitles.map((name, i) => {
                        const { facebook, instagram, github } = socialLinks[i];
                        return (
                            <div key={i} className="flex flex-col items-center space-y-4">
                                <h3 className="text-lg font-semibold text-white">{name}</h3>

                                <form
                                    ref={(el) => (formRefs.current[i] = el)}
                                    onSubmit={(e) => sendEmail(e, i)}
                                    className="w-full space-y-4 bg-[#111111] p-6 rounded-2xl border border-gray-800 shadow-md"
                                >
                                    <div>
                                        <label className="text-sm text-gray-400 block mb-1">Name</label>
                                        <input name="name" type="text" required className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg py-2 px-3 text-white placeholder-gray-500" placeholder="Your name" />
                                    </div>
                                    <div>
                                        <label className="text-sm text-gray-400 block mb-1">Email</label>
                                        <input name="email" type="email" required className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg py-2 px-3 text-white placeholder-gray-500" placeholder="you@example.com" />
                                    </div>
                                    <div>
                                        <label className="text-sm text-gray-400 block mb-1">Subject</label>
                                        <input name="subject" type="text" required className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg py-2 px-3 text-white placeholder-gray-500" placeholder="Subject" />
                                    </div>
                                    <div>
                                        <label className="text-sm text-gray-400 block mb-1">Message</label>
                                        <textarea name="message" required rows="3" className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg py-2 px-3 text-white placeholder-gray-500" placeholder="Your message..." />
                                    </div>

                                    <motion.button whileTap={{ scale: 0.95 }} type="submit" className="bg-gradient-to-r from-red-500 to-gray-800 hover:from-red-600 hover:to-gray-700 transition-all w-full px-4 py-2 rounded-xl text-white font-semibold">
                                        Send
                                    </motion.button>
                                </form>
                                <div className="flex justify-center space-x-4 mt-4">
                                    <a href={facebook} target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                                        <Facebook size={24} />
                                    </a>
                                    <a href={instagram} target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                                        <Instagram size={24} />
                                    </a>
                                    <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                                        <Github size={24} />
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
