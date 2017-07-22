import colours from '../colours';
import font from '../font';

const ProgressBar = {
    height: '26px',
    radius: '13px',
    fontSize: font.small,
    container: {
        background: colours.offWhite,
        borderColour: colours.faintBeige,
    },
    inner: {
        background: colours.green,
        colour: colours.white
    }
};

export default ProgressBar;
