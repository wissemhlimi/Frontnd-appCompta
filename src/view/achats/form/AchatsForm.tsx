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
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/security/storage';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';
import FournisseurAutocompleteFormItem from 'src/view/fournisseur/autocomplete/FournisseurAutocompleteFormItem';
import TvaAutocompleteFormItem from 'src/view/tva/autocomplete/TvaAutocompleteFormItem';
import TaxesAutocompleteFormItem from 'src/view/taxes/autocomplete/TaxesAutocompleteFormItem';
import SocieteAutocompleteFormItem from 'src/view/societe/autocomplete/SocieteAutocompleteFormItem';

const schema = yup.object().shape({
  numeroFactureAchat: yupFormSchemas.string(
    i18n('entities.achats.fields.numeroFactureAchat'),
    {
      "required": true
    },
  ),
  dateAchat: yupFormSchemas.date(
    i18n('entities.achats.fields.dateAchat'),
    {
      "required": true
    },
  ),
  founisseurAchat: yupFormSchemas.relationToOne(
    i18n('entities.achats.fields.founisseurAchat'),
    {
      "required": true
    },
  ),
  montantHTAchat: yupFormSchemas.decimal(
    i18n('entities.achats.fields.montantHTAchat'),
    {
      "required": true
    },
  ),
  achatTVA: yupFormSchemas.relationToOne(
    i18n('entities.achats.fields.achatTVA'),
    {},
  ),
  achatTaxe: yupFormSchemas.relationToOne(
    i18n('entities.achats.fields.achatTaxe'),
    {},
  ),
  achatRemise: yupFormSchemas.decimal(
    i18n('entities.achats.fields.achatRemise'),
    {},
  ),
  rSAchat: yupFormSchemas.decimal(
    i18n('entities.achats.fields.rSAchat'),
    {},
  ),
  montantTTCAchat: yupFormSchemas.decimal(
    i18n('entities.achats.fields.montantTTCAchat'),
    {
      "required": true
    },
  ),
  montantNetRSAchat: yupFormSchemas.decimal(
    i18n('entities.achats.fields.montantNetRSAchat'),
    {},
  ),
  attachementAchat: yupFormSchemas.files(
    i18n('entities.achats.fields.attachementAchat'),
    {},
  ),
  achatSociete: yupFormSchemas.relationToOne(
    i18n('entities.achats.fields.achatSociete'),
    {},
  ),
});

const AchatsForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      numeroFactureAchat: record.numeroFactureAchat,
      dateAchat: record.dateAchat ? moment(record.dateAchat, 'YYYY-MM-DD') : null,
      founisseurAchat: record.founisseurAchat,
      montantHTAchat: record.montantHTAchat,
      achatTVA: record.achatTVA,
      achatTaxe: record.achatTaxe,
      achatRemise: record.achatRemise,
      rSAchat: record.rSAchat,
      montantTTCAchat: record.montantTTCAchat,
      montantNetRSAchat: record.montantNetRSAchat,
      attachementAchat: record.attachementAchat || [],
      achatSociete: record.achatSociete,
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
            name="numeroFactureAchat"
            label={i18n('entities.achats.fields.numeroFactureAchat')}  
            required={true}
            layout={formItemLayout}
            autoFocus
          />
          <DatePickerFormItem
            name="dateAchat"
            label={i18n('entities.achats.fields.dateAchat')}
            required={true}
            layout={formItemLayout}
          />
          <FournisseurAutocompleteFormItem  
            name="founisseurAchat"
            label={i18n('entities.achats.fields.founisseurAchat')}
            required={true}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          <InputFormItem
            name="montantHTAchat"
            label={i18n('entities.achats.fields.montantHTAchat')}  
            required={true}
            layout={formItemLayout}
          />
          <TvaAutocompleteFormItem  
            name="achatTVA"
            label={i18n('entities.achats.fields.achatTVA')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          <TaxesAutocompleteFormItem  
            name="achatTaxe"
            label={i18n('entities.achats.fields.achatTaxe')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          <InputFormItem
            name="achatRemise"
            label={i18n('entities.achats.fields.achatRemise')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="rSAchat"
            label={i18n('entities.achats.fields.rSAchat')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="montantTTCAchat"
            label={i18n('entities.achats.fields.montantTTCAchat')}  
            required={true}
            layout={formItemLayout}
          />
          <InputFormItem
            name="montantNetRSAchat"
            label={i18n('entities.achats.fields.montantNetRSAchat')}  
            required={false}
            layout={formItemLayout}
          />
          <FilesFormItem
            name="attachementAchat"
            label={i18n('entities.achats.fields.attachementAchat')}
            required={false}
            storage={Storage.values.achatsAttachementAchat}
            max={undefined}
            formats={undefined}
            layout={formItemLayout}
          />
          <SocieteAutocompleteFormItem  
            name="achatSociete"
            label={i18n('entities.achats.fields.achatSociete')}
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

export default AchatsForm;
