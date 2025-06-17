import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-hot-toast';
import { TbFidgetSpinner } from 'react-icons/tb';
import { motion } from 'framer-motion';
import useAuth from '../../hooks/useAuth';

const containerVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 12,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Login = () => {
  const { signIn, signInWithGoogle, loading, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signIn(email, password);
      toast.success('Login successful!');
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err?.message || 'Login failed.');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success('Signed in with Google!');
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err?.message || 'Google sign-in failed.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      <motion.div
        className="bg-white shadow-lg rounded-2xl w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Form Section */}
        <div className="p-6 sm:p-10">
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Welcome Back</h1>
            <p className="text-sm text-gray-500">Login to your PlantNet account</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {/* Email */}
            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-lime-500 outline-none bg-gray-50"
              />
            </motion.div>

            {/* Password */}
            <motion.div variants={itemVariants}>
              <label htmlFor="password" className="text-sm font-medium text-gray-700 block mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="••••••••"
                className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-lime-500 outline-none bg-gray-50"
              />
            </motion.div>

            {/* Submit */}
            <motion.div variants={itemVariants}>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-lime-500 hover:bg-lime-600 text-white font-semibold rounded-lg py-2.5 flex justify-center items-center transition"
              >
                {loading ? <TbFidgetSpinner className="animate-spin text-xl" /> : 'Login'}
              </button>
            </motion.div>
          </form>

          {/* Divider & Google Sign-In */}
          <div className="my-6 text-center text-sm text-gray-400 flex items-center justify-center gap-3">
            <div className="h-px flex-1 bg-gray-300" />
            Or continue with
            <div className="h-px flex-1 bg-gray-300" />
          </div>

          <motion.button
            type="button"
            onClick={handleGoogleSignIn}
            variants={itemVariants}
            className="w-full flex justify-center items-center gap-3 border border-gray-300 rounded-lg py-2.5 hover:bg-gray-50 transition"
          >
            <FcGoogle size={24} />
            <span className="font-medium text-gray-700">Continue with Google</span>
          </motion.button>

          {/* Signup Redirect */}
          <p className="mt-6 text-sm text-center text-gray-500">
            Don't have an account?{' '}
            <Link to="/signup" className="text-lime-500 hover:underline font-medium">
              Create one
            </Link>
          </p>
        </div>

        {/* Branding Section */}
        <div className="hidden md:flex bg-lime-500 text-white p-10 flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <svg className="w-20 h-20 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <h2 className="text-2xl font-bold">Welcome Back</h2>
            <p className="mt-2 text-sm max-w-sm">
              Let's continue your journey with nature and discovery.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
