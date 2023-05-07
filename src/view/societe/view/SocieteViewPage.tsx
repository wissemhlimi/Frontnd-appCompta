import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/societe/view/societeViewActions';
import selectors from 'src/modules/societe/view/societeViewSelectors';
import SocieteView from 'src/view/societe/view/SocieteView';
import SocieteViewToolbar from 'src/view/societe/view/SocieteViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const SocietePage = (props) => {
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
          [i18n('entities.societe.menu'), '/societe'],
          [i18n('entities.societe.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.societe.view.title')}
        </PageTitle>

        <SocieteViewToolbar match={match} />

        <SocieteView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default SocietePage;
