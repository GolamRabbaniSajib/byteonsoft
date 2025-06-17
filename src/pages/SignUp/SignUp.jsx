import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-hot-toast';
import { TbFidgetSpinner } from 'react-icons/tb';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Framer Motion Variants for animations
const containerVariants = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
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

    // Basic validation
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long.');
      return;
    }

    try {
      // **Note: You need a function to upload the image and get the URL.**
      // For demonstration, we'll use a placeholder. Replace with your actual image upload logic.
      // Example: const imageUrl = await uploadImageToCloud(image);
      const imageUrl = imagePreview || 'https://i.ibb.co/ZcT2kHt/guest.png'; // Placeholder

      // 1. User Registration
      const result = await createUser(email, password);

      // 2. Update user profile with name and uploaded image URL
      await updateUserProfile(name, imageUrl);

      console.log(result);
      toast.success('Signup Successful! Welcome.');
      navigate('/');
    } catch (err) {
      console.error(err);
      toast.error(err?.message || 'Something went wrong.');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success('Signed in with Google successfully!');
      navigate('/');
    } catch (err) {
      console.error(err);
      toast.error(err?.message || 'Google sign-in failed.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-4xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Side: Form */}
        <div className="p-8 md:p-12">
          <motion.div variants={itemVariants} className="text-center md:text-left mb-8">
            <h1 className="my-3 text-4xl font-bold text-gray-800">Create Account</h1>
            <p className="text-sm text-gray-500">Welcome to PlantNet</p>
          </motion.div>

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <motion.div variants={itemVariants} className="space-y-4">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 bg-gray-50 text-gray-900 transition-shadow"
                  required
                />
              </div>

              {/* Image Upload */}
              <motion.div variants={itemVariants}>
                <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-700">
                  Profile Picture
                </label>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                    {imagePreview ? (
                      <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.993A1 1 0 001 20h22a1 1 0 001-1.007zM12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    )}
                  </div>
                  <input
                    required
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-lime-50 file:text-lime-700 hover:file:bg-lime-100"
                  />
                </div>
              </motion.div>


              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 bg-gray-50 text-gray-900 transition-shadow"
                />
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="text-sm mb-2 font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  id="password"
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 bg-gray-50 text-gray-900 transition-shadow"
                />
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants}>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center bg-lime-500 hover:bg-lime-600 active:bg-lime-700 disabled:bg-gray-400 rounded-lg py-3 text-white font-semibold text-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
              >
                {loading ? (
                  <TbFidgetSpinner className="animate-spin text-2xl" />
                ) : (
                  'Sign Up'
                )}
              </button>
            </motion.div>
          </form>

          {/* Social Signup */}
          <div className="mt-8">
            <div className="flex items-center pt-4 space-x-2">
              <div className="flex-1 h-px bg-gray-300"></div>
              <p className="px-3 text-sm text-gray-500">Or continue with</p>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            <motion.div
              variants={itemVariants}
              onClick={handleGoogleSignIn}
              className="flex justify-center items-center space-x-3 border mt-4 p-3 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
            >
              <FcGoogle size={28} />
              <p className="font-semibold text-gray-700">Continue with Google</p>
            </motion.div>
          </div>

          <p className="mt-8 text-sm text-center text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-lime-500 hover:underline">
              Login
            </Link>
          </p>
        </div>

        {/* Right Side: Image/Branding */}
        <div className="hidden md:block bg-lime-500 p-8 rounded-r-2xl">
          <motion.div
            className="flex flex-col justify-center items-center h-full text-white text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
             {/* You can add a logo or an illustration here */}
            <svg className="w-24 h-24 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            <h2 className="text-3xl font-bold">Join Our Community</h2>
            <p className="mt-2 max-w-sm">
              Discover, identify, and connect with a world of plants. Your green journey starts here.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;