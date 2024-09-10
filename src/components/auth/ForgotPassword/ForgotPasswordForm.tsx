"use client";
import { Button, Checkbox, Form, Input, Flex, ConfigProvider } from "antd";
import { Typography } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
const ForgotPasswordForm = () => {
  const route = useRouter();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    route.push("/auth/set-new-password");
  };

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Form: {
              labelColor: "white",
            },
          },
        }}
      >
        <Form
          name="login"
          initialValues={{ remember: true }}
          style={{ maxWidth: 550 }}
          onFinish={onFinish}
          layout="vertical"
          className="w-[450px]"
        >
          <Typography.Title
            level={4}
            style={{ color: "white" }}
            className=" text-center text-2xl"
          >
            Forgot Password
          </Typography.Title>
          <Form.Item
            name="username"
            label={<p className=" text-lg">Email</p>}
            rules={[
              { required: true, message: "Please input your email!" },
              {
                type: "email",
                message: "Please enter a valid email address!",
              },
            ]}
          >
            <Input
              style={{ padding: "8px" }}
              className=" text-lg"
              placeholder="Your Email"
            />
          </Form.Item>

          <Form.Item className="text-center">
            <Button
              size="large"
              block
              htmlType="submit"
              style={{ border: "none" }}
            >
              Send Code
            </Button>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </>
  );
};

export default ForgotPasswordForm;
