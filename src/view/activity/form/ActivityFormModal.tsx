import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import ActivityForm from 'src/view/activity/form/ActivityForm';
import ActivityService from 'src/modules/activity/activityService';
import Errors from 'src/modules/shared/error/errors';

const ActivityFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await ActivityService.create(data);
      const record = await ActivityService.find(id);
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
      title={i18n('entities.activity.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <ActivityForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default ActivityFormModal;
