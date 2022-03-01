import { useCallback, useEffect, useReducer, useState } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import Loading from '../../../../components/Loading/Loading';
import { useLocalStorage } from '../../../../hooks/useLocalStorage';
import BuildingsContext from '../../../../contexts/buildings.context';
import BuildingsReducer from '../../../../reducers/buildings.reducer';
import BuildingForm from '../BuildingForm/BuildingForm';
import BuildingList from '../BuildingList/BuildingList';
import BuildingView from '../BuildingView/BuildingView';
import { BUILDINGS_LIST_STORAGE_KEY } from '../../../../constants/storage.constant';
import { Building } from '../../../../shared.models';

import './UserBuilding.style.css';

function UserBuilding(props: InferProps<typeof UserBuilding.propTypes>) {
  const { userId } = props;
  const [storedItems, setStoraedItems] = useLocalStorage<Building[]>(
    BUILDINGS_LIST_STORAGE_KEY
  );
  const [buildings, buildingsDispatch] = useReducer(BuildingsReducer, []);
  const [userBuildings, setUserBuildings] = useState<Building[]>([]);
  const [selectedBuilding, setSelectedBuilding] = useState<Building>();
  const [loading, setLoading] = useState(true);

  const updateSelectedBuilding = useCallback(
    (building: Building) => {
      setSelectedBuilding(building);
    },
    [selectedBuilding]
  );

  useEffect(() => {
    if (storedItems) {
      buildingsDispatch({ type: 'POPULATE_BUILDINGS', items: storedItems });
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setUserBuildings(
        buildings &&
          buildings.filter((b: Building) => b.userId === Number(userId))
      );
      setLoading(false);
    }, 500);
  }, [userId, buildings]);

  useEffect(() => {
    if (userBuildings && userBuildings.length) {
      setSelectedBuilding(userBuildings[0]);
    } else {
      setSelectedBuilding(undefined);
    }
  }, [userBuildings]);

  useEffect(() => {
    setTimeout(() => {
      setStoraedItems(buildings);
      setLoading(false);
    }, 500);
  });

  return (
    <BuildingsContext.Provider value={{ buildings, buildingsDispatch }}>
      <div id="app" className="wrapper">
        {loading && <Loading />}
        <div data-testid="user-building-list" className="sidebar">
          {buildings && (
            <BuildingList
              buildings={userBuildings as Building[]}
              selectedBuilding={selectedBuilding as Building}
              onBuildingChange={updateSelectedBuilding}
            />
          )}
        </div>
        <div className="content">
          <div className="card">
            <title className="card__title">
              {selectedBuilding
                ? `Selected Building (${selectedBuilding.name}) Map View`
                : 'Add / Edit Building'}
            </title>
            {selectedBuilding ? (
              <BuildingView building={selectedBuilding} />
            ) : (
              <BuildingForm
                userId={userId}
                updateSelectedBuilding={updateSelectedBuilding}
              />
            )}
          </div>
        </div>
      </div>
    </BuildingsContext.Provider>
  );
}

UserBuilding.propTypes = {
  userId: PropTypes.number.isRequired,
};

export { UserBuilding as default };
