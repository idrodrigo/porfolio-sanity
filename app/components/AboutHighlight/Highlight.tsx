interface Props {
  children: JSX.Element | string
}
const Hl: React.FC<Props> = ({ children }) => {
  return (
    <>
      <span className="text-emerald-400">
        {children}
      </span>
    </>
  );
}

export default Hl;