import React, { Component } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import LivesPage from '../lives-index-page/LivesPage';
import LiveDisplayPage from '../live-display-page/LiveDisplayPage';
import Me from '../me-index-page/me';
import VodPage from '../vod-index-page/VodPage';
import VodDisplayPage from '../vod-display-page/VodDisplayPage';
import Search from '../search-page/search';
import UserCenter from '../user-center-page/user-center';
import { HOST } from '../../const/host';
import { setRoute } from '../../util/backTo';
class Container extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillUpdate() {
        setRoute(this.props.location.pathname)  // 记录路由记录，用于页面返回
    }

    render() {
        return (
            <div>
                <Switch id="container">
                    <Route exact path="/" render={() => <Redirect to="/lives" push />} />
                    <Route path={`${HOST}/lives`} component={LivesPage} />
                    <Route path={`${HOST}/me`} component={Me} />
                    <Route path={`${HOST}/vod`} component={VodPage} />
                    <Route path={`${HOST}/vod-display/`} component={VodDisplayPage} />
                    <Route path={`${HOST}/live/display/`} component={LiveDisplayPage} />
                    <Route path={`${HOST}/search`} component={Search} />
                    <Route path={`${HOST}/user-center/`} component={UserCenter} />
                </Switch>
            </div>
        )
    }
}
export default withRouter(Container);