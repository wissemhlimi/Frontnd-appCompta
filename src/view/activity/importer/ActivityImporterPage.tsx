import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/activity/importer/activityImporterActions';
import fields from 'src/modules/activity/importer/activityImporterFields';
import selectors from 'src/modules/activity/importer/activityImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const ActivityImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.activity.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.activity.menu'), '/activity'],
          [i18n('entities.activity.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.activity.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default ActivityImportPage;
