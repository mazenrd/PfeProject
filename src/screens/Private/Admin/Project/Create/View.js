import React from "react";

import { Card, Form, Input, Select } from "antd";
import PropTypes from "prop-types";
import Button from "shared/components/Button";
import { types } from "utils/constants";
import "./styles.scss";

const View = ({ createProject }) => {
  const onFinish = (data) => {
    createProject(data);
  };

  return (
    <Card title={<h1 className="project-title">Create your new project</h1>}>
      <section className="createProject-container">
        <Form
          layout="vertical"
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off">
          <Form.Item
            label="Project Name"
            name="name"
            rules={[
              { required: true, message: "Please input your Project name!" },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Registry Name"
            name="registry"
            rules={[
              { required: true, message: "Please input your Registry name!" },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="pathWithNamespace"
            name="pathWithNamespace"
            rules={[
              {
                required: true,
                message: "Please input your pathWithNamespace!",
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Branch Name"
            name="branch"
            rules={[
              { required: true, message: "Please input your Branch name!" },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Services Path "
            name="servicesPath"
            rules={[
              { required: true, message: "Please input your Services Path!" },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item label="Project type" name="type">
            <Select>
              {types.map((type, key) => (
                <Select.Option key={key} value={type.key}>
                  {type.value}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 24 }}>
            <Button
              buttonTitle="Create the project"
              large
              withPadding
              color="fourthly"
              type="primary"
              htmlType="submit"
            />
          </Form.Item>
        </Form>
      </section>
    </Card>
  );
};

View.propTypes = {
  createProject: PropTypes.func,
  validate: PropTypes.object,
};

export default View;
