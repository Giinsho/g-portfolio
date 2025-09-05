const ButtonLink = ({ styles, text, onClick }) => {
  return (
    <button
      onTouchStart={onClick} 
      type="button"
      className={`bg-blue-gradient font-poppins font-medium text-primary outline-none rounded-[10px] ${styles} pointer-events-auto relative z=50`}
    >
      {text}
    </button>
  );
};

export default ButtonLink;
