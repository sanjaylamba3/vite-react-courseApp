import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Categories = ({ image, category, title, rating }) => {
    return (
        <Link to="/CourseDetails">
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center flex-col gap-4 bg-white  rounded-lg flex-wrap"
            >
                <div className="">
                    <img className="" src={image} alt="" />
                </div>
                <div className="p-2">
                    <div className="font-bold">{category}</div>
                    <div>{title}</div>
                    <a href="" className="text-sm text-gray">
                        View More
                    </a>
                </div>
            </motion.div>
        </Link>
    );
};

export default Categories;
