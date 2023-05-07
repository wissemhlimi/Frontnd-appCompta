import {
  CloseOutlined,
  SaveOutlined,
  UndoOutlined,
  PlusOutlined,
  MinusOutlined,
} from '@ant-design/icons';

import { Button, Form, InputNumber, Select } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
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
import TaxesService from 'src/modules/taxes/taxesService';
import Message from 'src/view/shared/message';

const schema = yup.object().shape({
  numeroAvoir: yupFormSchemas.string(
    i18n('entities.avoir.fields.numeroAvoir'),
    {
      "required": true
    },
  ),
  dateAvoir: yupFormSchemas.date(
    i18n('entities.avoir.fields.dateAvoir'),
    {
      "required": true
    },
  ),
  fournisseurAvoir: yupFormSchemas.relationToOne(
    i18n('entities.avoir.fields.fournisseurAvoir'),
    {
      "required": true
    },
  ),
  montantHTAvoir: yupFormSchemas.decimal(
    i18n('entities.avoir.fields.montantHTAvoir'),
    {
      "required": true
    },
  ),
  avoirTVA: yupFormSchemas.relationToMany(
    i18n('entities.avoir.fields.avoirTVA'),
    {},
  ),
  avoirTaxe: yupFormSchemas.relationToMany(
    i18n('entities.avoir.fields.avoirTaxe'),
    {},
  ),
  montantTTCAvoir: yupFormSchemas.decimal(
    i18n('entities.avoir.fields.montantTTCAvoir'),
    {
      "required": true
    },
  ),
  attachementAvoir: yupFormSchemas.files(
    i18n('entities.avoir.fields.attachementAvoir'),
    {},
  ),
  avoirSociete: yupFormSchemas.relationToOne(
    i18n('entities.avoir.fields.avoirSociete'),
    {},
  ),
});

