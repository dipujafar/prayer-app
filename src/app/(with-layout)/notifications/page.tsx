"use client"
import { notifications } from "@/utils";
import { Col, Flex, Pagination } from "antd";
import { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";

const NotificationsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);  
    const pageSize = 6; 

      // Calculate start and end index for slicing the doctors data based on the current page and page size
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = startIndex + pageSize;
  
      // Slice the data for the current page
      const currentnotifications = notifications.slice(startIndex, endIndex);

  return (
    <div>
      <h1 className="text-2xl text-white font-bold mb-5">All Notifications</h1>

      <div className="bg-white h-[720px] overflow-auto">

      {/* All Notificatios  */}
      <div className="grid grid-cols-1 gap-2  rounded py-5">
        {currentnotifications.map((notification) => (
          <Flex justify="center" key={notification.id}>
            <Col span={18}>
              <div className="flex gap-4 font-urbanist p-4 border text-white border-[#b973bd] rounded">
                <div className="flex justify-center  items-center gap-8">
                  <div>
                    <IoNotificationsOutline size={32} color="2B4E63" />
                  </div>
                  <div>
                    <h1 className="text-lg font-medium mb-2 text-black">
                      {notification.message}
                    </h1>
                    <p className=" text-secondary-color mb-1">
                      {notification.time}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Flex>
        ))}
      </div>
      {/* pagination */}
      <div  className="w-max mt-3 ml-auto">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={notifications.length}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false} // Disable page size changer if unnecessary
        />
      </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
