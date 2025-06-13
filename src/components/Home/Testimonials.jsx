import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

// --- Mock Data (with added ratings and varied lengths) ---
const testimonials = [
    {
        name: 'Sarah L.',
        role: 'Marketing Director',
        feedback: 'Their dedication and creativity exceeded all our expectations. The final product was flawless!',
        image: 'https://placehold.co/100x100/4f46e5/ffffff?text=SL',
        rating: 5,
    },
    {
        name: 'Michael B.',
        role: 'Founder, Innovate Co.',
        feedback: 'An absolutely outstanding experience. They are true professionals who listen, adapt, and deliver exceptional results. We saw a 200% increase in conversions.',
        image: 'https://placehold.co/100x100/16a34a/ffffff?text=MB',
        rating: 5,
    },
    {
        name: 'Jessica T.',
        role: 'Project Manager',
        feedback: "I'm incredibly impressed with the quality of work.",
        image: 'https://placehold.co/100x100/be123c/ffffff?text=JT',
        rating: 5,
    },
     {
        name: 'David Chen',
        role: 'CEO, Solutions Now',
        feedback: 'Their strategic insights helped us double our user engagement in just one quarter. A brilliant team with a clear vision and passion for what they do.',
        image: 'https://placehold.co/100x100/ca8a04/ffffff?text=DC',
        rating: 5,
    },
    {
        name: 'Emily Carter',
        role: 'Art Director',
        feedback: 'A pleasure to collaborate with. The design process was smooth and the final result was beautiful.',
        image: 'https://placehold.co/100x100/6d28d9/ffffff?text=EC',
        rating: 4,
    },
    {
        name: 'Alex Johnson',
        role: 'Lead Developer',
        feedback: 'Technically proficient and highly communicative. They integrated with our team seamlessly.',
        image: 'https://placehold.co/100x100/0f766e/ffffff?text=AJ',
        rating: 5,
    }
];

// --- Star Rating Component using React Icons ---
const Rating = ({ rating }) => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
        ))}
    </div>
);


/**
 * A modern, masonry-style "Wall of Love" testimonials section.
 *
 * This component displays feedback in a dynamic, multi-column layout that adjusts
 * based on screen size, using Tailwind CSS, Framer Motion, and React Icons.
 */
const Testimonials = () => {
    
    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: 'spring' } },
    };

    return (
        <section className="bg-gray-50 py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Wall of Love
                    </h2>
                    <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                        See what our amazing customers are saying about their experience with us.
                    </p>
                </div>

                <motion.div
                    className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-lg break-inside-avoid-column"
                            variants={itemVariants}
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/100x100/e2e8f0/64748b?text=??' }}
                                />
                                <div>
                                    <h4 className="text-md font-semibold text-gray-800">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 text-base mb-4">
                                {testimonial.feedback}
                            </p>
                            <Rating rating={testimonial.rating} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

// The main App component to render our Testimonials section
export default function App() {
    return (
        <div className="w-full bg-gray-50">
            <Testimonials />
        </div>
    );
}
