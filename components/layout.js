import { useState, useEffect, useMemo, useCallback } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import AppSidebar from '@/components/AppSidebar';
import Topbar from '@/components/Topbar';
import useWindowSize from '@/hooks/useWindowSize';

const Layout = ({ children }) => {
    const windowSize = useWindowSize();
    const [pageTitle, setPageTitle] = useState('Mehdi Salimi');
    const { route } = useRouter();

    const getPageTitle = useMemo(() => {
        const pageTitles = {
            '/': 'Home Page',
            '/about': 'About Page',
            '/skills': 'Skills Page',
            '/projects': 'Projects Page',
            '/contact': 'Contact Page',
        };

        return route => pageTitles[route] || 'Mehdi Salimi';
    }, []);

    const setPageTitleCallback = useCallback(() => {
        setPageTitle(getPageTitle(route));
    }, [getPageTitle, route]);

    useEffect(() => {
        setPageTitleCallback();
    }, [setPageTitleCallback]);

    return (
        <div className='lg:flex w-screen overflow-hidden'>
            <Head>
                <title>{pageTitle}</title>
            </Head>

            <aside className='w-screen fixed text-center z-10 overflow-auto lg:relative lg:w-80 bg-primary-100 dark:bg-primary-500 text-primary-black dark:text-primary-white'>
                <AppSidebar windowSize={windowSize} />
            </aside>

            <main className='h-screen w-full overflow-auto bg-primary-50 dark:bg-primary-400'>
                <Topbar />
                {children}
            </main>
        </div>
    );
};

export default Layout;
