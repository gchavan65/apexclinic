import React from 'react';
import { useSelector } from 'react-redux';

import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, StyledEngineProvider } from '@material-ui/core';

// routing
import Routes from './routes';

// defaultTheme
import themes from './themes';

// project imports
import NavigationScroll from './layout/NavigationScroll';

// conetx
import ValidationContextProvider from '../src/views/sample-page/Context/FormContext'
import ApproveProvider from '../src/views/sample-page/Context/ApprovalConetx'

// ===========================|| APP ||=========================== //

const App = () => {
    const customization = useSelector((state) => state.customization);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
            <ValidationContextProvider>
                    <ApproveProvider>
                <CssBaseline />
                <NavigationScroll>
                    <Routes />
                </NavigationScroll>
                </ApproveProvider>
                </ValidationContextProvider>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
