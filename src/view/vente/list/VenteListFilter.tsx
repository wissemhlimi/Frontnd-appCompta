import {
  SearchOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/vente/list/venteListActions';
import selectors from 'src/modules/vente/list/venteListSelectors';
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
import ClientAutocompleteFormItem from 'src/view/client/autocomplete/ClientAutocompleteFormItem';
import SocieteAutocompleteFormItem from 'src/view/societe/autocomplete/SocieteAutocompleteFormItem';

const schema = yup.object().shape({
  numeroFacture: yupFilterSchemas.string(
    i18n('entities.vente.fields.numeroFacture'),
  ),
  clientVente: yupFilterSchemas.relationToOne(
    i18n('entities.vente.fields.clientVente'),
  ),
  montantHTVenteRange: yupFilterSchemas.decimalRange(
    i18n('entities.vente.fields.montantHTVenteRange'),
  ),
  remiseRange: yupFilterSchemas.decimalRange(
    i18n('entities.vente.fields.remiseRange'),
  ),
  montantTTCVenteRange: yupFilterSchemas.decimalRange(
    i18n('entities.vente.fields.montantTTCVenteRange'),
  ),
  dateVenteRange: yupFilterSchemas.dateRange(
    i18n('entities.vente.fields.dateVenteRange'),
  ),
  venteSociete: yupFilterSchemas.relationToOne(
    i18n('entities.vente.fields.venteSociete'),
  ),
});

const emptyValues = {
  numeroFacture: null,
  clientVente: null,
  montantHTVenteRange: [],
  remiseRange: [],
  montantTTCVenteRange: [],
  dateVenteRange: [],
  venteSociete: null,
}

const previewRenders = {
  numeroFacture: {
    label: i18n('entities.vente.fields.numeroFacture'),
    render: filterRenders.generic(),
  },
  clientVente: {
      label: i18n('entities.vente.fields.clientVente'),
      render: filterRenders.relationToOne(),
    },
  montantHTVenteRange: {
    label: i18n('entities.vente.fields.montantHTVenteRange'),
    render: filterRenders.decimalRange(),
  },
  remiseRange: {
    label: i18n('entities.vente.fields.remiseRange'),
    render: filterRenders.decimalRange(),
  },
  montantTTCVenteRange: {
    label: i18n('entities.vente.fields.montantTTCVenteRange'),
    render: filterRenders.decimalRange(),
  },
  dateVenteRange: {
    label: i18n('entities.vente.fields.dateVenteRange'),
    render: filterRenders.dateRange(),
  },
  venteSociete: {
      label: i18n('entities.vente.fields.venteSociete'),
      render: filterRenders.relationToOne(),
    },
}

const VenteListFilter = (props) => {
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
                    name="numeroFacture"
                    label={i18n('entities.vente.fields.numeroFacture')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <ClientAutocompleteFormItem  
                    name="clientVente"
                    label={i18n('entities.vente.fields.clientVente')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputRangeFormItem
                    name="montantHTVenteRange"
                    label={i18n('entities.vente.fields.montantHTVenteRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputRangeFormItem
                    name="remiseRange"
                    label={i18n('entities.vente.fields.remiseRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputRangeFormItem
                    name="montantTTCVenteRange"
                    label={i18n('entities.vente.fields.montantTTCVenteRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <DatePickerRangeFormItem
                    name="dateVenteRange"
                    label={i18n('entities.vente.fields.dateVenteRange')}    
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SocieteAutocompleteFormItem  
                    name="venteSociete"
                    label={i18n('entities.vente.fields.venteSociete')}        
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

export default VenteListFilter;