const AvoirForm = (props) => {

  const [taxeData, setTaxeData] = useState([
    {
      id: '',
      label: '',
    },
  ]);
  const [newFormTaxe, setNewFormTaxe] = useState([
    {
      avoirTaxe: '',
      valeur: 0,
    },
  ]);
  const addFields = () => {
    setNewFormTaxe([
      ...newFormTaxe,
      {
        avoirTaxe: '',
        valeur: 0,
      },
    ]);
  };
  const removeFields = async (index) => {
    let formsDelete = [...newFormTaxe];
    formsDelete.splice(index, 1);
    setNewFormTaxe(formsDelete);
    var linesD = [...taxeData];
    let dataobj = Object(newFormTaxe[index].avoirTaxe);
    const oldValue = await TaxesService.find(
      dataobj.key,
    );

    const obj = {
      id: oldValue.id,
      label: oldValue.nomTaxe,
    };
    linesD.push(obj);

    setTaxeData(linesD);
  };

  const handleChangeLineNumber = async (e, index) => {
    let formN = [...newFormTaxe];
    formN[index].valeur = e;
    setNewFormTaxe(formN);
  };

  const handleChangeLine = async (e, i, val) => {
    const value = typeof val === 'object' ? val.id : val;
    let formN = [...newFormTaxe];
    formN[i].avoirTaxe = e;
    setNewFormTaxe(formN);

    var linesD = [...taxeData];
    var index = linesD
      .map(function (img) {
        return img.id;
      })
      .indexOf(e.value);
    if (value !== e.value && value !== '') {
      const oldValue = await TaxesService.find(value);
      const obj = {
        id: oldValue.id,
        label: oldValue.nomTaxe,
      };
      linesD.push(obj);
    }
    linesD.splice(index, 1);
    setTaxeData(linesD);
  };
  const fetchTaxeData = async (value, limit) => {
    var results = await TaxesService.listAutocomplete(
      value,
      limit,
    );

    await props.record.avoirTaxeList?.map((avoirTaxe) => {
      var index = results
        .map(function (img) {
          return img.id;
        })
        .indexOf(avoirTaxe.avoirTaxe.id);
      results.splice(index, 1);
    });

    setTaxeData(results);
    return results;
  };
  useEffect(() => {
    fetchTaxeData(undefined, 100);

    // eslint-disable-next-avoirTaxe react-hooks/exhaustive-deps
  }, []);
  const [initialValues] = useState(() => {
    const record = props.record || {};
    if (props.isEditing) {
      setNewFormTaxe(record.avoirTaxeList);
    }
    return {
      numeroAvoir: record.numeroAvoir,
      dateAvoir: record.dateAvoir ? moment(record.dateAvoir, 'YYYY-MM-DD') : null,
      fournisseurAvoir: record.fournisseurAvoir,
      montantHTAvoir: record.montantHTAvoir,
      avoirTVA: record.avoirTVA || [],
      avoirTaxe: record.avoirTaxe || [],
      montantTTCAvoir: record.montantTTCAvoir,
      attachementAvoir: record.attachementAvoir || [],
      avoirSociete: record.avoirSociete,
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
  const verifyRequired = () => {
    var lineD = [...newFormTaxe];
    var bool = true;
    lineD.map((avoirTaxe) => {
      if (avoirTaxe.avoirTaxe === '') {
        bool = false;
      }
    });
    return bool;
  };
  const onSubmit = (values) => {


    const bool = verifyRequired();
    if (bool === true) {
      props.onSubmit(props?.record?.id, {
        ...values,
        avoirTaxeList: newFormTaxe,
      });
    } else {
      Message.error('All fields have to be checked!!');
    }
  };
  const optionsLines = taxeData
    .filter((item) => Boolean(item.id))
    .map((d) => (
      <Select.Option key={d.id} value={d.id}>
        {d.label}
      </Select.Option>
    ));


  const { saveLoading } = props;
  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <InputFormItem
            name="numeroAvoir"
            label={i18n('entities.avoir.fields.numeroAvoir')}
            required={true}
            layout={formItemLayout}
            autoFocus
          />
          <DatePickerFormItem
            name="dateAvoir"
            label={i18n('entities.avoir.fields.dateAvoir')}
            required={true}
            layout={formItemLayout}
          />
          <FournisseurAutocompleteFormItem
            name="fournisseurAvoir"
            label={i18n('entities.avoir.fields.fournisseurAvoir')}
            required={true}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          <InputFormItem
            name="montantHTAvoir"
            label={i18n('entities.avoir.fields.montantHTAvoir')}
            required={true}
            layout={formItemLayout}
          />
          <TvaAutocompleteFormItem
            name="avoirTVA"
            label={i18n('entities.avoir.fields.avoirTVA')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
            mode="multiple"
          />
          {/* <TaxesAutocompleteFormItem  
            name="avoirTaxe"
            label={i18n('entities.avoir.fields.avoirTaxe')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
            mode="multiple"
          /> */}
          <InputFormItem
            name="montantTTCAvoir"
            label={i18n('entities.avoir.fields.montantTTCAvoir')}
            required={true}
            layout={formItemLayout}
          />
          <FilesFormItem
            name="attachementAvoir"
            label={i18n('entities.avoir.fields.attachementAvoir')}
            required={false}
            storage={Storage.values.avoirAttachementAvoir}
            max={undefined}
            formats={undefined}
            layout={formItemLayout}
          />
          <SocieteAutocompleteFormItem
            name="avoirSociete"
            label={i18n('entities.avoir.fields.avoirSociete')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          <div
            style={{
              display: 'flex',
              paddingTop: 5,
              paddingBottom: 5,
            }}
          >
            <div
              style={{
                width: '100%',
                display: 'grid',

                gridTemplateColumns: '50% 50%',
              }}
            >
              {newFormTaxe.map((item, index) => (
                <div
                  key={index + `div`}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    paddingBottom: 5,
                    margin: 10,
                  }}
                  className="app__specification"
                >
                  <div
                    style={{
                      display: 'flex',
                    }}
                  >
                    <div style={{ width: '100%' }}>
                      <div style={{ display: 'flex' }}>
                        <div
                          style={{
                            position: 'relative',
                            display: 'inline-flex',
                            alignItems: 'center',
                            height: '32px',
                            color: 'rgba(0, 0, 0, 0.85)',
                            fontSize: '14px',
                          }}
                        >
                          {i18n('entities.avoir.fields.avoirTaxe')}
                        </div>
                        <Select
                          style={{
                            width: '100%',
                            paddingLeft: 10,
                            paddingRight: 10,
                          }}
                          key={
                            typeof item.avoirTaxe === 'object'
                              ? item.avoirTaxe
                              : undefined
                          }
                          labelInValue={true}
                          value={
                            typeof item.avoirTaxe === 'object'
                              ? item.avoirTaxe
                              : undefined
                          }
                          onChange={(e) =>
                            handleChangeLine(
                              e,
                              index,
                              item.avoirTaxe,
                            )
                          }
                          showArrow={false}

                        >
                          {optionsLines}
                        </Select>
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          paddingTop: 5,
                          paddingBottom: 5,
                          columnGap: 2,
                        }}
                      >
                        <div style={{ width: '100%' }}>
                          <>
                            <div
                              key={index + `div`}
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                paddingBottom: 15,
                              }}
                              className="app__specification"
                            >
                              <div
                                style={{
                                  display: 'flex',
                                }}
                              >
                                <fieldset
                                  style={{
                                    borderTopWidth: 0,
                                    width:
                                      '-webkit-fill-available',
                                    display: 'grid',

                                    gridTemplateColumns:
                                      '50% 50%',
                                  }}
                                >
                                  <div
                                    style={{
                                      display: 'flex',
                                      marginBottom: '10px',
                                    }}
                                  >
                                    <div
                                      style={{
                                        position:
                                          'relative',
                                        display:
                                          'inline-flex',
                                        alignItems:
                                          'center',
                                        height: '32px',
                                        color:
                                          'rgba(0, 0, 0, 0.85)',
                                        fontSize: '14px',
                                        marginRight: '10px',
                                      }}
                                    >
                                      {i18n(
                                        'entities.avoir.fields.valeurTaxe',
                                      )}
                                    </div>
                                    <InputNumber
                                      value={
                                        item.valeur
                                      }
                                      type="number"
                                      onChange={(e) =>
                                        handleChangeLineNumber(
                                          e,
                                          index,
                                        )
                                      }
                                    />
                                  </div>

                                </fieldset>
                              </div>
                            </div>
                          </>
                        </div>
                      </div>
                    </div>

                    {index ? (
                      <div className="input-group">
                        <Button
                          style={{
                            flexShrink: 0,
                          }}
                          type="primary"
                          icon={<MinusOutlined />}
                          onClick={() =>
                            removeFields(index)
                          }
                          htmlType="button"
                        />
                      </div>
                    ) : (
                      <div className="input-group">
                        <Button
                          style={{
                            flexShrink: 0,
                          }}
                          type="primary"
                          icon={<PlusOutlined />}
                          onClick={() => addFields()}
                          htmlType="button"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
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

export default AvoirForm;
