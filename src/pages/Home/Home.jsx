import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase/firebase.utils";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import "./Home.css";

const Home = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="home">
      {currentUser ? (
        <div>
          <h1>
            Welcome, {currentUser.displayName || currentUser.email} to Esports
            Connect
          </h1>
        </div>
      ) : (
        <div className="auth-forms">
          <SignInForm />
          <SignUpForm />
        </div>
      )}
    </div>
  );
};

export default Home;
