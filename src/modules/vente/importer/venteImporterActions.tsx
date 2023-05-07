import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/vente/importer/venteImporterSelectors';
import VenteService from 'src/modules/vente/venteService';
import fields from 'src/modules/vente/importer/venteImporterFields';
import { i18n } from 'src/i18n';

const venteImporterActions = importerActions(
  'VENTE_IMPORTER',
  selectors,
  VenteService.import,
  fields,
  i18n('entities.vente.importer.fileName'),
);

export default venteImporterActions;