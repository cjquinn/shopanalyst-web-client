import React from 'react';

import '../globalStyles';

// Components
import Overlay from '../components/atoms/Overlay';
import CreateListForm from '../components/organisms/CreateListForm';
import Header from '../components/organisms/Header';
import ListStream from '../components/organisms/ListStream';
import SubHeader from '../components/organisms/SubHeader';

import Content from '../components/wrappers/Content';

const App = () => (
    <div>
        <Header />

        <SubHeader />

        <CreateListForm />

        <Overlay />

        <Content>
            <ListStream />
        </Content>
    </div>
);

export default App;
