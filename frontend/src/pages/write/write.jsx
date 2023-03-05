import "./write.css"

function Write() {
    return(
        <div className="write">
            <img className ="writeImage" src="https://t3.ftcdn.net/jpg/04/91/91/36/360_F_491913694_vOTBQiNE0Pvr6CpLjEs7rmIqS7yVAIe0.jpg" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <input type="file" id="fileInput"/>
                    <input type="text" placeholder="Title" className="writeInput"/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Enter Description here" type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}

export default Write;