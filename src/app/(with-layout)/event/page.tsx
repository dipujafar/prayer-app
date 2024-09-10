"use client"
import UploadEvent from "@/components/(withLayout)/Event/UploadEvent";
import { Pagination } from "antd";
import { useState } from "react";
import event from "../../../assets/event/event.jpg"
import EventCart from "@/components/(withLayout)/Event/EventCart";

const Event = () => {
    
    const data = Array.from({length: 27}).map((data,indx)=>(
            {
            _id: 1,
            image: event,
            name: 'Thursday Bible Study',
            date: '7/27/2024',
            time: '12:00pm-7:30pm'
        }
    ))
    
    


    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageSize = 9;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        console.log(`Current page: ${page}`);
    };

    const startData = (currentPage - 1 ) * pageSize;
    const endData = currentPage * pageSize

    const currentData = data?.slice(startData, endData);

    return (
        <div>
            <UploadEvent></UploadEvent>
            <div>
                <div className=" grid grid-cols-3 gap-8 mt-8 ">
                    {
                        currentData.map(data => <EventCart key={data._id} data={data}></EventCart>)
                    }
                </div>
                <div className="py-6">
                    <Pagination
                        align="end"
                        className="custom-pagination-all"
                        current={currentPage}
                        pageSize={pageSize}
                        total={data?.length}
                        onChange={handlePageChange} defaultCurrent={1}
                    />
                </div>

            </div>
        </div>
    );
};

export default Event;