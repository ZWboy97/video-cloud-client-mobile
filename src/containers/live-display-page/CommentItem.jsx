import React from 'react';
import './style.less'

class CommentItem extends React.Component {

    render() {
        const { obj } = this.props;
        return (
            <div className="me-wrapper">
                <div className="personal">
                    <div className="left">
                        <div className="avatar">
                            <div style={{ display: '-webkit-box', display: 'flex' }}>
                                <img style={{ width: '100%' }} src={obj.img} alt="" />
                            </div>
                        </div>
                        <div className="nick-name">999</div>
                    </div>
                    <div className="right">
                        999
                    </div>
                </div>
            </div>
        )
    }

}

export default CommentItem;