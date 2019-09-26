import React from "react";
import { Tabs, Badge } from 'antd-mobile';
import VodDescTab from './VodDescTab';
import VodMoreTab from "./VodMoreTab";
import VodCommentTab from "./VodCommentTab";
import DPlayer from "react-dplayer";
import './style.less';


class VodDisplayPage extends React.Component {


    render() {

        const tabs = [
            { title: <Badge text={''}>简介</Badge> },
            { title: <Badge text={'30'}>评论</Badge> },
            { title: <Badge dot={true}>更多</Badge> },
        ];

        return (
            <div>
                <DPlayer className='video-player'
                    options={{
                        autoplay: true,
                        hotkey: true,
                        mutex: true,
                        volume: 0.1,
                        video: {
                            url: 'https://live360bucket.oss-cn-beijing.aliyuncs.com/vrresource/output2.mp4',
                            quality: [
                                {
                                    name: '标清',
                                    url: 'https://live360bucket.oss-cn-beijing.aliyuncs.com/vrresource/output2.mp4',
                                    type: 'customFlv',
                                },
                                {
                                    name: '高清',
                                    url: 'https://live360bucket.oss-cn-beijing.aliyuncs.com/vrresource/output2.mp4',
                                    type: 'customFlv',
                                },
                            ],
                            defaultQuality: 1,
                        }
                    }}
                />
                <div>
                    <Tabs tabs={tabs}
                        initialPage={0}
                        onChange={(tab, index) => { console.log('onChange', index, tab); }}
                        onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                        <div>
                            <VodDescTab></VodDescTab>
                        </div>
                        <div>
                            <VodCommentTab></VodCommentTab>
                        </div>
                        <div>
                            <VodMoreTab></VodMoreTab>
                        </div>

                    </Tabs>

                </div>
            </div>
        )
    }

}

export default VodDisplayPage;