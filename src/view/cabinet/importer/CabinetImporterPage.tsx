import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/cabinet/importer/cabinetImporterActions';
import fields from 'src/modules/cabinet/importer/cabinetImporterFields';
import selectors from 'src/modules/cabinet/importer/cabinetImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const CabinetImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.cabinet.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.cabinet.menu'), '/cabinet'],
          [i18n('entities.cabinet.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.cabinet.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default CabinetImportPage;
