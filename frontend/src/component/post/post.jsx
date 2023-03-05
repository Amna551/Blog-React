import "./post.css"

function Post(){
    return (
      <div className="post">
        <img
          className="postImg"
          src="https://t3.ftcdn.net/jpg/04/91/91/36/360_F_491913694_vOTBQiNE0Pvr6CpLjEs7rmIqS7yVAIe0.jpg"
          alt=""
        />
        <div className="postInfo">
          <div className="postCategories">
            <span className="postCategory">Music</span>
          </div>
          <span className="postTitle">Post Title</span>
          <hr />
          <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
          Post Description
        </p>
      </div>
    );
  }

export default Post;