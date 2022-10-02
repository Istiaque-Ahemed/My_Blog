import "./write.css"

export default function Write() {
  return (
    <div className='write'>
      <img src="https://i.ibb.co/YWPvR8D/pexels-luis-del-r-o-15286-1.jpg" alt="" className="writeImg" />
      <form className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" name="" id="fileInput" style={{display:"none"}} />
            <input type="text" name="" placeholder="Title" className="writeInput" autoFocus={true} />
          </div>
          <div className="writeFormGroup">
              <textarea placeholder="Tell your story......" type="text" className="writeInput writeText">

              </textarea>
          </div>
          <button className="writeSubmit"> Publice</button>
        </form>
    </div>
  )
}
