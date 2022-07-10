// import React ,{useState} from 'react'
// import './App.css';
import {Navbar} from './Components/Navbar';
// import { Button, Container, InputGroup } from 'reactstrap';
// import { ThemeContext, themes } from './contexts/ThemeContext';
// import ToggleDark from './Components/ToggleDark';

// function App() {
//   const [darkMode, setDarkMode] = React.useState(true);
//   return (
//     <div className="App">
//  <Navbar/>
//  <h1 className="text-warning">Dark/Light mode</h1>
//         <InputGroup>
//           <ThemeContext.Consumer>
//             {({ changeTheme }) => (
//               <Button
//                 color="link"
//                 onClick={() => {
//                   setDarkMode(!darkMode);
//                   changeTheme(darkMode ? themes.light : themes.dark);
//                 }}
//               >
//                 <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
//                 <span className="d-lg-none d-md-block">Switch mode</span>
//               </Button>
//             )}
//           </ThemeContext.Consumer>
//         </InputGroup> 
//     </div>
//   );
// }

// export default App;
import './App.css';
import { ThemeContext, themes } from './contexts/ThemeContext';
import React ,{useState} from 'react';
import ToggleDark from './Components/ToggleDark';
import { Footer } from './Components/HomeC/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="App">
      <ThemeContext.Consumer> 
        {({ changeTheme }) => (
          <ToggleDark
            toggleDark={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
          />
        )}
      </ThemeContext.Consumer>
      <Navbar/>
<Footer/>
    </div>
  );
}

export default App;