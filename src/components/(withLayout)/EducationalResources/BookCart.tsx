import { message, Popconfirm, PopconfirmProps } from "antd";
import Image from "next/image";
import { FaRegTrashCan } from "react-icons/fa6";

const BookCart = ({ data }: any) => {
  const confirm: PopconfirmProps["onConfirm"] = (e) => {
    console.log(e);
    message.success("successfully delete");
  };

  return (
    <div className="flex gap-2 items-center bg-white rounded-md p-2 relative">
      <div>
        <Image src={data?.image} width={200} height={200} alt="image" />
      </div>
      <div>
        <p className="font-bold text-lg mb-2">{data?.name}</p>
        <p className=" mb-2">
          By <span className=" text-primary ">{data?.author}</span>
        </p>
        <p>{data?.description?.slice(0, 40)}...</p>
      </div>
      <div className="absolute top-0 right-0">
        <Popconfirm
          title="Delete the E-book"
          description="Are you sure to delete this E-book?"
          onConfirm={confirm}
          okText="delete"
          cancelText="No"
        >
          <div className="bg-[#e23a51] p-2 pl-4 pb-4 rounded-bl-full flex cursor-pointer">
            <FaRegTrashCan color="white" size={15} />
          </div>
        </Popconfirm>
      </div>
    </div>
  );
};

export default BookCart;
