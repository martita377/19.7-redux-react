import { connect } from 'react-redux';
import Comment from './Comment';
import { thumbUpComment, thumbDownComment, removeComment } from './actions';


const mapDispatchToProps = dispatch => ({
  votePlus: (id) => dispatch(thumbUpComment(id)),
  voteMinus: (id) => dispatch(thumbDownComment(id)),
  deleteComment: (id) => dispatch(removeComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);