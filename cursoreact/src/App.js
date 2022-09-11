// import logo from './logo.svg';
import './App.css';

import FirstComponent from './components/FirstComponent';
import Hooks from './components/Hooks';
import Images from './components/Images';
import List from './components/List';
import RenderCond from './components/RenderCond';
import SecondComponent from './components/SecondComponent';

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <FirstComponent />
      <SecondComponent />
      <Images />
      <Hooks />
      <List />
      <RenderCond x={10} y={15}/>
    </div>
  );
}

export default App;
