import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import ActivityViewItem from 'src/view/activity/view/ActivityViewItem';

const TvaView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.nomTVA) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.tva.fields.nomTVA')}
        >
          {record.nomTVA}
        </Form.Item>
      )}

      {Boolean(record.tvaActivity) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.tva.fields.tvaActivity')}
          >
            <ActivityViewItem value={record.tvaActivity} />
          </Form.Item>
        )}
    </ViewWrapper>
  );
};

export default TvaView;
