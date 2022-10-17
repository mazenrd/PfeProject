import React from "react";

import { Col, Form, Input, Row } from "antd";
import { Subtraction } from "assets";
import PropTypes from "prop-types";
import { MdDone } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "shared/components/Button";
import Lists from "shared/components/List";
import useMediaQuery from "shared/hooks/useMediaQuery";
import { PATHS } from "utils/constants";
import { Lists_Titles } from "utils/mocks";
import "./styles.scss";

const Registerview = ({ signUp }) => {
  const t = useMediaQuery("(min-width: 1420px)");
  const onFinish = (data) => {
    signUp({ user: data });
  };

  return (
    <section className="register-container">
      <Row>
        <Col span={t ? 12 : 24} className="left-container">
          <div className="SurekateTitle-container">
            <img src={Subtraction} className="SurekateTitle_Logo-container" />
            <h1 className="logo">SOULDAN</h1>
          </div>
          <h1 className="register-title">
            The easiest way to build & launch your Product in the digital era.
          </h1>
          <Lists items={Lists_Titles} icon={MdDone} />
        </Col>
        <Col span={t ? 12 : 24} className="right-container">
          <div className="registerInput-container">
            <p className="logo">Try us for free</p>
            <p className="descp1">No credit card required</p>
            <p className="descp2">Sign up using your work email</p>
            <Form
              layout="vertical"
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 24 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off">
              <Form.Item
                label="First Name"
                name="firstname"
                rules={[
                  { required: true, message: "Please input your first name!" },
                ]}>
                <Input />
              </Form.Item>
              <Form.Item
                label="Last Name"
                name="lastname"
                rules={[
                  { required: true, message: "Please input your last name!" },
                ]}>
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "email is invalid!" },
                ]}>
                <Input />
              </Form.Item>
              <Form.Item
                label="Phone Number"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}>
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                  {
                    min: 6,
                    message: "password must be at least 6 characters!",
                  },
                  {
                    max: 15,
                    message: "password must be at most 15 characters!",
                  },
                ]}>
                <Input.Password />
              </Form.Item>
              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!",
                        ),
                      );
                    },
                  }),
                ]}>
                <Input.Password />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 24 }}>
                <Button
                  buttonTitle="Register"
                  large
                  withPadding
                  color="fourthly"
                  type="primary"
                  htmlType="submit"
                />
              </Form.Item>
            </Form>
          </div>
          <div className="login-link">
            <p className="login-linkText">Already have an account?</p>
            <Link to={PATHS.PUBLIC.LOGIN}>Signin</Link>
          </div>
        </Col>
      </Row>
    </section>
  );
};

Registerview.propTypes = {
  signUp: PropTypes.func,
  validate: PropTypes.object,
};

export default Registerview;
