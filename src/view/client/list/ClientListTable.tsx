import { Table, Popconfirm } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/client/list/clientListActions';
import destroyActions from 'src/modules/client/destroy/clientDestroyActions';
import selectors from 'src/modules/client/list/clientListSelectors';
import destroySelectors from 'src/modules/client/destroy/clientDestroySelectors';
import clientSelectors from 'src/modules/client/clientSelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import ImagesListView from 'src/view/shared/list/ImagesListView';
import SocieteListItem from 'src/view/societe/list/SocieteListItem';

const ClientListTable = (props) => {
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
    clientSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    clientSelectors.selectPermissionToDestroy,
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
        title: i18n('entities.client.fields.nomClient'),
        sorter: true,
        dataIndex: 'nomClient',
      },
      {
        title: i18n('entities.client.fields.mFClient'),
        sorter: true,
        dataIndex: 'mFClient',
      },
      {
        title: i18n('entities.client.fields.telephoneClient'),
        sorter: true,
        dataIndex: 'telephoneClient',
      },
      {
        title: i18n('entities.client.fields.emailClient'),
        sorter: true,
        dataIndex: 'emailClient',
      },
      {
        title: i18n('entities.client.fields.photoClient'),
        sorter: false,
        dataIndex: 'photoClient',
        render: (value) => <ImagesListView value={value} />,
      },
      {
        title: i18n('entities.client.fields.cilentSociete'),
        sorter: false,
        dataIndex: 'cilentSociete',
        render: (value) => <SocieteListItem value={value} />,
      },
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/client/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/client/${record.id}/edit`}>
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

export default ClientListTable;
