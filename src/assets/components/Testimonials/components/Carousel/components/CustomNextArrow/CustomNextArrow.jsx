// eslint-disable-next-line react/prop-types
const CustomNextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} custom-next`}
      style={{
        ...style,
        display: "flex",
        width: "40px",
        height: "40px",
        justifyContent: "center",
        alignItems: "center",
        background: "black",
        borderRadius: "50px",
        right: "50px",
      }}
      onClick={onClick}
    ></div>
  );
};

export default CustomNextArrow;
