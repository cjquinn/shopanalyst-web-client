import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Header from '../components/Header';
import Splash from '../components/Splash';

const NotFoundScreen = () => (
    <div>
        <Header>Not Found</Header>

        <Splash>
            Oops, looks like you&#039;re lost!

            <br />

            <Link to="/" className="o-link">
                Return home
            </Link>
        </Splash>
    </div>
);

export default NotFoundScreen;
