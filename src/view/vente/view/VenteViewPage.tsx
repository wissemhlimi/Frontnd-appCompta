import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/vente/view/venteViewActions';
import selectors from 'src/modules/vente/view/venteViewSelectors';
import VenteView from 'src/view/vente/view/VenteView';
import VenteViewToolbar from 'src/view/vente/view/VenteViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const VentePage = (props) => {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.vente.menu'), '/vente'],
          [i18n('entities.vente.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.vente.view.title')}
        </PageTitle>

        <VenteViewToolbar match={match} />

        <VenteView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default VentePage;
