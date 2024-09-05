"use client"
import UploadTraning from "@/components/(withLayout)/Listen&Learn/UploadTraning";
import WorkShopCart from "@/components/(withLayout)/Listen&Learn/WorkShopCart";
import { Pagination } from "antd";
import { useState } from "react";
import image from "../../../assets/training-workshop/workshop.jpg"

const TrainingAndWorkshop = () => {
    const data = [
        {
            _id: 1,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total_video: '120'
        },
        {
            _id: 2,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total_video: '120'
        },
        {
            _id: 3,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total_video: '120'
        },
        {
            _id: 4,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total_video: '120'
        },
        {
            _id: 5,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total_video: '120'
        },
        {
            _id: 6,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total_video: '120'
        },
        {
            _id: 7,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total_video: '120'
        },
        {
            _id: 8,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total_video: '120'
        },
        {
            _id: 9,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total_video: '120'
        },
        {
            _id: 11,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total_video: '120'
        },
        {
            _id: 12,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total_video: '120'
        },
        {
            _id: 13,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total_video: '120'
        },
        {
            _id: 14,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total_video: '120'
        },
        {
            _id: 15,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total_video: '120'
        },
        {
            _id: 16,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total_video: '120'
        },
        {
            _id: 17,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total_video: '120'
        },
        {
            _id: 18,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total_video: '120'
        },
        {
            _id: 19,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total_video: '120'
        },
        {
            _id: 20,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total_video: '120'
        },
        {
            _id: 21,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total_video: '120'
        },
        {
            _id: 22,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total_video: '120'
        },
    ];



    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageSize = 18;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        console.log(`Current page: ${page}`);
    };

    const startData  = (currentPage - 1) * pageSize
    const endData  = currentPage * pageSize

    const currentData = data?.slice(startData, endData);



    return (
        <div>
            <UploadTraning></UploadTraning>
            <div>
                <div className=" grid grid-cols-6 gap-6 mt-8 ">
                    {
                        currentData.map(data => <WorkShopCart key={data._id} data={data}></WorkShopCart>)
                    }
                </div>
                <div className="py-6">
                    <Pagination
                        align="end"
                        className="custom-pagination-all"
                        current={currentPage}
                        pageSize={pageSize}
                        total={data.length}
                        onChange={handlePageChange} defaultCurrent={1}
                    />
                </div>

            </div>
        </div>
    );
};

export default TrainingAndWorkshop;