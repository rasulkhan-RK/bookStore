/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Signup({ isRegistered }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4000/user/signup", userInfo)
      .then((res) => {
        const data = res.data;
        if (data) {
          toast.success("Signup successfully");
          window.location.reload();
          <Navigate to="/" />;
          // document.getElementById("my_modal_3").close();
          localStorage.setItem("User", JSON.stringify(res.data.user));
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message);
        }
      });
  };
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div id="my_modal_3" className="">
          <div className="modal-box md:w-[480px] dark:bg-slate-900 dark:text-white bg-white text-black">
            <form method="dialog">
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
            </form>

            <h3 className="font-bold mb-5 text-lg">
              Welcome to our community Register here
              <span className="text-pink-500"> :)-</span>
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              action="submit"
              className="flex flex-col gap-5 items-start"
            >
              <div className="mt-2">
                <label htmlFor="name">Name</label> <br />
                <input
                  type="text"
                  name="name"
                  className="mt-1 md:w-[330px] px-3 py-2 rounded-lg dark:bg-slate-900 dark:text-white bg-white text-black outline-none border"
                  placeholder="Enter your fullname.."
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-700">
                    This name is required
                  </span>
                )}
              </div>

              <div className="mt-0">
                <label htmlFor="email">Email</label> <br />
                <input
                  type="email"
                  name="email"
                  className="mt-1 md:w-[330px] px-3 py-2 rounded-lg dark:bg-slate-900 dark:text-white bg-white text-black outline-none border"
                  placeholder="Enter your email.."
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-700">
                    This email is required
                  </span>
                )}
              </div>

              <div>
                <label htmlFor="password">Password</label> <br />
                <input
                  type="password"
                  name="re_password"
                  className="mt-1 md:w-[330px] px-3 py-2 rounded-lg dark:bg-slate-900 dark:text-white bg-white text-black outline-none border"
                  placeholder="Enter your password.."
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-700">
                    The password is required
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                <input type="checkbox" required />
                <span>I agree terms & conditions</span>
              </div>
              <>
                <div className="flex gap-x-16 items-center">
                  <button
                    type="submit"
                    className="px-2 py-1 bg-pink-500 text-white rounded-lg hover:bg-pink-700"
                  >
                    Signup
                  </button>
                  <span className="text-sm ">
                    Already have a account
                    <Link
                      className=" text-blue-500 underline hover:text-blue-700 cursor-pointer m-2"
                      onClick={() => isRegistered(null)}
                    >
                      Login
                    </Link>
                  </span>
                </div>
              </>
            </form>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default Signup;
