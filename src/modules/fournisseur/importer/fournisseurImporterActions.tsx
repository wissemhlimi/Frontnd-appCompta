import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/fournisseur/importer/fournisseurImporterSelectors';
import FournisseurService from 'src/modules/fournisseur/fournisseurService';
import fields from 'src/modules/fournisseur/importer/fournisseurImporterFields';
import { i18n } from 'src/i18n';

const fournisseurImporterActions = importerActions(
  'FOURNISSEUR_IMPORTER',
  selectors,
  FournisseurService.import,
  fields,
  i18n('entities.fournisseur.importer.fileName'),
);

export default fournisseurImporterActions;