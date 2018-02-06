import React from "react";
import {connect} from 'react-redux';
import Paper from "material-ui/Paper";
import RaisedButton from 'material-ui/RaisedButton';
import * as socketExampleActions from '../redux/actions/socketActions';

class Header extends React.Component {
    connect = () => {
        socketExampleActions.socketsConnect();
    };

    disconnect = () => {
        socketExampleActions.socketsDisconnect();
    };
    render() {
        const {connected, socketsConnect, socketsDisconnect} = this.props;
        return (
            <Paper id="main-header" style={{
                height: 78, position: 'relative', zIndex: 10,
                backgroundColor: '#00bcd4', color: 'white'
            }}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div className={connected ? "ws-status connected" : "ws-status disconnected"}/>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <RaisedButton label="Connect" primary={true} style={{margin: '12px 12px 8px 12px', height: 24}}
                                      labelStyle={{fontSize: 12}}
                                      onClick={socketsConnect}/>
                        <RaisedButton label="Disconnect" primary={true} style={{margin: '0 12px 0 12px', height: 24}}
                                      labelStyle={{fontSize: 12}}
                                      onClick={socketsDisconnect}/>
                    </div>
                    <div style={{flex: 2}}>

                    </div>
                </div>
            </Paper>
        )
    }
}

export default connect(
    (state) => ({
        connected: state.socketConnection.connected,
    }),
    socketExampleActions
)(Header);