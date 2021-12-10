import { Route,Switch,Link } from 'react-router-dom';
import { Sidebar } from './components';
import './styles/utilities.css'
import "@fontsource/nunito"

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
      <Sidebar/>
      </div>
     
    </div>
  );
}

export default App;
