import React from 'react';
import { i18n } from 'src/i18n';
import TaxesListFilter from 'src/view/taxes/list/TaxesListFilter';
import TaxesListTable from 'src/view/taxes/list/TaxesListTable';
import TaxesListToolbar from 'src/view/taxes/list/TaxesListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const TaxesListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.taxes.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.taxes.list.title')}
        </PageTitle>

        <TaxesListToolbar />
        <TaxesListFilter />
        <TaxesListTable />
      </ContentWrapper>
    </>
  );
};

export default TaxesListPage;
