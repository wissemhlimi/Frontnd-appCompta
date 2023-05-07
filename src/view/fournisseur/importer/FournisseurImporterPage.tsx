import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/fournisseur/importer/fournisseurImporterActions';
import fields from 'src/modules/fournisseur/importer/fournisseurImporterFields';
import selectors from 'src/modules/fournisseur/importer/fournisseurImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const FournisseurImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.fournisseur.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.fournisseur.menu'), '/fournisseur'],
          [i18n('entities.fournisseur.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.fournisseur.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default FournisseurImportPage;
