interface props {
  title: string;
}
const Title = ({ title }: props) => {
  return (
    <div
      id={title.toLowerCase()}
      className="text-4xl text-stone-800 font-bold p-4 w-auto"
    >
      <p>{title}</p>
      <span className="bg-stone-800 block h-1 mt-1" />
    </div>
  );
};

export default Title;
