import logo from '../logo.svg';
import '../App.css';
import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { Link } from 'react-router-dom';

function Users() {
    const [users, setUsers] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await axios.get('http://localhost:8081/users', {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                });
                setUsers(res.data.data);
            } catch (e) {
                console.log(e);
            }
        }
        getUsers();
    }, []);
    console.log(users);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
                <div>
                    <Link to="/" class="fs-3 text-white dropshadow text-decoration">
                        <button type="button" class="btn btn-outline-light">Access Token</button>
                    </Link>
                    <Link to="/books" class="fs-3 text-white dropshadow text-decoration">
                        <button type="button" class="btn btn-outline-light ms-3">Books</button>
                    </Link>
                    <Link to="/users" class="fs-3 text-white dropshadow text-decoration">
                        <button type="button" class="btn btn-outline-light ms-3">Users</button>
                    </Link>

                </div>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" className='text-white fs-5'>ID</th>
                            <th scope="col" className='text-white fs-5'>Username</th>
                            <th scope="col" className='text-white fs-5'>FirstName</th>
                            <th scope="col" className='text-white fs-5'>LastName</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.length > 0 ? (
                                users.map((user) => (
                                    <tr key={user.id}>
                                        <th scope="row" className='text-white fs-5'>{user.id}</th>
                                        <td className='text-white fs-6'>{user.username}</td>
                                        <td className='text-white fs-6'>{user.firstName}</td>
                                        <td className='text-white fs-6'>{user.lastName}</td>
                                    </tr>
                                ))) : (
                                <div class="text-white contani">ACCESS_TOKEN invalid</div>
                            )
                        }
                    </tbody>
                </table>
            </header>
        </div>
    );
}
export default Users;