import axios from 'axios';
import { VCloudAPI } from '../const/host';

//Action Types
const ADD_COMMENTS = 'Add_Comments';
const ADD_TUDOS = 'Add_Tudos';;
const DELETE_COMMENTS = 'Delete_Comments';

const comments = []

function add_Comment(text) {
  return {
    type: ADD_COMMENTS,
    text
  }
}
function add_Tudos(index) {
  return {
    type: ADD_TUDOS,
    index
  }
}
function delete_Comment(index) {
  return {
    type: DELETE_COMMENTS,
    index
  }
}


export function commentsSettings(state = comments, action) {
  switch (action.type) {
    case ADD_COMMENTS:
      localStorage.setItem('comments', JSON.stringify([
        ...state, {
          text: action.text,
        }
      ]));
      return [
        ...state, {
          text: action.text,
        }
      ];

    case DELETE_COMMENTS:
      localStorage.setItem('comments', JSON.stringify([
        ...state.slice(0, action.index),
        ...state.slice(parseInt(action.index) + 1)
      ]));
      return [
        ...state.slice(0, action.index),
        ...state.slice(parseInt(action.index) + 1)
      ];
    default:
      return [
        ...state
      ];
  }
}

export function addComments(text) {
  return dispatch => {
    dispatch(add_Comment(text))
  }
}
export function delComments(index) {
  return dispatch => {
    dispatch(delete_Comment(index))
  }
}
