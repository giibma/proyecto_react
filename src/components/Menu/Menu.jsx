import './Menu.css'


function Menu(props){

    const {children} = props;

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
                    <a href="#">Contacto</a>
                </li>
                <li>
                    <a href="#">{children}</a>
                </li>
                
            </ul>
        </nav>
    )
}

export default Menu