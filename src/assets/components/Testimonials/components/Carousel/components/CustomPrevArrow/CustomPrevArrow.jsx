// eslint-disable-next-line react/prop-types
const CustomPrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} custom-prev`}
      style={{
        ...style,
        display: "flex",
        width: "40px",
        height: "40px",
        justifyContent: "center",
        alignItems: "center",
        background: "black",
        borderRadius: "50px",
        left: "50px",
      }}
      onClick={onClick}
    ></div>
  );
};

export default CustomPrevArrow;
