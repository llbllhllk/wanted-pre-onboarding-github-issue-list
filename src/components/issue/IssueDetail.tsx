import { RootState } from 'redux/store';
import IssueListItem from './IssueListItem';
import { useEffect } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { fetchAllIssues } from 'redux/issues';

export default function IssueDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const issues = useSelector((state: RootState) => state.issues);

  useEffect(() => {
    dispatch(
      fetchAllIssues({
        organization: issues.organization,
        repository: issues.repository,
        page: issues.page,
      }) as any,
    );
  }, []);

  useEffect(() => {
    if (isNaN(Number(id))) {
      navigate('/error');
    }
  }, [id, navigate]);

  return (
    <DetailLayout>
      {issues.data.map(
        issue =>
          issue.issueNumber.toString() === id && (
            <div key={id}>
              <ListTitle>
                <UserImage src={issue.userImage} alt={issue.author} />
                <IssueListItem {...issue} />
              </ListTitle>
              <ReactMarkdown>{issue?.body || 'nothing'}</ReactMarkdown>
            </div>
          ),
      )}
    </DetailLayout>
  );
}

const DetailLayout = styled.div`
  padding-top: 150px;
  margin: auto;

  @media screen and (max-width: 1023px) {
    padding-top: 108px;
    & h1 {
      font-size: 34px;
    }
  }

  @media screen and (max-width: 767px) {
    padding-top: 80px;
    & h1 {
      font-size: 20px;
    }
  }
`;

const ListTitle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 24px;

  @media screen and (max-width: 1023px) {
    margin-bottom: 18px;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 12px;
  }

  & li {
    min-width: 1000px;

    @media screen and (max-width: 1023px) {
      min-width: 580px;
      margin-bottom: 18px;
    }

    @media screen and (max-width: 767px) {
      font-size: 12px;
      min-width: 200px;
      padding: 16px;
    }

    & a {
      color: #000;
      text-decoration: none;
    }
  }
`;

const UserImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;

  @media screen and (max-width: 1023px) {
    width: 80px;
    height: 80px;
  }

  @media screen and (max-width: 767px) {
    width: 68px;
    height: 68px;
  }
`;
