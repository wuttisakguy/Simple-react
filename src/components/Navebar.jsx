import React from "react";
import { Link } from "react-router-dom";

const Navebar = () => {
    return (
        <div className="fixed top-0 left-0 w-full  list-none  flex justify-center items-center gap-5">
            <Link to='/'><li> main </li></Link>
            <Link to='/input'><li> Input </li></Link>

        </div>

    )
}
export default Navebar