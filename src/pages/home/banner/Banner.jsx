import person from "../../../assets/images/slider/me.9f2ba6c1.png"
import { motion } from "framer-motion";
import "./banner.css"
const Banner = () => {
    return (
        <div className="bannerBg pt-32 mb-10">
            <div
            
            className="flex flex-col lg:flex-row gap-10 items-center justify-between">
                <motion.h2
                initial={{x: -1000}}
                animate={{x: [2900, 0]}}
                transition={{
                    duration: "3",
                    delay: "0.5"
                }}
                 className="text-white text-6xl font-semibold pl-4 lg:pl-40"><span className="text-orange-600">2560</span> Thousands Dream Jobs Available Now</motion.h2>


                <motion.img 
                initial={{y: -1000}}
                animate={{y: [-3000, 0]}}
                transition={{
                    duration: "3",
                    delay: "0.5"
                }}
                 src={person} alt="" />

            </div>
        </div>
    );
};

export default Banner;