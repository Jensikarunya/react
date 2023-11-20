import logo from './logo.svg';
import './App.css';
import {users} from './data'
import UserList from './UserList'
import UserTable from './UserTable'


function App() {
  return (
    <div className="App">
      <UserList users={users}/>
      <UserTable users={users}/>
    </div>
  );
}

export default App;
