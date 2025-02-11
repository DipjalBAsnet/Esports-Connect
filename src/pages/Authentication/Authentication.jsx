import { useEffect, useState } from "react";
import { auth } from "../../utils/firebase/firebase.utils";
import { onAuthStateChanged, signOut } from "firebase/auth";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import "./authentication.scss";

const Authentication = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  if (currentUser) {
    return (
      <div className="authentication-container">
        <h2>{currentUser.displayName || currentUser.email} is logged in</h2>
        <button className="sign-out-button" onClick={() => signOut(auth)}>
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
