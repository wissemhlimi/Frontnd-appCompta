import {
  SearchOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/fournisseur/list/fournisseurListActions';
import selectors from 'src/modules/fournisseur/list/fournisseurListSelectors';
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
import SocieteAutocompleteFormItem from 'src/view/societe/autocomplete/SocieteAutocompleteFormItem';

const schema = yup.object().shape({
  nomFournisseur: yupFilterSchemas.string(
    i18n('entities.fournisseur.fields.nomFournisseur'),
  ),
  mFFournisseur: yupFilterSchemas.string(
    i18n('entities.fournisseur.fields.mFFournisseur'),
  ),
  telephoneFournisseur: yupFilterSchemas.string(
    i18n('entities.fournisseur.fields.telephoneFournisseur'),
  ),
  emailFournisseur: yupFilterSchemas.string(
    i18n('entities.fournisseur.fields.emailFournisseur'),
  ),
  fournisseurSociete: yupFilterSchemas.relationToOne(
    i18n('entities.fournisseur.fields.fournisseurSociete'),
  ),
});

const emptyValues = {
  nomFournisseur: null,
  mFFournisseur: null,
  telephoneFournisseur: null,
  emailFournisseur: null,
  fournisseurSociete: null,
}

const previewRenders = {
  nomFournisseur: {
    label: i18n('entities.fournisseur.fields.nomFournisseur'),
    render: filterRenders.generic(),
  },
  mFFournisseur: {
    label: i18n('entities.fournisseur.fields.mFFournisseur'),
    render: filterRenders.generic(),
  },
  telephoneFournisseur: {
    label: i18n('entities.fournisseur.fields.telephoneFournisseur'),
    render: filterRenders.generic(),
  },
  emailFournisseur: {
    label: i18n('entities.fournisseur.fields.emailFournisseur'),
    render: filterRenders.generic(),
  },
  fournisseurSociete: {
      label: i18n('entities.fournisseur.fields.fournisseurSociete'),
      render: filterRenders.relationToOne(),
    },
}

const FournisseurListFilter = (props) => {
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
                    name="nomFournisseur"
                    label={i18n('entities.fournisseur.fields.nomFournisseur')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="mFFournisseur"
                    label={i18n('entities.fournisseur.fields.mFFournisseur')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="telephoneFournisseur"
                    label={i18n('entities.fournisseur.fields.telephoneFournisseur')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="emailFournisseur"
                    label={i18n('entities.fournisseur.fields.emailFournisseur')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SocieteAutocompleteFormItem  
                    name="fournisseurSociete"
                    label={i18n('entities.fournisseur.fields.fournisseurSociete')}        
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

export default FournisseurListFilter;