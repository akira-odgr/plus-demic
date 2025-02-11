import { FC } from "react";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";

interface CardProps {
    icon: string;
    heading: string;
    text: string;
    delay: number;
}

export const Card: FC<CardProps> = ({ icon, heading, text, delay }) => {
    return (
        <motion.div
            variants={SlideLeft(delay)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="px-6 py-12 bg-white rounded-lg border-[1px] border-gray-200 text-center"
        >
            <div className="bg-[#f5f9fc] p-4 rounded-full">
                <img src={icon} alt="icon" className="w-12 mx-auto" />
            </div>
            <h4 className="my-4 text-2xl font-bold">{heading}</h4>
            <p className="text-gray-400 text-sm">{text}</p>
        </motion.div>
    );
};
