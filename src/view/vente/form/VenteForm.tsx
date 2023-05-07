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
import ClientAutocompleteFormItem from 'src/view/client/autocomplete/ClientAutocompleteFormItem';
import TvaAutocompleteFormItem from 'src/view/tva/autocomplete/TvaAutocompleteFormItem';
import TaxesAutocompleteFormItem from 'src/view/taxes/autocomplete/TaxesAutocompleteFormItem';
import SocieteAutocompleteFormItem from 'src/view/societe/autocomplete/SocieteAutocompleteFormItem';

const schema = yup.object().shape({
  numeroFacture: yupFormSchemas.string(
    i18n('entities.vente.fields.numeroFacture'),
    {
      "required": true
    },
  ),
  clientVente: yupFormSchemas.relationToOne(
    i18n('entities.vente.fields.clientVente'),
    {
      "required": true
    },
  ),
  montantHTVente: yupFormSchemas.decimal(
    i18n('entities.vente.fields.montantHTVente'),
    {
      "required": true
    },
  ),
  tva: yupFormSchemas.relationToMany(
    i18n('entities.vente.fields.tva'),
    {},
  ),
  taxe: yupFormSchemas.relationToMany(
    i18n('entities.vente.fields.taxe'),
    {},
  ),
  remise: yupFormSchemas.decimal(
    i18n('entities.vente.fields.remise'),
    {},
  ),
  montantTTCVente: yupFormSchemas.decimal(
    i18n('entities.vente.fields.montantTTCVente'),
    {
      "required": true
    },
  ),
  dateVente: yupFormSchemas.date(
    i18n('entities.vente.fields.dateVente'),
    {
      "required": true
    },
  ),
  attachementVente: yupFormSchemas.files(
    i18n('entities.vente.fields.attachementVente'),
    {},
  ),
  venteSociete: yupFormSchemas.relationToOne(
    i18n('entities.vente.fields.venteSociete'),
    {},
  ),
});

const VenteForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      numeroFacture: record.numeroFacture,
      clientVente: record.clientVente,
      montantHTVente: record.montantHTVente,
      tva: record.tva || [],
      taxe: record.taxe || [],
      remise: record.remise,
      montantTTCVente: record.montantTTCVente,
      dateVente: record.dateVente ? moment(record.dateVente, 'YYYY-MM-DD') : null,
      attachementVente: record.attachementVente || [],
      venteSociete: record.venteSociete,
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
            name="numeroFacture"
            label={i18n('entities.vente.fields.numeroFacture')}  
            required={true}
            layout={formItemLayout}
            autoFocus
          />
          <ClientAutocompleteFormItem  
            name="clientVente"
            label={i18n('entities.vente.fields.clientVente')}
            required={true}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          <InputFormItem
            name="montantHTVente"
            label={i18n('entities.vente.fields.montantHTVente')}  
            required={true}
            layout={formItemLayout}
          />
          <TvaAutocompleteFormItem  
            name="tva"
            label={i18n('entities.vente.fields.tva')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
            mode="multiple"
          />
          <TaxesAutocompleteFormItem  
            name="taxe"
            label={i18n('entities.vente.fields.taxe')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
            mode="multiple"
          />
          <InputFormItem
            name="remise"
            label={i18n('entities.vente.fields.remise')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="montantTTCVente"
            label={i18n('entities.vente.fields.montantTTCVente')}  
            required={true}
            layout={formItemLayout}
          />
          <DatePickerFormItem
            name="dateVente"
            label={i18n('entities.vente.fields.dateVente')}
            required={true}
            layout={formItemLayout}
          />
          <FilesFormItem
            name="attachementVente"
            label={i18n('entities.vente.fields.attachementVente')}
            required={false}
            storage={Storage.values.venteAttachementVente}
            max={undefined}
            formats={undefined}
            layout={formItemLayout}
          />
          <SocieteAutocompleteFormItem  
            name="venteSociete"
            label={i18n('entities.vente.fields.venteSociete')}
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

export default VenteForm;
