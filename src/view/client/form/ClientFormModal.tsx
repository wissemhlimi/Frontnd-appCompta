import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import ClientForm from 'src/view/client/form/ClientForm';
import ClientService from 'src/modules/client/clientService';
import Errors from 'src/modules/shared/error/errors';

const ClientFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await ClientService.create(data);
      const record = await ClientService.find(id);
      props.onSuccess(record);
    } catch (error) {
      Errors.handle(error);
    } finally {
      setSaveLoading(false);
    }
  };

  if (!props.visible) {
    return null;
  }

  return (
    <Modal
      style={{ top: 24 }}
      title={i18n('entities.client.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <ClientForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default ClientFormModal;
