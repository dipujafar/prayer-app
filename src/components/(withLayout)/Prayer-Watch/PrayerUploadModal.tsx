import { TStateProps } from "@/type/utilsType";
import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  ConfigProvider,
  DatePicker,
  Flex,
  Form,
  Input,
  Modal,
  Select,
  TimePicker,
  Upload,
} from "antd";
import TextArea from "antd/es/input/TextArea";

const PrayerUploadModal = ({
  state: modalOpen,
  setState: setModalOpen,
}: TStateProps<boolean>) => {
  const [form] = Form.useForm();

  //@ts-ignore
  const handleSubmit = (values) => {
    console.log("form values", values);
    setModalOpen(false);
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
          <h1 className="text-5xl font-roboto text-primary">Prayer Watch</h1>
        </div>
        <div>
          <Form
            form={form}
            onFinish={handleSubmit}
            layout="vertical"
            style={{
              maxWidth: 500,
              marginTop: "25px",
            }}
          >
            {/* image upload  */}
            <Form.Item
              name="doctorImg"
              valuePropName="fileList"
              getValueFromEvent={(e) =>
                Array.isArray(e) ? e : e && e.fileList
              }
              style={{
                textAlign: "center",
                border: "2px dashed #D9D9D9",
                paddingBlock: "20px",
                borderRadius: "10px",
              }}
            >
              <Upload
                name="coverImg"
                listType="picture"
                beforeUpload={() => false}
              >
                <Button icon={<UploadOutlined />} >
                  Upload Cover Image
                </Button>
              </Upload>
            </Form.Item>

            {/*  input  Prayer Name */}
            <Form.Item
              label="Prayer Name"
              name="prayerName"
              rules={[{ required: true, message: "Please enter prayer name" }]}
            >
              <Input size="large" placeholder="Enter Doctor Title"></Input>
            </Form.Item>

            <Flex gap={10} style={{ display: "flex", width: "100%" }}>
              <Form.Item
                label="To"
                name="startTime"
                rules={[
                  {
                    required: true,
                    message: "Please select prayer start time",
                  },
                ]}
                style={{ flex: 1 }}
              >
                <TimePicker
                  placeholder="Select prayer start time"
                  size="large"
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>

              <Form.Item
                label="From"
                name="endTime"
                rules={[
                  { required: true, message: "Please select prayer end time" },
                ]}
                style={{ flex: 1 }}
              >
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
              <TextArea rows={5} placeholder="Type here..."></TextArea>
            </Form.Item>

            <Button htmlType="submit" block size="large">
              Upload
            </Button>
          </Form>
        </div>
      </Modal>
    </ConfigProvider>
  );
};

export default PrayerUploadModal;
