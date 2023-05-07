import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import ImagesViewer from 'src/view/shared/ImagesViewer';
import SocieteViewItem from 'src/view/societe/view/SocieteViewItem';

const ClientView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.nomClient) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.client.fields.nomClient')}
        >
          {record.nomClient}
        </Form.Item>
      )}

      {Boolean(record.mFClient) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.client.fields.mFClient')}
        >
          {record.mFClient}
        </Form.Item>
      )}

      {Boolean(record.adresseClient) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.client.fields.adresseClient')}
        >
          {record.adresseClient}
        </Form.Item>
      )}

      {Boolean(record.telephoneClient) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.client.fields.telephoneClient')}
        >
          {record.telephoneClient}
        </Form.Item>
      )}

      {Boolean(record.emailClient) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.client.fields.emailClient')}
        >
          {record.emailClient}
        </Form.Item>
      )}

      {Boolean(record.photoClient) && Boolean(record.photoClient.length) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.client.fields.photoClient')}
          >
            <ImagesViewer value={record.photoClient} />
          </Form.Item>
        )}

      {Boolean(record.commentaireClient) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.client.fields.commentaireClient')}
        >
          {record.commentaireClient}
        </Form.Item>
      )}

      {Boolean(record.cilentSociete) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.client.fields.cilentSociete')}
          >
            <SocieteViewItem value={record.cilentSociete} />
          </Form.Item>
        )}
    </ViewWrapper>
  );
};

export default ClientView;
