import { useForm } from "react-hook-form";
import Button from "../components/ui/Button";
import Logo from "../components/icons/Logo";
import { motion,AnimatePresence } from "framer-motion";
import axios from "axios";
import { useToast } from "../hooks/useToast";
import { useNavigate } from "react-router-dom";
const env = import.meta.env;

const SignUp = () => {
  const navigate = useNavigate()
  const {toast} = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: object) => {
    axios.post(`${env.VITE_BACKEND_URL}/api/v1/sign-up`,data,{})
    .then(response=>{
      const {token} = response.data;
      localStorage.setItem('token',token);
      if(localStorage.getItem('token')){
        toast('Signup Successful')
        navigate('/');
      }
    })
    .catch(error=>{
      toast('Something went wrong, Try again');
      console.log(error)
    })
  };
  return (
    <div className="h-[100vh] bg-black/50 w-full flex items-center justify-center">
      <div
        className="w-full flex items-center justify-center"
      >
        <AnimatePresence>
        <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onSubmit={handleSubmit(onSubmit)}
         className="bg-black w-[344px] rounded-2xl gap-8 pb-12 pt-6 px-8 shadow-lg flex flex-col items-center">
          <div className="flex flex-col gap-4 items-center">
            <Logo />
            <span className="text-xl font-medium text-white">
              Sign up to continue
            </span>
          </div>

          <div className="flex flex-col w-full">
            <label
              htmlFor="username"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            <input
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 mb-1 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("username", { required: true ,maxLength:20, minLength:4})}
            />
            {errors.username && <span className="text-red-500 pt-1 text-xs">Username should contain (4-20) letters</span>}
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Set Password
            </label>
            <input
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("password", { required: true ,maxLength:20, minLength:8})}
            />
            {errors.password && <span className="text-red-500 pt-1 text-xs">Password should contain (8-20) letters</span>}
            <div className="pt-4 flex flex-col items-center">
              <Button
            variant="primary"
            type='submit'
            text="Register"
          />
            </div>
          </div>
          <span className="text-white font-light">
            Already have an account?{" "}
            <a className="text-blue-600" href="/signin">
              Log in
            </a>
          </span>
        </motion.form>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SignUp;
