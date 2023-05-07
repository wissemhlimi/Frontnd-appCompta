import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/avoir/importer/avoirImporterActions';
import fields from 'src/modules/avoir/importer/avoirImporterFields';
import selectors from 'src/modules/avoir/importer/avoirImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const AvoirImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.avoir.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.avoir.menu'), '/avoir'],
          [i18n('entities.avoir.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.avoir.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default AvoirImportPage;
