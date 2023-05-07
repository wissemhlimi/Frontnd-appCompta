import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import UserViewItem from 'src/view/user/view/UserViewItem';
import ImagesViewer from 'src/view/shared/ImagesViewer';
import SocieteViewItem from 'src/view/societe/view/SocieteViewItem';

const CabinetView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.nomCabinet) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.cabinet.fields.nomCabinet')}
        >
          {record.nomCabinet}
        </Form.Item>
      )}

      {Boolean(record.cabinetUser) &&
        Boolean(record.cabinetUser.length) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n(
              'entities.cabinet.fields.cabinetUser',
            )}
          >
            <UserViewItem value={record.cabinetUser} />
          </Form.Item>
        )}

      {Boolean(record.cabinetSociete) && Boolean(record.cabinetSociete.length) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.cabinet.fields.cabinetSociete')}
        >
          <SocieteViewItem value={record.cabinetSociete} />
        </Form.Item>
      )}

      {Boolean(record.telCabinet) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.cabinet.fields.telCabinet')}
        >
          {record.telCabinet}
        </Form.Item>
      )}

      {Boolean(record.adresseCabinet) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.cabinet.fields.adresseCabinet')}
        >
          {record.adresseCabinet}
        </Form.Item>
      )}

      {Boolean(record.emailCabinet) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.cabinet.fields.emailCabinet')}
        >
          {record.emailCabinet}
        </Form.Item>
      )}

      {Boolean(record.logoCabinet) && Boolean(record.logoCabinet.length) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.cabinet.fields.logoCabinet')}
          >
            <ImagesViewer value={record.logoCabinet} />
          </Form.Item>
        )}

      {Boolean(record.commentaireCabinet) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.cabinet.fields.commentaireCabinet')}
        >
          {record.commentaireCabinet}
        </Form.Item>
      )}
    </ViewWrapper>
  );
};

export default CabinetView;
