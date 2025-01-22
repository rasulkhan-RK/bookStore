const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 ">
        <h1>Contact Us</h1>

        <div className=" my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
          <div className="flex p-5 w-full md:max-w-[650px] flex-col justify-center items-center  gap-6">
            <label className="input w-full input-bordered text-white dark:bg-white dark:text-black flex items-center gap-2">
              <input type="text" className="grow" placeholder="Name" required />
            </label>
            <label className="input text-white dark:bg-white dark:text-black w-full input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Email"
                required
              />
            </label>

            <textarea
              type="text"
              className="grow w-full text-white dark:bg-white dark:text-black input  input-bordered  pl-2 flex justify-start items-center"
              placeholder="Message"
              required
            ></textarea>

            <button className="border border-gray-500 hover:bg-white hover:text-black rounded-md px-8 py-4 text-sm transition-all duration-500 active:bg-gray-500">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
