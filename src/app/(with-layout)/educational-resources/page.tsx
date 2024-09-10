"use client";
import UploadEbook from "@/components/(withLayout)/EducationalResources/UploadEbook";
import book from "../../../assets/educational-resources/book.png";
import BookCart from "@/components/(withLayout)/EducationalResources/BookCart";
import { Pagination } from "antd";
import { useState } from "react";

const EducationalResources = () => {
  const data = Array.from({ length: 21 }).map((data, inx) => ({
    _id: inx + 1,
    image: book,
    name: "Harry Potter & the Philosophers Stone",
    author: "J.K. Rowling",
    description:
      "A young wizard discovers his magical heritage and attends Hogwarts School of Witchcraft and Wizardry.",
  }));

  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 12;

  // Calculate start and end index for slicing the doctors data based on the current page and page size
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <UploadEbook></UploadEbook>
      <div>
        <div className=" grid grid-cols-3 gap-8 mt-8 ">
          {currentData.map((data) => (
            <BookCart key={data._id} data={data}></BookCart>
          ))}
        </div>
        <div className="py-6">
          <Pagination
            className="custom-pagination-all"
            align="end"
            current={currentPage}
            pageSize={pageSize}
            total={data.length}
            onChange={handlePageChange}
            defaultCurrent={1}
          />
        </div>
      </div>
    </div>
  );
};

export default EducationalResources;
