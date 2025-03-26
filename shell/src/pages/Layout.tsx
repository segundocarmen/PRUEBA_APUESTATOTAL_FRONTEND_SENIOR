import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/header';
import { motion } from 'framer-motion';
import Logout from '../components/logout';

const pageVariants = {
    initial: {
        width: 0
    },
    in: {
        width: '100%'
    },
    out: {
        x: window.innerWidth,
        transition: { duration: 0.1 }
    }
};

const pageTransition = {
    ease: 'linear',
    duration: 0.1
};

const Layout = () => {
    const { pathname } = useLocation();
    return (
        <>
            <motion.div
                key={pathname}
                initial='initial'
                animate='in'
                variants={pageVariants}
                transition={pageTransition}
            >
                <Header />
                <Outlet />
                <Logout />
            </motion.div>
        </>
    );
};

export default Layout;
