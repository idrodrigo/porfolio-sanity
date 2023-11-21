import { Project } from "@/types/project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Skills } from "@/types/skills";
import { Bookmark } from "@/types/bookmark";
import { About } from "@/types/about";
import { Contact } from "@/types/contact";

export async function getSkills(): Promise<Skills[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "skill"]{
        _id,
        _createdAt,
        skill,
        "slug": slug.current,
        "image": image.asset->url,
        url,
      }`
  );
}

export async function getSkill(slug: string): Promise<Skills> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "skill" && slug.current == $slug][0]{
      _id,
      _createdAt,
      skill,
      "slug": slug.current,
      "image": image.asset->url,
      url,
    }`,
    { slug }
  );
}

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        urlcode,
        content,
        tags
      }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      urlcode,
      content,
      tags
    }`,
    { slug }
  );
}

export async function getAbout(): Promise<About> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "about"][0]{
      _id,
      _createdAt,
      content,
      "image": image.asset->url,
      "alt": image.alt
    }`
  );
}

export async function getContact(): Promise<Contact> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "contact"][0]{
      _id,
      _createdAt,
      linkedin,
      git, 
      correo,
      "imgLinkedin": imgLinkedin.asset->url,
      "imgGit": imgGit.asset->url,
      "imgCorreo": imgCorreo.asset->url,
    }`
  );
}

export async function getAboutImage(): Promise<About> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "about"][0]{
      "image": image.asset->url,
    }`
  );
}

// export async function getPages(): Promise<Page[]> {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "page"]{
//       _id,
//       _createdAt,
//       title,
//       "slug": slug.current
//     }`
//   );
// }

// export async function getPage(slug: string): Promise<Page> {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "page" && slug.current == $slug][0]{
//       _id,
//       _createdAt,
//       title,
//       "slug": slug.current,
//       content,
//       linkedin,
//       git, 
//       correo,
//       "image": image.asset->url,
//       "imgLinkedin": imgLinkedin.asset->url,
//       "imgGit": imgGit.asset->url,
//       "imgCorreo": imgCorreo.asset->url,
//     }`,
//     { slug }
//   );
// }

// export async function getAboutImage(): Promise<Page> {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "page"][0]{
//       "image": image.asset->url,
//     }`
//   );
// }

export async function getBookmarks(): Promise<Bookmark[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "bookmarks"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        "image": image.asset->url,
        url,
      }`
  );
}
