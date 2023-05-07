import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import FilesViewer from 'src/view/shared/FilesViewer';
import FournisseurViewItem from 'src/view/fournisseur/view/FournisseurViewItem';
import TvaViewItem from 'src/view/tva/view/TvaViewItem';
import TaxesViewItem from 'src/view/taxes/view/TaxesViewItem';
import SocieteViewItem from 'src/view/societe/view/SocieteViewItem';

const AchatsView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.numeroFactureAchat) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.achats.fields.numeroFactureAchat')}
        >
          {record.numeroFactureAchat}
        </Form.Item>
      )}

      {Boolean(record.dateAchat) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.achats.fields.dateAchat')}
        >
          {record.dateAchat}
        </Form.Item>
      )}

      {Boolean(record.founisseurAchat) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.achats.fields.founisseurAchat')}
          >
            <FournisseurViewItem value={record.founisseurAchat} />
          </Form.Item>
        )}

      {(Boolean(record.montantHTAchat) ||
        record.montantHTAchat === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.achats.fields.montantHTAchat')}
          >
            {record.montantHTAchat}
          </Form.Item>
        )}

      {Boolean(record.achatTVA) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.achats.fields.achatTVA')}
          >
            <TvaViewItem value={record.achatTVA} />
          </Form.Item>
        )}

      {Boolean(record.achatTaxe) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.achats.fields.achatTaxe')}
          >
            <TaxesViewItem value={record.achatTaxe} />
          </Form.Item>
        )}

      {(Boolean(record.achatRemise) ||
        record.achatRemise === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.achats.fields.achatRemise')}
          >
            {record.achatRemise}
          </Form.Item>
        )}

      {(Boolean(record.rSAchat) ||
        record.rSAchat === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.achats.fields.rSAchat')}
          >
            {record.rSAchat}
          </Form.Item>
        )}

      {(Boolean(record.montantTTCAchat) ||
        record.montantTTCAchat === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.achats.fields.montantTTCAchat')}
          >
            {record.montantTTCAchat}
          </Form.Item>
        )}

      {(Boolean(record.montantNetRSAchat) ||
        record.montantNetRSAchat === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.achats.fields.montantNetRSAchat')}
          >
            {record.montantNetRSAchat}
          </Form.Item>
        )}

      {Boolean(record.attachementAchat) &&
        Boolean(record.attachementAchat.length) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n(
              'entities.achats.fields.attachementAchat',
            )}
          >
            <FilesViewer value={record.attachementAchat} />
          </Form.Item>
        )}

      {Boolean(record.achatSociete) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.achats.fields.achatSociete')}
          >
            <SocieteViewItem value={record.achatSociete} />
          </Form.Item>
        )}
    </ViewWrapper>
  );
};

export default AchatsView;
