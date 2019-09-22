import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import { Link, withRouter } from 'react-router-dom';
import { getRoute } from '../../util/backTo';
import './yellow-header.less'
class YellowHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="yellow-header">
                <Link to={getRoute()} className="left">
                    <Icon type="left" />
                </Link>
                <div className="title">{this.props.title}</div>
            </div>
        )
    }
}
export default withRouter(YellowHeader);