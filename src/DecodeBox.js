import React, { Component } from 'react';

export default class DecodeBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            decMessage: ''
        }
    }

    render() {
        return (
            <div className="box dec">
                <h2>DECODE</h2>
                <h4>Message</h4>
                <textarea rows="8" aria-multiline></textarea>
                <h4>Encrypted Message</h4>
                <p>{this.state.decMessage}</p>
            </div>
        )
    }
}
