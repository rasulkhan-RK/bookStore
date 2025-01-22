/* eslint-disable react/prop-types */

function Cards({ list }) {
  return (
    <div className=" mb-5 my-2 mx-4 flex flex-wrap items-center justify-center">
      <div className="hover:shadow-lg cursor-pointer card sm:w-80 md:w-80 lg:w-96 h-[450px] shadow-xl hover:scale-105 duration-150 dark:bg-slate-500 dark:text-white dark:border bg-white text-black ">
        <figure>
          <img
            src={list.image}
            className="w-full mt-16 sm:w-52 object-cover md:object-contain h-52"
            alt={list.image}
          />
        </figure>
        <div className="card-body mt-10">
          <h2 className="card-title flex justify-between items-center">
            {list.name}
            <div className="badge badge-secondary">{list.catogery}</div>
          </h2>
          <p className="mb-5 ">{list.title.slice(0, 60)}</p>
          <div className="card-actions justify-between ">
            <div className="">
              Rs. {list.price}
              &nbsp;&nbsp;
              <span className="line-through text-red-700 text-sm">
                M.R.P {list.ogprice}
              </span>
            </div>
            <div className=" px-2 py-1 rounded-full border-[1px] cursor-pointer hover:bg-pink-500 hover:text-white">
              Read now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
