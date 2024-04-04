import { Outlet, Link } from "react-router-dom"
import '../styles/NavStyle.css'

export default function RootNav() {
    return (
    <>
    <div class= "topnav">
        <h2>Nate's GameHub</h2>
        <nav>
        <ul>
        <li>
            <Link to="home">Home</Link>
            </li>
            <li>
            <Link to="about">About</Link>
            </li>
            <li>
            <Link to="game">Game</Link>
            </li>
        </ul>
        </nav>
    </div>
    <div>
        <Outlet />
    </div>
    </>
);
}