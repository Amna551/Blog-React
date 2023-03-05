import "./setting.css"

function Setting() {
    return(
        <div className="setting">
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="updateTitle">Update your Account</span>
                    <span className="deleteTitle">Delete your Account</span>
                </div>
                <form className="settingForm">
                    <label>Profile Picture</label>
                    <div className="profilePic">
                        <img src="https://t3.ftcdn.net/jpg/04/91/91/36/360_F_491913694_vOTBQiNE0Pvr6CpLjEs7rmIqS7yVAIe0.jpg" alt="" />
                        <label htmlFor="fileInput">
                            <i className="profileIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} className="profileInput"/>
                    </div>
                    <label>UserName</label>
                    <input type="text" placeholder="Amna" />
                    <label>Email</label>
                    <input type="email" placeholder="amna@gmail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="submit">Update</button>
                </form>
            </div>
        </div>
    )
}

export default Setting;