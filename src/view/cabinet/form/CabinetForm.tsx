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
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import SocieteAutocompleteFormItem from 'src/view/societe/autocomplete/SocieteAutocompleteFormItem';

const schema = yup.object().shape({
  nomCabinet: yupFormSchemas.string(
    i18n('entities.cabinet.fields.nomCabinet'),
    {
      "required": true
    },
  ),
  cabinetUser: yupFormSchemas.relationToMany(
    i18n('entities.cabinet.fields.cabinetUser'),
    {},
  ),
  cabinetSociete: yupFormSchemas.relationToMany(
    i18n('entities.cabinet.fields.cabinetSociete'),
    {},
  ),
  telCabinet: yupFormSchemas.string(
    i18n('entities.cabinet.fields.telCabinet'),
    {
      "required": true
    },
  ),
  adresseCabinet: yupFormSchemas.string(
    i18n('entities.cabinet.fields.adresseCabinet'),
    {
      "required": true
    },
  ),
  emailCabinet: yupFormSchemas.string(
    i18n('entities.cabinet.fields.emailCabinet'),
    {},
  ),
  logoCabinet: yupFormSchemas.images(
    i18n('entities.cabinet.fields.logoCabinet'),
    {},
  ),
  commentaireCabinet: yupFormSchemas.string(
    i18n('entities.cabinet.fields.commentaireCabinet'),
    {},
  ),
});

const CabinetForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      nomCabinet: record.nomCabinet,
      cabinetUser: record.cabinetUser || [],
      cabinetSociete: record.cabinetSociete || [],
      telCabinet: record.telCabinet,
      adresseCabinet: record.adresseCabinet,
      emailCabinet: record.emailCabinet,
      logoCabinet: record.logoCabinet || [],
      commentaireCabinet: record.commentaireCabinet,
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
            name="nomCabinet"
            label={i18n('entities.cabinet.fields.nomCabinet')}  
            required={true}
            layout={formItemLayout}
            autoFocus
          />
          <UserAutocompleteFormItem  
            name="cabinetUser"
            label={i18n('entities.cabinet.fields.cabinetUser')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
            mode="multiple"
          />
          <SocieteAutocompleteFormItem  
            name="cabinetSociete"
            label={i18n('entities.cabinet.fields.cabinetSociete')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
            mode="multiple"
          />
          <InputFormItem
            name="telCabinet"
            label={i18n('entities.cabinet.fields.telCabinet')}  
            required={true}
            layout={formItemLayout}
          />
          <TextAreaFormItem
            name="adresseCabinet"
            label={i18n('entities.cabinet.fields.adresseCabinet')}  
            required={true}
            layout={formItemLayout}
          />
          <InputFormItem
            name="emailCabinet"
            label={i18n('entities.cabinet.fields.emailCabinet')}  
            required={false}
            layout={formItemLayout}
          />
          <ImagesFormItem
            name="logoCabinet"
            label={i18n('entities.cabinet.fields.logoCabinet')}
            required={false}
            storage={Storage.values.cabinetLogoCabinet}
            max={undefined}
            layout={formItemLayout}
          />
          <TextAreaFormItem
            name="commentaireCabinet"
            label={i18n('entities.cabinet.fields.commentaireCabinet')}  
            required={false}
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

export default CabinetForm;
