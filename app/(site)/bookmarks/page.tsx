import BookmarkCard from "@/app/components/bookmarks/BookmarkCard";
import Subtittle from "@/app/components/subtittle/Subtittle";
import { getBookmarks } from "@/sanity/sanity-utils";
import { Bookmark } from "@/types/bookmark";



export default async function Bookmarks() {
  const bookmarks:Bookmark[] = await getBookmarks() || [];
  return(
    <>
    <Subtittle subtittle={"Bookmarks"} marginTop={'mt-10'} />
      <section>
        <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-5 pb-5 md:mx-12 mx-6">
          {bookmarks.map((bookmark) => {
            return (
              <>
              <BookmarkCard bookmark={bookmark} />
              </>
            );
          })}
        </div>
      </section>
    </>
  )
}