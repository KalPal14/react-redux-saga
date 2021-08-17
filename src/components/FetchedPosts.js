import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import Post from './Post'
import { fetchPosts } from '../redux/actions'

function FetchedPosts({ posts, loading }) {
   const dispatch = useDispatch()
   //вместо функции connect
   // const posts = useSelector(state => state.posts.fetchedPosts)
   return (
      <div>
         {
            (!posts.length) ?
               <button onClick={() => dispatch(fetchPosts())} className="btn btn-primary">Загрузить</button>
               :
               posts.map((post) => <Post post={post} key={post.id} />)
         }
         {
            loading &&
            <p>Загрузка...</p>
         }
      </div>
   )
}

const mapStatetoProps = state => ({
   posts: state.posts.fetchedPosts,
   loading: state.app.loading
})

export default connect(mapStatetoProps)(FetchedPosts)