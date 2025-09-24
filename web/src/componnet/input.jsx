export default function Input({ type, placeholder, value, onChange, name }) {
  return (
    <div className="d-flex flex-column gap-2">
      <div className="justify-align-content-start d-flex fw-semibold">
        {name}
      </div>
      <input
        type={type}
        className="form-control "
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
