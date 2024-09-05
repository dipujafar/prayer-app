"use client"
import { ConfigProvider, Pagination, Table } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";


const OrderTable = () => {

    const dataSource = [
        {
            key: '1',
            orderId: '1',
            Product: 'Hoodie',
            Date: '11 Oct 2024',
            customerName: 'Emon',
            Amount: 150,
        },
        {
            key: '2',
            orderId: '2',
            Product: 'Hoodie',
            Date: '12 Oct 2024',
            customerName: 'Sara',
            Status: false,
            Amount: 200,
        },
        {
            key: '3',
            orderId: '3',
            Product: 'Denim Jacket',
            Date: '13 Oct 2024',
            customerName: 'John',
            Status: true,
            Amount: 180,
        },
        {
            key: '4',
            orderId: '4',
            Product: 'Sweater',
            Date: '14 Oct 2024',
            customerName: 'Lisa',
            Status: true,
            Amount: 140,
        },
        {
            key: '5',
            orderId: '5',
            Product: 'Casual Shirt',
            Date: '15 Oct 2024',
            customerName: 'Michael',
            Status: false,
            Amount: 130,
        },
        {
            key: '6',
            orderId: '6',
            Product: 'Jacket',
            Date: '16 Oct 2024',
            customerName: 'Anna',
            Status: false,
            Amount: 200,
        },
        {
            key: '7',
            orderId: '7',
            Product: 'Blazer',
            Date: '17 Oct 2024',
            customerName: 'David',
            Status: true,
            Amount: 220,
        },
        {
            key: '8',
            orderId: '8',
            Product: 'Polo Shirt',
            Date: '18 Oct 2024',
            customerName: 'Emma',
            Status: false,
            Amount: 110,
        },
        {
            key: '9',
            orderId: '9',
            Product: 'Polo Shirt',
            Date: '18 Oct 2024',
            customerName: 'Emma',
            Status: false,
            Amount: 110,
        },
        {
            key: '10',
            orderId: '10',
            Product: 'Polo Shirt',
            Date: '18 Oct 2024',
            customerName: 'Emma',
            Status: false,
            Amount: 110,
        },
        {
            key: '11',
            orderId: '11',
            Product: 'Polo Shirt',
            Date: '18 Oct 2024',
            customerName: 'Emma',
            Status: false,
            Amount: 110,
        },
        {
            key: '12',
            orderId: '12',
            Product: 'Polo Shirt',
            Date: '18 Oct 2024',
            customerName: 'Emma',
            Status: false,
            Amount: 110,
        },
    ];

    const columns = [
        {
            title: 'Order Id',
            dataIndex: 'orderId',
            key: 'orderId',
            align: 'center',
        },
        {
            title: 'Product',
            dataIndex: 'Product',
            key: 'Product',
            align: 'center',
        },
        {
            title: 'Date',
            dataIndex: 'Date',
            key: 'Date',
            align: 'center',
        },
        {
            title: 'Customer Name',
            dataIndex: 'customerName',
            key: 'customerName',
            align: 'center',
        },
        {
            title: 'Status',
            dataIndex: 'Status',
            key: 'Status',
            align: 'center',
            render: (status: boolean) => (status ? 'Completed' : 'Pending'),
        },
        {
            title: 'Amount',
            dataIndex: 'Amount',
            key: 'Amount',
            align: 'center',
        },
    ];


    const router = useRouter();
    const handleRowClick = (recordId: any) => {
        console.log(recordId)
        router.push(`/order-list/${recordId}`);
    };

  
    return (
        <>
            <div className="bg-[#EFE6EF] rounded-md pb-10">
                <p className="text-2xl font-bold ml-20 pt-6">Recent Purchases</p>

                <ConfigProvider
                    theme={{
                        components: {
                            Table: {
                                bodySortBg: "#F0BE1B",
                                borderColor: "#00000026",
                                headerBg: "transparent",
                                colorBgContainer: "transparent",
                                colorText: "black",
                                headerColor: "black",
                            },
                        },
                    }}
                >
                    <Table
                        className="px-10 h-auto cursor-pointer"
                        align="center"
                        dataSource={dataSource}
                        //@ts-ignore
                        columns={columns}
                        pagination={{pageSize: 10}}
                        onRow={(record) => ({
                            onClick: () => handleRowClick(record.orderId),
                        })}
                    />
                </ConfigProvider>

            </div>
            
        </>
    );
};

export default OrderTable;
