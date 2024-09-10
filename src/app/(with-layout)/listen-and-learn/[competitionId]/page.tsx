"use client"
import CompetitionTopBanner from "@/components/(withLayout)/Listen&Learn/CompetitionTopBanner";
import SingleVideoCart from "@/components/(withLayout)/Listen&Learn/SingleVideoCart";
import UploadVideo from "@/components/(withLayout)/Listen&Learn/UploadVideo";
import { Pagination } from "antd";
import { useState } from "react";

const VideoPage = ({ params }: any) => {
    console.log(params);

    const data = [
        {
            _id: 1,
            number: 1,
            title: "Why Using Graphic",
            time: "15min",
        },
        {
            _id: 2,
            number: 2,
            title: "Why Using Graphic",
            time: "15min",
        },
        {
            _id: 3,
            number: 3,
            title: "Why Using Graphic",
            time: "15min",
        },
        {
            _id: 4,
            number: 4,
            title: "Why Using Graphic",
            time: "15min",
        },
        {
            _id: 5,
            number: 5,
            title: "Why Using Graphic",
            time: "15min",
        },
        {
            _id: 6,
            number: 6,
            title: "Why Using Graphic",
            time: "15min",
        },
        {
            _id: 7,
            number: 7,
            title: "Why Using Graphic",
            time: "15min",
        },
    ]


    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageSize = 5;

    const startData =  (currentPage - 1) * pageSize;
    const endData = currentPage * pageSize;

    const currentData = data.slice(startData, endData)

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        console.log(`Current page: ${page}`);
    };

    return (
        <div>
            <CompetitionTopBanner></CompetitionTopBanner>
            <div className="mt-4">
                <UploadVideo></UploadVideo>
            </div>
            <div>
                {
                    currentData?.map(data => <SingleVideoCart params={params}  key={data._id} data={data}></SingleVideoCart>)
                }

            </div>
            <div className="py-6">
                <Pagination
                    align="end"
                    className="custom-pagination-all mt-4"
                    current={currentPage}
                    pageSize={pageSize}
                    total={data.length}
                    onChange={handlePageChange} defaultCurrent={1}
                />
            </div>
        </div>
    );
};

export default VideoPage;