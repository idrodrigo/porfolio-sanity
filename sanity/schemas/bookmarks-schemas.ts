const bookmarks = {
  name: "bookmarks",
  title: "bookmarks",
  type: "document",
  fields: [
    {
      name: "bookmarks",
      title: "bookmarks",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "bookmarks" },
    },
    {
      name: "image",
      title: "Image",
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
      name: "url",
      title: "URL",
      type: "url",
    },
  ],
};

export default bookmarks;