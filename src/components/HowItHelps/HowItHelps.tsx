import { FC } from "react";
import { Card } from "./Card";
import { motion } from "framer-motion";

import Icon1 from "../../assets/images/icon/1.png";
import Icon2 from "../../assets/images/icon/2.png";
import Icon3 from "../../assets/images/icon/3.png";
import { SlideRight } from "../../utility/animation";

interface CardProps {
    icon: string;
    heading: string;
    text: string;
    delay: number;
}

const CardData: CardProps[] = [
    {
        icon: Icon1,
        heading: "Symptoms",
        text: "Lorem ipsum dolor sit amet consecterur adipisicing elit.Fugit error porro ducimus nostrum unde aipisci?",
        delay: 0.2,
    },
    {
        icon: Icon2,
        heading: "Symptoms",
        text: "Lorem ipsum dolor sit amet consecterur adipisicing elit.Fugit error porro ducimus nostrum unde aipisci?",
        delay: 0.4,
    },
    {
        icon: Icon3,
        heading: "Symptoms",
        text: "Lorem ipsum dolor sit amet consecterur adipisicing elit.Fugit error porro ducimus nostrum unde aipisci?",
        delay: 0.6,
    },
];

export const HowItHelps: FC = () => {
    return (
        <section>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="col-span-2 order-2 md:order-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                            {CardData.map((card) => (
                                <Card
                                    key={card.icon}
                                    icon={card.icon}
                                    heading={card.heading}
                                    text={card.text}
                                    delay={card.delay}
                                />
                            ))}
                        </div>
                    </div>

                    <motion.div
                        variants={SlideRight(0.8)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="flex flex-col justify-center xl:pr-14 order-1 md:order-2"
                    >
                        <h1 className="text-3xl font-bold">
                            How it Helps people
                        </h1>
                        <p className=" text-gray-400 mt-4">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Totam sed molestiae omnis, autem dolores
                            voluptatum!
                        </p>
                        <p className="text-sm text-gray-400 mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                            <a href="#" className="text-[#fe6b7e]">
                                {" "}
                                Learn More
                            </a>
                        </p>
                        <button className="w-fit font-bold border border-gray-400 px-4 py-2 rounded-lg hover:bg-[#fe6b7e] hover:text-white duration-300 mt-4 cursor-pointer">
                            Get in Touch
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
