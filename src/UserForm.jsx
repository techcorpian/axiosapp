import React, { useState, useEffect } from 'react';

const UserForm = ({ addUser, editingUser, updateUser }) => {
  const [user, setUser] = useState({ id:null, name: '', email: '' });

  useEffect(() => {
    if (editingUser) {
      setUser(editingUser);
    } else {
      setUser({ id:null, name: '', email: '' });
    }
  }, [editingUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      updateUser(user);
    } else {
      addUser(user);
    }
    setUser({id:null, name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 d-flex justify-content-center align-items-center gap-3">
      <div className="">
        {/* <label className="form-label">Name</label> */}
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          className="form-control"
          placeholder='Name'
          required
        />
      </div>
      <div className="">
        {/* <label className="form-label">Email</label> */}
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          className="form-control"
          placeholder='Name'
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {editingUser ? 'Update User' : 'Add User'}
      </button>
    </form>
  );
};

export default UserForm;
