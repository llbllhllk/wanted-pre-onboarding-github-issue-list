import { useCallback, useLayoutEffect } from 'react';
import styled from 'styled-components';
import IssueListItem from './IssueListItem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { Issue } from 'types';
import { fetchAllIssues } from 'redux/issues';
import Ad from 'components/common/Ad';
import Loading from 'components/common/Loading';

const IssueList = () => {
  const issues = useSelector((state: RootState) => state.issues);

  const dispatch = useDispatch();
  const initializeIssueData = useCallback(() => {
    dispatch(
      fetchAllIssues({
        organization: issues.organization,
        repository: issues.repository,
        page: issues.page,
      }) as any,
    );
  }, [dispatch, issues]);

  const onScrollEvent = useCallback(() => {
    const { organization, repository, page } = issues;
    window.addEventListener('scroll', () => {
      if (
        Math.floor(window.scrollY + document.documentElement.clientHeight) ===
        Math.floor(document.documentElement.scrollHeight)
      ) {
        dispatch(
          fetchAllIssues({
            organization,
            repository,
            page: page + 1,
          }) as any,
        );
      }
    });
  }, [dispatch, issues]);

  useLayoutEffect(() => {
    initializeIssueData();
    onScrollEvent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <IssueListLayout>
      {issues.loading === 'pending' && <Loading />}
      {issues.loading === 'fulfilled' &&
        issues.data.map((issue: Issue, index: number) => [
          <IssueListItem key={issue.issueNumber} {...issue} />,
          (index + 1) % 5 === 0 && <Ad key={`ad-${index}`} />,
        ])}
    </IssueListLayout>
  );
};

const IssueListLayout = styled.ul`
  padding-left: 0;
  height: 100vh;

  & a {
    color: #000;
    text-decoration: none;
  }
`;

export default IssueList;
