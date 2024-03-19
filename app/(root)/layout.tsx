import Sidebar from '@/components/shared/Sidebar';
import React from 'react';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout:React.FC<LayoutProps> = ({children}) => {
    
    return (
        <main className='root'>
            {/* Sidebar */}
            <Sidebar/>
            {/* MobileNav */}
            <div className='root-container'>
                <div className="wrapper">
                    {children}
                </div>
            </div>
        </main>
    )
}
export default Layout;