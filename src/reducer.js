import { combineReducers } from 'redux';
import { lives } from './redux/repertoire.redux';
import { personal } from './redux/personal.redux'
import { discovery } from './redux/discovery.redux'
const rootReducer = combineReducers({
    lives,
    personal,
    discovery
});
export default rootReducer;