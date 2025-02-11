import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase/firebase.utils";
import "./Profile.css";

const Profile = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Redirect to Home page after signing out
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <div className="profile">
      {currentUser ? (
        <div>
          <h1>{currentUser.displayName || currentUser.email} is logged in</h1>
          <button className="sign-out-button" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <h1>You are not logged in</h1>
          <p>Please sign in from the Home page.</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
