import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import VenteForm from 'src/view/vente/form/VenteForm';
import VenteService from 'src/modules/vente/venteService';
import Errors from 'src/modules/shared/error/errors';

const VenteFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await VenteService.create(data);
      const record = await VenteService.find(id);
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
      title={i18n('entities.vente.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <VenteForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default VenteFormModal;
