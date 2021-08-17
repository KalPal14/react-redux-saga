import React from 'react'
import { connect } from 'react-redux'

function ErrComponent({ err }) {

   return (
      <>
         {
            err &&
            <div className="alert alert-danger mt-3" role="alert">
               {err}
            </div>
         }
      </>
   )
}

const mapStateToProps = state => ({
   err: state.app.err
})

export default connect(mapStateToProps)(ErrComponent)