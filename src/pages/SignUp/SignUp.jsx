import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-hot-toast';
import { TbFidgetSpinner } from 'react-icons/tb';
import { motion } from 'framer-motion';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
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

const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle, loading } = useAuth();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters.');
      return;
    }

    try {
      const imageUrl = imagePreview || 'https://i.ibb.co/ZcT2kHt/guest.png';
      const result = await createUser(email, password);
      await updateUserProfile(name, imageUrl);

      toast.success('Signup successful!');
      navigate('/');
    } catch (err) {
      toast.error(err?.message || 'Signup failed.');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success('Signed in with Google!');
      navigate('/');
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
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Create Account</h1>
            <p className="text-sm text-gray-500">Welcome to PlantNet</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {/* Name */}
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="text-sm font-medium text-gray-700 block mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                required
                className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-lime-500 outline-none bg-gray-50"
              />
            </motion.div>

            {/* Profile Image */}
            <motion.div variants={itemVariants}>
              <label htmlFor="image" className="text-sm font-medium text-gray-700 block mb-1">
                Profile Picture
              </label>
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden">
                  {imagePreview ? (
                    <img src={imagePreview} alt="Preview" className="object-cover w-full h-full" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg">?</div>
                  )}
                </div>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                  className="text-sm text-gray-600 file:bg-lime-100 file:border-0 file:px-3 file:py-1.5 file:rounded-full file:font-medium file:text-lime-700 hover:file:bg-lime-200 transition"
                />
              </div>
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@example.com"
                required
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
                placeholder="••••••••"
                autoComplete="new-password"
                required
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
                {loading ? <TbFidgetSpinner className="animate-spin text-xl" /> : 'Sign Up'}
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

          {/* Login Redirect */}
          <p className="mt-6 text-sm text-center text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="text-lime-500 hover:underline font-medium">
              Login
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
            <h2 className="text-2xl font-bold">Join Our Community</h2>
            <p className="mt-2 text-sm max-w-sm">
              Discover, identify, and connect with a world of plants. Your green journey starts here.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;
