import { Bookmark } from "@/types/bookmark";
import Image from "next/image";

interface Props {
  bookmark: Bookmark;
};

const BookmarkCard: React.FC<Props> = ({ bookmark }) => {
  return (
    <a href={bookmark.url} key={bookmark._id} target="_blank" className="slide-top shadow-lg border border-gray-100 rounded-3xl p-1 hover:shadow-inner hover:transition flex flex-col justify-between  py-4" >
      <div className="p-2 text-center flex justify-center" >
        <div
          className="text-xl font-extrabold bg-gradient-to-r 
  from - green - 400 to - blue - 700 bg - clip - text text - transparent"
        >
          {bookmark.title}
        </div>
      </div>
      < div className="mx-2 grid justify-center" >
        {
          bookmark.image && (
            <Image
              src={bookmark.image}
              alt={bookmark.title}
              width={128.7}
              height={260.4}
              className="object-cover rounded-md align-middle animate-shake"
            />
          )}
      </div>
    </a>
  );
}

export default BookmarkCard;