import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen min-w-96 mx-auto">
      <div className="p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500 mx-2">ChatApp</span>
        </h1>
        <form>
          <div className="mb-2">
            <label htmlFor="Username" className="label p-2">
              <span className="text-base label-text">User Name</span>
            </label>
            <input type="text" placeholder="Enter user name" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" id="password" placeholder="**********" className="input input-bordered w-full max-w-xs" />
          </div>
          <Link to={"/register"} className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
            {`Don't have an account?`}
          </Link>
          <div>
            <button type="submit" className="btn btn-block btn-sm mt-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
