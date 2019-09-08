import React, { Component } from 'react';
import './song-list-detail.less';
import { withRouter } from 'react-router-dom';
import Title from '../../components/title';
import Header from '../../components/header/header'
import WhiteSpace from '../../components/whiteSpace';
import SongsList from '../../components/songs-list/songs-list';
import { getSongsListDetail } from '../../redux/song-list-detail.redux';
import { connect } from 'react-redux';
import { width } from 'window-size';

class SongListDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.goBack = this.goBack.bind(this)
    }
    componentDidMount() {
        this.props.getSongsListDetail(this.props.match.params.id)
    }
    goBack() {
        this.props.history.goBack()
    }


    render() {

        const blur = this.props.data ? {
            background: `url(${this.props.data.img})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',

        } : null
        return (
            <div id="songs-list-detail">

                {
                    this.props.data ?
                        <div className="songs-list-detail-wrapper">
                            <div className="header" >
                                {/* <div className="blur-bg-wrapper" >
                                    <div className="blur-bg" style={blur}>
                                    </div>
                                </div> */}
                                <div className="center">
                                    {/* <Header text="视频详情"></Header> */}
                                    <video className='video'
                                        src="https://live360bucket.oss-cn-beijing.aliyuncs.com/vrresource/output2.mp4"
                                        autoPlay
                                        controls></video>

                                    {/* <div className="pic">
                                        <img src={this.props.data.img} alt="" />
                                    </div>
                                    <div className="info">
                                        <div className="info-top">
                                            <div className="name">{this.props.data.name}</div>
                                            <div className="collect">收藏歌单</div>
                                        </div>
                                        <div className="tags">
                                            标签：
                                            {this.props.data.tags.map(v => (
                                                <span key={v}>{v}</span>
                                            ))}
                                        </div>
                                    </div> */}
                                </div>
                                {/* <div className="data">
                                    <span>收藏({this.props.data.collect})</span>
                                    <span>评论({this.props.data.comment})</span>
                                    <span>分享({this.props.data.share})</span>
                                </div> */}
                            </div>
                            <div className="introduction" ref="intro">
                                简介：{this.props.data.introduction}
                            </div>
                            <WhiteSpace></WhiteSpace>
                            <Title title="评论"></Title>
                        </div>
                        :
                        ""

                }

            </div>
        )
    }
}
export default withRouter(connect(
    state => state.songsListDetail,
    { getSongsListDetail }
)(SongListDetail));