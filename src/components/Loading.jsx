const Loading = ({styling}) => {
  return (
    <div className={`flex items-center justify-center h-full bg-black w-full
    ${styling}`}>
      <div className="relative h-24 w-24">
        <div className="absolute top-0 left-0 w-full h-full border-8 border-t-transparent border-red-600 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
