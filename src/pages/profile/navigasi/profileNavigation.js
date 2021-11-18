import Link from 'next/link';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const ProfileNavigation = () => {
    return(
        <div>
            {/* <Link href="/profile-dashboard">
                <a className="eachLi">Home</a>
            </Link>
            <Link href="/profile-dashboard-details-order">
                <a className="eachLi">About Us</a>
            </Link>
            <Link href="/profile-dashboard-payment">
                <a className="eachLi">Product</a>
            </Link>
            <Link href="/profile-dashboard-review">
                <a className="eachLi">How To Buy</a>
            </Link> */}
            
            <Router>
                <Switch>
                    <Route path="/profile/pages/profile-dashboard">
                        <h1>About</h1>
                    </Route>
                    <Route path="/profile/pages/profile-dashboard-details-order">
                        <h1>Blog</h1>
                    </Route>
                    <Route path="/profile/pages/profile-dashboard-payment">
                        <h1>Home</h1>
                    </Route>
                    <Route path="/profile/pages/profile-dashboard-review">
                        <h1>Home</h1>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
    
}

export default ProfileNavigation
