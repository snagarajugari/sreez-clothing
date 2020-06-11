import React, { Component, Suspense, lazy } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header/header.component";
import {
  auth,
  createUserProfileDocument,
} from "./components/firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component")
);
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <ErrorBoundary>
          <Header />
          <Switch>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route
                exact
                path="/sign-in"
                render={() =>
                  this.props.currentUser ? (
                    <Redirect to="/" />
                  ) : (
                    <SignInAndSignUpPage />
                  )
                }
              />
              <Route exact path="/checkout" component={CheckoutPage} />
            </Suspense>
          </Switch>
        </ErrorBoundary>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
