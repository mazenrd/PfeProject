export const bindInputProps = ({
  name,
  values,
  handleChange,
  setFieldTouched,
  touched,
  errors,
}) => ({
  value: values[name],
  onChange: handleChange(name),
  onBlur: () => setFieldTouched(name),
  touched: touched[name],
  errors: errors[name],
});
