import React from 'react'
import FetchedPosts from './components/FetchedPosts';
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import ErrComponent from './components/ErrComponent';

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
        <div className="row">
          <div className="col">
            <h2>Синхронные посты</h2>
            <Posts />
          </div>
          <div className="col">
            <h2>Асинхронные посты</h2>
            <FetchedPosts />
          </div>
        </div>
        <ErrComponent />
      </div>
    </div>
  );
}

export default App;
