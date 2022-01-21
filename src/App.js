import logo from './logo.svg';
import './App.css';
import ListUsers from './Components/ListUsers';
import { Route, Switch } from 'react-router-dom';
import User from './Components/User';

function App() {
  return (
    <div className="App">
        {/* <ListUsers/> */}
        <Switch>
          <Route exact path="/" component={ListUsers}/>
          <Route path="/users/:id" render={(props)=><User {...props}/>}/>
        </Switch>
    </div>
  );
}

export default App;
