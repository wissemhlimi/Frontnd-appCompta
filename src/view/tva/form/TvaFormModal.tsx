import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import TvaForm from 'src/view/tva/form/TvaForm';
import TvaService from 'src/modules/tva/tvaService';
import Errors from 'src/modules/shared/error/errors';

const TvaFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await TvaService.create(data);
      const record = await TvaService.find(id);
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
      title={i18n('entities.tva.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <TvaForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default TvaFormModal;
