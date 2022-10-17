export const bindInputProps = ({
  name,
  values,
  handleChange,
  setFieldTouched,
  touched,
  errors,
}) => {
  return {
    value: values[name] || "",
    onChange: handleChange(name),
    onBlur: () => setFieldTouched(name),
    touched: touched[name],
    errors: errors[name],
  };
};
