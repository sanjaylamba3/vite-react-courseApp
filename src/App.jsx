import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import { Navbar, Home, About, Books, Contact, Courses, MyFooter, ScrollToTop, CourseDetails } from "./components/index";

function App() {
    return (
        <div className=" font-Poppins bg-HummingBird">
            <Main>
                <ScrollToTop></ScrollToTop>
                <Navbar></Navbar>
                <Routes>
                    <Route exact path="/" element={<Home></Home>}></Route>
                    <Route exact path="/about" element={<About></About>}></Route>
                    <Route exact path="/courses" element={<Courses></Courses>}></Route>
                    <Route exact path="/coursedetails" element={<CourseDetails></CourseDetails>}></Route>
                    <Route exact path="/books" element={<Books></Books>}></Route>
                    <Route exact path="/contact" element={<Contact></Contact>}></Route>
                </Routes>
                <MyFooter></MyFooter>
            </Main>
        </div>
    );
}

export default App;
