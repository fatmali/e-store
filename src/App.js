import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import "./App.css";

function App(props) {
  const { setCurrentUser } = props;
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      }
      setCurrentUser(userAuth);
    });
    return () => unsubscribe();
  }, [setCurrentUser]);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          path="/signin"
          component={() =>
            props.currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
