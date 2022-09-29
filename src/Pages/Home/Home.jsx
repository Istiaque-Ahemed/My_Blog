import Header from "../../component/header/Header"
import Posts from "../../component/posts/Posts"
import Sidebar from "../../component/sidebar/Sidebar"
import "./home.css"

export default function Home() {
  return (
    <>
    <Header/>
    <div className="Home">
       <Posts/>
        <Sidebar/>
    </div>
    </>
  )
}
