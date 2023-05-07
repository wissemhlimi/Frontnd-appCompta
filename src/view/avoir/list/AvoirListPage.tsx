import React from 'react';
import { i18n } from 'src/i18n';
import AvoirListFilter from 'src/view/avoir/list/AvoirListFilter';
import AvoirListTable from 'src/view/avoir/list/AvoirListTable';
import AvoirListToolbar from 'src/view/avoir/list/AvoirListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const AvoirListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.avoir.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.avoir.list.title')}
        </PageTitle>

        <AvoirListToolbar />
        <AvoirListFilter />
        <AvoirListTable />
      </ContentWrapper>
    </>
  );
};

export default AvoirListPage;
