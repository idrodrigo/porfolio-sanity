interface Props {
  subtittle: string;
  marginTop: string;
  color?: string;
}
const Subtittle: React.FC<Props> = ({ subtittle, marginTop }) => {
  return (
    <>
      <section className={`flex justify-center animate-wiggle animate-infinite animate-duration-[3500ms]`}>
        <h2
          className={`${marginTop} font-bold text-xl  before:block before:absolute before:-inset-1 before:-skew-y-3 group-hover/item:scale-75 before:bg-teal-400 relative inline-block`}
        >
          <span className="relative text-white">{subtittle}</span>
        </h2>
      </section>
    </>
  );
};


export default Subtittle;
