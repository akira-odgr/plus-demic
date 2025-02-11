import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import Logo from "../../assets/images/logo.png";
import { motion } from "framer-motion";

export const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
        >
            <div className="container py-20 flex flex-col md:flex-row justify-between md:items-center gap-10">
                {/* brand info */}
                <div className="space-y-4">
                    <img src={Logo} alt="" className="w-40" />
                    <p className="text-gray-400 md:max-w-[400px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error doloremque aspernatur pariatur consectetur.
                    </p>
                </div>
                {/* social icons */}

                <div className="flex space-x-6 text-3xl">
                    <FaFacebook className="hover:text-[#fe6b7e] duration-200" />
                    <FaSquareInstagram className="hover:text-[#fe6b7e] duration-200" />
                    <FaLinkedin className="hover:text-[#fe6b7e] duration-200" />
                </div>
            </div>
        </motion.footer>
    );
};
