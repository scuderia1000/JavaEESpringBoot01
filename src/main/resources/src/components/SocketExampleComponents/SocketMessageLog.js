import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as socketExampleActions from '../../redux/actions/socketActions';
import {API, SUBSCRIBE} from '../../redux/constants/AppConst';

class SocketMessageLog extends Component {

    handleSendButton = (event) => {
        event.preventDefault();

        socketExampleActions.SocketAction.send_message.say_hello(this.refs.message_text.value, API.HELLO.SAY_HELLO, SUBSCRIBE.MESSAGE.GREETINGS);

        // this.props.socketsMessageSend(this.refs.message_text.value);
        this.refs.message_text.value = '';
    };

    render() {
        const {loaded, message, connected, message_history} = this.props;
        return (
            <div>
                <h3>Received Message</h3>
                <div>{message}</div>
                <h3>Message log</h3>
                <ul>
                    {
                        message_history.map((messageHistoryElement, index) =>
                            <li key={index} className={'unstyled'}>
                                <span className={(messageHistoryElement.direction === '->') ? 'glyphicon glyphicon-arrow-right' : 'glyphicon glyphicon-arrow-left'}></span>
                                {messageHistoryElement.message}
                            </li>
                        )}
                </ul>
                <form
                    className="form-inline"
                    onSubmit={this.handleSendButton}>
                    <p></p>
                    <div className="form-group">
                        <input
                            className="form-control input-sm"
                            type="text"
                            ref="message_text"
                            readOnly = {!(loaded && connected)}>
                        </input>
                    </div>
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={this.handleSendButton}
                        disabled = {!connected}>
                        <i className="fa fa-sign-in"/> Send
                    </button>
                </form>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        loaded: state.socketConnection.loaded,
        message: state.message.received_message,
        connected: state.socketConnection.connected,
        message_history: state.socketConnection.message_history
    }),
    socketExampleActions
)(SocketMessageLog)