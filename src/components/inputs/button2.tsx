import { motion } from "framer-motion";

export default function Button2(props: any) {
    return (
        <motion.div
            whileHover={{ scale: 0.95, y: 1 }}
            className="pt-2 flex justify-center items-center pb-2 pl-4 pr-4 bg-secondary rounded-full h-fit"
        >
            <button
                onClick={props.onClick}
                className="rounded-full hover:opacity-60 h-full"
            >
                <h1 className="text-center">{props.text}</h1>
            </button>
        </motion.div>
    );
}
