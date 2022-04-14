const Button = ({ children, className = '', onClick }) => (
  <button type="button" onClick={onClick} className={className}>
    {children}
  </button>
);

export default Button;
