const Button = ({ text, onClick, type, className }) => {
  const baseStyle = "px-8 py-3 rounded-full text-lg transition-all";

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${baseStyle} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
