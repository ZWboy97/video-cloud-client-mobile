import React from 'react';
import './style.less'

class CommentItem extends React.Component {

    render() {
        const { obj } = this.props;
        return (
            <div>
                <div
                    className="comment-container">
                    <img
                        className="image"
                        src={obj.img} alt="touxiang" />
                    <div className="content">
                        <div
                            className='name'>
                            {obj.name}</div>
                        <div className='message'>
                            {obj.message}
                        </div>
                        <div className='time'>
                            {obj.time}
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

export default CommentItem;