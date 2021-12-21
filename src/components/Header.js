import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { DataContext } from "./DataProvider";

export default function Header(props) {

    const [menu, setMenu] = useState(false);
    const value = useContext(DataContext);
    const [cart] = value.cart;

    const toggleMenu = () => {
        setMenu(!menu);
    }

    const styles = {

        largeIcon: {
            width: 28,
            height: 28
        },

        styleMenu: {
            top: menu ? 0 : "-100%",
            backgroundColor: "#2b6777"
        }
    };

  
    return (
        <header>
            <div className="logo">
                <h1><Link to="/">Online Shopping</Link></h1>
            </div>

            

            <ul style={styles.styleMenu}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Contact</Link></li>
                <li onClick={toggleMenu}>
                    <img src="cross.png" alt="close-menu" width="30" className="menu" />
                </li>
            </ul>

            <div className="cart-icon">
                <span>{cart.length}</span>
                <Link to="/cart">
                    <ShoppingCartIcon style={styles.largeIcon} className="menu"></ShoppingCartIcon>
                </Link>
            </div>

            <div className="menu" onClick={toggleMenu}>
                <img src="menu.svg" alt="menu" width="30" />
            </div>

        </header>
    )
}
