import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import '../../public/assets/css/globals.css';

//MuI Stuff
import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';

//Redux
import { Provider, useStore } from 'react-redux';
// import store from '../redux/store';

//Redux Persist
import { PersistGate } from 'redux-persist/integration/react';

//Import custom wrapper for persist
import { wrapper } from '../redux/store';

import GeneralLayout from '../components/general-layout';
import { useTheme } from '@mui/system';
import theme from '../utils/theme2';

function MyApp(props) {
    const store = useStore((state) => state);
    const { Component, pageProps } = props;
    const router = useRouter();
    const themes = useTheme(theme);
    const currentPath = router.pathname;

    // Remove the server-side injected CSS. (Agar Met Ui dapat bekerja di next)
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    let trueComponent =
        currentPath === '/test-sign-in' ||
        currentPath === '/sign-up' ||
        currentPath === '/testing' ||
        currentPath === '/mobile-register-member' ? (
            <Component {...pageProps} />
        ) : (
            <GeneralLayout>
                <Component {...pageProps} />;
            </GeneralLayout>
        );

    return (
        <div>
            <Head>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
                    integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
            </Head>
            <ThemeProvider theme={themes}>
                {/* <Provider store={store}> */}
                <PersistGate persistor={store.__persistor} loading={null}>
                    {/* <CssBaseline /> */}
                    {trueComponent}
                </PersistGate>
                {/* </Provider> */}
            </ThemeProvider>
        </div>
    );
}

export default wrapper.withRedux(MyApp);
