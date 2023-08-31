import { useEffect, useState } from 'react';
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
  const [perPage, setPerPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    issues.data.length === 0 &&
      dispatch(
        fetchAllIssues({
          organization: issues.organization,
          repository: issues.repository,
          page: issues.page,
        }) as any,
      );
  }, []);

  const loadMoreIssues = () => {
    if (
      Math.floor(window.scrollY + window.innerHeight) >=
      Math.floor(document.documentElement.scrollHeight)
    ) {
      dispatch(
        fetchAllIssues({
          organization: issues.organization,
          repository: issues.repository,
          page: issues.page + perPage,
        }) as any,
      );
      setPerPage(perv => perv + 1);
      console.info(perPage);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', loadMoreIssues);
    return () => {
      window.removeEventListener('scroll', loadMoreIssues);
    };
  }, [perPage]);

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
  padding-top: 150px;
  padding-left: 0;
  height: 100vh;
  margin-bottom: 10px;
  & a {
    color: #000;
    text-decoration: none;
  }

  @media screen and (max-width: 1023px) {
    padding-top: 108px;
  }

  @media screen and (max-width: 767px) {
    padding-top: 80px;
  }
`;

export default IssueList;
