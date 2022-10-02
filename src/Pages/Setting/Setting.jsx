import Sidebar from '../../component/sidebar/Sidebar';
import './setting.css';

export default function Setting() {
  return (
    <div className='setting'>
        <div className="settingWerpper">
          <div className="settingTitle">
            <span className="settingUpdateTitle">Update Your Account</span>
            <span className="settingDeleteTitle">Delete Account</span>
          </div>
          <form className="settingForm">
            <label>Profile Picture</label>
            <div className="settingPP">
              <img src="https://i.ibb.co/YWPvR8D/pexels-luis-del-r-o-15286-1.jpg" alt="" />
              <label htmlFor="fileInput">
              <i className="settingPPIcon fa-regular fa-circle-user"></i>
              </label>
              <input type="file" name="" id="fileInput" style={{display:"none"}} />
            </div>
              <label >Username</label>
              <input type="text" placeholder='Istu' />
              <label >Email</label>
              <input type="text" placeholder='istu@gmail.com' />
              <label >Password</label>
              <input type="password" placeholder='*****' />
              <button className="settingSubmit">Update</button>
          </form>
        </div>
        <Sidebar/>
    </div>
  )
}
