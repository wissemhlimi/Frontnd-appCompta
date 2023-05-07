import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/fournisseur/view/fournisseurViewActions';
import selectors from 'src/modules/fournisseur/view/fournisseurViewSelectors';
import FournisseurView from 'src/view/fournisseur/view/FournisseurView';
import FournisseurViewToolbar from 'src/view/fournisseur/view/FournisseurViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const FournisseurPage = (props) => {
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
          [i18n('entities.fournisseur.menu'), '/fournisseur'],
          [i18n('entities.fournisseur.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.fournisseur.view.title')}
        </PageTitle>

        <FournisseurViewToolbar match={match} />

        <FournisseurView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default FournisseurPage;
