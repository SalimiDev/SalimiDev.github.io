import React from 'react';
import Head from 'next/head';
import AppSidebar from '@/components/AppSidebar';
import Topbar from '@/components/Topbar';

const Layout = ({ children }) => {
    return (
        <div className='flex'>
            <Head>
                <title>My App</title>
            </Head>

            <aside>
                <AppSidebar />
            </aside>

            <main>
                <Topbar />
                {children}
            </main>
        </div>
    );
};

export default Layout;
