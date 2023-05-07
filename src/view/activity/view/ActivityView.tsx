import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import SocieteViewItem from 'src/view/societe/view/SocieteViewItem';
import TaxesViewItem from 'src/view/taxes/view/TaxesViewItem';
import TvaViewItem from 'src/view/tva/view/TvaViewItem';

const ActivityView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.activityName) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.activity.fields.activityName')}
        >
          {record.activityName}
        </Form.Item>
      )}

      {Boolean(record.societeType) && Boolean(record.societeType.length) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.activity.fields.societeType')}
        >
          <SocieteViewItem value={record.societeType} />
        </Form.Item>
      )}

      {Boolean(record.taxeType) && Boolean(record.taxeType.length) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.activity.fields.taxeType')}
        >
          <TaxesViewItem value={record.taxeType} />
        </Form.Item>
      )}

      {Boolean(record.tVAType) && Boolean(record.tVAType.length) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.activity.fields.tVAType')}
        >
          <TvaViewItem value={record.tVAType} />
        </Form.Item>
      )}
    </ViewWrapper>
  );
};

export default ActivityView;
