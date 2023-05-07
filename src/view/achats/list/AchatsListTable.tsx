import { Table, Popconfirm } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/achats/list/achatsListActions';
import destroyActions from 'src/modules/achats/destroy/achatsDestroyActions';
import selectors from 'src/modules/achats/list/achatsListSelectors';
import destroySelectors from 'src/modules/achats/destroy/achatsDestroySelectors';
import achatsSelectors from 'src/modules/achats/achatsSelectors';
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

const AchatsListTable = (props) => {
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
    achatsSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    achatsSelectors.selectPermissionToDestroy,
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
        title: i18n('entities.achats.fields.numeroFactureAchat'),
        sorter: true,
        dataIndex: 'numeroFactureAchat',
      },
      {
        title: i18n('entities.achats.fields.dateAchat'),
        sorter: true,
        dataIndex: 'dateAchat',
      },
      {
        title: i18n('entities.achats.fields.founisseurAchat'),
        sorter: false,
        dataIndex: 'founisseurAchat',
        render: (value) => <FournisseurListItem value={value} />,
      },
      {
        title: i18n('entities.achats.fields.montantHTAchat'),
        sorter: true,
        dataIndex: 'montantHTAchat',
        align: 'right',
      },
      {
        title: i18n('entities.achats.fields.achatTVA'),
        sorter: false,
        dataIndex: 'achatTVA',
        render: (value) => <TvaListItem value={value} />,
      },
      {
        title: i18n('entities.achats.fields.achatTaxe'),
        sorter: false,
        dataIndex: 'achatTaxe',
        render: (value) => <TaxesListItem value={value} />,
      },
      {
        title: i18n('entities.achats.fields.achatRemise'),
        sorter: true,
        dataIndex: 'achatRemise',
        align: 'right',
      },
      {
        title: i18n('entities.achats.fields.rSAchat'),
        sorter: true,
        dataIndex: 'rSAchat',
        align: 'right',
      },
      {
        title: i18n('entities.achats.fields.montantTTCAchat'),
        sorter: true,
        dataIndex: 'montantTTCAchat',
        align: 'right',
      },
      {
        title: i18n('entities.achats.fields.montantNetRSAchat'),
        sorter: true,
        dataIndex: 'montantNetRSAchat',
        align: 'right',
      },
      {
        title: i18n('entities.achats.fields.attachementAchat'),
        sorter: false,
        dataIndex: 'attachementAchat',
        render: (value) => <FilesListView value={value} />,
      },
      {
        title: i18n('entities.achats.fields.achatSociete'),
        sorter: false,
        dataIndex: 'achatSociete',
        render: (value) => <SocieteListItem value={value} />,
      },
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/achats/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/achats/${record.id}/edit`}>
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

export default AchatsListTable;
