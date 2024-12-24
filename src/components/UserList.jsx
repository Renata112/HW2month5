import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, setFilter } from '../store/userSlice';
import UserCard from './UserCard';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const currentFilter = useSelector(state => state.users.filter);
  const [newUserName, setNewUserName] = useState('');
  const [newUserType, setNewUserType] = useState('regular');

  const handleAddUser = () => {
    if (newUserName.trim()) {
      dispatch(addUser({
        id: Date.now(),
        name: newUserName,
        type: newUserType
      }));
      setNewUserName('');
    }
  };

  const filteredUsers = users.filter(user => {
    if (currentFilter === 'all') return true;
    return user.type === currentFilter;
  });

  return (
    <div className="user-list">
      <div className="add-user-form">
        <input
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          placeholder="Имя пользователя"
        />
        <select
          value={newUserType}
          onChange={(e) => setNewUserType(e.target.value)}
        >
          <option value="regular">Обычный</option>
          <option value="business">Бизнес</option>
          <option value="vip">VIP</option>
        </select>
        <button onClick={handleAddUser}>Добавить пользователя</button>
      </div>

      <div className="filters">
        <button onClick={() => dispatch(setFilter('all'))}>Все</button>
        <button onClick={() => dispatch(setFilter('regular'))}>Обычные</button>
        <button onClick={() => dispatch(setFilter('business'))}>Бизнес</button>
        <button onClick={() => dispatch(setFilter('vip'))}>VIP</button>
      </div>

      <div className="users-grid">
        {filteredUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList; 