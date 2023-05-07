import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import FilesViewer from 'src/view/shared/FilesViewer';
import ClientViewItem from 'src/view/client/view/ClientViewItem';
import TvaViewItem from 'src/view/tva/view/TvaViewItem';
import TaxesViewItem from 'src/view/taxes/view/TaxesViewItem';
import SocieteViewItem from 'src/view/societe/view/SocieteViewItem';

const VenteView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.numeroFacture) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.vente.fields.numeroFacture')}
        >
          {record.numeroFacture}
        </Form.Item>
      )}

      {Boolean(record.clientVente) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.vente.fields.clientVente')}
          >
            <ClientViewItem value={record.clientVente} />
          </Form.Item>
        )}

      {(Boolean(record.montantHTVente) ||
        record.montantHTVente === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.vente.fields.montantHTVente')}
          >
            {record.montantHTVente}
          </Form.Item>
        )}

      {Boolean(record.tva) && Boolean(record.tva.length) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.vente.fields.tva')}
        >
          <TvaViewItem value={record.tva} />
        </Form.Item>
      )}

      {Boolean(record.taxe) && Boolean(record.taxe.length) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.vente.fields.taxe')}
        >
          <TaxesViewItem value={record.taxe} />
        </Form.Item>
      )}

      {(Boolean(record.remise) ||
        record.remise === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.vente.fields.remise')}
          >
            {record.remise}
          </Form.Item>
        )}

      {(Boolean(record.montantTTCVente) ||
        record.montantTTCVente === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.vente.fields.montantTTCVente')}
          >
            {record.montantTTCVente}
          </Form.Item>
        )}

      {Boolean(record.dateVente) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.vente.fields.dateVente')}
        >
          {record.dateVente}
        </Form.Item>
      )}

      {Boolean(record.attachementVente) &&
        Boolean(record.attachementVente.length) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n(
              'entities.vente.fields.attachementVente',
            )}
          >
            <FilesViewer value={record.attachementVente} />
          </Form.Item>
        )}

      {Boolean(record.venteSociete) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.vente.fields.venteSociete')}
          >
            <SocieteViewItem value={record.venteSociete} />
          </Form.Item>
        )}
    </ViewWrapper>
  );
};

export default VenteView;
