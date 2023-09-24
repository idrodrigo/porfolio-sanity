import Subtittle from "@/app/components/subtittle/Subtittle";
import { getBookmarks } from "@/sanity/sanity-utils";
import { Bookmarks } from "@/types/bookmarks";
import Image from "next/image";

export default async function Bookmarks() {
  const bookmarks:Bookmarks[] = await getBookmarks() || [];
  return(
    <>
    <Subtittle subtittle={"Bookmarks"} marginTop={'mt-10'} />
      <section>
        <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 pb-5">
          {bookmarks.map((bookmark) => {
            return (
              <a
                href={bookmark.url}
                key={bookmark._id}
                className="slide-top shadow-lg border border-gray-100 rounded-3xl p-1 hover:shadow-inner
                    hover:transition flex flex-col justify-between"
              >
                <div className="p-2 text-center flex justify-center">
                  <div
                    className="text-xl font-extrabold bg-gradient-to-r 
        from-green-400 to-blue-700 bg-clip-text text-transparent"
                  >
                    {bookmark.bookmark}
                  </div>
                </div>
                <div className="mx-2 grid justify-center ">
                  {bookmark.image && (
                    <Image
                      src={bookmark.image}
                      alt={bookmark.bookmark}
                      width={128.7}
                      height={260.4}
                      className="object-cover rounded-md align-middle animate-shake"
                    />
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </>
  )
}