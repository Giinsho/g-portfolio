const ButtonLink = ({ styles, text, onClick }) => {
  return (
    <button
      onClick={onClick} // ✅ works on desktop
      onTouchStart={onClick} // ✅ works on mobile
      type="button"
      className={`bg-blue-gradient font-poppins font-medium text-primary outline-none rounded-[10px] ${styles} pointer-events-auto relative animate-bounce`}
    >
      {text}
    </button>
  );
};

export default ButtonLink;
