import { FC } from "react";
import { motion } from "framer-motion";

import HeroImage from "../../assets/images/hero.png";
import { SlideIn, SlideUp } from "../../utility/animation";

export const Hero: FC = () => {
    return (
        <section>
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 min-h-[650px] bg-[#f5f9fc] rounded-3xl">
                {/* Text info */}
                <div className="flex flex-col justify-center xl:pr-40">
                    <div className="mt-24 mb-10 md:mt-0 md:mb-0 space-y-6 text-center md:text-left">
                        <motion.h1
                            variants={SlideUp(0.2)}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="text-5xl font-bold text-[#171a67]"
                        >
                            COVID-19 Risk Assessment Tool
                        </motion.h1>
                        <motion.p
                            variants={SlideUp(0.4)}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="text-lg text-gray-400 mt-4"
                        >
                            A set of solutions designed to help quickly identify
                            coronavirus symptoms and get reliable information
                            regarding COVID-19 concerns.
                        </motion.p>
                        <motion.div
                            variants={SlideUp(0.6)}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="bg-[#F36A7E] text-white px-4 py-4 w-fit mx-auto md:mx-0 rounded-lg mt-4 font-bold hover:shadow-lg duration-300"
                        >
                            <button>See how to use it</button>
                        </motion.div>
                    </div>
                </div>
                {/* Image section */}
                <motion.div
                    variants={SlideIn()}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="flex items-center justify-center"
                >
                    <img src={HeroImage} alt="" />
                </motion.div>
            </div>
        </section>
    );
};
