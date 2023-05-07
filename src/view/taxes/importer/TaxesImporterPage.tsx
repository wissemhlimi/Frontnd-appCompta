import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/taxes/importer/taxesImporterActions';
import fields from 'src/modules/taxes/importer/taxesImporterFields';
import selectors from 'src/modules/taxes/importer/taxesImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const TaxesImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.taxes.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.taxes.menu'), '/taxes'],
          [i18n('entities.taxes.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.taxes.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default TaxesImportPage;
