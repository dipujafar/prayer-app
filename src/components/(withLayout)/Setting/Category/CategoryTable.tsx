"use client"
import { ConfigProvider, Pagination, Table } from "antd";



const CategoryTable = () => {

    const dataSource = [
        {
            key: '1',
            categoryName: 'T-Shirt',
            categorySerial: 15,
        },
        {
            key: '2',
            categoryName: 'Shirt',
            categorySerial: 18,
        },
        {
            key: '3',
            categoryName: 'Shirt',
            categorySerial: 18,
        },
        {
            key: '4',
            categoryName: 'Shirt',
            categorySerial: 18,
        },
        {
            key: '5',
            categoryName: 'Shirt',
            categorySerial: 18,
        },
        {
            key: '6',
            categoryName: 'Shirt',
            categorySerial: 18,
        },
        {
            key: '7',
            categoryName: 'Shirt',
            categorySerial: 18,
        },
        {
            key: '8',
            categoryName: 'Shirt',
            categorySerial: 18,
        },
        {
            key: '9',
            categoryName: 'Shirt',
            categorySerial: 18,
        },
        {
            key: '10',
            categoryName: 'Shirt',
            categorySerial: 18,
        },
       
    ];

    const columns = [
        {
            title: 'Category Name',
            dataIndex: 'categoryName',
            key: 'categoryName',
            align: 'left',
        },
        {
            title: 'Category Serial',
            dataIndex: 'categorySerial',
            key: 'categorySerial',
            align: 'right',
        },

    ];



    return (
        <>
            <div className="bg-white rounded-md ">

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
                        className="px-4 overflow-auto h-[65vh] "
                        align="center"
                        dataSource={dataSource}
                        // @ts-ignore
                        columns={columns}
                        pagination={{pageSize: 8}}
                    />
                </ConfigProvider>

            </div>

        </>
    );
};

export default CategoryTable;
