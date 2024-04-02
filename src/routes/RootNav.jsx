import { Outlet, Link } from "react-router-dom"

export default function RootNav() {
    return (
    <>
    <div id="sidebar">
        <h1>React Router Nav Bar</h1>
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