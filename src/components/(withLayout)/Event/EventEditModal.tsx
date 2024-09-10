import {
  Button,
  DatePicker,
  DatePickerProps,
  Form,
  Input,
  Modal,
  TimePicker,
  TimePickerProps,
  Upload,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { MdOutlineEdit } from "react-icons/md";
import coverImage from "@/assets/event/event.jpg";
import Image from "next/image";
import { useState } from "react";
import moment from "moment"; // Import moment for date and time handling

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

const EventEditModal = ({ open, setOpen }: TPropsType) => {
  const [form] = Form.useForm();
  const [date, setDate] = useState<string | string[]>("");

  // handle date picker
  const onChangeDatePicker: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
    setDate(dateString);
  };

  // handle time picker
  const onChangeTimePicker: TimePickerProps["onChange"] = (time, timeString) => {
    console.log(time, timeString);
  };

  const handleSubmit = (values: any) => {
    console.log("form values", values);
    setOpen(false);
  };

  // Converting string date/time to moment for initialValues
  const initialDate = moment("2024-08-31", "YYYY-MM-DD") 
  const initialTime =  moment("14:30", "HH:mm") 

  return (
    <Modal
      open={open}
      footer={null}
      centered={true}
      onCancel={() => setOpen(false)}
      style={{
        minWidth: "max-content",
      }}
    >
      <div>
        <Form
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
          style={{
            maxWidth: 500,
            marginTop: "25px",
          }}
          initialValues={{
            eventName: "Bible Study",
            date: initialDate, // Date as moment object
            time: initialTime, // Time as moment object
            eventFee:  "150",
            description:  "This Thursday, our Bible Study group will be gathering for an enriching evening of fellowship and reflection. We will delve into the Book of Psalms, focusing on the themes of praise, worship, and God's faithfulness. The discussion will be led by Pastor John, who will provide insights and encourage group participation. Light refreshments will be served, and all attendees are welcome to share their thoughts and questions. Join us for an inspiring time of spiritual growth and community bonding. Don't miss this opportunity to deepen your understanding and connection with God's Word.",
          }}
        >
          <div className="flex justify-center rounded-full">
            <Image
              src={coverImage}
              alt="defaultImage"
              className="rounded-full size-28"
            ></Image>
          </div>

          {/* image upload */}
          <Form.Item
            name="coverImage"
            valuePropName="fileList"
            getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
            style={{
              textAlign: "center",
              position: "relative",
              bottom: "35px",
              left: "40px",
            }}
          >
            <Upload name="coverImage" listType="picture" beforeUpload={() => false}>
              <div className="bg-[#5A015E] p-1 rounded">
                <MdOutlineEdit size={20} className="text-white " />
              </div>
            </Upload>
          </Form.Item>

          {/* Name Input */}
          <Form.Item
            label={<span style={{ fontSize: "18px" }}>Event Name</span>}
            name="eventName"
            rules={[{ required: true, message: "Please input event Name!" }]}
          >
            <Input
              placeholder="Enter Event Name..."
              className="border-primary"
              style={{ padding: "10px" }}
            />
          </Form.Item>

          {/* Date Picker */}
          <Form.Item
            label={<span style={{ fontSize: "18px" }}>Date</span>}
            name="date"
            rules={[{ required: true, message: "Please input date!" }]}
          >
            <DatePicker
              style={{ width: "100%", padding: "10px" }}
              onChange={onChangeDatePicker}
            />
          </Form.Item>

          {/* Time Picker */}
          <Form.Item
            label={<span style={{ fontSize: "18px" }}>Time</span>}
            name="time"
            rules={[{ required: true, message: "Please input time!" }]}
          >
            <TimePicker
              style={{ width: "100%", padding: "10px" }}
              onChange={onChangeTimePicker}
            />
          </Form.Item>

          {/* Event Fee Input */}
          <Form.Item
            label={<span style={{ fontSize: "18px" }}>Event Fee</span>}
            name="eventFee"
            rules={[{ required: true, message: "Please input event fee!" }]}
          >
            <Input
              placeholder="Enter Event Fee"
              className="border-primary"
              style={{ padding: "10px" }}
            />
          </Form.Item>

          {/* Short Description */}
          <Form.Item
            label={<span style={{ fontSize: "18px" }}>About</span>}
            name="description"
          >
            <TextArea
              className="border-primary hover:border-primary"
              placeholder="Type here..."
              rows={4}
            />
          </Form.Item>

          <Button htmlType="submit" block size="large">
            Change
          </Button>
        </Form>
      </div>
    </Modal>
  );
};

export default EventEditModal;
