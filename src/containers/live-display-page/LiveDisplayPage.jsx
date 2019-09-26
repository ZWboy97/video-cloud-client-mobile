import React from 'react';
import './style.less';
import FlvPlayer from 'mycomponents/FlvVideoPlayer/FlvPlayer';
import { Tabs } from 'antd-mobile';
import { connect } from 'react-redux';
import { fetchLiveConfigure } from 'myredux/livedisplay.redux';
import Comments from './liveComments';
import flvjs from 'flv.js';
import DPlayer from 'react-dplayer';


const tabs = [
    { title: '简介', sub: '1' },
    { title: '评论', sub: '2' },
];
class LiveDisplayPage extends React.Component {

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
    componentWillUnmount() {
    }
    render() {
        console.log(this.props.live_configure)
        return (
            <div>
                {
                    this.props.live_configure ?

                        <div>

                            <DPlayer
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
                                        pic: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
                                    },
                                }}
                            />
                            <div>
                                <Tabs tabs={tabs}
                                    initialPage={0}
                                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                                        <p>{this.props.live_configure.live_room_info.name}</p>

                                    </div>
                                    <div>
                                        <Comments />
                                    </div>

                                </Tabs>

                            </div>
                        </div>

                        : ""
                }

            </div>
        )
    }

}

export default connect(
    state => state.livedisplay,
    { fetchLiveConfigure }
)(LiveDisplayPage);