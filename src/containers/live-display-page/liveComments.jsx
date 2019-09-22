import axios from 'axios';
import React, { Component } from 'react';
import { List, InputItem, Button, ListView } from 'antd-mobile';
import CommentItem from './CommentItem';
import { createForm } from 'rc-form';
import { Link } from 'react-router-dom';
import WhiteSpace from 'mycomponents/whiteSpace';
import { connect } from 'react-redux';
import { addComments } from 'myredux/comment.redux';
import './style.less';

const data = [{
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
},
];

const NUM_ROWS = 5;
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

class Comments extends Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        })
        const newComment = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        })
        this.state = {
            dataSource,
            newComment,
            isLoading: true,
            userId: "",
            value: ''
        };
    }

    componentDidMount() {
        // axios.get(``).then
        //     (res => {
        //         // sessionStorage.setItem()
        //     })
        this.rData = genData();
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
            isLoading: false,
            userId: sessionStorage.getItem('userId'),
            avatar: sessionStorage.getItem('avatar')
        });
    }
    handleClick = () => {
        console.log('submit', this.state.value)
        if (this.state.value) {
            this.props.addComments(this.state.value)
            console.log(this.props.comments)
            console.log('length', this.props.comments.length)
            if (this.props.comments) {
                this.setState({
                    newComment: this.state.newComment.cloneWithRows(this.props.comments)
                })
            }
            this.setState({
                value: ''
            })
        }
    }
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
    componentWillReceiveProps(nextProps) {
        if (nextProps.dataSource !== this.props.dataSource) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
            });
        }
    }

    render() {
        const { getFieldProps } = this.props.form;
        // 渲染每个item
        let index = data.length - 1;
        const row = (rowData, rowID) => {
            if (index < 0) {
                index = data.length - 1;
            }
            const obj = data[index--];
            return (
                <div key={rowID} style={{ padding: '0px 0px' }}>
                    <CommentItem obj={obj}></CommentItem>
                </div>
            );
        };
        const coms = this.props.comments;
        let num = coms.length - 1
        const newComItem = (rowID) => {
            const obj = coms[num--];
            console.log('index', num)
            console.log('obj', obj.img)
            return (
                <div key={rowID} style={{ padding: '0px 0px' }}>
                    <CommentItem obj={obj}></CommentItem>
                </div>
            );
        };
        return (
            <div >
                <form >
                    <List >
                        <InputItem
                            {...getFieldProps('comment')}
                            clear
                            placeholder="添加评论"
                            maxLength="20"
                            onChange={(v) => {
                                console.log('onChange', v);
                                this.setState({
                                    value: v
                                })
                            }}
                            value={this.state.value}
                        >评论
                        </InputItem>
                        <List.Item>
                            <Button type="primary" inline
                                size="small"
                                onClick={this.handleClick}>提交</Button>
                        </List.Item>
                    </List>
                </form>

                {
                    this.props.comments && this.props.comments.length > 0 ?
                        <div>
                            <ListView
                                dataSource={this.state.newComment}
                                renderRow={newComItem}
                                className="am-list"
                                pageSize={4}
                                useBodyScroll
                                onScroll={() => { console.log('scroll'); }}
                                scrollRenderAheadDistance={500}
                                onEndReachedThreshold={10}
                            />
                        </div>
                        : ""
                }
                <ListView
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    renderFooter={() => (
                        <div style={{ padding: 30, textAlign: 'center' }}>
                            {this.state.isLoading ? 'Loading...' : 'Loaded'}
                        </div>)}
                    renderRow={row}
                    className="am-list"
                    pageSize={4}
                    useBodyScroll
                    onScroll={() => { console.log('scroll'); }}
                    scrollRenderAheadDistance={500}
                    // onEndReached={this.onEndReached}
                    onEndReachedThreshold={10}
                />
            </div>
        )
    }
}
const Comments_form = createForm()(Comments);
export default connect(
    state => state.commentsSettings,
    { addComments }
)(Comments_form)