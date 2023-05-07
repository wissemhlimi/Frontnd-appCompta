import React from 'react';
import { i18n } from 'src/i18n';
import SocieteListFilter from 'src/view/societe/list/SocieteListFilter';
import SocieteListTable from 'src/view/societe/list/SocieteListTable';
import SocieteListToolbar from 'src/view/societe/list/SocieteListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const SocieteListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.societe.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.societe.list.title')}
        </PageTitle>

        <SocieteListToolbar />
        <SocieteListFilter />
        <SocieteListTable />
      </ContentWrapper>
    </>
  );
};

export default SocieteListPage;
