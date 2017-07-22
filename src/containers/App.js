import React from 'react';

import '../globalStyles';

// Components
import Button from '../components/atoms/Button';

import ListCard from '../components/molecules/ListCard';

import Header from '../components/organisms/Header';
import SubHeader from '../components/organisms/SubHeader';

import Content from '../components/wrappers/Content';
import List from '../components/wrappers/List';

const App = () => (
    <div>
        <Header />

        <SubHeader />

        <Content>
            <List>
                <ListCard />
                <ListCard />
                <ListCard />
                <ListCard />
                <ListCard />
                <ListCard />
            </List>

            <Button block>Load more</Button>
        </Content>
    </div>
);

export default App;
