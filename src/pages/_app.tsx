import { AppProps } from "next/dist/shared/lib/router/router"
import "../styles/globals.css"
export default function _app({ Component, pagePros }: AppProps) {
  return (
    <div><Component {...pagePros}></Component>
      <h1>Heloeo</h1>

    </div>
  )
}
