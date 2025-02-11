import { FC } from "react";
import { motion } from "framer-motion";

import Image1 from "../../assets/images/uses/1.png";
import Image2 from "../../assets/images/uses/2.png";
import Image3 from "../../assets/images/uses/3.png";
import { SlideLeft, SlideRight } from "../../utility/animation";

interface UsersType {
    image: string;
    text: string;
}

const usersData: UsersType[] = [
    {
        image: Image1,
        text: "Coronavirus",
    },
    {
        image: Image2,
        text: "Coronavirus",
    },
    {
        image: Image3,
        text: "Coronavirus",
    },
];

export const Users: FC = () => {
    return (
        <section>
            <div className="container">
                <div className="grid glid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                    <motion.div
                        variants={SlideLeft(0.2)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="flex flex-col justify-center xl:pr-14"
                    >
                        <h1 className="text-3xl font-bold">How to use it</h1>
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

                    {usersData.map((user, index) => (
                        <motion.div
                            variants={SlideRight(0.4 + index * 0.2)}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            key={user.image}
                        >
                            <img
                                src={user.image}
                                alt="image1"
                                className="w-full rounded-3xl"
                            />
                            <p className="text-gray-400 mt-4">{user.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
