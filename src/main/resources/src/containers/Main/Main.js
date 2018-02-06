import React from "react";
import Header from "../../components/Header"
import LeftPanel from "../../components/leftPanel/LeftPanel"
import "./Main.css"

const Main = () =>
    (<div className="app">
        <div id="main-container">
            <Header/>
            <div style={{
                display: 'flex',
                position: 'relative',
                zIndex: 5,
                height: '100%',
                background: 'rgb(218, 222, 223)',
                paddingBottom: '78px',
                boxSizing: 'border-box',
                flex: 1
            }}>
                <LeftPanel/>
            </div>
        </div>
    </div>
    );

export default Main;