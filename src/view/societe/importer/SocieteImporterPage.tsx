import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/societe/importer/societeImporterActions';
import fields from 'src/modules/societe/importer/societeImporterFields';
import selectors from 'src/modules/societe/importer/societeImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const SocieteImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.societe.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.societe.menu'), '/societe'],
          [i18n('entities.societe.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.societe.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default SocieteImportPage;
