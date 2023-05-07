import { Table, Popconfirm } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/fournisseur/list/fournisseurListActions';
import destroyActions from 'src/modules/fournisseur/destroy/fournisseurDestroyActions';
import selectors from 'src/modules/fournisseur/list/fournisseurListSelectors';
import destroySelectors from 'src/modules/fournisseur/destroy/fournisseurDestroySelectors';
import fournisseurSelectors from 'src/modules/fournisseur/fournisseurSelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import ImagesListView from 'src/view/shared/list/ImagesListView';
import SocieteListItem from 'src/view/societe/list/SocieteListItem';

const FournisseurListTable = (props) => {
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
    fournisseurSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    fournisseurSelectors.selectPermissionToDestroy,
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
        title: i18n('entities.fournisseur.fields.nomFournisseur'),
        sorter: true,
        dataIndex: 'nomFournisseur',
      },
      {
        title: i18n('entities.fournisseur.fields.mFFournisseur'),
        sorter: true,
        dataIndex: 'mFFournisseur',
      },
      {
        title: i18n('entities.fournisseur.fields.telephoneFournisseur'),
        sorter: true,
        dataIndex: 'telephoneFournisseur',
      },
      {
        title: i18n('entities.fournisseur.fields.emailFournisseur'),
        sorter: true,
        dataIndex: 'emailFournisseur',
      },
      {
        title: i18n('entities.fournisseur.fields.photoFournisseur'),
        sorter: false,
        dataIndex: 'photoFournisseur',
        render: (value) => <ImagesListView value={value} />,
      },
      {
        title: i18n('entities.fournisseur.fields.fournisseurSociete'),
        sorter: false,
        dataIndex: 'fournisseurSociete',
        render: (value) => <SocieteListItem value={value} />,
      },
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/fournisseur/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/fournisseur/${record.id}/edit`}>
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

export default FournisseurListTable;
