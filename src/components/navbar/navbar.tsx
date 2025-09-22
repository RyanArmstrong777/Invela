import React from 'react';
import './navbar.css';
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
    return (
        <div id="navbar-container" className="glass">
            <h3>Invela</h3>
            <button className="glass">
                <Menu />
            </button>
        </div>
    );
};

export default Navbar;
