import { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import Building from './components/UserBuilding/UserBuilding';
import SelectField from '../../components/SelectField/SelectField';
import Placeholder from '../../components/Placeholder/Placeholder';
import { USERS_LIST_STORAGE_KEY } from '../../constants/storage.constant';
import { User } from '../../shared.models';

import './BuildingsMonitor.style.css';

function BuildingsMonitor() {
  const [users] = useLocalStorage<User[]>(USERS_LIST_STORAGE_KEY);
  const [selectedUser, setSelectedUser] = useState(0);

  return (
    <div className="d-flex column">
      <div className="page-header">Buildings Monitor</div>
      <SelectField
        id="users"
        name="users"
        placeholder="Select User"
        classes="mx-auto"
        options={users}
        emitValue
        onChange={(_, value: number) => setSelectedUser(value)}
      />
      {!selectedUser ? (
        <Placeholder
          icon="fa fa-user-plus"
          message="Please select client you want to preview his buildings"
        />
      ) : (
        <Building userId={selectedUser} />
      )}
    </div>
  );
}

export { BuildingsMonitor as default };
