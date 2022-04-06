import { useEffect } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({ postState }) => {
  return { postState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(LoadPosts())
  }
}

const Posts = (props) => {
  useEffect(() => {
    props.fetchPosts()
  }, [])

  return (
    <div>
      <h2>Travel Blog</h2>
      {props.postState.posts.map((post) => {
        ;<div key={post.id}>
          <h3>{post.name}</h3>
          <img src={post.image} alt={post.name} />
          <p>{post.decsription}</p>
        </div>
      })}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
