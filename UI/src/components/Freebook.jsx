import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import { useState, useEffect } from "react";
import axios from "axios";

let settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Freebook() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:4000/book");
        const data = res.data.filter((item) => item.catogery === "Free");
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log("Error", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="mb-2 font-bold text-2xl">Free books</h1>
        <p className="font-semibold mb-12">
          &quot;Access Free Books, Anytime, Anywhere! Unlock a world of
          knowledge without spending a dime. Browse a wide range of genres and
          topics, all for free. Start your reading journey today and fuel your
          mind!&quot;
        </p>
      </div>
      <div>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <Slider {...settings}>
            {data.map((list) => (
              <Cards key={list.id} list={list} />
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}

export default Freebook;
