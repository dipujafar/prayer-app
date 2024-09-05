"use client";

import { Button, Pagination } from "antd";
import { useState } from "react";
import PrayerUploadModal from "./PrayerUploadModal";
import { UploadOutlined } from "@ant-design/icons";
import PrayerCard from "./PrayerCard";

const PrayerContainer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);  
  const pageSize = 9; 

  const prayerData = Array.from({ length: 16 }, (_, index) => ({ id: index, name: `Prayer ${index + 1}` }));

    // Calculate start and end index for slicing the doctors data based on the current page and page size
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const currentPrayerData = prayerData.slice(startIndex, endIndex);

  return (
    <div>
        <div className="mb-4">
      <Button icon={<UploadOutlined />}  onClick={()=> setModalOpen(true)} block size="large" style={{
        color: "black",
        backgroundColor: "#F0BE1B",
        border: "none"
      }}>
       Upload Prayer Watch
      </Button>
      {/* calling modal  */}
      <PrayerUploadModal state={modalOpen} setState={setModalOpen}></PrayerUploadModal>
      </div>

      {/* Prayer cards */}
      <div className="grid grid-cols-3 gap-4">
        {
            currentPrayerData?.map(prayer=><PrayerCard></PrayerCard>)
        }
      </div>
      <div className="w-max mt-5 ml-auto">
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={prayerData.length}
                    onChange={(page)=>setCurrentPage(page)}
                    showSizeChanger={false}  // Disable page size changer if unnecessary
                />
            </div>
    </div>
  );
};

export default PrayerContainer;
