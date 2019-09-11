import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSummary } from 'myredux/personal.redux';
import { HOST } from 'myconst/host';
import './me.less';

class Me extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: ""
        };
    }

    componentDidMount() {
        this.setState({
            userId: sessionStorage.getItem('userId')
        }, () => {
            this.props.getSummary(this.state.userId)
        })

    }

    render() {
        return (
            <div id="me">
                {
                    this.props.summary ?
                        <div className="me-wrapper">
                            <Link to={`${HOST}/user-center/${this.state.userId}`} className="personal">
                                <div className="left">
                                    <div className="avatar">
                                        <img src={this.props.summary.avatar} alt="" />
                                    </div>
                                    <div className="nick-name">{this.props.summary.nickName}</div>
                                </div>
                                <div className="right">
                                    <span>修改资料</span>
                                    <Icon type="right"></Icon>
                                </div>
                            </Link>
                            <Link to={`${HOST}/me`} className="personal-item">
                                <div className="title">收藏的视频</div>
                                <div className="right">
                                    <Icon type="right"></Icon>
                                </div>
                            </Link>
                            <div className="white-space"></div>
                        </div>
                        :
                        ""
                }
            </div>
        )
    }
}
export default connect(
    state => state.personal,
    { getSummary }
)(Me)