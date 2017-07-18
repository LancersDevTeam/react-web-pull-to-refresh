// @flow
import React, { PureComponent } from 'react';
require('./loading_area.css');

class LoadingArea extends PureComponent {

    static defaultProps = {
        displayFlag: false,
        borderHeight: 0,
        height: 50,
        fontSize: '20px',
        backgroundColor: '#f2f2f2',
        color: 'black',
        padding: '0px',
        margin: '0px',
    };

    selfRef: any;

    props: {
        displayFlag: boolean;
        borderHeight: number;
        height: number;
        fontSize: string;
        loadingContent: string | React.Element<*>;
        backgroundColor: string;
        color: string;
        margin: string;
        padding: string;
        updatingFlag: boolean;
    };

    componentDidMount() {
        this.setStyles();
    }

    setStyles() {
        this.selfRef.style.height = `${this.props.height}px`;
        this.selfRef.style.border = `${this.props.borderHeight}px solid #000`;
        this.selfRef.style.lineHeight = `${this.props.height}px`;
        this.selfRef.style.fontSize = this.props.fontSize;
        this.selfRef.style.backgroundColor = this.props.backgroundColor;
        this.selfRef.style.color = this.props.color;
        this.selfRef.style.padding = this.props.padding;
        this.selfRef.style.margin = this.props.margin;
    }

    getClassName(): string {
        if (this.props.displayFlag && this.props.updatingFlag) {
            return "loading_base loading";
        } else {
            return "loading_base not_loading"
        }
    }

    render() {
        return (
            <div ref={node => this.selfRef = node} className={this.getClassName()}>
                {this.props.displayFlag && this.props.loadingContent}
            </div>
        );
    }
}

export default LoadingArea;
