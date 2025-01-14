import React from 'react';
import { Link } from 'react-router-dom'

const NavigationTopBar: React.FC = () => {

  return (
    <nav>
        <li>
            <Link to="/">Books</Link>
        </li>
        <li>
            <Link to="/about">User Profile</Link>
        </li>
    </nav>
  )
}

export default NavigationTopBar