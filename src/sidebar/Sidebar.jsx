import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitel"> ABOUT ME</span>
            <img className="sidebarImg" src="https://i.ibb.co/xY4Ww79/image-size-guide-fbtw-compressed-800x500.jpg" alt=" " />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, porro!</p>
          
        </div>
        <div className="sidebarItem">
          <span className="sitebarTitel">CATAGORIS</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinama</li>
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i> 
          </div>
        </div>
    </div>
  )
}
