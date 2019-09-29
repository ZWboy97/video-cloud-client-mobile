import axios from 'axios';
import { VCloudAPI } from '../const/host';
import { getCurrentDate } from 'myutil/util';

//Action Types
const ADD_COMMENTS = 'Add_Comments';

// 初始state中的数据
const initialState = {
  comments: [
    {
      img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
      title: 'Meet hotel',
      des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
      img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
      title: 'Meet hotel',
      des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
      img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
      title: 'Meet hotel',
      des: '不是所有的汪都需要风吹日晒',
    },
  ]
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
      comments.push(
        {
          img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
          title: action.payload,
          des: getCurrentDate()
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
