import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/tva/importer/tvaImporterActions';
import fields from 'src/modules/tva/importer/tvaImporterFields';
import selectors from 'src/modules/tva/importer/tvaImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const TvaImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.tva.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.tva.menu'), '/tva'],
          [i18n('entities.tva.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.tva.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default TvaImportPage;
