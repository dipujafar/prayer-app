"use client";

import { useState } from "react";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { FaRegTrashCan } from "react-icons/fa6";
import PopUpVideo from "./PopUpVideo";
import type { PopconfirmProps } from "antd";
import { Button, ConfigProvider, message, Popconfirm } from "antd";

const SingleVideoCart = ({ data }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  // delete video
  const confirm: PopconfirmProps["onConfirm"] = (e) => {
    console.log(e);
    message.success("successfully delete");
  };

  return (
    <div className=" flex justify-between items-center py-4 border-b border-b-[#ffffff4f]">
      <div className=" flex items-center gap-6">
        <span className=" px-[22px] py-[12px] rounded-full bg-white border-4 border-[#E6D9E7] text-primary font-bold text-2xl">
          {data.number}
        </span>
        <div>
          <p className=" text-white font-semibold text-xl">{data.title}</p>
          <p className="text-secondary text-lg">{data.time}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        {/* <Link href={`/listen-and-learn/${params?.competitionId}/play-video`}> */}
        <TbPlayerPlayFilled
          onClick={showModal}
          className=" w-12 h-12 p-4 text-primary bg-white rounded-full cursor-pointer "
        />

        <Popconfirm
          title="Delete the Video"
          description="Are you sure to delete this video?"
          onConfirm={confirm}
          okText="delete"
          cancelText="No"
        >
          <div className="bg-white p-3 rounded-full">
            <FaRegTrashCan color="#000" size={20} />
          </div>
        </Popconfirm>
      </div>
      <PopUpVideo
        isModalOpen={isModalOpen}
        showModal={showModal}
        handleOk={handleOk}
        setIsModalOpen={setIsModalOpen}
      ></PopUpVideo>
    </div>
  );
};

export default SingleVideoCart;
