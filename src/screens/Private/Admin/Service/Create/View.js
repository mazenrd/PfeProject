import React from "react";

import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Card, Form, Input, Select, Space } from "antd";
import PropTypes from "prop-types";
import Button from "shared/components/Button";
import { technologies, sources } from "utils/constants";

import "./styles.scss";

const View = ({ createService, projectName, projectId }) => {
  const onFinish = (data) => {
    createService({
      ...data,
      interfaces: [],
      project: projectId,
    });
  };

  return (
    <Card
      title={
        <h1 className="service-title">
          Create the service for the project : {projectName}
        </h1>
      }>
      <section className="createService-container">
        <Form
          layout="vertical"
          name="basic"
          labelCol={{ span: 16 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ rememberpush: true }}
          onFinish={onFinish}
          autoComplete="off">
          <Form.Item
            label="Service Name"
            name="name"
            rules={[
              { required: true, message: "Please input your Project name!" },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Image "
            name="image"
            rules={[
              { required: true, message: "Please input your image name!" },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Repository"
            name="repository"
            rules={[
              { required: true, message: "Please input your repository!" },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Dockerfile Path "
            name="dockerfilePath"
            rules={[
              {
                required: true,
                message: "Please input your Dockerfile Path !",
              },
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
          <Form.Item
            label=" Port "
            name="port"
            rules={[{ required: true, message: "Please input your port !" }]}>
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label=" Order "
            name="order"
            rules={[
              { required: true, message: "Please input your Service Order!" },
            ]}>
            <Input type="number" />
          </Form.Item>
          <Form.Item label="Technology" name="usedTechnology">
            <Select>
              {technologies.map((Technology, key) => (
                <Select.Option key={key} value={Technology.key}>
                  {Technology.value}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Source type" name="source">
            <Select>
              {sources.map((source, key) => (
                <Select.Option key={key} value={source.key}>
                  {source.value}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <h1 className="dependencies-title">Add Dependencies </h1>
          <Form.List name="dependencies">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    size={32}
                    align="baseline"
                    className="dependencies-form">
                    <Form.Item
                      className="dependencies-input"
                      {...restField}
                      label=" key "
                      name={[name, "key"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing first name",
                        },
                      ]}>
                      <Input />
                    </Form.Item>
                    <Form.Item
                      className="dependencies-input"
                      {...restField}
                      label=" Value "
                      name={[name, "value"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing last name",
                        },
                      ]}>
                      <Input />
                    </Form.Item>
                    <MinusCircleOutlined
                      onClick={() => remove(name)}
                      className="remove-btn"
                    />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}>
                    Add field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item wrapperCol={{ offset: 8, span: 24 }}>
            <Button
              buttonTitle="Create the service"
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
  createService: PropTypes.func,
  projectName: PropTypes.string,
  projectId: PropTypes.string,
};

export default View;
