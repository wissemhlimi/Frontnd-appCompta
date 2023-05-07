import { Table, Popconfirm } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/activity/list/activityListActions';
import destroyActions from 'src/modules/activity/destroy/activityDestroyActions';
import selectors from 'src/modules/activity/list/activityListSelectors';
import destroySelectors from 'src/modules/activity/destroy/activityDestroySelectors';
import activitySelectors from 'src/modules/activity/activitySelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import SocieteListItem from 'src/view/societe/list/SocieteListItem';
import TaxesListItem from 'src/view/taxes/list/TaxesListItem';
import TvaListItem from 'src/view/tva/list/TvaListItem';

const ActivityListTable = (props) => {
  const dispatch = useDispatch();

  const findLoading = useSelector(selectors.selectLoading);
  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );
  const loading = findLoading || destroyLoading;

  const rows = useSelector(selectors.selectRows);
  const pagination = useSelector(
    selectors.selectPagination,
  );
  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const hasPermissionToEdit = useSelector(
    activitySelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    activitySelectors.selectPermissionToDestroy,
  );

  const handleTableChange = (
    pagination,
    filters,
    sorter,
  ) => {
    dispatch(
      actions.doChangePaginationAndSort(pagination, sorter),
    );
  };

  const doDestroy = (id) => {
    dispatch(destroyActions.doDestroy(id));
  };

  const columns = [
      {
        title: i18n('entities.activity.fields.activityName'),
        sorter: true,
        dataIndex: 'activityName',
      },
      {
        title: i18n('entities.activity.fields.societeType'),
        sorter: false,
        dataIndex: 'societeType',
        render: (value) => <SocieteListItem value={value} />,
      },
      {
        title: i18n('entities.activity.fields.taxeType'),
        sorter: false,
        dataIndex: 'taxeType',
        render: (value) => <TaxesListItem value={value} />,
      },
      {
        title: i18n('entities.activity.fields.tVAType'),
        sorter: false,
        dataIndex: 'tVAType',
        render: (value) => <TvaListItem value={value} />,
      },
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/activity/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/activity/${record.id}/edit`}>
              {i18n('common.edit')}
            </Link>
          )}
          {hasPermissionToDestroy && (
            <Popconfirm
              title={i18n('common.areYouSure')}
              onConfirm={() => doDestroy(record.id)}
              okText={i18n('common.yes')}
              cancelText={i18n('common.no')}
            >
              <ButtonLink>
                {i18n('common.destroy')}
              </ButtonLink>
            </Popconfirm>
          )}
        </div>
      ),
    },
  ];

  const rowSelection = () => {
    return {
      selectedRowKeys: selectedKeys,
      onChange: (selectedRowKeys) => {
        dispatch(actions.doChangeSelected(selectedRowKeys));
      },
    };
  };

  return (
    <TableWrapper>
      <Table
        rowKey="id"
        loading={loading}
        columns={columns as any}
        dataSource={rows}
        pagination={pagination}
        onChange={handleTableChange}
        rowSelection={rowSelection()}
        scroll={{
          x: true,
        }}
      />
    </TableWrapper>
  );
};

export default ActivityListTable;
