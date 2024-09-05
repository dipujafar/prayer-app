"use client"
import Image from "next/image";
import prayerImg from "@/assets/prayer-watch/prayerImg.png";
import { Button } from "antd";
import { useState } from "react";
import DeletePrayer from "./DeletePrayer";
import PrayerEditModal from "./PrayerEditModal";

const PrayerCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const handleOk = () => {
      setIsModalOpen(false);
  };

  const handleCancel = () => {
      setIsModalOpen(false);
  };
  return (
    <div className="font-urbanist bg-white p-4 space-y-3 rounded">
      <div className="flex items-center gap-3">
        <Image src={prayerImg} alt="prayerImage"></Image>
        <div className="text-lg font-bold">
            <h1>1st Watch </h1>
            <h1>{`(6PM - 9PM)`}</h1>
        </div>
      </div>
      <h1 className="font-bold">Divine Beginnings for us…</h1>
      <p className="font-medium text-whiteDarker">Please pray about a situation where people on a certain place continuously harass people and make them believe God isn't with them. Please pray for the Holy Spirit to convict them and for God to read more.</p>
      <div className="flex gap-2">
        <Button onClick={()=>setEditModalOpen(true)} style={{backgroundColor: "#5A015E", color: "white"}} block>Edit</Button>
        <Button onClick={()=>setIsModalOpen(true)} danger block>Delete</Button>
      </div>
      <DeletePrayer isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}></DeletePrayer>
      <PrayerEditModal state={editModalOpen} setState={setEditModalOpen}></PrayerEditModal>
    </div>
  );
};


export default PrayerCard;
