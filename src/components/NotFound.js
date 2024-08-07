import React from "react";
import { Link } from 'react-router-dom';


const NotFound = () => {
    return(
    < div className="not-found">
        <h1>404 - page Not Found </h1>
       <p>The page you are looking for does not exist</p>
       <Link to="/">Go back to home</Link>
    </div>


    );

}

export default NotFound;