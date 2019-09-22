import axios from 'axios';
import { VCloudAPI } from '../const/host';

// Action Types
const GET_LIVE_CONFIGURE = "GET_LIVE_CONFIGURE";

// 初始state中的数据
const initialState = {
    live_configure: ""
}

//reducer, 根据action对state进行处理，返回新的state
export function livedisplay(state = initialState, action) {
    switch (action.type) {
        case GET_LIVE_CONFIGURE:
            return { ...state, live_configure: action.payload };
        default: return state;
    }
}

//actionCreator， 创建action对象
function liveConfigureAction(data) {
    return {
        payload: data,
        type: GET_LIVE_CONFIGURE
    }
}

//在组件中调用的dispatch action的函数
export function fetchLiveConfigure(channel_id) {
    return dispatch => {
        axios.get(`${VCloudAPI}/channel/info/?lid=${channel_id}`).then(res => {
            let data = res.data;
            if (data.code === 200) {
                dispatch(liveConfigureAction(data.data))
            }
        })
    }
}