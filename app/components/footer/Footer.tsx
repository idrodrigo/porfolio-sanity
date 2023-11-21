function Footer() {

  const year = new Date().getFullYear();
  const links = [
    {
      text: "Linkedin",
      url: "https://www.linkedin.com/in/idrodrigo/",
    },
    {
      text: "Github",
      url: "https://www.github.com/idrodrigo",
    },
    {
      text: "Mail",
      url: "idrodrigo@icloud.com",
    },
    {
      text: "Bookmarks",
      url: "/bookmarks",
    },
  ];

  return (
    <footer
      className="md:py-8 py-4 border-t border-t-gray-200 md:mx-14 mx-12 text-zinc-500 text-sm"
    >
      <section className="md:flex justify-end flex-grow font-Roboto">
        <ul className="md:flex">
          {
            links.map((link, index) => (
              <li
                className="list-none"
                key={link.text}>
                <a

                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav font-Roboto  px-3 transition  hover:text-blue-500"
                >
                  {link.text}
                </a>
                {index < links.length - 1 && <p className="md:inline-block hidden">|</p>}
              </li>
            ))
          }
        </ul>


        <section className="flex-1 flex justify-end">
          <p>© Rodrigo Medina {year}</p>
        </section>
      </section>
    </footer>
  );
}


export default Footer;