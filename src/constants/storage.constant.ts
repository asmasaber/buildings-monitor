import { User } from '../shared.models';

export const USERS_LIST_STORAGE_KEY = '@BUILDING_MONITOR-USERS';
export const BUILDINGS_LIST_STORAGE_KEY = '@BUILDING_MONITOR-BUILDINGS';

export const CLIENTS_MOCKING_DATA: User[] = [
  { id: 1, name: 'Client 1' },
  { id: 2, name: 'Client 2' },
  { id: 3, name: 'Client 3' },
  { id: 4, name: 'Client 4' },
];
