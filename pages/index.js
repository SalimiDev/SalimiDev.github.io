import Head from 'next/head';
import AppSidebar from '@/components/AppSidebar';

export default function Home() {
    return (
        <div className='flex'>
            <aside>
            <AppSidebar />
            </aside>
            <main>Main</main>
        </div>
    );
}
