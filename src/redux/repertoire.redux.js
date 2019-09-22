import axios from 'axios';
import { API } from "../const/host";

// Action Types
const FETCH_BANNER = "FETCH_BANNER";
const FETCH_RECOMMEND = "FETCH_RECOMMEND";
const FETCH_LIVES_LIST = "FETCH_LIVES_LIST";

// 初始state中的数据
const initialState = {
    bannerData: [],
    recommendData: [],
    reSongsData: []
};

//reducer, 根据action对state进行处理，返回新的state
export function lives(state = initialState, action) {
    switch (action.type) {
        case FETCH_BANNER:
            return { ...state, bannerData: action.payload };
        case FETCH_RECOMMEND:
            return { ...state, recommendData: action.payload };
        case FETCH_LIVES_LIST:
            return { ...state, reSongsData: action.payload };
        default:
            return state
    }
}

//actionCreator， 创建action对象
function bannerdata(data) {
    return {
        payload: data,
        type: FETCH_BANNER
    }
}
function recommendData(data) {
    return {
        payload: data,
        type: FETCH_RECOMMEND
    }
}
function livesData(data) {
    return {
        payload: data,
        type: FETCH_LIVES_LIST
    }
}

//用户调用的dispatch action的函数
//获取banner
export function fetchBanner() {
    return dispatch => {
        axios.get(`${API}/mock/banner.json`).then(res => {
            let data = res.data;
            if (data.result) {
                dispatch(bannerdata(data.data))
            }
        })
    }
}

//获取每日推荐
export function fetchRecommend() {
    return dispatch => {
        axios.get(`${API}/mock/recommend.json`).then(res => {
            let data = res.data;
            if (data.result) {
                dispatch(recommendData(data.data))
            }
        })
    }
}

//获取曲库好歌
export function fetchLivesData() {
    return dispatch => {
        axios.get(`${API}/mock/lives.json`).then(res => {
            let data = res.data;
            if (data.result) {
                dispatch(livesData(data.data))
            }
        })
    }
}