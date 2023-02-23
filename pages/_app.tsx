import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Jost} from "@next/font/google";
import LayoutComponent from "@/components/layout-component";
const jost = Jost(
    {
      subsets: ['latin'],
      weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
    }
);

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <style jsx global>
          {`
            :root {
            --jost-font: ${jost.style.fontFamily};
          }
          `}
        </style>
          <LayoutComponent>
                <Component {...pageProps} />
          </LayoutComponent>
      </>
  )
}
