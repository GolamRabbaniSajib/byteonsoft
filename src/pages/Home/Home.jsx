import { Helmet } from "react-helmet-async";
import Hero from "../../components/Home/Hero";
import AboutCompany from "../../components/Home/AboutCompany";
import Services from "../../components/Home/Services";
import Testimonials from "../../components/Home/Testimonials";
import Projects from "../../components/Home/Projects";
import Contact from "../../components/Home/Contact";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> PlantNet | Buy Your Desired Plant</title>
      </Helmet>

      <div className="bg-white text-gray-800 font-[Inter]">
        {/* Hero Section */}
        <Hero></Hero>

        {/* About Section */}
        <AboutCompany></AboutCompany>

        {/* Services Section */}
        <Services></Services>

        {/* Projects Section */}
        <Projects></Projects>

        {/* Contact CTA */}
        <Contact></Contact>

        {/* Testimonials Section (Placeholder) */}
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
