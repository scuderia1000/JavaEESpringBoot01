import React, {Component} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import * as socketExampleActions from '../../redux/actions/socketActions';
import {SocketConnectionLog, SocketMessageLog} from '../../components/index';

class SocketExamplePage extends Component {
    render() {
        const {loaded, message, connected, socketsConnecting, socketsDisconnecting, history, socketsConnect, socketsDisconnect} = this.props;

        return (
            <div>
                <h1>Socket Exapmle Page</h1>
                {/*<Helmet title="Socket Exapmle Page"/>*/}
                <p>{!connected ? 'Sockets not connected' : 'Sockets connected'}</p>

                <SocketConnectionLog loaded={loaded} message={message} connected={connected}
                                     //connectAction={socketsConnecting}
                                     //disconnectAction={socketsDisconnecting}
                                     history={history}
                                     connectAction={socketsConnect}
                                     disconnectAction={socketsDisconnect}
                />
                <SocketMessageLog />
            </div>
        );
    }
}

export default connect(
    (state) => ({
        loaded: state.socketConnection.loaded,
        message: state.socketConnection.message,
        connected: state.socketConnection.connected,
        history: state.socketConnection.history
    }),
    socketExampleActions
    )(SocketExamplePage);