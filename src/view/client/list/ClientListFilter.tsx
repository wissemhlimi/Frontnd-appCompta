import {
  SearchOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/client/list/clientListActions';
import selectors from 'src/modules/client/list/clientListSelectors';
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
  nomClient: yupFilterSchemas.string(
    i18n('entities.client.fields.nomClient'),
  ),
  mFClient: yupFilterSchemas.string(
    i18n('entities.client.fields.mFClient'),
  ),
  telephoneClient: yupFilterSchemas.string(
    i18n('entities.client.fields.telephoneClient'),
  ),
  emailClient: yupFilterSchemas.string(
    i18n('entities.client.fields.emailClient'),
  ),
  cilentSociete: yupFilterSchemas.relationToOne(
    i18n('entities.client.fields.cilentSociete'),
  ),
});

const emptyValues = {
  nomClient: null,
  mFClient: null,
  telephoneClient: null,
  emailClient: null,
  cilentSociete: null,
}

const previewRenders = {
  nomClient: {
    label: i18n('entities.client.fields.nomClient'),
    render: filterRenders.generic(),
  },
  mFClient: {
    label: i18n('entities.client.fields.mFClient'),
    render: filterRenders.generic(),
  },
  telephoneClient: {
    label: i18n('entities.client.fields.telephoneClient'),
    render: filterRenders.generic(),
  },
  emailClient: {
    label: i18n('entities.client.fields.emailClient'),
    render: filterRenders.generic(),
  },
  cilentSociete: {
      label: i18n('entities.client.fields.cilentSociete'),
      render: filterRenders.relationToOne(),
    },
}

const ClientListFilter = (props) => {
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
                    name="nomClient"
                    label={i18n('entities.client.fields.nomClient')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="mFClient"
                    label={i18n('entities.client.fields.mFClient')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="telephoneClient"
                    label={i18n('entities.client.fields.telephoneClient')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="emailClient"
                    label={i18n('entities.client.fields.emailClient')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SocieteAutocompleteFormItem  
                    name="cilentSociete"
                    label={i18n('entities.client.fields.cilentSociete')}        
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

export default ClientListFilter;