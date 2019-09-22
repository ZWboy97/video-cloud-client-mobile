import axios from 'axios';
import { VCloudAPI } from '../const/host';

//Action Types
const ADD_COMMENTS = 'Add_Comments';

// 初始state中的数据
const initialState = {
  comments: []
}

function add_Comment(text) {
  return {
    type: ADD_COMMENTS,
    payload: text
  }
}

export function commentsSettings(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENTS:
      console.log('state', state)
      var comments = state.comments;
      comments.push(action.payload);
      return {
        ...state,
        comments: comments,
      };
    default:
      return state;
  }
}

export function addComments(text) {
  return dispatch => {
    dispatch(add_Comment(text))
  }
}
