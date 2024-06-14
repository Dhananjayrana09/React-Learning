import { Tag } from "./Components/Tag";
import { Random } from "./Components/Random";

function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      <h1 className='bg-white rounded-lg w-11/12 text-center mt-[40px] py-2 px-10 text-3xl font-bold'>
        RANDOM GIF
      </h1>

      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
