import { useForm } from "react-hook-form";
import Button from "../components/ui/Button";
import Logo from "../components/icons/Logo";
import { motion } from "framer-motion";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data:object) => {
    console.log(data)
  };
  return (
    <div className="h-[100vh] bg-black/50 w-full flex items-center justify-center">
      <div className="w-full flex items-center justify-center">
       <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }} 
        className="bg-black w-[344px] rounded-2xl gap-8 pb-12 pt-6 px-8 shadow-lg flex flex-col items-center">
          <div className="flex flex-col gap-4 items-center">
            <Logo />
            <span className="text-xl font-medium text-white">
              Log in to continue
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
              {...register("username", { required: true })}
            />
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("password", { required: true })}
            />
          </div>
          {errors.exampleRequired && <span>This field is required</span>}
          <Button
            variant="primary"
            onClick={() => handleSubmit(onSubmit)}
            text="Log In"
          />
          <span className="text-white font-light">New user? <a className="text-blue-600" href="/signup">Sign up</a></span>
        </motion.form>
      </div>
    </div>
  );
};

export default SignUp;
