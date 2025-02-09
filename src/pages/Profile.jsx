import React from "react";
import "./Profile.css"; // Create this file for styling

const Profile = () => {
  return (
    <div className="profile">
      <h1>Profile</h1>
      <p>Username: Player123</p>
      <p>Wallet Balance: $50</p>
      <p>Tournaments Played: 10</p>
      <p>Total Winnings: $200</p>
    </div>
  );
};

export default Profile;
