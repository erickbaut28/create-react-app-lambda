import React, {useState,useEffect} from "react"
import axios from "axios"

const Post = ({match}) => {
    const [post,setPost] = useState([])

    useEffect(() => {
        // setPost(match.params.user_id)
        const id = match.params.user_id
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then((res) => {
            setPost(res.data)
        })
    },[])

    return (
        <div>
            {
                post.map((p,i) => (
                    <div className="card" key={i}>
                      <div className="card-content grey-text text-darken-3">
                       <span className="card-title">Post: {p.title}</span>
                      </div>
                    </div>
                  ))
            }
        </div>
    )
}

export default Post