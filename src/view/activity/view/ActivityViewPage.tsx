import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/activity/view/activityViewActions';
import selectors from 'src/modules/activity/view/activityViewSelectors';
import ActivityView from 'src/view/activity/view/ActivityView';
import ActivityViewToolbar from 'src/view/activity/view/ActivityViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const ActivityPage = (props) => {
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
          [i18n('entities.activity.menu'), '/activity'],
          [i18n('entities.activity.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.activity.view.title')}
        </PageTitle>

        <ActivityViewToolbar match={match} />

        <ActivityView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default ActivityPage;
