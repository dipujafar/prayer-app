"use client";
import { Divider, message, Modal, Popconfirm, PopconfirmProps } from "antd";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import ProductEditModal from "./ProductEditModal";
import { useState } from "react";
import Image from "next/image";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
  data: any;
};

// delete video
const confirm: PopconfirmProps["onConfirm"] = (e) => {
  console.log(e);
  message.success("successfully delete");
};

const ProductDetailsModal = ({ open, setOpen, data }: TPropsType) => {
  const [openEdit, setOpenEdit] = useState(false);
  return (
    <>
      <Modal
        open={open}
        footer={null}
        centered={true}
        onCancel={() => setOpen(false)}
        style={{
          minWidth: "max-content",
          position: "relative",
        }}
      >
        <div className="pb-2">
          <h4 className="text-center text-2xl font-medium">Product Details</h4>
          <div className="mt-5">
            <Image
              src={data?.image}
              alt="image"
              width={1900}
              height={1000}
              className="w-full h-44 object-fill"
            />
            <div className="mt-10">
              <div className="flex justify-between">
                <h4>Product Name :</h4>
                <p className="font-medium">{data?.name}</p>
              </div>
              <Divider></Divider>
              <div className="flex justify-between">
                <h4>Size:</h4>
                <div>
                  {data.size.map((s: string[], inx: number) => (
                    <span
                      key={inx}
                      className=" bg-slate-200 p-1 rounded-md text-black m-1 uppercase"
                    >
                      {s}
                    </span>
                  ))}
                  <p className="font-medium"></p>
                </div>
              </div>
              <Divider></Divider>
              <div className="flex justify-between">
                <h4>Price :</h4>
                <p className="font-medium">${data?.price}</p>
              </div>
              <Divider></Divider>
              <p className="text-center">{data?.description}</p>
              <Divider></Divider>
            </div>
          </div>
          {/* action button */}
          <div className="flex gap-1 justify-end">
            <button
              className="bg-[#5A015E] p-3 rounded-full"
              onClick={() => {
                setOpenEdit(!openEdit);
                setOpen(false);
              }}
            >
              <FiEdit color="white" size={20} />
            </button>

            <Popconfirm
              title="Delete the Video"
              description="Are you sure to delete this video?"
              onConfirm={confirm}
              okText="delete"
              cancelText="No"
            >
              <div className="bg-[#e23a51] p-3 rounded-full cursor-pointer">
                <FaRegTrashCan color="white" size={20} />
              </div>
            </Popconfirm>
          </div>
        </div>
      </Modal>
      <ProductEditModal
        open={openEdit}
        setOpen={setOpenEdit}
        data={data}
      ></ProductEditModal>
    </>
  );
};

export default ProductDetailsModal;
