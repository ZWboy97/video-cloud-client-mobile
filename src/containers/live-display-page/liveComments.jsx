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

        const row = (rowData, sessionID, rowID) => {
            console.log('rowdata', rowData, sessionID, rowID);
            return (
                <div key={rowID} style={{ padding: '0px 0px' }}>
                    <CommentItem obj={rowData}></CommentItem>
                </div>
            );
        };
        const separator = (sectionID, rowID) => (
            <div
                key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: '#F5F5F9',
                    height: 1,
                    borderTop: '1px solid #ECECED',
                    borderBottom: '1px solid #ECECED',
                }}
            />
        );
        return (
            <div >
                <ListView
                    dataSource={dataSource}
                    renderRow={row}
                    useBodyScroll
                    renderSeparator={separator}
                    pageSize={100}
                />
            </div>
        )
    }
}

export default connect(
    state => state.commentsSettings,
    { addComments }
)(Comments)