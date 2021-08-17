import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost, showErr } from '../redux/actions'

class PostForm extends Component {

   constructor(props) {
      super(props)

      this.state = {
         title: ""
      }
   }

   handleSubmit = (event) => {
      event.preventDefault()

      if (!this.state.title.trim()) {
         this.props.showErr("Заголовок поста не должен быть пустым")
         return
      }

      const newPost = {
         title: this.state.title,
         id: Date.now().toString()
      }

      this.props.addPost(newPost)
      this.setState({ title: "" })
   }

   handleChange = (event) => {
      this.setState(prevState => ({
         ...prevState,
         [event.target.name]: event.target.value
      }))
   }

   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <div className="form-group">
               <label htmlFor="title" className="form-label">Заголовок поста</label>
               <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={this.state.title}
                  name="title"
                  onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-success mt-3 mb-3">Создать</button>
         </form>
      )
   }
}

const mapDispatchToProps = {
   addPost,
   showErr
}

export default connect(null, mapDispatchToProps)(PostForm)