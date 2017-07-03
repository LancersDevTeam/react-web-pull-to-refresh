import assert from 'assert';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import PullDownToRefresh from '../../src/pull_down_to_refresh';
import App from '../../examples/string/app';

describe('Simple Example', () => {
    before(() => {
        document.body.innerHTML += '<div id="root" style="position:absolute;top:0;left:0;"></div>';
    });

    let tree;
    beforeEach(() => {
        tree = ReactDOM.render(
            <App />,
            document.getElementById('root')
        )
    });

    afterEach(() => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    });

    describe('basic tooltip', () => {
        it('should be worked', () => {
            assert(true === true);
        });
    });

});
