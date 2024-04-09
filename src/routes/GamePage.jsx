//import { useState } from "react";
//import { Paragraph } from "./components/Paragraph";
import { Link } from "react-router-dom"
import '../styles/PageStyle.css'

const GamePage = () => {
    return (
        <>
            <div className ="certainPage">
                <h1>Game Page</h1>
                <p>This is the game page content<br></br><br></br>
                Our curated collection of games spans various genres, ensuring that there's something for everyone. From the depths of puzzle-solving labyrinths to the peaks of strategy mountains, from the thrill of adventure to the calm of casual games, our library is both diverse and dynamic. Discover your next favorite game with us today!<br></br><br></br>
                Browse Our Games!</p>
                <ul className="gamesList">
                    <li>
                    <Link to="rps">ROCK PAPER SCISSORS</Link>
                    </li>
                    <li>
                    <Link to="ttt">TIC TAC TOE</Link>
                    </li>
                </ul>
            </div>
            <div>
                <p className = "closertxt">Ready to dive in? Each game is just a click away. Discover your next adventure, challenge, or a moment of relaxation with us. Happy gaming!<br></br>-ChatGPT</p>
            </div>
        </>
    );
};

export default GamePage;