import {
  SearchOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/avoir/list/avoirListActions';
import selectors from 'src/modules/avoir/list/avoirListSelectors';
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
import SocieteAutocompleteFormItem from 'src/view/societe/autocomplete/SocieteAutocompleteFormItem';

const schema = yup.object().shape({
  numeroAvoir: yupFilterSchemas.string(
    i18n('entities.avoir.fields.numeroAvoir'),
  ),
  dateAvoirRange: yupFilterSchemas.dateRange(
    i18n('entities.avoir.fields.dateAvoirRange'),
  ),
  fournisseurAvoir: yupFilterSchemas.relationToOne(
    i18n('entities.avoir.fields.fournisseurAvoir'),
  ),
  montantHTAvoirRange: yupFilterSchemas.decimalRange(
    i18n('entities.avoir.fields.montantHTAvoirRange'),
  ),
  montantTTCAvoirRange: yupFilterSchemas.decimalRange(
    i18n('entities.avoir.fields.montantTTCAvoirRange'),
  ),
  avoirSociete: yupFilterSchemas.relationToOne(
    i18n('entities.avoir.fields.avoirSociete'),
  ),
});

const emptyValues = {
  numeroAvoir: null,
  dateAvoirRange: [],
  fournisseurAvoir: null,
  montantHTAvoirRange: [],
  montantTTCAvoirRange: [],
  avoirSociete: null,
}

const previewRenders = {
  numeroAvoir: {
    label: i18n('entities.avoir.fields.numeroAvoir'),
    render: filterRenders.generic(),
  },
  dateAvoirRange: {
    label: i18n('entities.avoir.fields.dateAvoirRange'),
    render: filterRenders.dateRange(),
  },
  fournisseurAvoir: {
      label: i18n('entities.avoir.fields.fournisseurAvoir'),
      render: filterRenders.relationToOne(),
    },
  montantHTAvoirRange: {
    label: i18n('entities.avoir.fields.montantHTAvoirRange'),
    render: filterRenders.decimalRange(),
  },
  montantTTCAvoirRange: {
    label: i18n('entities.avoir.fields.montantTTCAvoirRange'),
    render: filterRenders.decimalRange(),
  },
  avoirSociete: {
      label: i18n('entities.avoir.fields.avoirSociete'),
      render: filterRenders.relationToOne(),
    },
}

const AvoirListFilter = (props) => {
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
                    name="numeroAvoir"
                    label={i18n('entities.avoir.fields.numeroAvoir')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <DatePickerRangeFormItem
                    name="dateAvoirRange"
                    label={i18n('entities.avoir.fields.dateAvoirRange')}    
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <FournisseurAutocompleteFormItem  
                    name="fournisseurAvoir"
                    label={i18n('entities.avoir.fields.fournisseurAvoir')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputRangeFormItem
                    name="montantHTAvoirRange"
                    label={i18n('entities.avoir.fields.montantHTAvoirRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputRangeFormItem
                    name="montantTTCAvoirRange"
                    label={i18n('entities.avoir.fields.montantTTCAvoirRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SocieteAutocompleteFormItem  
                    name="avoirSociete"
                    label={i18n('entities.avoir.fields.avoirSociete')}        
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

export default AvoirListFilter;