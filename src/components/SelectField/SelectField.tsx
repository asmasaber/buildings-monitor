import { ChangeEvent } from 'react';
import PropTypes, { InferProps } from 'prop-types';

import './SelectField.style.css';

function SelectField(props: InferProps<typeof SelectField.propTypes>) {
  const {
    id,
    name,
    options,
    optionLabelKey,
    optionValueKey,
    placeholder,
    emitValue,
    classes,
    required,
    onChange,
  } = props;

  const handelChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    const selectedValue =
      options &&
      (emitValue
        ? options[Number(value)][optionValueKey]
        : options[Number(value)]);
    onChange(name, selectedValue);
  };

  return (
    <select
      defaultValue=""
      className={classes}
      id={id}
      name={name}
      required={required}
      data-testid={`${id}-select`}
      onChange={handelChange}
    >
      {placeholder && (
        <option disabled value="">
          {placeholder}
        </option>
      )}
      {options &&
        options.map((o, index: number) => (
          <option key={o[optionValueKey]} value={index}>
            {o[optionLabelKey]}
          </option>
        ))}
    </select>
  );
}

SelectField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  emitValue: PropTypes.bool.isRequired,
  optionValueKey: PropTypes.string.isRequired,
  optionLabelKey: PropTypes.string.isRequired,
  options: PropTypes.array,
  required: PropTypes.bool.isRequired,
  classes: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

SelectField.defaultProps = {
  optionValueKey: 'id',
  optionLabelKey: 'name',
  options: [],
  emitValue: false,
  required: false,
  classes: '',
};

export { SelectField as default };
