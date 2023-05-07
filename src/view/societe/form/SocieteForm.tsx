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
import ActivityAutocompleteFormItem from 'src/view/activity/autocomplete/ActivityAutocompleteFormItem';
import CabinetAutocompleteFormItem from 'src/view/cabinet/autocomplete/CabinetAutocompleteFormItem';
import FournisseurAutocompleteFormItem from 'src/view/fournisseur/autocomplete/FournisseurAutocompleteFormItem';
import ClientAutocompleteFormItem from 'src/view/client/autocomplete/ClientAutocompleteFormItem';

const schema = yup.object().shape({
  activityType: yupFormSchemas.relationToOne(
    i18n('entities.societe.fields.activityType'),
    {},
  ),
  nomSociete: yupFormSchemas.string(
    i18n('entities.societe.fields.nomSociete'),
    {
      "required": true
    },
  ),
  userSociete: yupFormSchemas.relationToMany(
    i18n('entities.societe.fields.userSociete'),
    {},
  ),
  societeCabinet: yupFormSchemas.relationToOne(
    i18n('entities.societe.fields.societeCabinet'),
    {},
  ),
  mFSociete: yupFormSchemas.string(
    i18n('entities.societe.fields.mFSociete'),
    {
      "required": true
    },
  ),
  telephoneSociete: yupFormSchemas.string(
    i18n('entities.societe.fields.telephoneSociete'),
    {
      "required": true
    },
  ),
  adresseSociete: yupFormSchemas.string(
    i18n('entities.societe.fields.adresseSociete'),
    {
      "required": true
    },
  ),
  emailSociete: yupFormSchemas.string(
    i18n('entities.societe.fields.emailSociete'),
    {},
  ),
  logoSociete: yupFormSchemas.images(
    i18n('entities.societe.fields.logoSociete'),
    {},
  ),
  commentaireSociete: yupFormSchemas.string(
    i18n('entities.societe.fields.commentaireSociete'),
    {},
  ),
  fournisseurSociete: yupFormSchemas.relationToMany(
    i18n('entities.societe.fields.fournisseurSociete'),
    {},
  ),
  clientsSociete: yupFormSchemas.relationToMany(
    i18n('entities.societe.fields.clientsSociete'),
    {},
  ),
});

const SocieteForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      activityType: record.activityType,
      nomSociete: record.nomSociete,
      userSociete: record.userSociete || [],
      societeCabinet: record.societeCabinet,
      mFSociete: record.mFSociete,
      telephoneSociete: record.telephoneSociete,
      adresseSociete: record.adresseSociete,
      emailSociete: record.emailSociete,
      logoSociete: record.logoSociete || [],
      commentaireSociete: record.commentaireSociete,
      fournisseurSociete: record.fournisseurSociete || [],
      clientsSociete: record.clientsSociete || [],
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
          <ActivityAutocompleteFormItem  
            name="activityType"
            label={i18n('entities.societe.fields.activityType')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          <InputFormItem
            name="nomSociete"
            label={i18n('entities.societe.fields.nomSociete')}  
            required={true}
            layout={formItemLayout}
          />
          <UserAutocompleteFormItem  
            name="userSociete"
            label={i18n('entities.societe.fields.userSociete')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
            mode="multiple"
          />
          <CabinetAutocompleteFormItem  
            name="societeCabinet"
            label={i18n('entities.societe.fields.societeCabinet')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          <InputFormItem
            name="mFSociete"
            label={i18n('entities.societe.fields.mFSociete')}  
            required={true}
            layout={formItemLayout}
          />
          <InputFormItem
            name="telephoneSociete"
            label={i18n('entities.societe.fields.telephoneSociete')}  
            required={true}
            layout={formItemLayout}
          />
          <TextAreaFormItem
            name="adresseSociete"
            label={i18n('entities.societe.fields.adresseSociete')}  
            required={true}
            layout={formItemLayout}
          />
          <InputFormItem
            name="emailSociete"
            label={i18n('entities.societe.fields.emailSociete')}  
            required={false}
            layout={formItemLayout}
          />
          <ImagesFormItem
            name="logoSociete"
            label={i18n('entities.societe.fields.logoSociete')}
            required={false}
            storage={Storage.values.societeLogoSociete}
            max={undefined}
            layout={formItemLayout}
          />
          <TextAreaFormItem
            name="commentaireSociete"
            label={i18n('entities.societe.fields.commentaireSociete')}  
            required={false}
            layout={formItemLayout}
          />
          <FournisseurAutocompleteFormItem  
            name="fournisseurSociete"
            label={i18n('entities.societe.fields.fournisseurSociete')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
            mode="multiple"
          />
          <ClientAutocompleteFormItem  
            name="clientsSociete"
            label={i18n('entities.societe.fields.clientsSociete')}
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

export default SocieteForm;
