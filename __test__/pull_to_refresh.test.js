import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import PullToRefresh from '../src/pull_to_refresh';
import renderer from 'react-test-renderer';

describe('PullToRefresh', () => {
    test('renders correctly', () => {
        const pullToRefreshProps = {
            pullUpToRefresh: {
                displayFlag: true,
                pullUpHandler: () => {},
                loadingContent: 'Loading...',
            },
            pullDownToRefresh: {
                displayFlag: false,
                pullDownHandler: () => {},
                loadingContent: 'Loading...',
            }
        }
        const list = [];
        for (let i = 0; i < 10; i++) {
            list.push(<li key={i}>{i}</li>);
        }
        const tree = mountToJson(mount(
            <PullToRefresh {...pullToRefreshProps}>
                <ul>{list}</ul>
            </PullToRefresh>
        ));
        expect(tree).toMatchSnapshot();
    });
});
