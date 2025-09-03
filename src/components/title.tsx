interface props {
  title: string;
}
const Title = ({ title }: props) => {
  return (
    <div
      id={title.toLowerCase()}
      className="text-6xl text-stone-900 font-bold p-10 w-auto"
    >
      <p>{title}</p>
      <span className="bg-stone-900 block h-1 mt-1" />
    </div>
  );
};

export default Title;
