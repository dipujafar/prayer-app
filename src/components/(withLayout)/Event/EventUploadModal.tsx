import { Button, ConfigProvider, DatePicker, DatePickerProps, message, Modal, TimePicker, TimePickerProps, Typography, Upload, UploadProps } from "antd";
import { FiUpload } from "react-icons/fi";
import { Form, Input } from 'antd';
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

const EventUploadModal = ({ isModalOpen, handleOk, handleCancel }: any) => {

    const [date, setDate] = useState<string | string[]>('');

    const props: UploadProps = {
        name: 'file',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    // handle date picker
    const onChangeDatePicker: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
        setDate(dateString)
    };

    // handle time pciker
    const onChangeTimePicker: TimePickerProps['onChange'] = (time, timeString) => {
        console.log(time, timeString);
    };

    return (
        <Modal
            footer={null}
            width={800}
            centered
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <Form
                name="eventCoverImg"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                style={{ maxWidth: '100%' }}
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <div className="mb-4">
                    <Typography.Text style={{ fontSize: "18px" }}>
                    Event Cover Image
                    </Typography.Text>
                </div>
                {/* Upload Image */}
                <Form.Item
                    className="mb-4 "
                    name="eventCoverImg"
                >
                    <Upload className=" w-full" {...props}>
                        <div className="w-[752px] h-[100px] border border-[#5A015E] border-dashed rounded-lg flex items-center justify-center cursor-pointer">
                            <FiUpload className="w-7 h-7 mr-3 text-[#5A015E]" />
                            <p className="text-lg text-[#5A015E]">Upload Image</p>
                        </div>
                    </Upload>
                </Form.Item>

                {/* Name Input */}
                <Form.Item
                    className=" w-[752px]"
                    label={<span style={{ fontSize: "18px" }}>Event Name</span>}
                    name="eventName"
                    rules={[{ required: true, message: 'Please input event Name!' }]}
                >
                    <Input placeholder="Enter Evant Name..." className="border-primary" style={{ padding: "10px" }} />
                </Form.Item>

                {/* date picker */}
                <Form.Item
                    label={<span style={{ fontSize: "18px" }}>Date</span>}
                    rules={[{ required: true, message: 'Please input date!' }]}
                >
                    <ConfigProvider
                        theme={{
                            components: {
                                DatePicker: {
                                    activeBorderColor: "#5A015E",
                                    hoverBorderColor: "#5A015E",
                                    colorBorder: "#5A015E",
                                },
                            },
                        }}
                    >
                        <DatePicker style={{ width: '100%', padding: "10px" }} onChange={onChangeDatePicker} />
                    </ConfigProvider>

                </Form.Item>

                {/* time picker */}
                <Form.Item
                    label={<span style={{ fontSize: "18px" }}>Time</span>}
                    rules={[{ required: true, message: 'Please input date!' }]}
                >
                    <ConfigProvider
                        theme={{
                            components: {
                                DatePicker: {
                                    activeBorderColor: "#5A015E",
                                    hoverBorderColor: "#5A015E",
                                    colorBorder: "#5A015E",
                                },
                            },
                        }}
                    >

                    <TimePicker style={{ width: '100%', padding: "10px" }} onChange={onChangeTimePicker} />
                    </ConfigProvider>

                </Form.Item>

                {/* Event fee Input */}
                <Form.Item
                    className=" w-[752px]"
                    label={<span style={{ fontSize: "18px" }}>Event Fee</span>}
                    name="eventFree"
                    rules={[{ required: true, message: 'Please input event location!' }]}
                >
                    <Input placeholder="Enter Event Fee" className="border-primary" style={{ padding: "10px" }} />
                </Form.Item>




                {/* Short Description */}
                <Form.Item
                    label={<span style={{ fontSize: "18px" }}>About</span>}
                    name="description"
                >
                    <TextArea className="border-primary hover:border-primary" placeholder="Type here..." rows={4} />
                </Form.Item>


                {/* Submit Button */}
                <Form.Item
                    className="mt-6"
                >
                   
                        <Button block size="large" htmlType="submit">
                            Upload
                        </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default EventUploadModal;
