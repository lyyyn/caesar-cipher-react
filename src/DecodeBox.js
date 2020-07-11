import React, { Component } from 'react';
import SKIP from './AppSetting.js';

export default class DecodeBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            decMessage: ''
        }
    }

    decodeMsg = (msg, skip) => {
        let decodedMsg = msg.split('').map(char => {
            return String.fromCharCode(char.charCodeAt(0) - skip);
        });

        return decodedMsg.join('');
    }

    handleChange = (evnt) => {
        this.setState({decMessage: this.decodeMsg(evnt.target.value, SKIP)});
        console.log(this.decodeMsg(evnt.target.value, SKIP));
    }

    render() {
        return (
            <div className="box dec">
                <h2>DECODE</h2>
                <h4>Message</h4>
                <textarea rows="8" aria-multiline autoFocus onKeyUp={(event) => this.handleChange(event)}></textarea>
                <h4>Decrypted Message</h4>
                <p>{this.state.decMessage}</p>
            </div>
        )
    }
}
