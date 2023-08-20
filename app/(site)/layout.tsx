import "../globals.css";
import { getPage, getPages, getAboutImage } from "@/sanity/sanity-utils";
import Navbar from "../components/navbar/Navbar";

export const metadata = {
  title: "Rodrigo Medina",
  description: "Rho's Porfolio Generated by Next + Sanity + TailwindCSS + Typescript + React", 
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pages = await getPages() || "";
  const image = await (await getAboutImage()).image
  return (
    <html lang="en" className="dark">
      <head>
          {/* <link rel="shortcut icon" href={favicon} /> */}
          <link rel="shortcut icon" href={image} />
      </head>
      <body className="max-w-6xl mx-auto dark: ">
        <Navbar pages={pages} />
        <main className=" mx-6">{children}</main>

      </body>
    </html>
  );
}
