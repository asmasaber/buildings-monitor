import PropTypes, { InferProps } from 'prop-types';
import { Building, Country } from '../../../../shared.models';
import MapChart from '../../../../components/MapChart/MapChart';

function BuildingView(props: InferProps<typeof BuildingView.propTypes>) {
  const { building } = props;
  const tooltip = `${building.name} Located in ${
    (building.country as Country).name
  }`;

  return (
    <MapChart country={building.country as Country} tooltipContent={tooltip} />
  );
}

BuildingView.propTypes = {
  building: PropTypes.instanceOf<Building>(Building).isRequired,
};

export { BuildingView as default };
