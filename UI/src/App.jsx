/* eslint-disable no-unused-vars */
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Roots from "./components/root/Roots";
import Course from "./components/Course";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./components/context/AuthProvider";
import Contact from "./components/Contact";
import About from "./components/About";
import ErrorPage from "./components/404Page";
import Login from "./components/register/Login";
import Signup from "./components/register/Signup";

function App() {
  const [authUsers, setAuthUsers] = useAuth();

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Roots />} />
          <Route path="/course" element={authUsers ? <Course /> : <Signup />} />
          <Route
            path="/contact"
            element={authUsers ? <Contact /> : <Signup />}
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Toaster />

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
