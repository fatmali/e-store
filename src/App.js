import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

function App(props) {
  const [currentUser, setCurrentUser] = React.useState(null);
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({id:snapShot.id, ...snapShot.data()});
        });
      }
      setCurrentUser(userAuth);
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="App">
      <Header currentUser={currentUser}/>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
