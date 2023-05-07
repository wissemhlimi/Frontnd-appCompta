import React from 'react';
import { i18n } from 'src/i18n';
import CabinetListFilter from 'src/view/cabinet/list/CabinetListFilter';
import CabinetListTable from 'src/view/cabinet/list/CabinetListTable';
import CabinetListToolbar from 'src/view/cabinet/list/CabinetListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const CabinetListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.cabinet.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.cabinet.list.title')}
        </PageTitle>

        <CabinetListToolbar />
        <CabinetListFilter />
        <CabinetListTable />
      </ContentWrapper>
    </>
  );
};

export default CabinetListPage;
