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
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import SocieteAutocompleteFormItem from 'src/view/societe/autocomplete/SocieteAutocompleteFormItem';

const schema = yup.object().shape({
  nomClient: yupFormSchemas.string(
    i18n('entities.client.fields.nomClient'),
    {
      "required": true
    },
  ),
  mFClient: yupFormSchemas.string(
    i18n('entities.client.fields.mFClient'),
    {
      "required": true
    },
  ),
  adresseClient: yupFormSchemas.string(
    i18n('entities.client.fields.adresseClient'),
    {
      "required": true
    },
  ),
  telephoneClient: yupFormSchemas.string(
    i18n('entities.client.fields.telephoneClient'),
    {
      "required": true
    },
  ),
  emailClient: yupFormSchemas.string(
    i18n('entities.client.fields.emailClient'),
    {},
  ),
  photoClient: yupFormSchemas.images(
    i18n('entities.client.fields.photoClient'),
    {},
  ),
  commentaireClient: yupFormSchemas.string(
    i18n('entities.client.fields.commentaireClient'),
    {},
  ),
  cilentSociete: yupFormSchemas.relationToOne(
    i18n('entities.client.fields.cilentSociete'),
    {},
  ),
});

const ClientForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      nomClient: record.nomClient,
      mFClient: record.mFClient,
      adresseClient: record.adresseClient,
      telephoneClient: record.telephoneClient,
      emailClient: record.emailClient,
      photoClient: record.photoClient || [],
      commentaireClient: record.commentaireClient,
      cilentSociete: record.cilentSociete,
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
            name="nomClient"
            label={i18n('entities.client.fields.nomClient')}  
            required={true}
            layout={formItemLayout}
            autoFocus
          />
          <InputFormItem
            name="mFClient"
            label={i18n('entities.client.fields.mFClient')}  
            required={true}
            layout={formItemLayout}
          />
          <TextAreaFormItem
            name="adresseClient"
            label={i18n('entities.client.fields.adresseClient')}  
            required={true}
            layout={formItemLayout}
          />
          <InputFormItem
            name="telephoneClient"
            label={i18n('entities.client.fields.telephoneClient')}  
            required={true}
            layout={formItemLayout}
          />
          <InputFormItem
            name="emailClient"
            label={i18n('entities.client.fields.emailClient')}  
            required={false}
            layout={formItemLayout}
          />
          <ImagesFormItem
            name="photoClient"
            label={i18n('entities.client.fields.photoClient')}
            required={false}
            storage={Storage.values.clientPhotoClient}
            max={undefined}
            layout={formItemLayout}
          />
          <TextAreaFormItem
            name="commentaireClient"
            label={i18n('entities.client.fields.commentaireClient')}  
            required={false}
            layout={formItemLayout}
          />
          <SocieteAutocompleteFormItem  
            name="cilentSociete"
            label={i18n('entities.client.fields.cilentSociete')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
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

export default ClientForm;
