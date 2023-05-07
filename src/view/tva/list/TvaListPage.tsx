import React from 'react';
import { i18n } from 'src/i18n';
import TvaListFilter from 'src/view/tva/list/TvaListFilter';
import TvaListTable from 'src/view/tva/list/TvaListTable';
import TvaListToolbar from 'src/view/tva/list/TvaListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const TvaListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.tva.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.tva.list.title')}
        </PageTitle>

        <TvaListToolbar />
        <TvaListFilter />
        <TvaListTable />
      </ContentWrapper>
    </>
  );
};

export default TvaListPage;
