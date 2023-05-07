import React from 'react';
import { i18n } from 'src/i18n';
import ClientListFilter from 'src/view/client/list/ClientListFilter';
import ClientListTable from 'src/view/client/list/ClientListTable';
import ClientListToolbar from 'src/view/client/list/ClientListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const ClientListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.client.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.client.list.title')}
        </PageTitle>

        <ClientListToolbar />
        <ClientListFilter />
        <ClientListTable />
      </ContentWrapper>
    </>
  );
};

export default ClientListPage;
