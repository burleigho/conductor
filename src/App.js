import React, {useState} from 'react';
//import logo from './logo.svg';
//import Header from './Header';
//import Resources from './Resources'
import SideBar from './components/SideBar'
import Header from'./components/Header';
import Footer from'./components/Footer';
import './styles/main.css';
import MainContentContainer from './components/MainContentContainer';
import ThemeContext from './components/ThemeContext';
import useOutsideClick from './components/useOutsideClick';

const items = [
  { 
    id: 1,
    label: 'Virtual Machine Operations',
    sub: [
      {
        label: 'Create Virtual Machine',
        url: 'CreateVM',
        id: 1,
        fields: [
          'servername',
          'ipaddress',
          'cost',
          'OS',
          'expires'
        ]
      },
      {
        label: 'Delete Virtual Machine',
        url: 'DeleteVM',
        id: 2,
        fields: [
          'servername2',
          'ip address2',
          'cost2'
        ]
      }
    ]
  }, {
    id: 2,
    label: 'Network Operations',
    sub: [{
        label: 'Create Network',
        url: 'CreateVM',
        id: 3,
        fields: [
          'servername',
          'ipaddress',
          'cost',
          'OS',
          'expires'
        ]
      },
      {
        label: 'Delete Virtual Machine',
        url: 'DeleteVM',
        id: 4,
        fields: [
          'servername2',
          'ip address2',
          'cost2'
        ]
      }
    ]
  }
]

function App() {
  const [show, setShow] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const setting = show ? "main-backdrop" : "main-backdrop.open";

  const ref = React.useRef();
  useOutsideClick(ref, () => setShow(!show));

  return (
    <ThemeContext.Provider value={{ state: darkMode, setState: setDarkMode }}>
      <div className={darkMode ? "App-dark" : "App"}>
        <div className={setting}></div>
        <Header show={show} setShow={setShow} />
        {show && (<SideBar ref={ref} items={items} show={show} setShow={setShow} />)}
        <MainContentContainer />
        <Footer />   
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
