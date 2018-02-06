import React from "react";
import Paper from "material-ui/Paper";
import {List, ListItem} from 'material-ui/List';

const LeftPanel = () => {
    return (
        <Paper id="left-Panel" style={{
            height: '100%', width: 300, color: 'white', zIndex: 10, marginTop: 5,
            display: 'flex', flexDirection: 'column'
        }}>
            <List>
                <ListItem
                    primaryText="Inbox"
                    initiallyOpen={true}
                    primaryTogglesNestedList={true}
                    nestedItems={[
                        <ListItem
                            key={1}
                            primaryText="Starred"
                        />,
                        <ListItem
                            key={2}
                            primaryText="Sent Mail"
                            disabled={true}
                        />
                    ]}
                />
            </List>
        </Paper>
    );
};

export default LeftPanel;