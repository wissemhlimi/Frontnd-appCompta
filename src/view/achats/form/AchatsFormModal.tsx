import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import AchatsForm from 'src/view/achats/form/AchatsForm';
import AchatsService from 'src/modules/achats/achatsService';
import Errors from 'src/modules/shared/error/errors';

const AchatsFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await AchatsService.create(data);
      const record = await AchatsService.find(id);
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
      title={i18n('entities.achats.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <AchatsForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default AchatsFormModal;
