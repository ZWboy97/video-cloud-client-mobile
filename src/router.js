import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Container from './containers/container/container';
import BottomTabBar from './components/bottom-tabbar/BottomTabBar.jsx';

class IRouter extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <Router>
                <div>
                    <Container></Container>
                    <BottomTabBar></BottomTabBar>
                </div>
            </Router>
        )
    }
}
export default IRouter