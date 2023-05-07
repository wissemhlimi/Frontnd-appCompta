import React from 'react';
import { i18n } from 'src/i18n';
import FournisseurListFilter from 'src/view/fournisseur/list/FournisseurListFilter';
import FournisseurListTable from 'src/view/fournisseur/list/FournisseurListTable';
import FournisseurListToolbar from 'src/view/fournisseur/list/FournisseurListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const FournisseurListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.fournisseur.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.fournisseur.list.title')}
        </PageTitle>

        <FournisseurListToolbar />
        <FournisseurListFilter />
        <FournisseurListTable />
      </ContentWrapper>
    </>
  );
};

export default FournisseurListPage;
