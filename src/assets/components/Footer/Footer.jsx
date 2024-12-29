const Footer = () => {
  const footerNavLinks = [
    {
      name: "Головна",
      href: "#",
    },
    {
      name: "Про мене",
      href: "#",
    },
    {
      name: "Продукти",
      href: "#",
    },
    {
      name: "Контакти",
      href: "#",
    },
  ];

  const footerSocialLinks = [
    {
      name: "YouTube",
      href: "#",
    },
    {
      name: "Telegram",
      href: "#",
    },
  ];
  return (
    <footer className="bg-white">
      <div className="max-w-8xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2">
            <img
              className="h-8"
              src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
              alt="Logo"
            />
            <p className="mt-4 text-base text-gray-500">
              Допомагаю підприємцям масштабувати бізнес через створення та
              просування інфопродуктів.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Навігація
            </h3>
            <ul className="mt-4 space-y-4">
              {footerNavLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Соціальні мережі
            </h3>
            <ul className="mt-4 space-y-4">
              {footerSocialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            © 2024 Всі права захищені.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
