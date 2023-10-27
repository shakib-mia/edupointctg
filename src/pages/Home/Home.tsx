const Home = () => {
  return (
    <div className="mt-10 px-20">
      <div className="flex gap-3">
        <div className="flex items-center">
          <h1 className="text-[#002c6a]">Primary:</h1>
          <div className="w-5 h-5 bg-[#002c6a]"></div>
        </div>

        <div className="flex items-center">
          <h1 className="text-[#f5c76b]">Secondary:</h1>
          <div className="w-5 h-5 bg-[#f5c76b]"></div>
        </div>

        <div className="flex items-center">
          <h1 className="text-[#002c6a]">Gradient 1:</h1>
          <div className="w-5 h-5 bg-gradient-to-r from-[#002c6a] to-[#00419d]"></div>
        </div>

        <div className="flex items-center">
          <h1 className="text-[#002c6a]">Gradient 2:</h1>
          <div className="w-5 h-5 bg-gradient-to-r from-[#f5c76b] to-[#f8d99b]"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
