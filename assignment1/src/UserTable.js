import React from 'react'
import './styles/userTable.css'

const UserTable = ({ users }) => {
    console.log(users)
    return (
        <div className='userTable'>
            <h2>UserTable</h2>
            <table border={'1px'}>
                <tr>
                    <th>
                        name
                    </th>
                    <th>
                        email
                    </th>
                    <th>
                        age
                    </th>
                </tr>
                {users.map((item) => 
                    <tr key={item.id}>
                        <td>
                            {item.name}
                        </td>
                        <td>
                            {item.email}
                        </td>
                        <td>
                            {item.age}
                        </td>
                    </tr>
                )}
            </table>
        </div>
    )
}

export default UserTable