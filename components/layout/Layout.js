import NavBar from './NavBar';

const Layout = props => {
    return (
        <>
            <NavBar />
            <main>{props.children}</main>
        </>
    );
};

export default Layout;