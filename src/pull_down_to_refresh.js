// @flow
import React, { PureComponent } from 'react';
import throttle from 'lodash.throttle';
require('./pull_down_to_refresh.css');

class PullDownToRefresh extends PureComponent {

    constructor(props: Object) {
        super(props);
        this.state = {
            draggingFlag: false,
            thresholdReachedFlag: false,
            posStart: 0,
            updatingFlag: false,
        };
    }

    static defaultProps = {
        displayFlag: false,
        className: '',
        pullDownHandler: () => {},
        borderHeight: 0,
        height: 50,
        fontSize: '20px',
        threshold: 10,
        throttleTermMS: 80,
        backgroundColor: '#f2f2f2',
        color: 'black',
        padding: '0px',
        margin: '0px',
    };

    selfRef: any;
    loadingAreaRef: any;
    contentAreaRef: any;
    updateStart: Function;
    updateEnd: Function;
    getPageY: Function;
    start: Function;
    move: Function;
    stop: Function;
    throttledMove: Function;
    pullDownHandler: Function;

    state: {
        draggingFlag: boolean;
        thresholdReachedFlag: boolean;
        posStart: number;
        updatingFlag: boolean;
    }

    props: {
        children?: ?React.Element<any>;
        className: string;
        displayFlag: boolean;
        pullDownHandler: Function;
        borderHeight: number;
        height: number;
        fontSize: string;
        threshold: number;
        loadingContent: string | React.Element<*>;
        throttleTermMS: number;
        backgroundColor: string;
        color: string;
        margin: string;
        padding: string;
    };

    componentDidMount() {
        this.throttledMove = throttle(
            this.move,
            this.props.throttleTermMS,
            { leading: true, trailing: true }
        );
        this.addListeners();
        this.setStyles();
    }

    componentWillUnmount() {
        this.removeListeners();
    }

    componentDidUpdate() {
        if (this.state.draggingFlag) {
            return
        }
        if (!this.props.displayFlag) {
            this.updateEnd();
        }
    }

    addListeners () {
        this.selfRef.addEventListener('touchmove', this.throttledMove.bind(this), { passive: true });
        this.selfRef.addEventListener('mousemove', this.throttledMove.bind(this), { passive: true });
        this.selfRef.addEventListener('touchend', this.stop.bind(this), { passive: true });
        this.selfRef.addEventListener('mouseup', this.stop.bind(this), { passive: true });
        this.contentAreaRef.addEventListener('touchstart', this.start.bind(this), { passive: true });
        this.contentAreaRef.addEventListener('mousedown', this.start.bind(this));
    }

    removeListeners () {
        this.selfRef.removeEventListener('touchmove', this.throttledMove.bind(this), { passive: true });
        this.selfRef.removeEventListener('mousemove', this.throttledMove.bind(this), { passive: true });
        this.selfRef.removeEventListener('touchend', this.stop.bind(this), { passive: true });
        this.selfRef.removeEventListener('mouseup', this.stop.bind(this), { passive: true });
        this.contentAreaRef.removeEventListener('touchstart', this.start.bind(this), { passive: true });
        this.contentAreaRef.removeEventListener('mousedown', this.start.bind(this), { passive: true });
    }

    setStyles() {
        this.loadingAreaRef.style.height = `${this.props.height}px`;
        this.loadingAreaRef.style.border = `${this.props.borderHeight}px solid #000`;
        this.loadingAreaRef.style.lineHeight = `${this.props.height}px`;
        this.loadingAreaRef.style.fontSize = this.props.fontSize;
        this.loadingAreaRef.style.backgroundColor = this.props.backgroundColor;
        this.loadingAreaRef.style.color = this.props.color;
        this.loadingAreaRef.style.padding = this.props.padding;
        this.loadingAreaRef.style.margin = this.props.margin;
    }

    updateStart(): void {
        this.props.pullDownHandler();
        this.setState({ updatingFlag: true })
    }

    updateEnd(): void {
        this.setState({ updatingFlag: false })
    }

    getPageY(event: any): ?number {
        if (event.pageY === undefined && event.touches !== undefined) {
            if (event.touches.length <= 0) {
                return null;
            }
            return event.touches[event.touches.length - 1].pageY;
        }
        return event.pageY;
    }

    start(event: any): void {
        if (!document.body || !this.contentAreaRef) {
            return;
        }
        if (document.body.scrollTop >= this.contentAreaRef.getBoundingClientRect().top) {
            return;
        }
        this.setState({ draggingFlag: true });
        this.setState({ thresholdReachedFlag: false });
        this.setState({ posStart: this.getPageY(event) });
    }

    move(event: any): void {
        if (!document.body || !this.contentAreaRef) {
            return;
        }
        if (document.body.scrollTop >= this.contentAreaRef.getBoundingClientRect().top) {
            return;
        }
        if (!this.state.draggingFlag) {
            return;
        }

        // Android / Chrome compability
        const pageY = this.getPageY(event);
        if (!pageY) {
            return;
        }
        const dragDistance = pageY - this.state.posStart;
        if (dragDistance <= 0) {
            return;
        }
        const workingMargin = this.props.borderHeight + (this.props.height - dragDistance);
        if (workingMargin <= this.props.threshold) {
            this.setState({ thresholdReachedFlag: true });
        }
    }

    stop(event: any): void {
        if (!document.body || !this.contentAreaRef) {
            return;
        }
        if (document.body.scrollTop >= this.contentAreaRef.getBoundingClientRect().top) {
            return;
        }
        if (!this.state.draggingFlag) {
            return;
        }

        if (this.state.thresholdReachedFlag) {
            this.updateStart();
        }
        this.setState({ draggingFlag: false });
        this.setState({ thresholdReachedFlag: false });
    }

    getClassName(): string {
        if (this.props.displayFlag && this.state.updatingFlag) {
            return "loading_base loading";
        } else {
            return "loading_base not_loading"
        }
    }

    render() {
        return (
            <div className={this.props.className} ref={node => this.selfRef = node}>
                <div ref={node => this.loadingAreaRef = node} className={this.getClassName()}>
                    {this.props.displayFlag && this.props.loadingContent}
                </div>
                <div ref={node => this.contentAreaRef = node}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default PullDownToRefresh;
