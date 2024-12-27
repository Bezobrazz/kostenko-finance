const TestimonialItem = ({ image, title, description, role }) => {
  return (
    <div className="flex flex-col justify-center items-center mb-4">
      <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
        <img src={image} alt={title} />
      </div>
      {/* Зірки */}
      <div className="flex justify-center mt-4 space-x-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <img
            key={index}
            src="../../../../../../public/Carousel/star.svg"
            width={16}
            height={16}
            alt="star"
          />
        ))}
      </div>

      <div className="mt-4 text-center">
        <p className="text-[18px] text-[#111827] font-bold mt-2 mb-4 sm:text-[20px]">
          {description}
        </p>
        <h3 className="text-[14px] text-[#111827] font-semibold sm:text-[16px]">
          {title}
        </h3>
        <p className="text-[14px] text-[#6B7280] font-normal sm:text-[16px]">
          {role}
        </p>
      </div>
    </div>
  );
};

export default TestimonialItem;
