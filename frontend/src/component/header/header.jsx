import "./header.css"

function Header(){
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleTop">WELCOME TO OUR</span>
                <span className="headerTitleBottom">BLOG</span>
            </div>
            <img className="headerimage" src="https://t3.ftcdn.net/jpg/04/91/91/36/360_F_491913694_vOTBQiNE0Pvr6CpLjEs7rmIqS7yVAIe0.jpg" alt="headerpic" />
        </div>
    )
}

export default Header;



