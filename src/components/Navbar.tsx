/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const router = useRouter();
  // console.log(router);
  return (
    <nav>
      <Image src="/vercel.svg"
        width="100"
        height="100"
        alt='Picture of the Title' />
      <div>
        <Link style={{ fontSize: 24, fontWeight: 600, textDecoration: "none", cursor: "pointer" }} href="/" className={router.pathname === "/" ? "active" : ""}>Home</Link>
        <Link style={{ fontSize: 24, fontWeight: 600, textDecoration: "none", cursor: "pointer" }} href="/about" className={router.pathname === "/" ? "active" : ""} >About</Link>
      </div >
      <style jsx>
        {`
        {/* a{
          text-decoration: none;
        } */}
          nav {
            display: flex;
            gap: 10px;
            flex-direction: column;
            align-items: center;
            {/* justify-content: center; */}
            padding-top: 20px;
          padding-bottom: 10px;
          border-radius:20px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
            }
            nav div {
              display: flex;
              gap:10px
            }
            {/* nav a {
              font-weight:600;
              font-size: 24px;      
              background-color:red;        
              width: 100%;
            } */}
            .active {
              color: red;

            }
        `}
      </style>
    </nav >
  );
}
