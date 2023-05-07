import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import CabinetForm from 'src/view/cabinet/form/CabinetForm';
import CabinetService from 'src/modules/cabinet/cabinetService';
import Errors from 'src/modules/shared/error/errors';

const CabinetFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await CabinetService.create(data);
      const record = await CabinetService.find(id);
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
      title={i18n('entities.cabinet.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <CabinetForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default CabinetFormModal;
