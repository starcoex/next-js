import Head from 'next/head';
import Navbar from './Navbar';
import "../styles/globals.css"
import Providers from './Providers';


export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Providers />
      <Navbar />
      <div>{children}</div>
    </>

  )
}
