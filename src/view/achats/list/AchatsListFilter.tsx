import {
  SearchOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/achats/list/achatsListActions';
import selectors from 'src/modules/achats/list/achatsListSelectors';
import FilterWrapper, {
  filterItemLayout,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import { Collapse } from 'antd';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import InputRangeFormItem from 'src/view/shared/form/items/InputRangeFormItem';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import FournisseurAutocompleteFormItem from 'src/view/fournisseur/autocomplete/FournisseurAutocompleteFormItem';
import TvaAutocompleteFormItem from 'src/view/tva/autocomplete/TvaAutocompleteFormItem';
import TaxesAutocompleteFormItem from 'src/view/taxes/autocomplete/TaxesAutocompleteFormItem';
import SocieteAutocompleteFormItem from 'src/view/societe/autocomplete/SocieteAutocompleteFormItem';

const schema = yup.object().shape({
  numeroFactureAchat: yupFilterSchemas.string(
    i18n('entities.achats.fields.numeroFactureAchat'),
  ),
  dateAchatRange: yupFilterSchemas.dateRange(
    i18n('entities.achats.fields.dateAchatRange'),
  ),
  founisseurAchat: yupFilterSchemas.relationToOne(
    i18n('entities.achats.fields.founisseurAchat'),
  ),
  montantHTAchatRange: yupFilterSchemas.decimalRange(
    i18n('entities.achats.fields.montantHTAchatRange'),
  ),
  achatTVA: yupFilterSchemas.relationToOne(
    i18n('entities.achats.fields.achatTVA'),
  ),
  achatTaxe: yupFilterSchemas.relationToOne(
    i18n('entities.achats.fields.achatTaxe'),
  ),
  achatRemiseRange: yupFilterSchemas.decimalRange(
    i18n('entities.achats.fields.achatRemiseRange'),
  ),
  rSAchatRange: yupFilterSchemas.decimalRange(
    i18n('entities.achats.fields.rSAchatRange'),
  ),
  montantTTCAchatRange: yupFilterSchemas.decimalRange(
    i18n('entities.achats.fields.montantTTCAchatRange'),
  ),
  montantNetRSAchatRange: yupFilterSchemas.decimalRange(
    i18n('entities.achats.fields.montantNetRSAchatRange'),
  ),
  achatSociete: yupFilterSchemas.relationToOne(
    i18n('entities.achats.fields.achatSociete'),
  ),
});

const emptyValues = {
  numeroFactureAchat: null,
  dateAchatRange: [],
  founisseurAchat: null,
  montantHTAchatRange: [],
  achatTVA: null,
  achatTaxe: null,
  achatRemiseRange: [],
  rSAchatRange: [],
  montantTTCAchatRange: [],
  montantNetRSAchatRange: [],
  achatSociete: null,
}

const previewRenders = {
  numeroFactureAchat: {
    label: i18n('entities.achats.fields.numeroFactureAchat'),
    render: filterRenders.generic(),
  },
  dateAchatRange: {
    label: i18n('entities.achats.fields.dateAchatRange'),
    render: filterRenders.dateRange(),
  },
  founisseurAchat: {
      label: i18n('entities.achats.fields.founisseurAchat'),
      render: filterRenders.relationToOne(),
    },
  montantHTAchatRange: {
    label: i18n('entities.achats.fields.montantHTAchatRange'),
    render: filterRenders.decimalRange(),
  },
  achatTVA: {
      label: i18n('entities.achats.fields.achatTVA'),
      render: filterRenders.relationToOne(),
    },
  achatTaxe: {
      label: i18n('entities.achats.fields.achatTaxe'),
      render: filterRenders.relationToOne(),
    },
  achatRemiseRange: {
    label: i18n('entities.achats.fields.achatRemiseRange'),
    render: filterRenders.decimalRange(),
  },
  rSAchatRange: {
    label: i18n('entities.achats.fields.rSAchatRange'),
    render: filterRenders.decimalRange(),
  },
  montantTTCAchatRange: {
    label: i18n('entities.achats.fields.montantTTCAchatRange'),
    render: filterRenders.decimalRange(),
  },
  montantNetRSAchatRange: {
    label: i18n('entities.achats.fields.montantNetRSAchatRange'),
    render: filterRenders.decimalRange(),
  },
  achatSociete: {
      label: i18n('entities.achats.fields.achatSociete'),
      render: filterRenders.relationToOne(),
    },
}

const AchatsListFilter = (props) => {
  const dispatch = useDispatch();
  const rawFilter = useSelector(selectors.selectRawFilter);
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(actions.doFetch(schema.cast(initialValues), rawFilter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  const { loading } = props;
  return (
    <FilterWrapper>
      <Collapse
        activeKey={expanded ? 'filter' : undefined}
        expandIconPosition="right"
        ghost
        onChange={(value) => {
          setExpanded(Boolean(value.length));
        }}
      >
        <Collapse.Panel
          header={
            <FilterPreview             
              renders={previewRenders}
              values={rawFilter}
              expanded={expanded}
              onRemove={onRemove}
            />
          }
          key="filter"
        >
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Row gutter={24}>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="numeroFactureAchat"
                    label={i18n('entities.achats.fields.numeroFactureAchat')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <DatePickerRangeFormItem
                    name="dateAchatRange"
                    label={i18n('entities.achats.fields.dateAchatRange')}    
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <FournisseurAutocompleteFormItem  
                    name="founisseurAchat"
                    label={i18n('entities.achats.fields.founisseurAchat')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputRangeFormItem
                    name="montantHTAchatRange"
                    label={i18n('entities.achats.fields.montantHTAchatRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <TvaAutocompleteFormItem  
                    name="achatTVA"
                    label={i18n('entities.achats.fields.achatTVA')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <TaxesAutocompleteFormItem  
                    name="achatTaxe"
                    label={i18n('entities.achats.fields.achatTaxe')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputRangeFormItem
                    name="achatRemiseRange"
                    label={i18n('entities.achats.fields.achatRemiseRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputRangeFormItem
                    name="rSAchatRange"
                    label={i18n('entities.achats.fields.rSAchatRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputRangeFormItem
                    name="montantTTCAchatRange"
                    label={i18n('entities.achats.fields.montantTTCAchatRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputRangeFormItem
                    name="montantNetRSAchatRange"
                    label={i18n('entities.achats.fields.montantNetRSAchatRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SocieteAutocompleteFormItem  
                    name="achatSociete"
                    label={i18n('entities.achats.fields.achatSociete')}        
                    layout={filterItemLayout}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="filter-buttons" span={24}>
                  <Button
                    loading={loading}
                    icon={<SearchOutlined />}
                    type="primary"
                    htmlType="submit"
                  >
                    {i18n('common.search')}
                  </Button>
                  <Button
                    loading={loading}
                    onClick={onReset}
                    icon={<UndoOutlined />}
                  >
                    {i18n('common.reset')}
                  </Button>
                </Col>
              </Row>
            </form>
          </FormProvider>
        </Collapse.Panel>
      </Collapse>
    </FilterWrapper>
  );
};

export default AchatsListFilter;