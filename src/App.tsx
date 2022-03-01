import { useEffect, useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import {
  USERS_LIST_STORAGE_KEY,
  CLIENTS_MOCKING_DATA,
} from './constants/storage.constant';
import UsersBuildings from './pages/BuildingsMonitor/BuildingsMonitor';
import Loading from './components/Loading/Loading';
import { User } from './shared.models';
import './shared.styles.css';

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useLocalStorage<User[]>(USERS_LIST_STORAGE_KEY);

  useEffect(() => {
    initApp();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      users && setLoading(false);
    }, 1000);
  }, [users]);

  const initApp = () => {
    if (!users) {
      setUsers(CLIENTS_MOCKING_DATA);
    }
  };

  return loading || !users ? <Loading /> : <UsersBuildings />;
};
