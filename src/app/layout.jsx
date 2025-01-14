import { Manrope, Roboto } from 'next/font/google'

import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "./globals.css";

export const metadata = {
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
  applicationName: "Lit Canvas",
  description:
    "Human agent collaboration for exploratory search of scientific literature.",
  title: {
    template: "%s | Lit Canvas",
    absolute: "Lit Canvas - Interactive Documentation Platform",
  },
  openGraph: {
    url: "https://lit-canvas.org",
    siteName: "Lit Canvas",
    locale: "en_US",
    type: "website",
  },
  //   icons: {
  //     icon: [
  //       {
  //         url: '/favicon.svg',
  //         type: 'image/svg+xml'
  //       }
  //     ]
  //   },
};

const manrope = Manrope({
weight: '500',
subsets: ['latin'],
display: 'swap',
})

  
const navbar = (
  <Navbar
    logo={<b>Lit Canvas</b>}
    logoLink="https://www.lit-canvas.org"   
    projectLink="https://github.com/lit-canvas/docs/tree/main"
  />
);
const footer = (
  <Footer className="flex-col items-center md:items-start !py-4">
    <p className="text-sm">
      © {new Date().getFullYear()} The Lit Canvas Project.
    </p>
  </Footer>
);
// const banner = (
//   <Banner dismissible={true}>🎨 Welcome to the Lit Canvas documentation</Banner>
// );

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className={manrope.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Layout
          // banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/lit-canvas/docs"
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 2 }}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
