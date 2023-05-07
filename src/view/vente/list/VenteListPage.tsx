import React from 'react';
import { i18n } from 'src/i18n';
import VenteListFilter from 'src/view/vente/list/VenteListFilter';
import VenteListTable from 'src/view/vente/list/VenteListTable';
import VenteListToolbar from 'src/view/vente/list/VenteListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const VenteListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.vente.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.vente.list.title')}
        </PageTitle>

        <VenteListToolbar />
        <VenteListFilter />
        <VenteListTable />
      </ContentWrapper>
    </>
  );
};

export default VenteListPage;
