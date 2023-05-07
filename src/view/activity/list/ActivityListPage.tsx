import React from 'react';
import { i18n } from 'src/i18n';
import ActivityListFilter from 'src/view/activity/list/ActivityListFilter';
import ActivityListTable from 'src/view/activity/list/ActivityListTable';
import ActivityListToolbar from 'src/view/activity/list/ActivityListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const ActivityListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.activity.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.activity.list.title')}
        </PageTitle>

        <ActivityListToolbar />
        <ActivityListFilter />
        <ActivityListTable />
      </ContentWrapper>
    </>
  );
};

export default ActivityListPage;
