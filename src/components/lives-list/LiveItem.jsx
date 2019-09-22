import React from 'react';

class LiveItem extends React.Component {

    render() {
        const { obj } = this.props;
        return (
            <div>
                <div style={{ display: '-webkit-box', display: 'flex' }}>
                    <img style={{ width: '100%' }} src={obj.img} alt="" />
                </div>
            </div>
        )
    }

}

export default LiveItem;