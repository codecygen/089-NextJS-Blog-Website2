import Link from 'next/link';

import Logo from './Logo';
import classes from './NavBar.module.css';

const NavBar = () => {
    return (
        <header className={classes.header}>
            <Link href="/">
                <a>
                    <Logo />
                </a>
            </Link>

            <nav>
                <ul>
                    <li>
                        <Link href="/posts">Posts</Link>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;