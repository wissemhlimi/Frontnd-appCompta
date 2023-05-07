import {
  SearchOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/societe/list/societeListActions';
import selectors from 'src/modules/societe/list/societeListSelectors';
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
import ActivityAutocompleteFormItem from 'src/view/activity/autocomplete/ActivityAutocompleteFormItem';
import CabinetAutocompleteFormItem from 'src/view/cabinet/autocomplete/CabinetAutocompleteFormItem';

const schema = yup.object().shape({
  activityType: yupFilterSchemas.relationToOne(
    i18n('entities.societe.fields.activityType'),
  ),
  nomSociete: yupFilterSchemas.string(
    i18n('entities.societe.fields.nomSociete'),
  ),
  societeCabinet: yupFilterSchemas.relationToOne(
    i18n('entities.societe.fields.societeCabinet'),
  ),
  mFSociete: yupFilterSchemas.string(
    i18n('entities.societe.fields.mFSociete'),
  ),
  telephoneSociete: yupFilterSchemas.string(
    i18n('entities.societe.fields.telephoneSociete'),
  ),
  emailSociete: yupFilterSchemas.string(
    i18n('entities.societe.fields.emailSociete'),
  ),
});

const emptyValues = {
  activityType: null,
  nomSociete: null,
  societeCabinet: null,
  mFSociete: null,
  telephoneSociete: null,
  emailSociete: null,
}

const previewRenders = {
  activityType: {
      label: i18n('entities.societe.fields.activityType'),
      render: filterRenders.relationToOne(),
    },
  nomSociete: {
    label: i18n('entities.societe.fields.nomSociete'),
    render: filterRenders.generic(),
  },
  societeCabinet: {
      label: i18n('entities.societe.fields.societeCabinet'),
      render: filterRenders.relationToOne(),
    },
  mFSociete: {
    label: i18n('entities.societe.fields.mFSociete'),
    render: filterRenders.generic(),
  },
  telephoneSociete: {
    label: i18n('entities.societe.fields.telephoneSociete'),
    render: filterRenders.generic(),
  },
  emailSociete: {
    label: i18n('entities.societe.fields.emailSociete'),
    render: filterRenders.generic(),
  },
}

const SocieteListFilter = (props) => {
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
                  <ActivityAutocompleteFormItem  
                    name="activityType"
                    label={i18n('entities.societe.fields.activityType')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="nomSociete"
                    label={i18n('entities.societe.fields.nomSociete')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <CabinetAutocompleteFormItem  
                    name="societeCabinet"
                    label={i18n('entities.societe.fields.societeCabinet')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="mFSociete"
                    label={i18n('entities.societe.fields.mFSociete')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="telephoneSociete"
                    label={i18n('entities.societe.fields.telephoneSociete')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="emailSociete"
                    label={i18n('entities.societe.fields.emailSociete')}      
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

export default SocieteListFilter;