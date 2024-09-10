import { TStateProps } from "@/type/utilsType";
import {
  Button,
  ConfigProvider,
  Flex,
  Form,
  Input,
  Modal,
  TimePicker,
  Upload,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import Image from "next/image";
import prayerImg from "@/assets/prayer-watch/prayerImg.png";
import { MdOutlineEdit } from "react-icons/md";
import moment from 'moment';
const PrayerEditModal = ({
  state: modalOpen,
  setState: setModalOpen,
}: TStateProps<boolean>) => {
  const [form] = Form.useForm();
  
  const initialValues = {
    prayerName: "example..",
    description:
      "Please pray about a situation where people on a certain place continuously harass people and make them believe God isn't with them. Please pray for the Holy Spirit to convict them and for God to read more.",
      startTime: moment("08:00 AM", "h:mm A"),  
      endTime: moment("09:00 AM", "h:mm A"), 
  }

  //@ts-ignore
  const handleSubmit = (values) => {
    console.log("form values", values);
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorBgContainer: "transparent",
            activeBorderColor: "#5A015E",
            hoverBorderColor: "#5A015E",
            colorIcon: "rgb(51, 74, 85)",
            colorTextPlaceholder: "rgb(192, 199, 202)",
            colorBorder: "#D9D9D9",
          },
          Select: {
            colorTextPlaceholder: "rgb(192, 199, 202)",
          },
        },
      }}
    >
      <Modal
        open={modalOpen}
        footer={null}
        centered={true}
        onCancel={() => setModalOpen(false)}
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
            initialValues={initialValues}
          >
            <div className="flex justify-center rounded-full">
              <Image
                src={prayerImg}
                alt="defaultImage"
                className="rounded-full size-28"
              ></Image>
            </div>

            {/* image upload  */}
            <Form.Item
              name="coverImg"
              valuePropName="fileList"
              getValueFromEvent={(e) =>
                Array.isArray(e) ? e : e && e.fileList
              }
              style={{
                textAlign: "center",
                position: "relative",
                bottom: "35px",
                left: "40px",
              }}
            >
              <Upload
                name="coverImg"
                listType="picture"
                beforeUpload={() => false}
              >
                <div className="bg-[#2B4E63] p-1 rounded">
                  <MdOutlineEdit size={20} className="text-white " />
                </div>
              </Upload>
            </Form.Item>

            {/*  input  Prayer Name */}
            <Form.Item label="Prayer Name" name="prayerName">
              <Input size="large" placeholder="Enter Doctor Title"></Input>
            </Form.Item>

            {/* input time */}
            <Flex gap={10} style={{ display: "flex", width: "100%" }}>
              <Form.Item label="To" name="startTime" style={{ flex: 1 }}>
                <TimePicker
                  placeholder="Select prayer start time"
                  size="large"
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>

              <Form.Item label="From" name="endTime" style={{ flex: 1 }}>
                <TimePicker
                  placeholder="Select prayer end time"
                  size="large"
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>
            </Flex>

            {/* input  About Doctor */}
            <Form.Item label="Description" name="description">
              <TextArea rows={5}></TextArea>
            </Form.Item>

            <Button
              htmlType="submit"
             block
              size="large"
            >
              Upload
            </Button>
          </Form>
        </div>
      </Modal>
    </ConfigProvider>
  );
};

export default PrayerEditModal;
