import '../styles/globals.css'
import { motion, AnimateSharedLayout } from "framer-motion"

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
        <Component {...pageProps} />
    </AnimateSharedLayout>
  )
}

export default MyApp
