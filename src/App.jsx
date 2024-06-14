import { OpinboxBuilder } from 'opinbox-builder'
// Import the production survey definition
import { json } from './survey/json'
// Import global CSS
import './App.css';
// Register custom expressions
import "./custom/expressions";
// Register custom components
import "./components/index"


function App() {
  const isDev = import.meta.env.DEV;
  return (
    <OpinboxBuilder dev={isDev} surveyJson={json} />
  )
}

export default App
