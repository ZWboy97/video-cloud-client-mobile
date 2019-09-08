import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Container from './containers/container/container';
import BottomTabBar from './components/bottom-tabbar/BottomTabBar.jsx';

class Router extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <BrowserRouter>
                <div>
                    <BottomTabBar></BottomTabBar>
                    <Container></Container>
                </div>
            </BrowserRouter>
        )
    }
}
export default Router