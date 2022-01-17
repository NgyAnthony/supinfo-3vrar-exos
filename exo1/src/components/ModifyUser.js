import React, {useEffect} from "react";
import {Button, Checkbox, Form, Input} from "antd";


export function ModifyUser({user, modifyUser}) {
  const [form] = Form.useForm();

  const handleFormSubmit = () => {
    console.log('called...');
    form
      .validateFields()
      .then((values) => {
        modifyUser(user, values)
        console.log('values ...', values);
      })
      .catch((errorInfo) => {
        console.log('errorInfo ...', errorInfo);
      });
  };

  useEffect(()  => {
    setInitialValues()
  }, [user])

  const setInitialValues = () => {
    form.setFieldsValue(user);
  }

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        form={form}
        autoComplete="off"
      >
        <Form.Item
          label="Prénom"
          name="firstName"
          rules={[{ required: true, message: 'Ajout du prénom requis !' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Nom de famille"
          name="lastName"
          rules={[{ required: true, message: 'Nom de famille requis !' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="isAdmin" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Admin</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" onClick={handleFormSubmit}>
            Confirmer
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
