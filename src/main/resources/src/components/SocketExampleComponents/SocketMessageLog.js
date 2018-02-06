import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as socketExampleActions from '../../redux/actions/socketActions';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './User.css';

class SocketMessageLog extends Component {

    handleSendButton = (event) => {
        event.preventDefault();

        socketExampleActions.SocketAction.send_message.say_hello(this.refs.message_text.value);

        // this.props.socketsMessageSend(this.refs.message_text.value);
        this.refs.message_text.value = '';
    };

    handleGetUsers = (event) => {
        event.preventDefault();

        socketExampleActions.SocketAction.user.get_all();

        // this.props.socketsMessageSend(this.refs.message_text.value);
        // this.refs.message_text.value = '';
    };

    handleSaveClick = () => {

    };

    render() {
        const {loaded, message, connected, message_history} = this.props;
        return (
            <div>
                <h3>Received Message</h3>
                <div>{message}</div>
                <div style={{minWidth: 1500, maxWidth: 1500}}>
                    <div className="user-input">
                        <TextField hintText="Введите логин" defaultValue={""} floatingLabelText="Логин"/>
                        <TextField hintText="Введите имя" defaultValue={""} floatingLabelText="Имя"/>
                        <TextField hintText="Введите фамилию" defaultValue={""} floatingLabelText="Фамилия"/>
                        <TextField hintText="Введите возраст" defaultValue={""} floatingLabelText="Возраст"/>
                        <TextField hintText="Введите e-mail" defaultValue={""} floatingLabelText="E-mail"/>
                    </div>
                    <RaisedButton label="Сохранить" primary={true} onClick={this.handleSaveClick}/>
                </div>
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
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={this.handleGetUsers}
                        disabled = {!connected}>
                        <i className="fa fa-sign-in"/> Get All Users
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