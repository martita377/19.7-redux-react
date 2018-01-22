import { connect } from "react-redux";
import CommentsForm from "./CommentsForm";
import { addComment } from "./actions";


const mapDispatchToProps = (dispatch) => ({
  text: (comment) => dispatch(addComment(comment))
});

export default connect(null, mapDispatchToProps)(CommentsForm);