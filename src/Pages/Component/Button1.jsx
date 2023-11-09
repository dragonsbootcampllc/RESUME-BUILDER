
const DownloadBtn = (props) => {
  return (
    <button className={`w-9 aspect-square rounded-full text-xl flex justify-center items-center hover:text-primary-100 bg-transparent opacity-70 backdrop-blur-md hover:bg-red-900 hover:opacity-90 transition-all hover:delay-0 delay-300 ${props.classes}`} onClick={props.ClickFunc}>
      <props.Icon />
    </button>
  );
};
export default DownloadBtn;
