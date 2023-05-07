import { Table, Popconfirm } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/societe/list/societeListActions';
import destroyActions from 'src/modules/societe/destroy/societeDestroyActions';
import selectors from 'src/modules/societe/list/societeListSelectors';
import destroySelectors from 'src/modules/societe/destroy/societeDestroySelectors';
import societeSelectors from 'src/modules/societe/societeSelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import UserListItem from 'src/view/user/list/UserListItem';
import ImagesListView from 'src/view/shared/list/ImagesListView';
import ActivityListItem from 'src/view/activity/list/ActivityListItem';
import CabinetListItem from 'src/view/cabinet/list/CabinetListItem';
import FournisseurListItem from 'src/view/fournisseur/list/FournisseurListItem';
import ClientListItem from 'src/view/client/list/ClientListItem';

const SocieteListTable = (props) => {
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
    societeSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    societeSelectors.selectPermissionToDestroy,
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
        title: i18n('entities.societe.fields.activityType'),
        sorter: false,
        dataIndex: 'activityType',
        render: (value) => <ActivityListItem value={value} />,
      },
      {
        title: i18n('entities.societe.fields.nomSociete'),
        sorter: true,
        dataIndex: 'nomSociete',
      },
      {
        title: i18n('entities.societe.fields.userSociete'),
        sorter: false,
        dataIndex: 'userSociete',
        render: (value) => <UserListItem value={value} />,
      },
      {
        title: i18n('entities.societe.fields.societeCabinet'),
        sorter: false,
        dataIndex: 'societeCabinet',
        render: (value) => <CabinetListItem value={value} />,
      },
      {
        title: i18n('entities.societe.fields.mFSociete'),
        sorter: true,
        dataIndex: 'mFSociete',
      },
      {
        title: i18n('entities.societe.fields.telephoneSociete'),
        sorter: true,
        dataIndex: 'telephoneSociete',
      },
      {
        title: i18n('entities.societe.fields.emailSociete'),
        sorter: true,
        dataIndex: 'emailSociete',
      },
      {
        title: i18n('entities.societe.fields.logoSociete'),
        sorter: false,
        dataIndex: 'logoSociete',
        render: (value) => <ImagesListView value={value} />,
      },
      {
        title: i18n('entities.societe.fields.fournisseurSociete'),
        sorter: false,
        dataIndex: 'fournisseurSociete',
        render: (value) => <FournisseurListItem value={value} />,
      },
      {
        title: i18n('entities.societe.fields.clientsSociete'),
        sorter: false,
        dataIndex: 'clientsSociete',
        render: (value) => <ClientListItem value={value} />,
      },
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/societe/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/societe/${record.id}/edit`}>
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

export default SocieteListTable;
