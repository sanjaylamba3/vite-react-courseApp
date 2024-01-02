import Accordion from "./Accordion";
import hero from "../../assets/hero.png";
import { motion } from "framer-motion";
import { logos } from "../../Data";
import { accordions } from "../../Data";
import { courses } from "../../Data";
import Course from "./Course/Course";

const Home = () => {
    return (
        <div className="section ">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div>
                    <div className="font-bold text-base text-Teal mb-4">India Space Week e-learning program</div>
                    <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">Revolutionary Space Science Courses</div>
                    <p className="text-sm leading-7 text-gray max-w-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi in, vitae facere et praesentium culpa!
                    </p>
                    <div className="mt-6 flex flex-col xs:flex-row gap-4 items-start justify-start">
                        <button className="xs:w-1/3 w-1/2 px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm">Learn More</button>
                        <button className="xs:w-1/3 w-1/2 px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm">Discover</button>
                    </div>
                </div>
                <div className="md:w-full">
                    <img src={hero} alt="" />
                </div>
            </div>
            {/* logos */}
            <div>
                <p className="text-center text-xl">In collaboration with</p>
                <div className="flex items-center justify-center sm:flex-wrap gap-4 sm:gap-8 p-2">
                    {logos.map((logo, i) => {
                        return (
                            <div key={i} className="w-[150px] sm:w-[200px]">
                                <img className="w-full object-cover " src={logo} alt="" />
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* popular courses */}
            <div className="text-xl font-bold mt-32">Popular Courses</div>
            <div className="mt-12 overflow-x-hidden w-full ">
                <div className="flex gap-8 md-w-full sm:w-[170%] xs:w-[340%] w-[400%] animate-slide">
                    {courses.map((course) => {
                        return <Course key={course.id} {...course}></Course>;
                    })}
                </div>
            </div>
            {/* FAQ Accordion */}
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.3 }} className="mt-10">
                <div className="text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]">
                    Frequently <span className="text-Teal"> Asked Questions</span>
                </div>
                <div className="mt-12 max-w-[700px] mx-auto">
                    {accordions.map((acc) => {
                        return <Accordion key={acc.id} {...acc}></Accordion>;
                    })}
                </div>
            </motion.div>
            {/* newsletter */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center max-w-[600px] mx-auto mt-10"
            >
                <div className="sm:text-3xl text-2xl font-bold mb-5">
                    Subscribe <span className="text-Teal"> Newsletter</span>
                </div>
                <p className="text-sm leading-7 text-gray">Subscribe to the newsletter to stay up to date with the latest space science news</p>
                <form action="" className="mt-5">
                    <input className="sm:p-3 p-2 outline-none text-sm shadow-md sm:w-72 w-60" type="text" placeholder="Enter ypur email address" />
                    <button className="text-smm text-white bg-Teal sm:p-3 p-2 shadow-md font-bold">Subscribe</button>
                </form>
            </motion.div>
        </div>
    );
};

export default Home;
