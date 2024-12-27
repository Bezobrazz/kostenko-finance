import Carousel from "./components/Carousel/Carousel.jsx";

const Testimonials = () => {
  return (
    <section className="bg-white py-[64px] px-[32px]">
      <h3 className="text-[30px] text-center mb-[48px] font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Відгуки
      </h3>
      <Carousel />
    </section>
  );
};

export default Testimonials;
