import { Link } from "react-router-dom";

const Header = () => {
    return (

        <div className="container_page">

            <div className="header">
                <div className="logo">
                <Link to ="/react-portfolio"> <i className="fab fa-yammer"></i></Link>
                    </div>
                <div className="menu_list">
                    <ul>
                        <li><Link to ="/projects">Projects</Link></li>
                        <li><Link to ="/about">About</Link></li>
                        <li><Link to ="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
          
        </div>

    )
}
export default Header;