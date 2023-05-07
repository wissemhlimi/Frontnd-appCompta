import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/societe/importer/societeImporterSelectors';
import SocieteService from 'src/modules/societe/societeService';
import fields from 'src/modules/societe/importer/societeImporterFields';
import { i18n } from 'src/i18n';

const societeImporterActions = importerActions(
  'SOCIETE_IMPORTER',
  selectors,
  SocieteService.import,
  fields,
  i18n('entities.societe.importer.fileName'),
);

export default societeImporterActions;