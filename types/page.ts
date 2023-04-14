import { PortableTextBlock } from "sanity";

export type Page = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  linkedin: string;
  git: string;
  image: string;
  correo: string;
  content: PortableTextBlock[];
};
