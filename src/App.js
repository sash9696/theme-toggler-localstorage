import React from "react";
import "./App.css";
import { ThemeContext } from "./context/theme-context";
import LoginButton from "./components/Login/Login";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./components/Logout/Logout";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);

  const { theme, dark, toggle } = React.useContext(ThemeContext);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="app">
      {!isAuthenticated ? (
        <LoginButton />
      ) : (
        <>
          <h1>Theme Toggler</h1>
          <div
            className="app_header"
            onClick={toggle}
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
            }}
          >
            <h1>Context API Theme Toggler</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse quis venenatis ante, vehicula tempor massa. Proin non
              lectus id mi dictum convallis ut vitae mauris. Donec finibus lacus
              id arcu imperdiet condimentum. Proin vitae diam in eros lacinia
              feugiat id et turpis. Aliquam erat volutpat. Donec eget lectus
              finibus, consequat ipsum quis, scelerisque dolor. Nam varius
              pulvinar erat ac sollicitudin. Praesent aliquet sem sit amet nunc
              euismod euismod.
            </p>
            <div className="button_container">
              {`Toggle to ${!dark ? "Dark" : "Light"}`}
            </div>
          </div>
          <div>
            <LogoutButton />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
