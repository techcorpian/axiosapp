import React, { useEffect, useState } from 'react';
import axios from 'axios';
import User from './User';
import UserForm from './UserForm';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const generateId = () => {
    // const maxId = users.length > 0 ? Math.max(...users.map(user => user.id)) : 0;
    console.log(users.length);
    return users.length + 1;
  };

  const addUser = async (user) => {
    try {
      user.id = generateId(); // Generate a new unique ID
      console.log(user.id);
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', user);
      setUsers([...users, response.data]);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const updateUser = async (user) => {
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, user);
      setUsers(users.map(u => (u.id === user.id ? user : u)));
      setEditingUser(null);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
      <div className="container mt-4">
        <h3 className="mb-4 text-center border-bottom pb-4 ">List Of Users</h3>
        <UserForm addUser={addUser} editingUser={editingUser} updateUser={updateUser} />
        <div className="row ">
          {users.map(user => (
            <div key={user.id} className="col-md-3 mb-4">
              <User user={user} setEditingUser={setEditingUser} deleteUser={deleteUser} />
            </div>
          ))}
        </div>
      </div>
  );
};

export default UserList;
