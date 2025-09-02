interface props {
  title: string;
}
const Title = ({ title }: props) => {
  return (
    <div className="text-3xl text-stone-900 font-bold p-4 w-auto">
      <p>{title}</p>
      <span className="bg-stone-900 block h-1" />
    </div>
  );
};

export default Title;
