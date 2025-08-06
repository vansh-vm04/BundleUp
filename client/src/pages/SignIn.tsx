import { useForm } from "react-hook-form";
import Button from "../components/ui/Button";
import Logo from "../components/icons/Logo";
import { AnimatePresence, motion } from "framer-motion";
import axios, { AxiosError } from "axios";
import { useToast } from "../hooks/useToast";
import { useNavigate } from "react-router-dom";
import { useSidebar } from "../hooks/useSidebar";
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
const env = import.meta.env;

const SignUp = () => {
  const {verify} = useAuth();
  const sidebar = useSidebar()
  const { toast } = useToast();
  const navigate = useNavigate();

  const autoLogin = async () =>{
    const {loggedIn} = await verify();
    if(loggedIn) navigate('/');
  }

  useEffect(() => {
    autoLogin()
  },[])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: object) => {
    try {
      const response = await axios.post(
        `${env.VITE_BACKEND_URL}/api/v1/sign-in`,
        data
      );
      const { token } = response.data;
      localStorage.setItem("token", token);
      const tokenSaved = localStorage.getItem("token");
      if (tokenSaved) {
        toast("success", "Signup Successful");
        navigate("/");
        sidebar?.toggle();
      }
    } catch (error) {
      if (error.response.status == 404) {
        toast("info", "Account not found, try sign up");
        return;
      }
      if (error.response.status == 401) {
        toast("error", "Wrong password");
        return;
      }
      toast("error", "Something went wrong, Try again");
      console.log(error);
    }
  };

  return (
    <div className="h-[100vh] bg-gray-900 w-full flex items-center justify-center">
      <div className="w-full flex items-center justify-center">
        <AnimatePresence>
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-black w-[344px] rounded-2xl gap-8 pb-12 pt-6 px-8 shadow-lg flex flex-col items-center"
          >
            <div className="flex flex-col gap-4 items-center">
              <Logo />
              <span className="text-xl font-medium text-white">
                Log in to continue
              </span>
            </div>

            <div className="flex flex-col w-full">
              <label
                htmlFor="username"
                className="block mb-1 text-sm font-medium text-white"
              >
                Username
              </label>
              <input
                id="username"
                className=" border text-sm rounded-lg block w-full p-2.5 bg-gray-800 border-gray-600 placeholder-gray-400 mb-1 text-white focus:ring-blue-500 focus:border-blue-500"
                {...register("username", {
                  required: true,
                  maxLength: 20,
                  minLength: 4,
                })}
              />
              {errors.username && (
                <span className="text-red-500 pt-1 text-xs">
                  Username must be between 4 to 20 characters
                </span>
              )}
              <label
                htmlFor="password"
                className="block mb-1 text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                id="password"
                className=" border text-sm rounded-lg block w-full p-2.5 bg-gray-800 border-gray-600 placeholder-gray-400 mb-1 text-white focus:ring-blue-500 focus:border-blue-500"
                {...register("password", {
                  required: true,
                  maxLength: 20,
                  minLength: 8,
                })}
              />
              {errors.password && (
                <span className="text-red-500 pt-1 text-xs">
                  Password must be between 8 to 20 characters
                </span>
              )}
            </div>
            <Button variant="primary" type="submit" text="Log In" />
            <span className="text-white font-light">
              New user?{" "}
              <a className="text-blue-600" href="/signup">
                Sign up
              </a>
            </span>
          </motion.form>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SignUp;
