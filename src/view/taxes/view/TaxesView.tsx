import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import ActivityViewItem from 'src/view/activity/view/ActivityViewItem';

const TaxesView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.nomTaxe) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.taxes.fields.nomTaxe')}
        >
          {record.nomTaxe}
        </Form.Item>
      )}

      {Boolean(record.taxesActivity) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.taxes.fields.taxesActivity')}
          >
            <ActivityViewItem value={record.taxesActivity} />
          </Form.Item>
        )}
    </ViewWrapper>
  );
};

export default TaxesView;
