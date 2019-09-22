import React from 'react';
import './style.less';
import FlvPlayer from 'mycomponents/FlvVideoPlayer/FlvPlayer';
import { Tabs } from 'antd-mobile';
import { connect } from 'react-redux';
import { fetchLiveConfigure } from 'myredux/livedisplay.redux';
import Comments from './liveComments';

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

                            <FlvPlayer
                                className="video-player"
                                type="flv"
                                width="100%"
                                height=""
                                url={this.props.live_configure.live_room_info.pull_http_flv_url}
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