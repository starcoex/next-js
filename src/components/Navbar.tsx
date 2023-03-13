import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const router = useRouter();
  // console.log(router);
  return (
    <nav className={styles.navbar}>
      <Link
        href='/'
        style={{ color: router.pathname === '/' ? 'red' : 'yellow' }}>
        Home
        {/* <a style={{ color: router.pathname === '/' ? 'red' : 'blue' }}>Home</a> */}
      </Link>
      <Link
        href='/about'
        style={{ color: router.pathname === '/about' ? 'blue' : 'tomato' }}>
        {/* <a style={{ color: router.pathname === '/about' ? 'red' : 'blue' }}> */}
        About
      </Link>
      <style jsx>
        {`
          nav {
            background-color: blue;
          }
        `}
      </style>
    </nav>
  );
}
