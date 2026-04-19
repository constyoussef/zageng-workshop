import { useState } from "react";

export const Header = () => {
  const [login, setLogin] = useState(false);
  return (
    <header>
      <h1>Logo</h1>
      <nav>
        <a href="">Home</a>
        <a href="">Blog</a>
        <a href="">Help</a>
        <a href="">About</a>
      </nav>

      {login ? (
        <h2>You're loggedin</h2>
      ) : (
        <div>
          <button onClick={() => setLogin(true)}>Sign In</button>
          <button>Sign Up</button>
        </div>
      )}
    </header>
  );
};
