import UserProfile from "./Components/UsersList/index"
import {Component} from 'react'
import './App.css';

const initialUsersDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {searchInput: "", userDetailsList: initialUsersDetailsList}
  onChangeInput = (event) => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteUser = (uniqueNo) => {
    const {userDetailsList} = this.state 
    const searchedUsersList = userDetailsList.filter(eachUser => (
      eachUser.uniqueNo !== uniqueNo 
    ))
    this.setState({userDetailsList: searchedUsersList})
  }

  render(){
    const {searchInput, userDetailsList} = this.state
    const filteredUsersList = userDetailsList.filter(eachUser => (
        eachUser.name.includes(searchInput)
    ))
    return (
      <div className="users-list-container">
        <h1 className="users-list-heading">Users List</h1>
        <input type="search" onChange={this.onChangeInput} />
        <ul className="users-list">
          {filteredUsersList.map(eachUser => (
            <UserProfile onDeleteUser={this.onDeleteUser} userDetails={eachUser} key={eachUser.uniqueNo} />
          ))}
        </ul>
      </div>
    )
  }
}

export default App;
