import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/achats/view/achatsViewActions';
import selectors from 'src/modules/achats/view/achatsViewSelectors';
import AchatsView from 'src/view/achats/view/AchatsView';
import AchatsViewToolbar from 'src/view/achats/view/AchatsViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const AchatsPage = (props) => {
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
          [i18n('entities.achats.menu'), '/achats'],
          [i18n('entities.achats.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.achats.view.title')}
        </PageTitle>

        <AchatsViewToolbar match={match} />

        <AchatsView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default AchatsPage;
