/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios';

const url = 'https://api.github.com/users';

const App = () => {

  const [users, setUsers] = useState([])

 const getUsers = async () => {
  const response = await fetch(url);
  const users = await response.json();
  // console.log(users)
  setUsers(users)
 }

  useEffect(()=> {
    getUsers()
  }, [])

  return (
    <div className='container'>
      <h3>Github Users</h3>
      <ul className='users'>
        {
          users.map((user) => {
            const {id, login, avatar_url, html_url} = user
            return <li key={id}>
            <img src={avatar_url} alt={login}/>
            <div>
              <h4>{login}</h4>
              <a href={html_url}>Profile</a>
            </div>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default App
