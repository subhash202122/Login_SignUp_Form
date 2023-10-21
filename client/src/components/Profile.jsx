import React, { useState } from 'react';
import './Profile.css';
function Profile() {
 const user=localStorage.getItem("user");
 console.log(user);
  const [userData, setUserData] = useState(
    JSON.parse(user)
  );
  const handleLogout = () => {
    window.location.href = '/login'; // This is a simple client-side redirection
  };
  return (
    <div className="profile-wrapper">
      <h1>User Profile</h1>
      <div className="profile-info">
        <div className="info-item">
          <span>Name:</span>
          <p>{userData.name}</p>
        </div>
        <div className="info-item">
          <span>Age:</span>
          <p>{userData.age}</p>
        </div>
        <div className="info-item">
          <span>Gender:</span>
          <p>{userData.gender}</p>
        </div>
        <div className="info-item">
          <span>Mobile:</span>
          <p>{userData.mobile}</p>
        </div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
export default Profile;
