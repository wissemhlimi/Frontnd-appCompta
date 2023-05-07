import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import AvoirForm from 'src/view/avoir/form/AvoirForm';
import AvoirService from 'src/modules/avoir/avoirService';
import Errors from 'src/modules/shared/error/errors';

const AvoirFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await AvoirService.create(data);
      const record = await AvoirService.find(id);
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
      title={i18n('entities.avoir.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <AvoirForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default AvoirFormModal;
