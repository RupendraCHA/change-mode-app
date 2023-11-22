import "./index.css"

const UserProfile = props => {
    const {userDetails, onDeleteUser} = props 
    const {imageUrl, role, name, uniqueNo} = userDetails 
    
    const onDelete = () => {
        onDeleteUser(uniqueNo)
    }

    return (
        <li className="each-user-container">
            <div>
                <img src={imageUrl} alt={name} className="user-image" />
            </div>
            <div>
                <h1 className="name">{name}</h1>
                <p className="job">{role}</p>
            </div>
            <button className="delete-button" onClick={onDelete}>
                <img className="delete-img" src="https://assets.ccbp.in/frontend/react-js/cross-img.png" alt="cross" />
            </button>
        </li>
    )
}

export default UserProfile