import { useState, useMemo } from 'react';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { motion, AnimatePresence } from 'framer-motion';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FiUploadCloud, FiLoader, FiCheckCircle } from 'react-icons/fi';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const quillModules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
    ['clean'],
  ],
};

const AddBlog = () => {
  const axiosSecure = useAxiosSecure();
  const today = useMemo(() => new Date().toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  }), []);

  const [formData, setFormData] = useState({
    title: '',
    imageFile: null,
    imagePreview: '',
    excerpt: '',
    content: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        imageFile: file,
        imagePreview: URL.createObjectURL(file),
      });
    }
  };

  const resetForm = () => {
    setFormData({ title: '', imageFile: null, imagePreview: '', excerpt: '', content: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.imageFile) return toast.error('Please upload a feature image.');

    setLoading(true);
    try {
      const imageUrl = formData.imagePreview; // Replace with actual image URL from your upload logic

      const blogData = {
        title: formData.title,
        image: imageUrl,
        date: today,
        author: 'ByteonSoft Team',
        excerpt: formData.excerpt,
        content: formData.content,
      };

      const response = await axiosSecure.post('/blogs', blogData);
      if (response.data?.insertedId || [200, 201].includes(response.status)) {
        toast.success('✅ Blog post published successfully!');
        resetForm();
      } else {
        throw new Error('Failed to publish the blog post.');
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || '❌ An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto p-4 md:p-8 space-y-8"
    >
      <motion.div variants={itemVariants} className="border-b border-gray-200 pb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Create New Post</h1>
        <p className="mt-1 text-gray-500">Fill out the details below to publish a new blog post.</p>
      </motion.div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <motion.div variants={itemVariants}>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Post Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 transition"
              placeholder="Your Awesome Blog Title"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Content</label>
            <ReactQuill
              theme="snow"
              value={formData.content}
              onChange={(val) => setFormData({ ...formData, content: val })}
              modules={quillModules}
              className="h-72 md:h-96 bg-white rounded-lg"
            />
          </motion.div>
        </div>

        <div className="space-y-6 mt-0 lg:mt-10">
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-gray-700 mb-2">Feature Image</label>
            <div className="mt-2 flex justify-center items-center w-full h-60 border-2 border-gray-300 border-dashed rounded-lg bg-gray-50 relative overflow-hidden">
              {formData.imagePreview ? (
                <img src={formData.imagePreview} alt="Preview" className="h-full w-full object-cover" />
              ) : (
                <div className="text-center">
                  <FiUploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
              Excerpt
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              rows="4"
              required
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 transition"
              placeholder="A short, catchy summary of your post..."
            />
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="lg:col-span-3 flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-3 w-full md:w-auto bg-teal-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-teal-700 disabled:bg-teal-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-teal-500/50"
          >
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="flex items-center gap-2"
                >
                  <FiLoader className="animate-spin" />
                  <span>Publishing...</span>
                </motion.div>
              ) : (
                <motion.span
                  key="publish"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="flex items-center gap-2"
                >
                  <FiCheckCircle />
                  <span>Publish Post</span>
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default AddBlog;