import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/activity/importer/activityImporterSelectors';
import ActivityService from 'src/modules/activity/activityService';
import fields from 'src/modules/activity/importer/activityImporterFields';
import { i18n } from 'src/i18n';

const activityImporterActions = importerActions(
  'ACTIVITY_IMPORTER',
  selectors,
  ActivityService.import,
  fields,
  i18n('entities.activity.importer.fileName'),
);

export default activityImporterActions;