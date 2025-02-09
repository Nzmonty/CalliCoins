//import { useState } from "react";

import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

return (
    <div id="error-page">
    <h1>Oops!</h1>
    <p>Sorry, an unexpected error has occurred.</p>
    <p><br></br>
        <i>{error.statusText || error.message}</i>
    </p>
    </div>
);
}

// const ErrorPage = () => {
//     return (
//         <>
//             <div>
//                 <h1>404 Error</h1>
//                 <p>We cannot find the content you are looking for</p>
//             </div>
//             <Paragraph color={`red`}> Sorry!</Paragraph>
//         </>
//     );
// };

// export default ErrorPage;