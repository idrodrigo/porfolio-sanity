const contact = {
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    {
      name: "linkedin",
      title: "Linkedin",
      type: "string",
    },
    {
      name: "git",
      title: "Git",
      type: "string",
    },
    {
      name: "correo",
      title: "Correo",
      type: "string",
    },
    {
      name: "imgLinkedin",
      title: "ImgLinkedin",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "imgGit",
      title: "ImgGit",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "imgCorreo",
      title: "ImgCorreo",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
  ],
};

export default contact;