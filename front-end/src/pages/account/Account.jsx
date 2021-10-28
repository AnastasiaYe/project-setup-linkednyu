// import { Button } from "../../components/Button"
//import Button from "@mui/material/Button"
import "./account.css"
// import { Link } from "react-router-dom"

export default function Account({ setloggedIn }) {
    return (
        <>
            <div className="accountPage">
                <div className="accountHeader">
                    <h1 className="accountName">Albert Smith</h1>
                </div>
                <div className="accountTop">
                    <div className="accountImage">
                        <img className="profilePicture" alt="" src="https://picsum.photos/200"></img>
                    </div>
                    <div className="accountBio">
                        <h2>Bio</h2>
                        <span>Hi! I'm a typical NYU student taking classes and having a great time yay.</span>
                    </div>
                </div>
                <div className="accountBottom">
                    <div className="userClasses">
                        <div className="contentTitle">
                            <h2>My Classes</h2>
                        </div>
                        <div className="contentList">
                            <span>Class 1</span>

                            <span>Class 2</span>
                            <span>Class 3</span>
                        </div>
                    </div>
                    <div className="userClasses">
                        <div className="contentTitle">
                            <h2>Recent Posts</h2>
                        </div>
                        <div className="contentList">
                            <span>Post 1</span>

                            <span>Post 2</span>
                            <span>Post 3</span>
                        </div>
                    </div>
                    {/* <div className="logoutButton">
                        <Link to="/">
                            <Button onClick={() => {
                                setloggedIn(false)
                            }}
                                buttonSize="btn--large"
                            > Logout  </Button>
                        </Link>
                    </div> */}
                </div>

            </div>
        </>
    )
}