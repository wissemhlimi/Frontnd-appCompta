import { Table, Popconfirm } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/avoir/list/avoirListActions';
import destroyActions from 'src/modules/avoir/destroy/avoirDestroyActions';
import selectors from 'src/modules/avoir/list/avoirListSelectors';
import destroySelectors from 'src/modules/avoir/destroy/avoirDestroySelectors';
import avoirSelectors from 'src/modules/avoir/avoirSelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import FilesListView from 'src/view/shared/list/FileListView';
import FournisseurListItem from 'src/view/fournisseur/list/FournisseurListItem';
import TvaListItem from 'src/view/tva/list/TvaListItem';
import TaxesListItem from 'src/view/taxes/list/TaxesListItem';
import SocieteListItem from 'src/view/societe/list/SocieteListItem';

const AvoirListTable = (props) => {
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
    avoirSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    avoirSelectors.selectPermissionToDestroy,
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
        title: i18n('entities.avoir.fields.numeroAvoir'),
        sorter: true,
        dataIndex: 'numeroAvoir',
      },
      {
        title: i18n('entities.avoir.fields.dateAvoir'),
        sorter: true,
        dataIndex: 'dateAvoir',
      },
      {
        title: i18n('entities.avoir.fields.fournisseurAvoir'),
        sorter: false,
        dataIndex: 'fournisseurAvoir',
        render: (value) => <FournisseurListItem value={value} />,
      },
      {
        title: i18n('entities.avoir.fields.montantHTAvoir'),
        sorter: true,
        dataIndex: 'montantHTAvoir',
        align: 'right',
      },
      {
        title: i18n('entities.avoir.fields.avoirTVA'),
        sorter: false,
        dataIndex: 'avoirTVA',
        render: (value) => <TvaListItem value={value} />,
      },
      {
        title: i18n('entities.avoir.fields.avoirTaxe'),
        sorter: false,
        dataIndex: 'avoirTaxe',
        render: (value) => <TaxesListItem value={value} />,
      },
      {
        title: i18n('entities.avoir.fields.montantTTCAvoir'),
        sorter: true,
        dataIndex: 'montantTTCAvoir',
        align: 'right',
      },
      {
        title: i18n('entities.avoir.fields.attachementAvoir'),
        sorter: false,
        dataIndex: 'attachementAvoir',
        render: (value) => <FilesListView value={value} />,
      },
      {
        title: i18n('entities.avoir.fields.avoirSociete'),
        sorter: false,
        dataIndex: 'avoirSociete',
        render: (value) => <SocieteListItem value={value} />,
      },
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/avoir/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/avoir/${record.id}/edit`}>
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

export default AvoirListTable;
