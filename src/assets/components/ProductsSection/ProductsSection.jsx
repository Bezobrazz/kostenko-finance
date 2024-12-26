import ProductCard from "./components/ProductCard/ProductCard.jsx";

const ProductsSection = () => {
  const products = [
    {
      image: "https://creatie.ai/...",
      title: "Базовий курс з інфобізнесу",
      description:
        "Ідеально підходить для початківців. Навчіться створювати та продавати свої перші інфопродукти.",
      price: "2,999",
    },
    {
      image: "https://creatie.ai/...",
      title: "Просунутий маркетинг",
      description:
        "Глибоке занурення в digital-маркетинг та стратегії продажів інфопродуктів.",
      price: "4,999",
    },
    {
      image: "https://creatie.ai/...",
      title: "VIP-консультація",
      description:
        "Персональна консультація для розробки індивідуальної стратегії розвитку.",
      price: "7,999",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Продаю досвід
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Я лише даю вам можливий вектор, бо краще платити за помилки
            фіксовану ціну. Мені довелося розраховуватись по факту. Це було
            дуууже дорого.{" "}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProductsSection;
