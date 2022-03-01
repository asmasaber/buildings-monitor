import React from 'react';
import { BuildingContextType } from '../shared.models';

const BuildingsContext = React.createContext<BuildingContextType>({
  buildings: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  buildingsDispatch: () => {},
});

export { BuildingsContext as default };
