import './Menu.css'


const Menu = ()=> {
    return (
        <nav className="mi-menu">
            <ul>
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Productos</a>
                </li>
                <li>
                    <a href="#"><img className='img-menu' src="./img/carro-de-la-compra.png"></img></a>
                </li>
            </ul>
        </nav>
    )
}

export default Menu