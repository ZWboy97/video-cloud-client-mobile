import React from 'react';
import { TabBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import './style.less'

class BottomTabBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'zhibo',
            hidden: false,
            fullScreen: true,
        };
    }

    render() {
        return (
            <div id="tab-bar">
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    tabBarPosition='bottom'
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="直播"
                        key="zhibo"
                        icon={
                            <div style={
                                {
                                    width: '22px',
                                    height: '22px',
                                    background: `url(https://pic-cloud-bupt.oss-cn-beijing.aliyuncs.com/icon/tab-live-unselected.svg) center center /  21px 21px no-repeat`
                                }
                            } />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(https://pic-cloud-bupt.oss-cn-beijing.aliyuncs.com/icon/tab-live-selected.svg) center center /  21px 21px no-repeat`
                            }} />
                        }
                        selected={this.state.selectedTab === 'zhibo'}
                        onPress={() => {
                            this.setState({
                                selectedTab: "zhibo",
                            });
                            this.props.history.push('/lives');
                        }}
                    />

                    <TabBar.Item
                        title="视频库"
                        key='vod'
                        icon={
                            <div style={
                                {
                                    width: '22px',
                                    height: '22px',
                                    background: `url(https://pic-cloud-bupt.oss-cn-beijing.aliyuncs.com/icon/tab-vod-unselected.svg) center center /  21px 21px no-repeat`
                                }
                            } />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(https://pic-cloud-bupt.oss-cn-beijing.aliyuncs.com/icon/tab-vod-selected.svg) center center /  21px 21px no-repeat`
                            }} />
                        }
                        selected={this.state.selectedTab === 'vod'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'vod',
                            });
                            this.props.history.push('/vod');
                        }}
                    />

                    <TabBar.Item
                        title='我的'
                        key='me'
                        icon={
                            <div style={
                                {
                                    width: '22px',
                                    height: '22px',
                                    background: `url(https://pic-cloud-bupt.oss-cn-beijing.aliyuncs.com/icon/tab-me-unselected.svg) center center /  21px 21px no-repeat`
                                }
                            } />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(https://pic-cloud-bupt.oss-cn-beijing.aliyuncs.com/icon/tab-me-selected.svg) center center /  21px 21px no-repeat`
                            }} />
                        }
                        selected={this.state.selectedTab === 'me'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'me',
                            });
                            this.props.history.push('/me');
                        }}
                    />
                </TabBar>
            </div >
        )
    }

}

export default withRouter(BottomTabBar);