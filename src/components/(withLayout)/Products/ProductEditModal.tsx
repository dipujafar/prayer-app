import {
  Button,
  Checkbox,
  Form,
  Input,
  Modal,
  Upload,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import Image from "next/image";
import { MdOutlineEdit } from "react-icons/md";


type TPropsType = {
    open: boolean;
    setOpen: (collapsed: boolean) => void;
    data: any;
  };
  

const ProductEditModal = ({open, setOpen, data}: TPropsType) => {
  const [form] = Form.useForm();
  //@ts-ignore
  const handleSubmit = (values) => {
    console.log("form values", values);
    setOpen(false)

  };
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
            initialValues={{product: data?.name, description: data?.description, price: data?.price, productSizes: data.size }}
          >
            <div className="flex justify-center rounded-full">
            <Image src={data?.image} alt="defaultImage" className="rounded-full size-28"></Image>
            </div>

            {/* image upload  */}
            <Form.Item
              name="productImg"
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
                name="productImg"
                listType="picture"
                beforeUpload={() => false}
              >
                <div className="bg-[#5A015E] p-1 rounded">
               <MdOutlineEdit size={20} className="text-white " />
               </div>
              </Upload>
            </Form.Item>

          {/* Name Input */}
          <Form.Item
            label={<span style={{ fontSize: "18px" }}>Product Name</span>}
            name="product"
          >
            <Input
              placeholder="Product Name..."
              className="border-primary"
              style={{ padding: "10px" }}
            />
          </Form.Item>
  
          {/* Short Description */}
          <Form.Item
            label={<span style={{ fontSize: "18px" }}>Description</span>}
            name="description"
          >
            <TextArea
              className="border-primary hover:border-primary"
              placeholder="Type here..."
              rows={4}
            />
          </Form.Item>
  
          {/* Price */}
          <Form.Item
            label={<span style={{ fontSize: "18px" }}>Product Price</span>}
            name="price"
          >
            <Input
              placeholder="Product Price..."
              className="border-primary"
              style={{ padding: "10px" }}
            />
          </Form.Item>
  
          {/* Product size */}
          <Form.Item className="mb-3" label="Product Sizes" name="productSizes">
            <Checkbox.Group>
              <div className="flex gap-2">
                <Checkbox value="s">S</Checkbox>
                <Checkbox value="m">M</Checkbox>
                <Checkbox value="l">L</Checkbox>
                <Checkbox value="xl">XL</Checkbox>
                <Checkbox value="xxl">XXL</Checkbox>
              </div>
            </Checkbox.Group>
          </Form.Item>

            <Button
              htmlType="submit"
             block
              size="large"
            >
           Change
            </Button>
          </Form>
        </div>
      </Modal>
  );
};

export default ProductEditModal;
