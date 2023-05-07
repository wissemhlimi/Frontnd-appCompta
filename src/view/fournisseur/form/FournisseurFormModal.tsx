import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import FournisseurForm from 'src/view/fournisseur/form/FournisseurForm';
import FournisseurService from 'src/modules/fournisseur/fournisseurService';
import Errors from 'src/modules/shared/error/errors';

const FournisseurFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await FournisseurService.create(data);
      const record = await FournisseurService.find(id);
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
      title={i18n('entities.fournisseur.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <FournisseurForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default FournisseurFormModal;
