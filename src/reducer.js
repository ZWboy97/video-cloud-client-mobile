import { combineReducers } from 'redux';
import { lives } from './redux/repertoire.redux';
import { personal } from './redux/personal.redux'
import { discovery } from './redux/discovery.redux'
import { livedisplay } from 'myredux/livedisplay.redux'; //myredux是redux目录的链接，直接跳转，在webpack中配置的
import { commentsSettings } from 'myredux/comment.redux';
const rootReducer = combineReducers({
    lives,
    personal,
    discovery,
    livedisplay,
    commentsSettings

});
export default rootReducer;