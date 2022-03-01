import PropTypes, { InferProps } from 'prop-types';

import './Placeholder.style.css';

function Placeholder(props: InferProps<typeof Placeholder.propTypes>) {
  const { icon, message } = props;

  return (
    <div className="empty-placeholder">
      <i className={icon}></i>
      <p>{message}</p>
    </div>
  );
}

Placeholder.propTypes = {
  icon: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

Placeholder.defaultProps = {
  icon: '',
};

export { Placeholder as default };
