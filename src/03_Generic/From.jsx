export function From({ children, className }) {
  return <form className={className}>{children}</form>;
}

export function InputField({
  className,
  type = "text",
  label,
  placeholder,
  id,
}) {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={id} id={id} placeholder={placeholder} />
    </div>
  );
}
