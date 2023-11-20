import React from 'react'
import './styles/userList.css'

const UserList = (prop) => {
  return (
    <div className='userList'>
        <h2>UserList</h2>
        <ul>
            {
                prop.users.map((item)=>
                    <li key={item.id}>
                        <div>{item.name}</div>
                        <div>{item.email}</div>
                        <div>{item.age}</div>
                    </li>
                )
            }
        </ul>
    </div>
  )
}

export default UserList