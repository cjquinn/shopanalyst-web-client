import React from 'react';

// Components
import Header from '../components/Header';
import Svg from '../components/Svg';

// Sprites
import analyse from '../assets/svg/analyse.svg';

const AnalyseScreen = () => (
    <div>
        <Header>Analyse</Header>

        <div className="splash u-absolute u-width-full">
            <div className="u-space u-text-center">
                <Svg sprite={analyse} />
                <p>Nothing to see here...yet!</p>
            </div>
        </div>
    </div>
);

export default AnalyseScreen;
