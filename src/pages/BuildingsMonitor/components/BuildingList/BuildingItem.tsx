import { useContext } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import BuildingsContext from '../../../../contexts/buildings.context';
import { Building } from '../../../../shared.models';

import './BuildingList.style.css';

function BuildingItem(props: InferProps<typeof BuildingItem.propTypes>) {
  const { item, selected, onClick } = props;
  const { buildingsDispatch } = useContext(BuildingsContext);

  const handelDelete = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    buildingsDispatch({ type: 'REMOVE_BUILDING', id: item.id });
  };

  const handelEdit = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    alert('this feature not implmented yet');
  };

  return (
    <li
      onClick={onClick}
      className={selected ? 'selected' : ''}
      role="presentation"
    >
      {item.name}
      <div className="actions d-inline-block">
        <button onClick={handelEdit}>
          <i className="fa fa-edit"></i>
        </button>
        <button onClick={handelDelete}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </li>
  );
}

BuildingItem.propTypes = {
  item: PropTypes.instanceOf<Building>(Building).isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

BuildingItem.defaultProps = {
  selected: false,
};

export { BuildingItem as default };
