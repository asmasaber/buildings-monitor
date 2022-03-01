import { memo, useState } from 'react';
import PropTypes, { InferProps } from 'prop-types';

import { Country } from '../../shared.models';

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import ReactTooltip from 'react-tooltip';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

function MapChart(props: InferProps<typeof MapChart.propTypes>) {
  const { country, tooltipContent } = props;
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 150 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                stroke="#D6D6DF"
                onMouseEnter={() => {
                  geo.properties.ISO_A3 === country.id && setShowTooltip(true);
                }}
                onMouseLeave={() => {
                  geo.properties.ISO_A3 === country.id && setShowTooltip(false);
                }}
                style={{
                  default: {
                    fill:
                      geo.properties.ISO_A3 === country.id ? '#F53' : '#D6D6DA',
                    outline: 'none',
                  },
                  hover: {
                    fill:
                      geo.properties.ISO_A3 === country.id ? '#F53' : '#D6D6DA',
                    outline: 'none',
                  },
                  pressed: {
                    fill:
                      geo.properties.ISO_A3 === country.id ? '#F53' : '#D6D6DA',
                    outline: 'none',
                  },
                }}
              />
            ))
          }
        </Geographies>
        <Marker coordinates={[country.position[1], country.position[0]]}>
          <g
            fill="none"
            stroke="#F53"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-22, -30)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
        </Marker>
      </ComposableMap>

      {showTooltip && tooltipContent && (
        <ReactTooltip>{tooltipContent}</ReactTooltip>
      )}
    </>
  );
}

MapChart.propTypes = {
  country: PropTypes.instanceOf<Country>(Country).isRequired,
  tooltipContent: PropTypes.string,
};

export default memo(MapChart);
