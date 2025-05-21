function Button({ children, variant, onClick, type }) {
  return (
    <button type={type} className={variant} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
