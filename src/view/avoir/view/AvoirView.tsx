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

const AvoirView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.numeroAvoir) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.avoir.fields.numeroAvoir')}
        >
          {record.numeroAvoir}
        </Form.Item>
      )}

      {Boolean(record.dateAvoir) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.avoir.fields.dateAvoir')}
        >
          {record.dateAvoir}
        </Form.Item>
      )}

      {Boolean(record.fournisseurAvoir) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.avoir.fields.fournisseurAvoir')}
          >
            <FournisseurViewItem value={record.fournisseurAvoir} />
          </Form.Item>
        )}

      {(Boolean(record.montantHTAvoir) ||
        record.montantHTAvoir === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.avoir.fields.montantHTAvoir')}
          >
            {record.montantHTAvoir}
          </Form.Item>
        )}

      {Boolean(record.avoirTVA) && Boolean(record.avoirTVA.length) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.avoir.fields.avoirTVA')}
        >
          <TvaViewItem value={record.avoirTVA} />
        </Form.Item>
      )}

      {Boolean(record.avoirTaxe) && Boolean(record.avoirTaxe.length) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.avoir.fields.avoirTaxe')}
        >
          <TaxesViewItem value={record.avoirTaxe} />
        </Form.Item>
      )}

      {(Boolean(record.montantTTCAvoir) ||
        record.montantTTCAvoir === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.avoir.fields.montantTTCAvoir')}
          >
            {record.montantTTCAvoir}
          </Form.Item>
        )}

      {Boolean(record.attachementAvoir) &&
        Boolean(record.attachementAvoir.length) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n(
              'entities.avoir.fields.attachementAvoir',
            )}
          >
            <FilesViewer value={record.attachementAvoir} />
          </Form.Item>
        )}

      {Boolean(record.avoirSociete) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.avoir.fields.avoirSociete')}
          >
            <SocieteViewItem value={record.avoirSociete} />
          </Form.Item>
        )}
    </ViewWrapper>
  );
};

export default AvoirView;
