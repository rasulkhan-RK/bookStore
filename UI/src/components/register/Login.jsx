import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Signup from "./Signup";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("https://book-store-backend-nu-gilt.vercel.app/user/login", userInfo)
      .then((res) => {
        const data = res.data;
        if (data) {
          localStorage.setItem("User", JSON.stringify(data));
          toast.success("Loggedin successfully");
          setTimeout(() => window.location.reload(), 2000);
          document.getElementById("my_modal_3").close();
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };

  const [registered, isRegistered] = useState();

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        {!registered ? (
          <div className="modal-box  dark:bg-slate-900 dark:text-white bg-white text-black">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>

            <h3 className="font-bold text-lg">
              Happy to see you back please Login
              <span className="text-pink-500"> :)-</span>
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              action="submit"
              className="flex flex-col gap-5 items-start"
            >
              <div className="mt-5">
                <label htmlFor="email">Email</label> <br />
                <input
                  type="email"
                  name="email"
                  className="mt-1 md:w-[300px] px-3 py-2 rounded-lg dark:bg-slate-900 dark:text-white bg-white text-black outline-none border"
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
                  className="mt-1 md:w-[300px] px-3 py-2 rounded-lg dark:bg-slate-900 dark:text-white bg-white text-black outline-none border"
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
                    Login
                  </button>
                  <span className="text-sm ">
                    Don&apos;t have an account
                    <Link
                      className=" text-blue-500 underline hover:text-blue-700 cursor-pointer m-2"
                      onClick={() => isRegistered(true)}
                    >
                      Sign up
                    </Link>
                  </span>
                </div>
              </>
            </form>
          </div>
        ) : (
          <Signup isRegistered={isRegistered} />
        )}
      </dialog>
    </div>
  );
}

export default Login;
