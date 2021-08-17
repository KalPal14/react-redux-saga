import React from 'react'
import Post from './Post'
import { connect } from 'react-redux'
function Posts({ posts }) {
   return (
      <div>
         {
            (!posts.length) ?
               <p className="text-center">Постов нет</p>
               :
               posts.map((post, i) => <Post post={post} key={post.id} />)
         }
      </div>
   )
}

const mapStatetoProps = (state) => ({
   posts: state.posts.posts
})

export default connect(mapStatetoProps)(Posts)