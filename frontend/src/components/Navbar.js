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
            <div>
                <Link to={'/'}>The Knot</Link>
            </div>
            {/* <Link onClick={getGoals} to={'/goals'}>All Goals</Link> */}
            
            {
                getToken() ? 
                <>
                    {user && <Link to={`/profile/${user._id}`}>Profile</Link>}
                    {/* <Link to={'/new-goal-form'}>New Goal</Link> */}
                    <button className="btn" onClick={logout}>Logout</button>
                </>

                :

                <>
                    <div>
                        <span className="nav-link">
                            <Link to={'/signup'}>Signup</Link>
                        </span>
                        <span className="nav-link">
                            <Link to={'/login'}>Login</Link>
                        </span>
                    </div>
                </>
            }


        </nav>
    )
}

export default Navbar;