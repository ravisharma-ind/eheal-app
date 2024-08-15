import logo from '../assets/logo.png';

export default function Nav(){

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="e-heal India Logo"></img>
            </div>
            <nav>
                <a href="#"><i className="fas fa-bell icon-notification"></i></a>
                <a href="#"><b>Blogs</b></a>
                <a href="#">Register</a>
                <a href="#">Login</a>
            </nav>
        </header>
    )
}