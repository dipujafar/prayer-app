import Image from "next/image";
import { useState } from "react";
import ProductDetailsModal from "./ProductDetailsModal";

const ProductCart = ({ data }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="flex gap-2 items-center bg-white rounded-md p-2"
      >
        <div>
          <Image src={data?.image} width={200} height={200} alt="image" />
        </div>
        <div>
          <p className="font-bold text-xl mb-2 capitalize">{data?.name}</p>
          <div>
            {data.size.map((s: string[], index: number) => (
              <span
                key={index}
                className=" bg-slate-200 p-1 rounded-md text-black m-1 uppercase"
              >
                {s}
              </span>
            ))}
          </div>
          <p className="font-bold text-2xl mb-1 mt-2">${data?.price}</p>
          <p className=" font-semibold ">
            {data?.description?.slice(0, 30)}...
          </p>
        </div>
      </div>
      <ProductDetailsModal
        open={open}
        setOpen={setOpen}
        data={data}
      ></ProductDetailsModal>
    </>
  );
};

export default ProductCart;
