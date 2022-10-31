import * as React from 'react';
import './style.css';
import ThemeBox from './ThemeBox';

export default function App() {
  const [darkTheme, setDarkTheme] = React.useState(true)
  export const ThemeContest = React.createContext()
  React.useEffect(() => {
    console.log(darkTheme)
  },[])
  function toggleTheme() {
    setDarkTheme(prevTheme => !prevTheme);
    console.log(darkTheme)
  }
  return (
    <div>
      <button onClick={toggleTheme}>Toogle Theme</button>
      <p>Start editing to see some magic happen :)</p>
      <ThemeBox />
    </div>
  );
}
