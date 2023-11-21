import { PortableTextBlock } from "sanity";

export type About = {
  _id: string;
  _createdAt: Date;
  content: PortableTextBlock[];
  image: string;
  alt: string;
};