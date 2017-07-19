// @flow
import React, { Component } from 'react';
import PullUpToRefresh from './pull_up_to_refresh';
import PullDownToRefresh from './pull_down_to_refresh';

type BaseType = {
    className?: string;
    displayFlag: boolean;
    borderHeight?: number;
    height?: number;
    fontSize?: string;
    threshold?: number;
    loadingContent?: string | React.Element<*>;
    throttleTermMS?: number;
    backgroundColor?: string;
    color?: string;
    margin?: string;
    padding?: string;
}

class PullToRefresh extends Component {

    props: {
        children?: ?React.Element<any>;
        pullUpToRefresh: BaseType & { pullUpHandler: Function };
        pullDownToRefresh: BaseType & { pullDownHandler: Function };

    };

    render() {
        return (
            <PullUpToRefresh {...this.props.pullUpToRefresh} >
                <PullDownToRefresh {...this.props.pullDownToRefresh}>
                    {this.props.children}
                </PullDownToRefresh>
            </PullUpToRefresh>
        );
    }
}

export default PullToRefresh;
