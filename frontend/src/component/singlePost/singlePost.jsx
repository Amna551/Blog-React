import "./singlePost.css"

function SinglePost() {
    return(
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://t3.ftcdn.net/jpg/04/91/91/36/360_F_491913694_vOTBQiNE0Pvr6CpLjEs7rmIqS7yVAIe0.jpg" alt=""  className="singlePostImage"/>
                <h1 className="singlePostTitle">
                    Post title
                    <div className="editPost">
                        <i className="postIcon far fa-edit"></i>
                        <i className="postIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="postAuthor">Author:<b>Amna Saleem</b></span>
                    <span className="postDate">1 hour ago</span>
                </div>
                <p>Post Discription</p>
            </div>
        </div>
    )
}

export default SinglePost;