import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import PullDownToRefresh from '../src/pull_down_to_refresh';
import renderer from 'react-test-renderer';

describe('PullDownToRefresh', () => {
    test('renders correctly', () => {
        const pullDownProps = {
            displayFlag: true,
            pullDownHandler: () => {},
            loadingContent: 'Loading...',
        }
        const list = [];
        for (let i = 0; i < 10; i++) {
            list.push(<li key={i}>{i}</li>);
        }
        const tree = mountToJson(mount(
            <PullDownToRefresh {...pullDownProps}>
                <ul>{list}</ul>
            </PullDownToRefresh>
        ));
        expect(tree).toMatchSnapshot();
    });
});
