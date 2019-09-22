import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd-mobile';
import WhiteSpace from 'mycomponents/whiteSpace';
import Title from 'mycomponents/title';
import LivesList from 'mycomponents/lives-list/LivesList';
import { fetchBanner, fetchRecommend, fetchLivesData } from 'myredux/repertoire.redux';
import { connect } from 'react-redux';
import { HOST } from 'myconst/host';
import './style.less';

class LivesPage extends Component {

    constructor(props) {
        super(props)
        this.state = {};
    }

    componentDidMount() {
        this.props.fetchBanner();
        this.props.fetchRecommend();
        this.props.fetchLivesData();
    }

    render() {
        return (
            <div id="repertoire">
                <div className="banner">
                    {
                        this.props.bannerData ?
                            <Carousel
                                autoplay={true}
                                infinite
                                selectedIndex={1}
                            >
                                {this.props.bannerData.map(val => (
                                    <Link
                                        key={val}
                                        to={`${HOST}/live/display/3/?channel_id=YisWTGVFGxcAIuNh`}
                                        style={{ display: 'inline-block', width: '100%' }}
                                    >
                                        <img
                                            src={val}
                                            alt="图片加载失败"
                                            className="banner-img"
                                            onLoad={() => {
                                                // fire window resize event to change height
                                                window.dispatchEvent(new Event('resize'));
                                                this.setState({ imgHeight: 'auto' });
                                            }}
                                        />
                                    </Link>
                                ))}
                            </Carousel>
                            :
                            ""
                    }
                </div>
                <WhiteSpace></WhiteSpace>

                <Title title="直播推荐"></Title>
                <div className="recommend">
                    {
                        this.props.recommendData ?
                            <div className="recommend-wrapper">
                                {
                                    this.props.recommendData.map(v => (
                                        <Link to={`${HOST}/live/display/${v.id}/?channel_id=YisWTGVFGxcAIuNh`} key={v.src} className="recommend-item">
                                            <div>
                                                <img src={v.src} alt="" />
                                            </div>
                                            <div className="item-name">{v.name}</div>
                                        </Link>
                                    ))
                                }
                            </div>
                            :
                            ""
                    }
                </div>
                <WhiteSpace></WhiteSpace>

                <Title title="正在直播"></Title>
                {
                    this.props.reSongsData ?
                        <LivesList></LivesList>
                        :
                        ""
                }


            </div>
        )
    }
}
export default connect(
    state => state.lives,
    { fetchBanner, fetchRecommend, fetchLivesData }
)(LivesPage)