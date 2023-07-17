interface Props {
  subtittle: string;
  marginTop: string;
  color?: string;
}
const Subtittle: React.FC<Props> = ({ subtittle, marginTop }) => {
  return (
    <>
      <div className={`flex justify-center animate-wiggle animate-infinite animate-duration-[3500ms]`}>
        <h2
          className={`img-pro ${marginTop} font-bold text-3xl  before:block before:absolute before:-inset-1 before:-skew-y-3 group-hover/item:scale-75 before:bg-blue-500 relative inline-block`}
        >
          <span className="relative text-white">{subtittle}</span>
        </h2>
      </div>
    </>
  );
};


export default Subtittle;
