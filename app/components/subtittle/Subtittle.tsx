interface Props {
  subtittle: string;
  marginTop: string;
}
const Subtittle: React.FC<Props> = ({ subtittle, marginTop }) => {
  return (
    <>
      <div className={`flex justify-center`}>
        <h2
          className={`img-pro ${marginTop} font-bold text-3xl underline underline-offset-8 decoration-red-600 decoration-wavy`}
        >
          {subtittle}
        </h2>
      </div>
    </>
  );
};

export default Subtittle;
