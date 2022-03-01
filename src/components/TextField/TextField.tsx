import { ChangeEvent } from 'react';
import PropTypes, { InferProps } from 'prop-types';

import './TextField.style.css';

function TextField(props: InferProps<typeof TextField.propTypes>) {
  const { id, name, placeholder, value, required, onChange } = props;

  const handelChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  return (
    <input
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      required={required}
      onChange={handelChange}
    />
  );
}

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

TextField.defaultProps = {
  placeholder: '',
  value: '',
  required: false,
};

export { TextField as default };
