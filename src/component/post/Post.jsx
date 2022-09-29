import "./post.css"

export default function post() {
  return (
    <div className="post">
       <img src="https://i.ibb.co/RyMNjSV/pexels-tiana-614503.jpg" alt="" className="postImg" />
    
     <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Life</span>
            <span className="postCat">Music</span>
        </div>
        <span className="postTitle">
            Lorem ipsum dolor sit amet.
        </span>
        <hr />
        <span className="postDate">
            1 hour ago
        </span>
    </div>
    <p className="postdesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla voluptates iusto ratione nostrum temporibus praesentium amet fugiat nemo suscipit minus recusandae soluta sequi blanditiis cumque dolores quas, obcaecati voluptatibus corporis.lorem24 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aspernatur iure asperiores incidunt maiores? Molestias impedit nulla optio aperiam perferendis doloremque tempora. Nesciunt voluptates, nemo et atque laudantium animi adipisci.</p>
    </div>
  )
}
