import { Building, BuildingsReducerAction } from '../shared.models';

const buildingsReducer = (
  state: Building[],
  action: BuildingsReducerAction
) => {
  switch (action.type) {
    case 'POPULATE_BUILDINGS':
      return action.items;
    case 'ADD_BUILDING':
      return [action.building, ...state];
    case 'REMOVE_BUILDING':
      return state.filter(
        (item: Building) => Number(item.id) !== Number(action.id)
      );
    default:
      return state;
  }
};

export { buildingsReducer as default };
