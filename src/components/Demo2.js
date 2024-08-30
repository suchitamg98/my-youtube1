import { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  console.log("rendering");

  // useEffect(() => {
  //   const i = setInterval(() => {
  //     console.log("namaste");
  //   }, 1000);
  //   return () => clearInterval(i);
  // }, []);
  let x = 10;
  const [y, setY] = useState(0);
  const ref = useRef(0);
  return (
    <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
      <div>
        <button
          className="bg-green-200 px-2 m-4"
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
        >
          increase x
        </button>
        <span className="font-bold">Let ={x}</span>
      </div>
      <div>
        <button
          className="bg-green-200 px-2 m-4"
          onClick={() => {
            setY(y + 1);
            console.log(y);
          }}
        >
          increase y
        </button>
        <span className="font-bold">state={y}</span>
      </div>
      <div>
        <button
          className="bg-green-200 px-2 m-4"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log(ref.current);
          }}
        >
          increase Ref
        </button>
        <span className="font-bold">ref={ref.current}</span>
      </div>
    </div>
  );
};
export default Demo2;
