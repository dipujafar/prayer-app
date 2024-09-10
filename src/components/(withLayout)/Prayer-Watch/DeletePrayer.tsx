import { Modal } from "antd";
import React from "react";
import { toast } from "sonner";

const DeletePrayer = ({ isModalOpen, handleOk, handleCancel }: any) => {
  const handleDelete = ()=>{
    toast.success("Successfully Delete this prayer watch", {duration: 1000})
  }
  return (
    <Modal
      footer={null}
      title=""
      width={350}
      centered
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <h2 className=" text-2xl text-[#1D242D] font-bold text-center mt-4">
        Are you sure?
      </h2>
      <p className=" text-base text-[#1D242D] text-center mt-4">
        You want to <span className="text-red-600">delete</span>{" "} this prayer watch!
      
      </p>
      <div className=" flex justify-center gap-3 my-4 ">
        <button
          onClick={handleCancel}
          className=" text-base px-[28px] border-2 border-[#1D242D] py-2 rounded-md bg-white text-[#1D242D]"
        >
          Cancel
        </button>
        <button
          onClick={handleDelete}
          className=" text-base px-[34px] py-[10px] rounded-md bg-[#CD0335] text-white"
        >
         Delete
        </button>
      </div>
    </Modal>
  );
};

export default DeletePrayer;
