import React from 'react';

class ConditionalRendering extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isExpand: false }
    }

    handleRender = () => {
        this.setState({ isExpand: !this.state.isExpand })
    }

    render() {
        let intro;
        if(this.state.isExpand) {
            intro = (
                <div>
                    <h3>Giới Thiệu</h3>
                    <p>Trong React, Đôi khi ....</p>
                </div>
            )
        }
        return (
            <div className='conditional-rendering'>
                <h1 className='title'>
                    Conditional Rendering
                </h1>
                <button onClick={this.handleRender}>{!this.state.isExpand ? "Xem giới thiệu" : 'Đóng giới thiệu'}</button>
                <div>{intro}</div>
            </div>
        )
    }
}

export default ConditionalRendering;