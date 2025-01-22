import Cards from "./Cards";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Course() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/book");
        setData(res.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="min-h-screen max-w-screen-2xl container mx-auto md:px-20 mt-6 px-4">
        <div className="justify-center items-center text-center p-14">
          <h1 className="text-2xl md:text-4xl mb-16">
            We delighted ro have you
            <span className="text-pink-500"> Here! :)-</span>
          </h1>
          <p className="mt-10">
            Unlock a world of unlimited reading at your fingertips. Browse
            thousands of books across all genres. From fiction to non-fiction,
            find something for every taste. Read on any device, anytime,
            anywhere. Discover new authors, explore fresh perspectives. Enjoy
            reading without any ads or interruptions. Dive into your next great
            adventure with just a click.
          </p>
          <Link to="/">
            <button className="text-white bg-pink-500 px-4 py-2 mt-6 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className=" mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {data.map((item) => (
            <Cards key={item.id} list={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
