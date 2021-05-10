import React from "react";
import { Form, Input, Button, Row, Typography } from "antd";
import Styles from "./LoginForm.module.css";
import { loginThunk } from "../../../store/features/app/thunks";
import { useDispatch } from "react-redux";

const { Title } = Typography;

export const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const onFinish = (values: any) => {
    dispatch(loginThunk(values));
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={Styles.formWrap}>
      <Form
        className={Styles.form}
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row justify="center">
          <Title>Login form</Title>
        </Row>

        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Row justify="center">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Row>
      </Form>
    </div>
  );
};
