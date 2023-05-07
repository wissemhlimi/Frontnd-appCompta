import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/achats/importer/achatsImporterActions';
import fields from 'src/modules/achats/importer/achatsImporterFields';
import selectors from 'src/modules/achats/importer/achatsImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const AchatsImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.achats.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.achats.menu'), '/achats'],
          [i18n('entities.achats.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.achats.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default AchatsImportPage;
