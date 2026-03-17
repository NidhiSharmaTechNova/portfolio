import { Funnel_Sans, Funnel_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Loader from "@/components/loader";
import Footer from "@/components/footer"
import "./globals.css";

const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"]
});

const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"],
});

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>

//         <link
//           href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
//           rel="stylesheet"
//         />
//       </head>

//       <body className={`${funnelSans.variable} ${funnelDisplay.variable} antialiased`}>
//        {/* <Loader /> */}
//         <Header />
//         {children}
//         <Footer/>
//       </body>
//     </html>
//   );
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-y-scroll">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>

      <body
        className={`${funnelSans.variable} ${funnelDisplay.variable} antialiased overflow-x-hidden`} >
          
          <Header />
          {children}
          <Footer />
       
      </body>
    </html>
  );
}
