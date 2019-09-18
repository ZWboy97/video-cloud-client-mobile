import React from 'react';
import './style.less';
import { connect } from 'react-redux';
import { fetchLiveConfigure } from 'myredux/livedisplay.redux';


class LiveDisplayPage extends React.Component {

    // 从地址栏读取参数
    getUrlParam = (name) => {
        let queryString = window.location.href.split('?')[1] || '',
            reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
            result = queryString.match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    }

    componentDidMount() {
        const channel_id = this.getUrlParam('channel_id');  // 从地址栏读取channel_id参数
        this.props.fetchLiveConfigure(channel_id);
    }



    render() {
        return (
            <div>
                这是直播界面
                {
                    this.props.live_configure ?
                        '有数据啦,' + JSON.stringify(this.props.live_configure) :
                        ""
                }
            </div>
        )
    }

}

export default connect(
    state => state.livedisplay,
    { fetchLiveConfigure }
)(LiveDisplayPage);