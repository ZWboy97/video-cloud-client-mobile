import React, { Component } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import LivesPage from '../lives-page/LivesPage';
import Me from '../me/me';
import Discover from '../discover/discover';
import SongListDetail from '../song-list-detail/song-list-detail';
import AlbumDetail from '../album-detail/album-detail';
import CollectSongs from '../collect-songs/collect-songs';
import CollectSongList from '../collect-song-list/collect-song-list';
import Search from '../search/search';
import UserCenter from '../user-center/user-center';
import { HOST } from '../../const/host';
import { setRoute } from '../../util/backTo';
class Container extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        /*用正则匹配出来pathname*/
        console.log(window.location.pathname);
        if (window.location.pathname === `${HOST}/`) {
            this.props.history.push(`${HOST}/repertoire`)
        }
    }
    componentWillUpdate() {
        setRoute(this.props.location.pathname)
    }
    render() {
        return (
            <div>
                <Switch id="container">
                    <Route exact path="/" render={() => <Redirect to="/repertoire" push />} />
                    <Route path={`${HOST}/repertoire`} component={LivesPage} />
                    <Route path={`${HOST}/me`} component={Me} />
                    <Route path={`${HOST}/discover`} component={Discover} />
                    <Route path={`${HOST}/songlistdetail/:id`} component={SongListDetail} />
                    <Route path={`${HOST}/albumdetail/:id`} component={AlbumDetail} />
                    <Route path={`${HOST}/collectsongs`} component={CollectSongs} />
                    <Route path={`${HOST}/collectsonglist/:id`} component={CollectSongList} />
                    <Route path={`${HOST}/collectsonglistdetail/:id`} component={CollectSongs} />
                    <Route path={`${HOST}/search`} component={Search} />
                    <Route path={`${HOST}/user-center/:id`} component={UserCenter} />
                </Switch>
            </div>
        )
    }
}
export default withRouter(Container);