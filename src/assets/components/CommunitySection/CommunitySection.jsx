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
                href="https://www.youtube.com/@%D0%92%D1%8F%D1%87%D0%B5%D1%81%D0%BB%D0%B0%D0%B2%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-red-600 text-white !rounded-button px-6 py-3 text-base font-medium hover:bg-red-700"
              >
                <i className="fab fa-youtube mr-3"></i>
                YouTube канал
              </a>
              <a
                href="https://t.me/viacheslavkostenko"
                target="_blank"
                rel="noopener noreferrer"
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
              src="/public/CommunitySection/social-media.jpg"
              alt="Social Media"
              width="600"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
