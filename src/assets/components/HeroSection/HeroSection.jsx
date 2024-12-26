const HeroSection = () => {
  return (
    <section className="relative bg-white pt-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Зробіть фінансові ринки</span>
              <span className="block text-custom">частиною вашого життя</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Не ігноруйте їх і не сприймайте як щось містичне, не доступне
              людському розумінню. Тут все просто, як на базарі. Тільки не
              потрібно робити різких рухів...
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              <a
                href="#"
                className="bg-main text-white rounded-[4px] px-8 py-3 text-base font-medium hover:bg-indigo-700"
              >
                Дізнатися більше
              </a>
            </div>
          </div>
          <div className="mt-12 relative  sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <img
              src="../../../../public/HeroSection/hero.svg"
              className="w-full rounded-[4px]"
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
