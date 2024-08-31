import React from 'react';

const User = ({ user, setEditingUser, deleteUser }) => {
    return (
        <>
            {/* <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{user.email}</p>
        <button
          onClick={() => setEditingUser(user)}
          className="btn btn-warning me-2"
        >
          Edit
        </button>
        <button
          onClick={() => deleteUser(user.id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div> */}

            <div class="card" style={{ width: '18rem' }}>
                <div class="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">{user.email}</p>
                    <button
                        onClick={() => setEditingUser(user)}
                        className="btn btn-warning me-2"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => deleteUser(user.id)}
                        className="btn btn-danger"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </>
    );
};

export default User;
