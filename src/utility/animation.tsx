import { Variants } from "framer-motion";

export const SlideUp = (delay: number): Variants => {
    return {
        initial: {
            y: 100,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,

            transition: {
                duration: 0.5,
                delay,
            },
        },
    };
};

export const SlideRight = (delay: number): Variants => {
    return {
        initial: {
            x: 100,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,

            transition: {
                duration: 0.5,
                delay,
            },
        },
    };
};

export const SlideLeft = (delay: number): Variants => {
    return {
        initial: {
            x: -100,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,

            transition: {
                duration: 0.5,
                delay,
            },
        },
    };
};

export const SlideIn = (): Variants => {
    return {
        initial: {
            opacity: 0,
            scale: 0.5,
        },
        animate: {
            opacity: 1,
            scale: 1,

            transition: {
                duration: 0.5,
            },
        },
    };
};
