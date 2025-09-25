export default function Input({ type, placeholder, name, register, ...rest }) {
  return (
    <div className="d-flex flex-column gap-2">
      <div className="justify-align-content-start d-flex fw-semibold">
        {name}
      </div>
      <input
        type={type}
        className="form-control "
        placeholder={placeholder}
        {...register}
        {...rest}
      />
    </div>
  );
}
