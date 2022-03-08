import Navigation from './navigation/Navigation.jsx'
import { Provider } from 'react-redux';

import './App.css';
import store from './store/store.js';


function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <Navigation />
      </Provider>
    </div>
  );
}

export default App;



