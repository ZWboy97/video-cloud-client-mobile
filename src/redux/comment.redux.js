import axios from 'axios';
import { VCloudAPI } from '../const/host';
import { getCurrentDate } from 'myutil/util';

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
      if (comments.length >= 9) {
        comments.shift();
      }
      comments.push(
        {
          img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
          message: action.payload,
          time: getCurrentDate(),
          name: "当前用户"
        }
      );
      return {
        ...state,
        comments: comments,
      };
    default:
      return state;
  }
}

export function addComments(comment) {
  return dispatch => {
    dispatch(add_Comment(comment))
  }
}
