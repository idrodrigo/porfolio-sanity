import Link from "next/link";
import "../globals.css";
import { getPages } from "@/sanity/sanity-utils";

export const metadata = {
  title: "Rodrigo Medina Porfolio",
  description: "Generated by Next + Sanity",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = await getPages();
  const pro = pages || "";
  return (
    <html lang="en" className="bg-green-50">
      <body className="max-w-6xl mx-auto py-10">
        <header className=" flex items-center justify-between mx-5 border-b border-violet-500 py-3">
          <Link
            href="/"
            className="img-pro bg-gradient-to-r 
        from-green-400 via-violet-500 to-blue-700 
          bg-clip-text text-transparent text-3xl font-bold pl-6"
          >
            Idrodrigo
          </Link>
          <div className="flex items-center gap-11 text-green-400 pr-8 hover:text-violet-500 text-2xl font-bold">
            {pro.map((page) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className="img-pro underline decoration-indigo-500 decoration-wavy decoration-2 hover:decoration-green-500 hover:decoration-wavy hover:decoration-2 "
              >
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="py-20 mx-10">{children}</main>
      </body>
    </html>
  );
}
