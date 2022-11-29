
import './App.css';
import Intro from './components/intro';
import About from './components/About/About';
import ProductList from './components/productList/productList';
import Contact from './components/contact.js/contact';
import Toggle from './components/toggle/toggle';
import { useContext } from 'react';
import { ThemeContext } from './context';

function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style ={{backgroundColor : darkMode ? "#222" : "white", color: darkMode && "white" }}>

      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
