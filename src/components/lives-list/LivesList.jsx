import React from 'react';
import { ListView } from 'antd-mobile';
import LiveItem from './LiveItem';

// Mock数据
const data = [
    {
        img: 'https://sta-op.douyucdn.cn/douyu-vrp-admin/2019/04/17/6c407172867da494c0c9aea6b0389e35.jpg?x-oss-process=image/format,webp',
        title: '无限可能，无限热爱',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        img: 'https://sta-op.douyucdn.cn/douyu-vrp-admin/2019/09/06/390d535e7595e28e34fcf6315f4cce87.jpg?x-oss-process=image/format,webp',
        title: 'PPL',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        img: 'https://sta-op.douyucdn.cn/douyu-vrp-admin/2019/09/04/af01a991590b99379dde439fca03aca5.jpg?x-oss-process=image/format,webp',
        title: '冠军队长',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
];
const NUM_ROWS = 10;
let pageIndex = 0;

// mock生成数据
function genData(pIndex = 0) {
    const dataBlob = {};
    for (let i = 0; i < NUM_ROWS; i++) {
        const ii = (pIndex * NUM_ROWS) + i;
        dataBlob[`${ii}`] = `row - ${ii}`;
    }
    return dataBlob;
}

class LivesList extends React.Component {

    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.state = {
            dataSource,
            isLoading: true,
        };
    }

    componentDidMount() {
        //模拟网络加载
        setTimeout(() => {
            this.rData = genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 600);
    }

    // 加载更多数据
    onEndReached = (event) => {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        console.log('reach end', event);
        this.setState({ isLoading: true });
        setTimeout(() => {
            this.rData = { ...this.rData, ...genData(++pageIndex) };
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 1000);
    }

    render() {
        // 列表item的分割线
        const separator = (sectionID, rowID) => (
            <div
                key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: '#F5F5F9',
                    height: 8,
                    borderTop: '1px solid #ECECED',
                    borderBottom: '1px solid #ECECED',
                }}
            />
        );
        // 渲染每个item
        let index = data.length - 1;
        const row = (rowData, rowID) => {
            if (index < 0) {
                index = data.length - 1;
            }
            const obj = data[index--];
            return (
                <div key={rowID} style={{ padding: '10px 10px' }}>
                    <LiveItem obj={obj}></LiveItem>
                </div>
            );
        };

        return (
            <ListView
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                    {this.state.isLoading ? 'Loading...' : 'Loaded'}
                </div>)}
                renderRow={row}
                renderSeparator={separator}
                className="am-list"
                pageSize={4}
                useBodyScroll
                onScroll={() => { console.log('scroll'); }}
                scrollRenderAheadDistance={500}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={10}
            />
        );
    }
}

export default LivesList;