import React, { Component } from 'react';
import './discover.less';
import { Link } from 'react-router-dom';
import { Icon } from 'antd-mobile';
import Title from '../../components/title';
import WhiteSpace from '../../components/whiteSpace';
import { getDiscoveryData } from '../../redux/discovery.redux';
import { connect } from 'react-redux';
import { HOST } from '../../const/host'

class Discover extends Component {

    constructor(props) {
        super(props)
        this.state = {
        };
    }

    componentDidMount() {
        this.props.getDiscoveryData()
    }

    storeInfo(id, name) {
        let styleInfo = {
            id, name
        };
        sessionStorage.setItem("styleInfo", JSON.stringify(styleInfo))
    }

    render() {
        return (
            <div id="discover">
                <div className="discover-wrapper">
                    <Link to={`${HOST}/search`} className="search-route">
                        <div className="search-inner">
                            <Icon type="search" size="sm" />
                            <div>输入关键字</div>
                        </div>
                    </Link>
                    <Title title="热门" />
                    <div className="style">
                        {
                            this.props.data ?
                                this.props.data.style.map(v => (
                                    <Link to={`${HOST}/style-songs-list`} onClick={() => { this.storeInfo(v.id, v.name) }} className="style-item" key={v.id}>
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
                    <div className="style">
                        {
                            this.props.data ?
                                this.props.data.style.map(v => (
                                    <Link to={`${HOST}/style-songs-list`} onClick={() => { this.storeInfo(v.id, v.name) }} className="style-item" key={v.id}>
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