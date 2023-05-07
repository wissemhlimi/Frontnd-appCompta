import { Table, Popconfirm } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/cabinet/list/cabinetListActions';
import destroyActions from 'src/modules/cabinet/destroy/cabinetDestroyActions';
import selectors from 'src/modules/cabinet/list/cabinetListSelectors';
import destroySelectors from 'src/modules/cabinet/destroy/cabinetDestroySelectors';
import cabinetSelectors from 'src/modules/cabinet/cabinetSelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import UserListItem from 'src/view/user/list/UserListItem';
import ImagesListView from 'src/view/shared/list/ImagesListView';
import SocieteListItem from 'src/view/societe/list/SocieteListItem';

const CabinetListTable = (props) => {
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
    cabinetSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    cabinetSelectors.selectPermissionToDestroy,
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
        title: i18n('entities.cabinet.fields.nomCabinet'),
        sorter: true,
        dataIndex: 'nomCabinet',
      },
      {
        title: i18n('entities.cabinet.fields.cabinetUser'),
        sorter: false,
        dataIndex: 'cabinetUser',
        render: (value) => <UserListItem value={value} />,
      },
      {
        title: i18n('entities.cabinet.fields.cabinetSociete'),
        sorter: false,
        dataIndex: 'cabinetSociete',
        render: (value) => <SocieteListItem value={value} />,
      },
      {
        title: i18n('entities.cabinet.fields.telCabinet'),
        sorter: true,
        dataIndex: 'telCabinet',
      },
      {
        title: i18n('entities.cabinet.fields.emailCabinet'),
        sorter: true,
        dataIndex: 'emailCabinet',
      },
      {
        title: i18n('entities.cabinet.fields.logoCabinet'),
        sorter: false,
        dataIndex: 'logoCabinet',
        render: (value) => <ImagesListView value={value} />,
      },
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/cabinet/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/cabinet/${record.id}/edit`}>
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

export default CabinetListTable;
