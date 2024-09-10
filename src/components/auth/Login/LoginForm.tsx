"use client";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Flex,
  ConfigProvider,
  Typography,
} from "antd";
import Link from "next/link";
import "./LoginForm";
import { useRouter } from "next/navigation";
const LoginForm = () => {
  const route = useRouter();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    route.push("/");
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
          className="py-10 px-10 rounded-2xl w-[450px]"
        >
          <div className="mb-4 text-center">
            <h2
              style={{ color: "white" }}
              className=" text-center text-2xl font-bold mb-6"
            >
              Login to Account
            </h2>
            <Typography.Text style={{ color: "#fff" }}>
              Please enter your email and password to continue
            </Typography.Text>
          </div>
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
              placeholder="your email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            label={<p className=" text-lg">Password</p>}
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input
              style={{ padding: "8px" }}
              className="text-lg"
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Flex justify="space-between" align="center" className="">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#5A015E",
                    },
                  }}
                >
                  <Checkbox style={{ color: "#fff" }}>
                    Remember password
                  </Checkbox>
                </ConfigProvider>
              </Form.Item>
              <Link
                className=" text-white hover:text-white text-lg"
                href="/auth/forgot-password"
              >
                Forgot password
              </Link>
            </Flex>
          </Form.Item>

          <Form.Item className="text-center">
            <Button
              size="large"
              block
              htmlType="submit"
              style={{ border: "none" }}
            >
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </>
  );
};

export default LoginForm;
