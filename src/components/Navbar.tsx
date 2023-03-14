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
            display: flex;
            gap: 10px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          
          }
        `}
      </style>
    </nav>
  );
}
