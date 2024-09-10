"use client"
import Image from "next/image";
import image from "../../../assets/event/event.jpg";
import { SlLocationPin } from "react-icons/sl";
import { RxClock } from "react-icons/rx";
import { FiEdit } from "react-icons/fi";
import { message, Popconfirm, PopconfirmProps } from "antd";
import { FaRegTrashCan } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import EventEditModal from "./EventEditModal";
import { useState } from "react";



const SingleEventContent = () => {
    const [open, setOpen] = useState(false);
    const route = useRouter();

    const confirm: PopconfirmProps["onConfirm"] = (e) => {
        console.log(e);
        message.success("successfully delete");
        route.push("/event")
      };

  return (
    <div>
        {/* delete and edit */}
        <div className="flex items-center justify-center gap-2 mb-3">
            <button onClick={()=>setOpen(!open)} className="bg-[#ffffff] p-3 rounded-full">
              <FiEdit color="black" size={20} />
            </button>

            <Popconfirm
              title="Delete the Event"
              description="Are you sure to delete this event?"
              onConfirm={confirm}
              okText="delete"
              cancelText="No"
            >
              <div className="bg-[#e23a51] p-3 rounded-full">
                <FaRegTrashCan color="white" size={20} />
              </div>
            </Popconfirm>
          </div>
      <div className="w-full h-[250px] relative overflow-hidden rounded-md">
        <Image
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={image}
          layout="fill"
          alt="Event image"
        />
      </div>
      <div className="w-full flex justify-between items-center py-6">
        <div className="">
          <h2 className="text-3xl font-bold text-white">
            Thursday Bible Study
          </h2>
          <div className="flex gap-1 items-center text-white mt-3">
            <SlLocationPin className="w-5 h-5" />
            <p className="text-base">1012 Avenue, New York, USA</p>
          </div>
        </div>

        <div className="text-white flex gap-3 items-center">
          <RxClock className="w-6 h-6" />
          <p className="flex items-center gap-1">7/27/2024</p>
          <p className="text-base">12:00pm-7:30pm</p>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <h2 className="text-4xl text-secondary font-bold mb-3">About</h2>

          
        </div>
        <p className="text-white text-base">
          This Thursday, our Bible Study group will be gathering for an
          enriching evening of fellowship and reflection. We will delve into the
          Book of Psalms, focusing on the themes of praise, worship, and
          God&apos;s faithfulness. The discussion will be led by Pastor John,
          who will provide insights and encourage group participation. Light
          refreshments will be served, and all attendees are welcome to share
          their thoughts and questions. Join us for an inspiring time of
          spiritual growth and community bonding. Don&apos;t miss this
          opportunity to deepen your understanding and connection with
          God&apos;s Word.
        </p>
      </div>
      <EventEditModal  open={open} setOpen={setOpen}></EventEditModal>
    </div>
  );
};

export default SingleEventContent;
