import { connectRouter } from 'connected-react-router';
import layout from 'src/modules/layout/layoutReducers';
import auth from 'src/modules/auth/authReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import user from 'src/modules/user/userReducers';
import auditLog from 'src/modules/auditLog/auditLogReducers';
import settings from 'src/modules/settings/settingsReducers';
import client from 'src/modules/client/clientReducers';
import fournisseur from 'src/modules/fournisseur/fournisseurReducers';
import societe from 'src/modules/societe/societeReducers';
import cabinet from 'src/modules/cabinet/cabinetReducers';
import taxes from 'src/modules/taxes/taxesReducers';
import vente from 'src/modules/vente/venteReducers';
import tva from 'src/modules/tva/tvaReducers';
import achats from 'src/modules/achats/achatsReducers';
import avoir from 'src/modules/avoir/avoirReducers';
import activity from 'src/modules/activity/activityReducers';
import { combineReducers } from 'redux';
import plan from 'src/modules/plan/planReducers';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    tenant,
    plan,
    user,
    auditLog,
    settings,
    client,
    fournisseur,
    societe,
    cabinet,
    taxes,
    vente,
    tva,
    achats,
    avoir,
    activity,
  });
