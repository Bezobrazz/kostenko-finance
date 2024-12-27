// eslint-disable-next-line react/prop-types
const ProductCard = ({ image, title, description, price }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-6">
        <div className="aspect-w-16 aspect-h-9 mb-6">
          <img src={image} alt={title} className="object-cover rounded-lg" />
        </div>
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-500">{description}</p>
        <div className="mt-4">
          <span className="text-2xl font-bold text-gray-900">₴{price}</span>
        </div>
        <a
          href="#"
          className="mt-4 w-full bg-main text-white rounded-[4px] px-4 py-2 text-sm font-medium hover:bg-indigo-700 inline-block text-center"
        >
          Купити зараз
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
