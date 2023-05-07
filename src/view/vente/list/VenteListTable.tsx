import { Table, Popconfirm } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/vente/list/venteListActions';
import destroyActions from 'src/modules/vente/destroy/venteDestroyActions';
import selectors from 'src/modules/vente/list/venteListSelectors';
import destroySelectors from 'src/modules/vente/destroy/venteDestroySelectors';
import venteSelectors from 'src/modules/vente/venteSelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import FilesListView from 'src/view/shared/list/FileListView';
import ClientListItem from 'src/view/client/list/ClientListItem';
import TvaListItem from 'src/view/tva/list/TvaListItem';
import TaxesListItem from 'src/view/taxes/list/TaxesListItem';
import SocieteListItem from 'src/view/societe/list/SocieteListItem';

const VenteListTable = (props) => {
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
    venteSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    venteSelectors.selectPermissionToDestroy,
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
        title: i18n('entities.vente.fields.numeroFacture'),
        sorter: true,
        dataIndex: 'numeroFacture',
      },
      {
        title: i18n('entities.vente.fields.clientVente'),
        sorter: false,
        dataIndex: 'clientVente',
        render: (value) => <ClientListItem value={value} />,
      },
      {
        title: i18n('entities.vente.fields.montantHTVente'),
        sorter: true,
        dataIndex: 'montantHTVente',
        align: 'right',
      },
      {
        title: i18n('entities.vente.fields.tva'),
        sorter: false,
        dataIndex: 'tva',
        render: (value) => <TvaListItem value={value} />,
      },
      {
        title: i18n('entities.vente.fields.taxe'),
        sorter: false,
        dataIndex: 'taxe',
        render: (value) => <TaxesListItem value={value} />,
      },
      {
        title: i18n('entities.vente.fields.remise'),
        sorter: true,
        dataIndex: 'remise',
        align: 'right',
      },
      {
        title: i18n('entities.vente.fields.montantTTCVente'),
        sorter: true,
        dataIndex: 'montantTTCVente',
        align: 'right',
      },
      {
        title: i18n('entities.vente.fields.dateVente'),
        sorter: true,
        dataIndex: 'dateVente',
      },
      {
        title: i18n('entities.vente.fields.attachementVente'),
        sorter: false,
        dataIndex: 'attachementVente',
        render: (value) => <FilesListView value={value} />,
      },
      {
        title: i18n('entities.vente.fields.venteSociete'),
        sorter: false,
        dataIndex: 'venteSociete',
        render: (value) => <SocieteListItem value={value} />,
      },
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/vente/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/vente/${record.id}/edit`}>
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

export default VenteListTable;
