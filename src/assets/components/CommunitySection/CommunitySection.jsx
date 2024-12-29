const CommunitySection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Section */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Приєднуйтесь до моєї спільноти
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Отримуйте корисний контент та останні новини у сфері інфобізнесу
            </p>
            <div className="mt-8 space-y-4">
              <a
                href="#"
                className="flex items-center bg-red-600 text-white !rounded-button px-6 py-3 text-base font-medium hover:bg-red-700"
              >
                <i className="fab fa-youtube mr-3"></i>
                YouTube канал
              </a>
              <a
                href="#"
                className="flex items-center bg-blue-500 text-white !rounded-button px-6 py-3 text-base font-medium hover:bg-blue-600"
              >
                <i className="fab fa-telegram mr-3"></i>
                Telegram канал
              </a>
            </div>
          </div>
          {/* Right Section */}
          <div className="mt-8 lg:mt-0">
            <img
              src="https://creatie.ai/ai/api/search-image?query=Social media content creation setup with modern devices and creative elements, clean background&width=600&height=400&orientation=landscape&flag=7686ff4c-7b88-42e5-9d2d-07a80839ecd8&flag=1a29a735-6465-43cc-b77d-013c20b59dd5"
              alt="Social Media"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
