import React from 'react';
import './style.less';
import { Tabs, PullToRefresh, TextareaItem, Button, ListView } from 'antd-mobile';
import { connect } from 'react-redux';
import { fetchLiveConfigure } from 'myredux/livedisplay.redux';
import { addComments } from 'myredux/comment.redux';
import Comments from './liveComments';
import flvjs from 'flv.js';
import DPlayer from 'react-dplayer';
import LiveDescription from './LiveDescription';
const tabs = [
    { title: '简介', sub: '1' },
    { title: '评论', sub: '2' },
];
class LiveDisplayPage extends React.Component {

    state = {
        tabIndex: 0,
        inputValue: "",
    }

    // 从地址栏读取参数 
    getUrlParam = (name) => {
        let queryString = window.location.href.split('?')[1] || '',
            reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
            result = queryString.match(reg);
        console.log(queryString)
        return result ? decodeURIComponent(result[2]) : null;

    }
    componentDidMount() {
        const channel_id = this.getUrlParam('channel_id');  // 从地址栏读取channel_id参数
        console.log('channel_id', channel_id)
        this.props.fetchLiveConfigure(channel_id);
    }

    changeTab = (tab, index) => {
        this.setState({
            tabIndex: index,
            inputValue: ""
        })
    }

    handleClick = () => {
        console.log('input：', this.state.inputValue)
        this.props.addComments(this.state.inputValue);
        this.setState({
            inputValue: ""
        })
    }

    onChange = (v) => {
        console.log(v);
        this.setState({
            inputValue: v
        })
    }

    render() {
        return (
            <div >
                {
                    this.props.live_configure ?
                        <div className="live-page">
                            <DPlayer
                                className="live-player"
                                options={{
                                    autoplay: true,
                                    live: true,
                                    hotkey: true,
                                    screenshot: true,
                                    mutex: true,
                                    volume: 0.1,
                                    video: {
                                        url: this.props.live_configure.live_room_info.pull_http_flv_url,
                                        type: "customFlv",
                                        customType: {
                                            customFlv: function (video, player) {
                                                const flvplayer = flvjs.createPlayer({
                                                    type: 'flv',
                                                    url: video.src,
                                                });
                                                flvplayer.attachMediaElement(video);
                                                flvplayer.load();
                                            },
                                        },
                                        quality: [
                                            {
                                                name: '标清',
                                                url: this.props.live_configure.live_room_info.pull_http_flv_url,
                                                type: 'customFlv',
                                            },
                                            {
                                                name: '高清',
                                                url: this.props.live_configure.live_room_info.pull_http_flv_url,
                                                type: 'customFlv',
                                            },
                                        ],
                                        defaultQuality: 1,
                                    },
                                }}
                            />
                            <div className="tabs">
                                <Tabs tabs={tabs}
                                    initialPage={0}
                                    onChange={(tab, index) => { this.changeTab(tab, index) }}
                                />
                            </div>
                            <PullToRefresh
                                className="tab-content"
                                refreshing={false}
                                damping={0}
                                style={{
                                    overflow: 'auto',
                                }}
                            >
                                {
                                    this.state.tabIndex === 0 ?
                                        <LiveDescription
                                            live_info={this.props.live_configure.live_room_info}
                                            className="desc-tab"
                                        />
                                        :
                                        <Comments
                                            comments={[]}
                                            className="comment-tab" />
                                }
                            </PullToRefresh>
                            {
                                this.state.tabIndex === 1 ?
                                    <div className="message-input">
                                        <TextareaItem
                                            ref="textArea"
                                            className="text-area"
                                            placeholder="发送消息"
                                            value={this.state.inputValue}
                                            onChange={(v) => this.onChange(v)}
                                        >
                                        </TextareaItem >
                                        <Button
                                            className="send-button"
                                            type="primary"
                                            onClick={this.handleClick}>
                                            发送</Button>
                                    </div>
                                    :
                                    <div></div>
                            }
                        </div>
                        : <div></div>
                }

            </div>
        )
    }

}

export default connect(
    state => state.livedisplay,
    { fetchLiveConfigure, addComments }
)(LiveDisplayPage);