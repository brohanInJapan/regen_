export default function Button({ styleClass, onClick, children }) {
  return (
    <button className={styleClass} onClick={onClick}>
      {children}
    </button>
  );
}
