import { injectGlobal } from 'styled-components';

// App global styles
import 'reset.css/reset.css';

import theme from './theme';
injectGlobal`
    body {
        background: ${theme.base.background};
        color: ${theme.base.colour};
        font: ${theme.base.fontSize} ${theme.base.fontFamily};
    }
`;
