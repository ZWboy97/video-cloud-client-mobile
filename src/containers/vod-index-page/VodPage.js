import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd-mobile';
import Title from 'mycomponents/title';
import WhiteSpace from 'mycomponents/whiteSpace';
import { getDiscoveryData } from 'myredux/discovery.redux';
import { connect } from 'react-redux';
import { HOST } from 'myconst/host';
import './style.less';

class Discover extends Component {

    constructor(props) {
        super(props)
        this.state = {
        };
    }

    componentDidMount() {
        this.props.getDiscoveryData();
    }

    render() {
        return (
            <div id="vod-index">
                <div className="vod-wrapper">
                    <Link to="/search" className="search-route">
                        <div className="search-inner">
                            <Icon type="search" size="sm" />
                            <div>输入关键字</div>
                        </div>
                    </Link>
                    <Title title="热门推荐" />
                    <div className="vod-list">
                        {
                            this.props.data ?
                                this.props.data.style.map(v => (
                                    <Link
                                        to={`${HOST}/vod-display/34`}
                                        className="style-item" key={v.id}>
                                        <div className="cover">
                                            <img src={v.cover} alt="图片丢失了！呜呜呜" />
                                        </div>
                                        <div className="title">
                                            {v.name}
                                        </div>
                                    </Link>
                                ))
                                :
                                ""
                        }
                    </div>
                    <WhiteSpace></WhiteSpace>
                    <Title title="热门" />
                    <div className="vod-list">
                        {
                            this.props.data ?
                                this.props.data.style.map(v => (
                                    <Link
                                        to={`${HOST}/vod-display/34`}
                                        className="style-item" key={v.id}>
                                        <div className="cover">
                                            <img src={v.cover} alt="图片丢失了！呜呜呜" />
                                        </div>
                                        <div className="title">
                                            {v.name}
                                        </div>
                                    </Link>
                                ))
                                :
                                ""
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(
    state => state.discovery,
    { getDiscoveryData }
)(Discover)