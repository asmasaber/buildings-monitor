import PropTypes, { InferProps } from 'prop-types';
import Placeholder from '../../../../components/Placeholder/Placeholder';
import { Building } from '../../../../shared.models';
import BuildingItem from './BuildingItem';

import './BuildingList.style.css';
function BuildingList(props: InferProps<typeof BuildingList.propTypes>) {
  const { buildings, selectedBuilding, onBuildingChange } = props;

  return (
    <div className="card d-flex column h-100 justify-between w-100">
      <div>
        <title className="card__title">Buildings</title>
        <ul>
          {buildings.map((b: Building) => (
            <BuildingItem
              key={b.id}
              item={b}
              selected={selectedBuilding && b.id === selectedBuilding.id}
              onClick={() => onBuildingChange(b)}
            />
          ))}
        </ul>
        {!buildings.length && (
          <Placeholder
            icon="fa fa-building-o"
            message="There is no buildings found"
          />
        )}
      </div>
      <button onClick={() => onBuildingChange(0)}> Add </button>
    </div>
  );
}

BuildingList.propTypes = {
  buildings: PropTypes.arrayOf(
    PropTypes.instanceOf<Building>(Building).isRequired
  ).isRequired,
  selectedBuilding: PropTypes.instanceOf<Building>(Building),
  onBuildingChange: PropTypes.func.isRequired,
};

export { BuildingList as default };
