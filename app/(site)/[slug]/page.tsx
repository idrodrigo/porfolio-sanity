import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
type Props = {
  params: { slug: string };
};
export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);
  const title = page?.title || "";
  const content = page?.content || "";
  return (
    <div>
      <h1
        className="bg-gradient-to-r 
        from-green-400 via-violet-500 to-blue-700 
         bg-clip-text text-transparent text-5xl drop-shadow font-extrabold"
      >
        {title}
      </h1>
      <div className="text-lg text-gray-700 mt-10">
        <PortableText value={content} />
      </div>
    </div>
  );
}
