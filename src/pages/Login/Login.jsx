import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { TbFidgetSpinner } from "react-icons/tb";
import { motion } from "framer-motion";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";

// Framer Motion Variants
const formContainerVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // A smoother, more impactful easing function
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Login = () => {
  const { signIn, signInWithGoogle, loading, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  if (user) return <Navigate to={from} replace={true} />;
  if (loading && user === undefined) return <LoadingSpinner />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signIn(email, password);
      navigate(from, { replace: true });
      toast.success("Login Successful!");
    } catch (err) {
      console.error(err);
      toast.error(err?.message || "An error occurred.");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate(from, { replace: true });
      toast.success("Login Successful!");
    } catch (err) {
      console.error(err);
      toast.error(err?.message || "Could not sign in with Google.");
    }
  };

  return (
    <div className="flex w-full min-h-screen">
      {/* Branding Panel (Visible on md screens and up) */}
      <motion.div
        className="hidden md:flex md:w-1/2 lg:w-2/3 bg-gradient-to-tr from-gray-900 to-gray-800 text-white p-12 flex-col justify-between"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter">Bytesonsoft</h1>
          <p className="mt-4 text-lg text-gray-300">
            Your Vision, Engineered. Welcome back to the platform.
          </p>
        </div>
        <p className="text-sm">&copy; 2025 Bytesonsoft. All Rights Reserved.</p>
      </motion.div>

      {/* Form Panel */}
      <div className="flex w-full md:w-1/2 lg:w-1/3 items-center justify-center bg-white p-6 sm:p-12">
        <motion.div
          className="w-full max-w-md"
          variants={formContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-10 text-left" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-gray-900">Sign In</h2>
            <p className="text-gray-500 mt-2">
              New user?{" "}
              <Link to="/signup" className="font-medium text-blue-600 hover:underline">
                Create an account
              </Link>
            </p>
          </motion.div>

          <motion.form onSubmit={handleSubmit} className="space-y-5" variants={itemVariants}>
            {/* Floating Label Input for Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                required
                className="peer block w-full appearance-none rounded-md border border-gray-300 bg-transparent px-4 py-3 text-gray-900 transition focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute top-3 left-2 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-2 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600"
              >
                Email address
              </label>
            </div>

            {/* Floating Label Input for Password */}
            <div className="relative">
              <input
                type="password"
                name="password"
                id="password"
                required
                className="peer block w-full appearance-none rounded-md border border-gray-300 bg-transparent px-4 py-3 text-gray-900 transition focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                htmlFor="password"
                className="absolute top-3 left-2 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-2 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600"
              >
                Password
              </label>
            </div>
            
            <motion.a href="#" className="text-sm font-medium text-blue-600 hover:underline block text-right" variants={itemVariants}>
                Forgot password?
            </motion.a>

            <motion.div variants={itemVariants}>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 font-semibold text-white bg-blue-600 rounded-lg transition-transform duration-300 ease-in-out hover:bg-blue-700 active:scale-95 disabled:bg-gray-400"
              >
                {loading ? <TbFidgetSpinner className="animate-spin m-auto text-xl" /> : "Sign In"}
              </button>
            </motion.div>
          </motion.form>
          
          <motion.div variants={itemVariants}>
            <div className="my-6 flex items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 flex-shrink text-sm text-gray-500">OR</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)" }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="flex items-center justify-center w-full py-3 space-x-3 border border-gray-300 rounded-lg transition hover:bg-gray-50 disabled:opacity-50"
            >
              <FcGoogle size={22} />
              <span className="font-medium text-gray-700">Sign in with Google</span>
            </motion.button>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default Login;