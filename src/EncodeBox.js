import React, { Component } from 'react';
import SKIP from './AppSetting.js';

export default class EncodeBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            encMessage: ''
        }
    }

    encodeMsg = (msg, skip) => {
        let encodedMsg = msg.split('').map(char => {
            return String.fromCharCode(char.charCodeAt(0) + skip);
        });

        return encodedMsg.join('');
    }

    handleChange = (evnt) => {
        this.setState({encMessage: this.encodeMsg(evnt.target.value, SKIP)});
        console.log(this.encodeMsg(evnt.target.value, SKIP));
    }

    render() {
        return (
            <div className="box enc">
                <h2>ENCODE</h2>
                <h4>Message</h4>
                <textarea rows="8" aria-multiline autoFocus onKeyUp={(event) => this.handleChange(event)}></textarea>
                <h4>Encrypted Message</h4>
                <p>{this.state.encMessage}&nbsp;</p>
            </div>
        )
    }
}
