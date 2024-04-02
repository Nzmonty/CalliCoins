//import { useState } from "react";
import { Paragraph } from "../components/Paragraph";

const HomePage = () => {
    return (
        <>
            <div>
                <h1>Home Page</h1>
                <p>This is the home page content</p>
            </div>
            <Paragraph color={`red`}> Some text here</Paragraph>
        </>
    );
};

export default HomePage;