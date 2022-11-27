import { useLocation } from "react-router-dom";
import "./error.css";

// processes the 404 error page
export default function PageNotFound404() {
    // store the location path to unknown requested page to urlLocator
    // import and utilized the useLocation component and function
    let urlLocator = useLocation();
    console.log(urlLocator);
    return (
    <section className='main-wrapper'>
        <div className="page-not-found">
            <h1>Error 404: The page at {urlLocator.pathname} can't be found.</h1>
        </div>
    </section>
    );
}