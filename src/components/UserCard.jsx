import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser, updateUser } from '../store/userSlice';

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleSave = () => {
    dispatch(updateUser(editedUser));
    setIsEditing(false);
  };

  return (
    <div className="user-card">
      {isEditing ? (
        <>
          <input
            value={editedUser.name}
            onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
          />
          <select
            value={editedUser.type}
            onChange={(e) => setEditedUser({ ...editedUser, type: e.target.value })}
          >
            <option value="regular">Обычный</option>
            <option value="business">Бизнес</option>
            <option value="vip">VIP</option>
          </select>
          <button onClick={handleSave}>Сохранить</button>
        </>
      ) : (
        <>
          <h3>{user.name}</h3>
          <p>Тип: {user.type}</p>
          <button onClick={() => setIsEditing(true)}>Редактировать</button>
        </>
      )}
      <button onClick={() => dispatch(deleteUser(user.id))}>Удалить</button>
    </div>
  );
};

export default UserCard; 