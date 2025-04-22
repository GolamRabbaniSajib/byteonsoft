import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Product Manager at TechCorp",
    feedback: "This team exceeded our expectations. Outstanding service!",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "John Smith",
    role: "CEO of StartupX",
    feedback: "Highly professional and skilled developers. Highly recommended!",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Emily Johnson",
    role: "UX Designer",
    feedback: "Loved the clean UI/UX. Great attention to detail!",
    image: "https://i.pravatar.cc/150?img=8",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">
          What Our Clients Say
        </h2>
        <p className="text-gray-500 mt-2">Real feedback from real users</p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between my-8">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
