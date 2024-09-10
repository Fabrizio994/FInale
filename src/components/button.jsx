export default function Button({ children, className }) {
  return (
    <button className={className} type="button">
      {children}
    </button>
  );
}
