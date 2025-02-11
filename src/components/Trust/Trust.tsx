import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

import TrustIcon1 from "../../assets/images/icon1.png";
import TrustIcon2 from "../../assets/images/icon2.png";
import { SlideUp } from "../../utility/animation";

interface TrustType {
    icon: string;
    title: string;
    text1: string;
    text2: ReactNode;
}

const trustData: TrustType[] = [
    {
        icon: TrustIcon1,
        title: "Based on reliable sources",
        text1: "We want our tool to be safe and reliable, so its logic is based on the official global information provided by the WHO.",
        text2: (
            <>
                Enchance your preliminary diagnosis and triage with pediatric
                content <span className="text-[#fe6b7e]">Learn more</span>
            </>
        ),
    },
    {
        icon: TrustIcon2,
        title: "Based on reliable sources",
        text1: "We want our tool to be safe and reliable, so its logic is based on the official global information provided by the WHO.",
        text2: (
            <>
                Enchance your preliminary diagnosis and triage with pediatric
                content <span className="text-[#fe6b7e]">Learn more</span>
            </>
        ),
    },
];

export const Trust: FC = () => {
    return (
        <section className="bg-[#f5f9fc] py-16 mt-20">
            <div className="container">
                <motion.h1
                    variants={SlideUp(0.2)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="text-center text-4xl font-bold py-6 text-[#171a67]"
                >
                    Why you can trust this tool
                </motion.h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {trustData.map((trust, index) => (
                        <motion.div
                            variants={SlideUp(0.4 + 0.2 * index)}
                            initial="initial"
                            whileInView="animate"
                            // transition={{ duration: 1.5 }}
                            viewport={{ once: true }}
                            key={trust.icon}
                            className="space-y-6 text-center md:text-left md:px-16 xl:px-32"
                        >
                            <img
                                src={trust.icon}
                                alt=""
                                className="mx-auto md:mx-0"
                            />
                            <h2 className="text-3xl font-semibold">
                                {trust.title}
                            </h2>
                            <p>{trust.text1}</p>
                            <p className="text-sm text-gray-400">
                                {trust.text2}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
