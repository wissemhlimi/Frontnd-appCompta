import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import SocieteForm from 'src/view/societe/form/SocieteForm';
import SocieteService from 'src/modules/societe/societeService';
import Errors from 'src/modules/shared/error/errors';

const SocieteFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await SocieteService.create(data);
      const record = await SocieteService.find(id);
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
      title={i18n('entities.societe.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <SocieteForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default SocieteFormModal;
