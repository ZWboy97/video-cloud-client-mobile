import axios from 'axios';
import React, { Component } from 'react';
import { ListView } from 'antd-mobile';
import CommentItem from './CommentItem';
import { connect } from 'react-redux';
import { addComments } from 'myredux/comment.redux';
import './style.less';

class Comments extends Component {

    genDataSourceFromArray(commentList) {
        const dataBlob = {};
        for (let i = 0; i < commentList.length; i++) {
            dataBlob[`${i}`] = commentList[i];
        }
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        return dataSource.cloneWithRows(dataBlob);
    }

    render() {

        const comments = this.props.comments;
        console.log('comments', comments);
        const dataSource = this.genDataSourceFromArray(comments);

        const row = (rowData, sectionID, rowID) => {
            console.log('rowdata', rowData);
            const obj = rowData;
            return (
                <div key={rowID} style={{ padding: '0 15px' }}>
                    <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
                        <img style={{ height: '64px', marginRight: '15px' }} src={obj.img} alt="" />
                        <div style={{ lineHeight: 1 }}>
                            <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.des}</div>
                            <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>{rowID}</span>¥</div>
                        </div>
                    </div>
                </div>
            );
        };
        // const row = (rowData, rowID) => {
        //     console.log(rowData, rowID);
        //     return (
        //         <div key={rowID} style={{ padding: '0px 0px' }}>
        //             <CommentItem obj={rowData}></CommentItem>
        //         </div>
        //     );
        // };
        return (
            <div >
                <ListView
                    dataSource={dataSource}
                    renderRow={row}
                    useBodyScroll
                />
            </div>
        )
    }
}

export default connect(
    state => state.commentsSettings,
    { addComments }
)(Comments)