import * as React from 'react';
import './style.css';

export default function App() {
  const [darkTheme, setDarkTheme] = React.useState(true)

  React.useEffect(() => {
    console.log(darkTheme)
  })
  function toggleTheme() {
    setDarkTheme(prevTheme => !prevTheme);
    console.log(darkTheme)
  }
  return (
    <div>
      <button onClick={toggleTheme}>Toogle Theme</button>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
