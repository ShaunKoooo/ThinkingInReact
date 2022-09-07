
import React from 'react';
export default class FollowButtonClass extends React.Component {

    
    click = () => {
        setTimeout(() => {
            alert('Follow ' + this.props?.user )
        }, 3000);
    }

    render() {
        return (
            <button onClick={this.click}>Follow</button>
        );
    }
}