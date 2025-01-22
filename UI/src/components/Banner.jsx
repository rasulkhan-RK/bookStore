import banner from "../../public/banner.png";

function Banner() {
  return (
    <div className="container max-w-screen-2xl mx-auto md:px-20 px-4 flex flex-col md:flex-row space-x-4 my-10">
      <div className=" order-2 md:order-1 w-full md:w-1/2 md:mt-32 mt-12">
        <div className="space-y-12 order-2">
          <h1 className="text-4xl font-bold">
            Hello, welcomes here to learn something{" "}
            <span className="text-pink-500">new everyday!!!</span>
          </h1>
          <p className="text-xl">
            &quot;Welcome to Your Daily Learning Journey! Explore new knowledge,
            ideas, and skills each day. Every moment is an opportunity to grow
            and discover. Join us and make learning a part of your everyday
            life!&quot;
          </p>
          <div className=" dark:bg-slate-900 dark:text-white">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 dark:bg-white dark:text-black "
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow text-white"
                placeholder="Email"
              />
            </label>
          </div>
        </div>
        <button className="btn btn-secondary mt-6">Sign up</button>
      </div>
      <div className="w-full md:w-1/2 order-1">
        <img
          src={banner}
          alt="banner"
          className="w-full  md:w-[650px] md:h-[550px] object-cover"
        />
      </div>
    </div>
  );
}

export default Banner;
