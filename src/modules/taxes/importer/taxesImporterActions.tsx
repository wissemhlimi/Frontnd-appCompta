import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/taxes/importer/taxesImporterSelectors';
import TaxesService from 'src/modules/taxes/taxesService';
import fields from 'src/modules/taxes/importer/taxesImporterFields';
import { i18n } from 'src/i18n';

const taxesImporterActions = importerActions(
  'TAXES_IMPORTER',
  selectors,
  TaxesService.import,
  fields,
  i18n('entities.taxes.importer.fileName'),
);

export default taxesImporterActions;