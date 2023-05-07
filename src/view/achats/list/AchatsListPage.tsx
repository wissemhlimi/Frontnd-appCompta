import React from 'react';
import { i18n } from 'src/i18n';
import AchatsListFilter from 'src/view/achats/list/AchatsListFilter';
import AchatsListTable from 'src/view/achats/list/AchatsListTable';
import AchatsListToolbar from 'src/view/achats/list/AchatsListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const AchatsListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.achats.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.achats.list.title')}
        </PageTitle>

        <AchatsListToolbar />
        <AchatsListFilter />
        <AchatsListTable />
      </ContentWrapper>
    </>
  );
};

export default AchatsListPage;
