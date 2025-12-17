import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import ServicesPreview from "../components/ServicesPreview";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import BlogPage from "./BlogPage";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyChooseUs />
      <ServicesPreview />
      <BlogPage />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default HomePage;
