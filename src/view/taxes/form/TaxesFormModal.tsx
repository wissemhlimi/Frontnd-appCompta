import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import TaxesForm from 'src/view/taxes/form/TaxesForm';
import TaxesService from 'src/modules/taxes/taxesService';
import Errors from 'src/modules/shared/error/errors';

const TaxesFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await TaxesService.create(data);
      const record = await TaxesService.find(id);
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
      title={i18n('entities.taxes.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <TaxesForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default TaxesFormModal;
