import { RootState } from 'redux/store';
import IssueListItem from './IssueListItem';
import { useEffect } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

export default function IssueDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const issue = useSelector((state: RootState) =>
    state.issues.data.find(issue => issue.issueNumber.toString() === id),
  );

  useEffect(() => {
    if (isNaN(Number(id))) {
      navigate('/error');
    }
  }, [id, navigate]);

  return (
    <DetailLayout>
      {issue && (
        <>
          <ListTitle>
            <UserImage src={issue.userImage} alt={issue.author} />
            <IssueListItem {...issue} />
          </ListTitle>
          <ReactMarkdown>{issue?.body || 'nothing'}</ReactMarkdown>
        </>
      )}
    </DetailLayout>
  );
}

const DetailLayout = styled.div`
  margin: auto;
`;

const ListTitle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  & li {
    width: 1000px;
    margin-bottom: 0;

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
`;
