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
  nomFournisseur: yupFormSchemas.string(
    i18n('entities.fournisseur.fields.nomFournisseur'),
    {
      "required": true
    },
  ),
  mFFournisseur: yupFormSchemas.string(
    i18n('entities.fournisseur.fields.mFFournisseur'),
    {
      "required": true
    },
  ),
  adresseFournisseur: yupFormSchemas.string(
    i18n('entities.fournisseur.fields.adresseFournisseur'),
    {
      "required": true
    },
  ),
  telephoneFournisseur: yupFormSchemas.string(
    i18n('entities.fournisseur.fields.telephoneFournisseur'),
    {
      "required": true
    },
  ),
  emailFournisseur: yupFormSchemas.string(
    i18n('entities.fournisseur.fields.emailFournisseur'),
    {},
  ),
  photoFournisseur: yupFormSchemas.images(
    i18n('entities.fournisseur.fields.photoFournisseur'),
    {},
  ),
  commentaireFournisseur: yupFormSchemas.string(
    i18n('entities.fournisseur.fields.commentaireFournisseur'),
    {},
  ),
  fournisseurSociete: yupFormSchemas.relationToOne(
    i18n('entities.fournisseur.fields.fournisseurSociete'),
    {},
  ),
});

const FournisseurForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      nomFournisseur: record.nomFournisseur,
      mFFournisseur: record.mFFournisseur,
      adresseFournisseur: record.adresseFournisseur,
      telephoneFournisseur: record.telephoneFournisseur,
      emailFournisseur: record.emailFournisseur,
      photoFournisseur: record.photoFournisseur || [],
      commentaireFournisseur: record.commentaireFournisseur,
      fournisseurSociete: record.fournisseurSociete,
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
            name="nomFournisseur"
            label={i18n('entities.fournisseur.fields.nomFournisseur')}  
            required={true}
            layout={formItemLayout}
            autoFocus
          />
          <InputFormItem
            name="mFFournisseur"
            label={i18n('entities.fournisseur.fields.mFFournisseur')}  
            required={true}
            layout={formItemLayout}
          />
          <InputFormItem
            name="adresseFournisseur"
            label={i18n('entities.fournisseur.fields.adresseFournisseur')}  
            required={true}
            layout={formItemLayout}
          />
          <InputFormItem
            name="telephoneFournisseur"
            label={i18n('entities.fournisseur.fields.telephoneFournisseur')}  
            required={true}
            layout={formItemLayout}
          />
          <InputFormItem
            name="emailFournisseur"
            label={i18n('entities.fournisseur.fields.emailFournisseur')}  
            required={false}
            layout={formItemLayout}
          />
          <ImagesFormItem
            name="photoFournisseur"
            label={i18n('entities.fournisseur.fields.photoFournisseur')}
            required={false}
            storage={Storage.values.fournisseurPhotoFournisseur}
            max={undefined}
            layout={formItemLayout}
          />
          <TextAreaFormItem
            name="commentaireFournisseur"
            label={i18n('entities.fournisseur.fields.commentaireFournisseur')}  
            required={false}
            layout={formItemLayout}
          />
          <SocieteAutocompleteFormItem  
            name="fournisseurSociete"
            label={i18n('entities.fournisseur.fields.fournisseurSociete')}
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

export default FournisseurForm;
