import React from 'react';

// Components
import HeaderTitle from '../components/Header/HeaderTitle';
import HeaderWrapper from '../components/Header/HeaderWrapper';
import Splash from '../components/shared/Splash';
import Template from '../components/shared/Template';

const NotFoundScreen = () => (
    <Template>
        <HeaderWrapper>
            <HeaderTitle>
                Not Found
            </HeaderTitle>
        </HeaderWrapper>

        <Splash>
            Oops, looks like you&#039;re lost!
        </Splash>
    </Template>
);

export default NotFoundScreen;
