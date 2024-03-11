import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/AuthContext";
import toast from "react-hot-toast";

const Register = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    signUp,
    user,
    errors: { registerErrors },
  } = useAuth();

  const onSubmit = handleSubmit(async (data) => {
    const { fullname, username, password, confirmPassword, gender } = data;
    if (!fullname || !username || !password || !confirmPassword || !gender) {
      return toast.error("Please fill in all fields");
    }

    const newUser = { fullname, username, password, confirmPassword, gender };

    const res = await signUp(newUser);
    if (res?.error) return toast.error(res.error);

    setValue("fullname", "");
    setValue("username", "");
    setValue("password", "");
    setValue("confirmPassword", "");
    toast.success("Welcome to Chat App.!");
  });

  return (
    <div className="flex justify-center items-center h-screen min-w-96 mx-auto">
      <div className="p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-blue-500 mx-3">ChatApp</span>
        </h1>
        <form onSubmit={onSubmit}>
          <div className="mb-2">
            <label htmlFor="fullname" className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Enter full name"
              className="input input-bordered w-full max-w-xs"
              {...register("fullname" /* , { required: true } */)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="username" className="label p-2">
              <span className="text-base label-text">User Name</span>
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter user name"
              className="input input-bordered w-full max-w-xs"
              {...register("username" /* , { required: true } */)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder="**********"
              className="input input-bordered w-full max-w-xs"
              {...register("password" /* , { required: true } */)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="confirmPassword" className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="**********"
              className="input input-bordered w-full max-w-xs"
              {...register("confirmPassword" /* , { required: true } */)}
            />
          </div>
          <GenderCheckBox setValue={setValue} />
          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {`Already have an account?`}
          </Link>
          <div>
            <button type="submit" className="btn btn-block btn-sm mt-2">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
