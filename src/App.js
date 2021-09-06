import { Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PublicRoute";
import "rsuite/dist/styles/rsuite-default.css";
import SignIn from "./pages/SignIn";
import { ProfileProvider } from "./context/profile.context";
import { ImagesProvider } from "./context/images.context";

function App() {
  return (
    <ProfileProvider>
      <ImagesProvider>
        <Switch>
          <PublicRoute path="/signin">
            <SignIn />
          </PublicRoute>

          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </ImagesProvider>
    </ProfileProvider>
  );
}

export default App;
