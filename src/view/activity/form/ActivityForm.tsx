import {
  CloseOutlined,
  SaveOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Form } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import FormWrapper, {
  formItemLayout,
  tailFormItemLayout,
} from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SocieteAutocompleteFormItem from 'src/view/societe/autocomplete/SocieteAutocompleteFormItem';
import TaxesAutocompleteFormItem from 'src/view/taxes/autocomplete/TaxesAutocompleteFormItem';
import TvaAutocompleteFormItem from 'src/view/tva/autocomplete/TvaAutocompleteFormItem';

const schema = yup.object().shape({
  activityName: yupFormSchemas.string(
    i18n('entities.activity.fields.activityName'),
    {},
  ),
  societeType: yupFormSchemas.relationToMany(
    i18n('entities.activity.fields.societeType'),
    {},
  ),
  taxeType: yupFormSchemas.relationToMany(
    i18n('entities.activity.fields.taxeType'),
    {},
  ),
  tVAType: yupFormSchemas.relationToMany(
    i18n('entities.activity.fields.tVAType'),
    {},
  ),
});

const ActivityForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      activityName: record.activityName,
      societeType: record.societeType || [],
      taxeType: record.taxeType || [],
      tVAType: record.tVAType || [],
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const onSubmit = (values) => {
    props.onSubmit(props?.record?.id, values);
  };

  const { saveLoading } = props;
  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <InputFormItem
            name="activityName"
            label={i18n('entities.activity.fields.activityName')}  
            required={false}
            layout={formItemLayout}
            autoFocus
          />
          <SocieteAutocompleteFormItem  
            name="societeType"
            label={i18n('entities.activity.fields.societeType')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
            mode="multiple"
          />
          <TaxesAutocompleteFormItem  
            name="taxeType"
            label={i18n('entities.activity.fields.taxeType')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
            mode="multiple"
          />
          <TvaAutocompleteFormItem  
            name="tVAType"
            label={i18n('entities.activity.fields.tVAType')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
            mode="multiple"
          />

          <Form.Item
            className="form-buttons"
            {...tailFormItemLayout}
          >
            <Button
              loading={saveLoading}
              type="primary"
              onClick={form.handleSubmit(onSubmit)}
              icon={<SaveOutlined />}
            >
              {i18n('common.save')}
            </Button>

            <Button
              disabled={saveLoading}
              onClick={onReset}
              icon={<UndoOutlined />}
            >
              {i18n('common.reset')}
            </Button>

            {props.onCancel && (
              <Button
                disabled={saveLoading}
                onClick={() => props.onCancel()}
                icon={<CloseOutlined />}
              >
                {i18n('common.cancel')}
              </Button>
            )}
          </Form.Item>
        </form>
      </FormProvider>
    </FormWrapper>
  );
};

export default ActivityForm;
