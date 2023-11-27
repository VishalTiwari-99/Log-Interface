import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <div>
        <header className='header'>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div><Link to="/" className='navbar-brand'>All Logs</Link> </div>
                <div><Link to="/filter" className='navbar-nav nav-item nav-link' style={{marginLeft: 30}}>Filter Logs</Link> </div>
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent