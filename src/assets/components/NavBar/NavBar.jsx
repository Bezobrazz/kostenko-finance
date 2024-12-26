import { useState } from "react";

const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavClick = (index) => {
    setActiveIndex(index);
  };

  const navMenu = [
    { Головна: "/" },
    { "Про мене": "/about" },
    { Продукти: "/products" },
    { Відгуки: "/reviews" },
    { Контакти: "/contacts" },
  ];
  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-auto"
                src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
                alt="Logo"
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navMenu.map((item, index) => {
                const title = Object.keys(item)[0];
                const href = item[title];
                return (
                  <a
                    key={index}
                    href={href}
                    className={
                      activeIndex === index
                        ? "border-black text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition"
                    }
                    onClick={() => handleNavClick(index)}
                  >
                    {title}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <a
              href="#"
              className="bg-main text-white rounded-[4px] px-4 py-2 text-sm font-medium hover:bg-indigo-700 transition"
            >
              Замовити консультацію
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
