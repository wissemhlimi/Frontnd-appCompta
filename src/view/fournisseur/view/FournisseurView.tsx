import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import ImagesViewer from 'src/view/shared/ImagesViewer';
import SocieteViewItem from 'src/view/societe/view/SocieteViewItem';

const FournisseurView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.nomFournisseur) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.fournisseur.fields.nomFournisseur')}
        >
          {record.nomFournisseur}
        </Form.Item>
      )}

      {Boolean(record.mFFournisseur) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.fournisseur.fields.mFFournisseur')}
        >
          {record.mFFournisseur}
        </Form.Item>
      )}

      {Boolean(record.adresseFournisseur) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.fournisseur.fields.adresseFournisseur')}
        >
          {record.adresseFournisseur}
        </Form.Item>
      )}

      {Boolean(record.telephoneFournisseur) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.fournisseur.fields.telephoneFournisseur')}
        >
          {record.telephoneFournisseur}
        </Form.Item>
      )}

      {Boolean(record.emailFournisseur) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.fournisseur.fields.emailFournisseur')}
        >
          {record.emailFournisseur}
        </Form.Item>
      )}

      {Boolean(record.photoFournisseur) && Boolean(record.photoFournisseur.length) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.fournisseur.fields.photoFournisseur')}
          >
            <ImagesViewer value={record.photoFournisseur} />
          </Form.Item>
        )}

      {Boolean(record.commentaireFournisseur) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.fournisseur.fields.commentaireFournisseur')}
        >
          {record.commentaireFournisseur}
        </Form.Item>
      )}

      {Boolean(record.fournisseurSociete) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.fournisseur.fields.fournisseurSociete')}
          >
            <SocieteViewItem value={record.fournisseurSociete} />
          </Form.Item>
        )}
    </ViewWrapper>
  );
};

export default FournisseurView;
