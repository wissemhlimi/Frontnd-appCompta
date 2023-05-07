import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import UserViewItem from 'src/view/user/view/UserViewItem';
import ImagesViewer from 'src/view/shared/ImagesViewer';
import ActivityViewItem from 'src/view/activity/view/ActivityViewItem';
import CabinetViewItem from 'src/view/cabinet/view/CabinetViewItem';
import FournisseurViewItem from 'src/view/fournisseur/view/FournisseurViewItem';
import ClientViewItem from 'src/view/client/view/ClientViewItem';

const SocieteView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.activityType) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.societe.fields.activityType')}
          >
            <ActivityViewItem value={record.activityType} />
          </Form.Item>
        )}

      {Boolean(record.nomSociete) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.societe.fields.nomSociete')}
        >
          {record.nomSociete}
        </Form.Item>
      )}

      {Boolean(record.userSociete) &&
        Boolean(record.userSociete.length) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n(
              'entities.societe.fields.userSociete',
            )}
          >
            <UserViewItem value={record.userSociete} />
          </Form.Item>
        )}

      {Boolean(record.societeCabinet) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.societe.fields.societeCabinet')}
          >
            <CabinetViewItem value={record.societeCabinet} />
          </Form.Item>
        )}

      {Boolean(record.mFSociete) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.societe.fields.mFSociete')}
        >
          {record.mFSociete}
        </Form.Item>
      )}

      {Boolean(record.telephoneSociete) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.societe.fields.telephoneSociete')}
        >
          {record.telephoneSociete}
        </Form.Item>
      )}

      {Boolean(record.adresseSociete) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.societe.fields.adresseSociete')}
        >
          {record.adresseSociete}
        </Form.Item>
      )}

      {Boolean(record.emailSociete) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.societe.fields.emailSociete')}
        >
          {record.emailSociete}
        </Form.Item>
      )}

      {Boolean(record.logoSociete) && Boolean(record.logoSociete.length) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.societe.fields.logoSociete')}
          >
            <ImagesViewer value={record.logoSociete} />
          </Form.Item>
        )}

      {Boolean(record.commentaireSociete) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.societe.fields.commentaireSociete')}
        >
          {record.commentaireSociete}
        </Form.Item>
      )}

      {Boolean(record.fournisseurSociete) && Boolean(record.fournisseurSociete.length) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.societe.fields.fournisseurSociete')}
        >
          <FournisseurViewItem value={record.fournisseurSociete} />
        </Form.Item>
      )}

      {Boolean(record.clientsSociete) && Boolean(record.clientsSociete.length) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.societe.fields.clientsSociete')}
        >
          <ClientViewItem value={record.clientsSociete} />
        </Form.Item>
      )}
    </ViewWrapper>
  );
};

export default SocieteView;
