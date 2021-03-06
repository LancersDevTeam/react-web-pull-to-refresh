// @flow
import React, { Component } from 'react';
import PullDownToRefresh from '../../src/pull_down_to_refresh';

class App extends Component {

    constructor(props: Object) {
        super(props);
        this.state = {
            displayFlag: true,
        };
    }

    state: {
        displayFlag: boolean;
    }

    pullDownHandler() {
        this.setState({ displayFlag: true });
        setTimeout(
            () => { this.setState({ displayFlag: false }); }
            , 1500
        );
    }

    componentDidUpdate() {
        if (!this.state.displayFlag) {
            this.setState({ displayFlag: true });
        }
    }

    render() {
        const pullDownProps = {
            displayFlag: this.state.displayFlag,
            pullDownHandler: this.pullDownHandler.bind(this),
            loadingContent: 'Loading...',
        }
        const list = [];
        for (let i = 0; i < 200; i++) {
            list.push(<li key={i}>{i}</li>);
        }
        return (
            <PullDownToRefresh {...pullDownProps}>
                <ul>{list}</ul>
            </PullDownToRefresh>
        );
    }
}

export default App;
