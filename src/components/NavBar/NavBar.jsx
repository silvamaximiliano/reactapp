import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <header>
            <h1>Marolio online </h1>
            <nav>
                <ul>
                    <li>lacteos</li>
                    <li>bebidas</li>
                    <li>almacen</li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default NavBar