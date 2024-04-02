//import { useState } from "react";
import { Paragraph } from "../components/Paragraph";

const GamePage = () => {
    return (
        <>
            <div>
                <h1>Game Page</h1>
                <p>This is the Game page content</p>
            </div>
            <Paragraph color={`red`}> So many games!</Paragraph>
        </>
    );
};

export default GamePage;