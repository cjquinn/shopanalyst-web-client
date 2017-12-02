import React from 'react';

// Components
import Header from '../components/Header';
import HeaderTitle from '../components/HeaderTitle';
import Splash from '../components/Splash';
import Template from '../components/Template';

const NotFoundScreen = () => (
    <Template>
        <Header>
            <HeaderTitle>
                Not Found
            </HeaderTitle>
        </Header>

        <Splash>
            Oops, looks like you&#039;re lost!
        </Splash>
    </Template>
);

export default NotFoundScreen;
