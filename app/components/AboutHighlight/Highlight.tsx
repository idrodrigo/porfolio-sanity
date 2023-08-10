interface Props {
  children: JSX.Element | string
}
const Hl: React.FC<Props> = ({ children }) => {
  return (
    <>
      <span className="text-teal-400 font-normal">
        {children}
      </span>
    </>
  );
}

export default Hl;