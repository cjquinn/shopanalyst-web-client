import React from 'react';

// Components
import Header from '../components/Header';
import ScreenWrapper from '../components/ScreenWrapper';
import Svg from '../components/Svg';

// Sprites
import analyse from '../assets/svg/analyse.svg';

const AnalyseScreen = () => (
    <div>
        <Header>Analyse</Header>

        <ScreenWrapper>
            <div className="u-space-2 u-text-center">
                <div className="u-space">
                    <Svg sprite={analyse} />

                    <p className="o-type-medium u-color-brown">
                        Make use of all that data
                    </p>
                </div>

                <p className="u-text-left">
                    What is your milk to cereal ratio? Are you hitting your monthly hot sauce quota? Is there a pattern to your shopping?
                </p>

                <p className="u-text-left">
                    Analysis is in the pipeline and we&#039;d like to get your input.
                </p>

                <button className="o-button" type="button">
                    Show interest
                </button>
            </div>
        </ScreenWrapper>
    </div>
);

export default AnalyseScreen;
