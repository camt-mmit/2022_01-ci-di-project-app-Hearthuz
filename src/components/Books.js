import logo from '../logo.svg';
import '../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Books() {
    const [books, setBooks] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const getBooks = async () => {
            try {
                const res = await axios.get('http://localhost:8082/books', {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                });
                setBooks(res.data)
            } catch (e) {
                console.log(e);
            }
        }
        getBooks();
    }, [token]);
    console.log(books);

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
                            <th scope="col" className='text-white fs-5'>ISBN</th>
                            <th scope="col" className='text-white fs-5'>Title</th>
                            <th scope="col" className='text-white fs-5'>Author</th>
                            <th scope="col" className='text-white fs-5'>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.length > 0 ? (
                                books.map((book) => (
                                    <tr key={book.id}>
                                        <th scope="row" className='text-white fs-5'>{book.isbn}</th>
                                        <td className='text-white fs-6'>{book.title}</td>
                                        <td className='text-white fs-6'>{book.author}</td>
                                        <td className='text-white fs-6'>{book.price}</td>
                                    </tr>
                                ))) : (
                                <div class="text-white">ACCESS_TOKEN invalid</div>
                            )
                        }
                    </tbody>
                </table>
            </header>
        </div>
    );

}

export default Books