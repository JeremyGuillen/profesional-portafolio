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
      notification.success({ message: 'Su email ha sdo enviado, me pondré en contacto con usted una vez lo lea!', duration: 2 });
    } else {
      notification.error({ message: 'Ocurrio un error inesperado, por favor contacteme a este correo', duration: 0 });
    }
    setLoading(false);
    onCancelClick(undefined);
  };
  return (
    <Modal open={open} centered closable={false} footer={null}>
      <h2 className="text-center mb-5 text-primary text-xl">Contact Me</h2>
      <Form form={form} layout="vertical" onFinish={onSubmit}>
        <Form.Item
          label="Su correo"
          name="from_name"
          rules={[
            { required: true, message: 'El correo es requerido' },
            { type: 'email', message: 'El correo ingresado no es valido' },
          ]}
        >
          <Input placeholder="example@gmail.com" className="border-input" />
        </Form.Item>
        <Form.Item name="subject" label="Tema" rules={[{ required: true, message: 'El tema es requerido' }]}>
          <Input placeholder="Una idea que tengo en mente" className="border-input" />
        </Form.Item>
        <Form.Item name="message" label="Mensaje" rules={[{ required: true, message: 'El mensaje es requerido' }]}>
          <Input.TextArea placeholder="La descripción de mi idea" className="border-input" />
        </Form.Item>
        <div className="flex justify-around">
          <Button shape="round" type="default" onClick={onCancelClick}>
            Cancelar
          </Button>
          <Form.Item noStyle>
            <Button htmlType="submit" type="primary" shape="round" loading={loading}>
              Enviar correo
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
};
