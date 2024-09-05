import { Modal } from "antd";
import React from "react";

const DeletePrayer = ({ isModalOpen, handleOk, handleCancel }: any) => {
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
          onClick={handleOk}
          className=" text-base px-[34px] py-[10px] rounded-md bg-[#1D242D] text-white"
        >
          Done
        </button>
      </div>
    </Modal>
  );
};

export default DeletePrayer;
