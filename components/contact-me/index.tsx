import React, { useState } from 'react';
import { Button, Form, Input, Modal, ModalProps, message, notification } from 'antd';
import { Mail } from '../../types/types';
import { sendEmail } from '../../utils/smtp-client';

interface Props extends ModalProps {}

export const ContactMe: React.FC<Props> = ({ open, onCancel }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const onCancelClick = (e: any) => {
    form.resetFields();
    if (onCancel) onCancel(e);
  };

  const onSubmit = async (mail: Mail) => {
    setLoading(true);
    const response = await sendEmail(mail);
    if (response && response.status === 200) {
      notification.success({ message: 'Your email has been sent. I will contact you once i read it!', duration: 2 });
    } else {
      notification.error({ message: 'An unexpected error occurred. Please contact me to this email: guillenjeremy26@gmail.com', duration: 0 });
    }
    setLoading(false);
    onCancelClick(undefined);
  };
  return (
    <Modal open={open} centered closable={false} footer={null}>
      <h2 className="text-center mb-5 text-primary text-xl">Contact Me</h2>
      <Form form={form} layout="vertical" onFinish={onSubmit}>
        <Form.Item
          label="From"
          name="from_name"
          rules={[
            { required: true, message: 'From is required' },
            { type: 'email', message: 'From should be a valid email' },
          ]}
        >
          <Input placeholder="example@gmail.com" className="border-input" />
        </Form.Item>
        <Form.Item name="subject" label="Subject" rules={[{ required: true, message: 'Subject is required' }]}>
          <Input placeholder="A cool idea I have in mind" className="border-input" />
        </Form.Item>
        <Form.Item name="message" label="Body" rules={[{ required: true, message: 'Email boyd is required' }]}>
          <Input.TextArea placeholder="My cool idea description" className="border-input" />
        </Form.Item>
        <div className="flex justify-around">
          <Button shape="round" type="default" onClick={onCancelClick}>
            Cancel
          </Button>
          <Form.Item noStyle>
            <Button htmlType="submit" type="primary" shape="round" loading={loading}>
              Send email
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
};
