"use client";
import {
  Button,
  ConfigProvider,
  Popconfirm,
  Table,
  message,
  PopconfirmProps,
} from "antd";
import { ColumnsType } from "antd/es/table";
import disable from "../../../assets/account-details/disable-account.svg";
import Image from "next/image";
import { useState } from "react";
import BlockAccoutModal from "./BlockAccoutModal";
import { FaRegTrashCan } from "react-icons/fa6";

const AccountsDetailsTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    console.log("Now Clicked");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // delete user
  const confirm: PopconfirmProps["onConfirm"] = (e) => {
    console.log(e);
    message.success("successfully delete");
  };

  const dataSource = Array.from({ length: 27 }).map((data, inx) => ({
    key: inx + 1,
    serial: inx + 1,
    name: "Mike",
    email: "email@gmail.com",
    date: "11 Oct 2024, 11:00 PM",
  }));

  const columns: ColumnsType<{
    key: string;
    serial: string;
    name: string;
    email: string;
    date: string;
  }> = [
    { title: "Serial", dataIndex: "serial", key: "serial", align: "center" },
    { title: "Name", dataIndex: "name", key: "name", align: "center" },
    { title: "Email", dataIndex: "email", key: "email", align: "center" },
    { title: "Date", dataIndex: "date", key: "date", align: "center" },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      align: "center",
      render: (_: any, record: any) => (
        <div className="flex justify-center items-center gap-2">
          <Popconfirm
            title="Delete the Video"
            description="Are you sure to delete this video?"
            onConfirm={confirm}
            okText="delete"
            cancelText="No"
          >
            <FaRegTrashCan color="red" size={24} className="cursor-pointer" />
          </Popconfirm>

          <Button
            style={{ background: "transparent", border: "none" }}
            onClick={showModal}
          >
            <Image
              className="mx-auto"
              src={disable}
              alt="disable"
              width={40}
              height={40}
            />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="bg-[#FDFDFD] rounded-md">
        <ConfigProvider
          theme={{
            components: {
              Table: {
                bodySortBg: "#F0BE1B",
                borderColor: "#00000026",
                headerBg: "#F0BE1B",
                colorBgContainer: "#FDFDFD",
                colorText: "black",
                headerColor: "black",
                headerSplitColor: "transparent",
              },
            },
          }}
        >
          <Table
            className="table-menu-custom"
            dataSource={dataSource}
            //@ts-ignore
            columns={columns}
          />
        </ConfigProvider>
        <BlockAccoutModal
          isModalOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
        ></BlockAccoutModal>
      </div>
    </>
  );
};

export default AccountsDetailsTable;
