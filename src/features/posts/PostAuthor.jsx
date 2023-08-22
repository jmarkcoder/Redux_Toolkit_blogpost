import { useSelector } from "react-redux"
import { selectAllUsers } from "../users/usersSlice"
import PropTypes from 'prop-types'

const PostAuthor = ({ userId }) => {
    PostAuthor.propTypes = {
        userId: PropTypes.string.isRequired
    }
    
    const users = useSelector(selectAllUsers)

    const author = users.find(user => user.id === userId)

    return <span>by {author ? author.name : 'Unknown Author'}</span>
}

export default PostAuthor
