import React from 'react';

class LiveDescription extends React.Component {

    render() {
        return (
            <div>
                {
                    this.props.live_info ?
                        <div>
                            <div
                                className="live-image">
                                <img src={this.props.live_info.picture_url}></img>
                            </div>
                            <div className="live-infomation" >
                                <p>直播名：{this.props.live_info.name}</p>
                                <p>开始时间：{this.props.live_info.start_time}</p>
                                <p>结束时间：{this.props.live_info.end_time}</p>
                                <p>直播人数：{this.props.live_info.size}人</p>
                            </div>

                        </div>
                        :
                        <div></div>
                }
            </div>
        )
    }

}

export default LiveDescription;