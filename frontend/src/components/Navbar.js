import { Link } from "react-router-dom"
import { useContext } from "react"
import { LoadingContext } from "../context/loading.context"
import { AuthContext } from "../context/auth.context"

const Navbar = () => {

    const getToken = () => {
        return localStorage.getItem("authToken")
    }

    const { user, getGoals } = useContext(LoadingContext)

    const { logout } = useContext(AuthContext)

    return (
        <nav className="navbar">

            <Link to={'/'}>Home</Link>
            <Link onClick={getGoals} to={'/goals'}>All Goals</Link>
            
            {
                getToken() ? 
                <>
                    {user && <Link to={`/profile/${user._id}`}>Profile</Link>}
                    <Link to={'/new-post'}>New Post</Link>
                    <button className="btn" onClick={logout}>Logout</button>
                </>

                :

                <>
                    <Link to={'/signup'}>Signup</Link>
                    <Link to={'/login'}>Login</Link>
                </>
            }


        </nav>
    )
}

export default Navbar;