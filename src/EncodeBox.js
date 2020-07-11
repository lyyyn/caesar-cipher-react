import React, { Component } from 'react';

export default class EncodeBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            encMessage: ''
        }
    }

    render() {
        return (
            <div className="box enc">
                <h2>ENCODE</h2>
                <h4>Message</h4>
                <textarea rows="8" aria-multiline></textarea>
                <h4>Encrypted Message</h4>
                <p>{this.state.encMessage}&nbsp;</p>
            </div>
        )
    }
}
