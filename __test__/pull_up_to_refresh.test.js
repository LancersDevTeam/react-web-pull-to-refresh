import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import PullUpToRefresh from '../src/pull_up_to_refresh';
import renderer from 'react-test-renderer';

describe('PullUpToRefresh', () => {
    test('renders correctly', () => {
        const pullUpProps = {
            displayFlag: true,
            pullUpHandler: () => {},
            loadingContent: 'Loading...',
        }
        const list = [];
        for (let i = 0; i < 10; i++) {
            list.push(<li key={i}>{i}</li>);
        }
        const tree = mountToJson(mount(
            <PullUpToRefresh {...pullUpProps}>
                <ul>{list}</ul>
            </PullUpToRefresh>
        ));
        expect(tree).toMatchSnapshot();
    });
});
