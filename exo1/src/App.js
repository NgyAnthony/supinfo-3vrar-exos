import './App.css';
import {Profile} from "./components/Profile";
import 'antd/dist/antd.css';
import {UserList} from "./components/UserList";
import {Card, Form} from "antd";
import {css} from "@emotion/css";
import {AddUser} from "./components/AddUser";
import {useState} from "react"; // or 'antd/dist/antd.less'

function App() {
  const [users, setUsers] = useState([
    {
      'firstName': 'Anthony',
      'lastName': 'Nguyen',
      'isAdmin': false
    },
    {
      'firstName': 'Alexandre',
      'lastName': 'Zerrouki',
      'isAdmin': true
    },
    {
      'firstName': 'Jules',
      'lastName': 'Pascarel',
      'isAdmin': false
    }
  ])

  const addUser = (user) => {
    setUsers([...users, user])
  }

  const deleteUser = (user) => {
    console.log(user)
    let filteredArray = users.filter(item => item !== user)
    setUsers(filteredArray)
  }

  return (
    <div className="App">
      <div className={css`display:flex; justify-content:center`}>
        <div className={css`width: 500px; margin-top: 4em`}>
          <Card className={css`margin-bottom:2em`}>
            <h3>Ajouter un utilisateur</h3>
            <AddUser addUser={addUser}/>
          </Card>
          <Card>
            <h3>Liste des utilisateurs</h3>
            <UserList users={users} deleteUser={deleteUser}/>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
