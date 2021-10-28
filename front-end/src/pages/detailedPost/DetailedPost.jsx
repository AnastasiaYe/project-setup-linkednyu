import "./detailedPost.css"
import { Button } from "../../components/Button"
import Comment from "../../components/Comment"
import ImageAvatars from "../../components/Avatar"
import { useState, useEffect } from "react"
import axios from 'axios'

export default function DetailedPost() {
    const url = "https://61798eeaaa7f340017404b69.mockapi.io/post"
    const commenturl = "https://61798eeaaa7f340017404b69.mockapi.io/comment"
    const [post, setPosts] = useState(null)
    const [comment, setComments] = useState(null)
    const [loading, setIsloading] = useState(true)
    const [loadingComment, setIsloadingComment] = useState(true)

    useEffect(() => {
        async function fetchposts() {
            try {
                await axios.get(url).then(response => {
                    setPosts(response.data[0])
                    setIsloading(false)
                });
            } catch (error) {
                console.log(error)
            }


        }
        fetchposts()
    }, [])

    useEffect(() => {
        async function fetchcomments() {
            await axios.get(commenturl).then(response => {
                setComments(response.data)
                setIsloadingComment(false)
            });

        }
        fetchcomments()
    }, [])

    return (
        <> {!loading && !loadingComment && <div className="detailedPost" >
            <div className="detailedWrapper">
                <div className="detailedPostTop">
                    <div className="detailedPostTopLeft">
                        <div className="detailedPostAvatar">
                            <ImageAvatars />
                        </div>
                    </div>
                    <div className="detailedPostTopMiddle">
                        <div className="detailedPostTopMiddleTop">
                            <div className="detailedPostClass">{post.course_name}</div>
                        </div>
                        <div className="detailedPostTopMiddleBottom">
                            <div className="detailedPostUserName">{post.first_name} {post.last_name}</div>
                            <div className="detailedPosDate">{post.date}</div>
                        </div>
                    </div>
                    <div className="detailedPostTopRight">
                        <Button className="commentButton" onClick={() => console.log('joined')}
                            buttonSize="btn--medium" buttonStyle="btn--primary--solid"
                        > Join  </Button>
                    </div>
                </div>
                <div className="detailedPostCenter">
                    <span className="detailedPostTitle">{post.title}</span>
                    <span className="detailedPostText">{post.post}</span>
                    <img className="detailedPostImg" src="https://picsum.photos/200" alt="" />
                </div>
                <div className="detailedPostBottom">
                    <span className="detailedPostCommentCounter">{comment.length} comments</span>
                </div>
                <div className="detailedPostComment">
                    {comment.map((p) => (
                        <Comment comment={p} />
                    ))}
                </div>
                <div className="detailedPostFooter">
                    <input placeholder="Comment Something..." className="detailedPostAddComment" />
                    <div className="commentButtonSection">
                        <Button className="commentButton" onClick={() => console.log('clicked')}
                            buttonSize="btn--medium" buttonStyle="btn--dark--solid"
                        > Comment  </Button>
                    </div>
                </div>
            </div>
        </div >}
        </>
    )
}
