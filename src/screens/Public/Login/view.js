import React from "react";

import { Col, Divider, Row, Form, Input } from "antd";
import { Subtraction } from "assets";
import PropTypes from "prop-types";
import { MdDone } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "shared/components/Button";
import Lists from "shared/components/List";
import useMediaQuery from "shared/hooks/useMediaQuery";
import { PATHS } from "utils/constants";
import { Lists_Titles } from "utils/mocks";

import MyAuth from "../Auth/AuthProviders";
import "./styles.scss";

const Loginview = ({ signIn }) => {
  const t = useMediaQuery("(min-width: 1420px)");

  const onFinish = (data) => {
    signIn({ user: data });
  };

  return (
    <section className="signin-container">
      <Row>
        <Col span={t ? 12 : 24} className="left-container">
          <div className="SurekateTitle-container">
            <img src={Subtraction} className="SurekateTitle_Logo-container" />
            <h1 className="logo">SOULDAN</h1>
          </div>
          <h1 className="signin-title">
            The easiest way to build & launch your Product in the digital era.
          </h1>
          <Lists items={Lists_Titles} icon={MdDone} />
        </Col>
        <Col span={t ? 12 : 24} className="right-container">
          <div className="singinInput-container">
            <p className="logo">Try us for free</p>
            <p className="descp1">No credit card required</p>
            <p className="descp2">Sign in using your work email</p>
            <div className="signinForm">
              <Form
                layout="vertical"
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off">
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your username!" },
                    { type: "email", message: "email is invalid!" },
                  ]}>
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}>
                  <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 24 }}>
                  <Button
                    buttonTitle="Signin"
                    large
                    withPadding
                    color="fourthly"
                    type="primary"
                    htmlType="submit"
                  />
                </Form.Item>
              </Form>
            </div>
          </div>
          <Divider className="divider">Or</Divider>
          <div className="account-Signup">
            <p className="textSignUp">Sign in with an account</p>
          </div>
          <MyAuth />
          <div className="register-link">
            <p className="register-linkText"> You dont have an account yet?</p>
            <Link to={PATHS.PUBLIC.REGISTER}>Register</Link>
          </div>
        </Col>
      </Row>
    </section>
  );
};
Loginview.propTypes = {
  signIn: PropTypes.func,
  validate: PropTypes.object,
};

export default Loginview;
