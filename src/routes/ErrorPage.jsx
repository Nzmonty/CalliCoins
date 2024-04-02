//import { useState } from "react";
import { Paragraph } from "../components/Paragraph";

const ErrorPage = () => {
    return (
        <>
            <div>
                <h1>404 Error</h1>
                <p>We cannot find the content you are looking for</p>
            </div>
            <Paragraph color={`red`}> Sorry!</Paragraph>
        </>
    );
};

export default ErrorPage;