import { memo } from 'react';
import styled from 'styled-components';
import { Issue } from 'types';
import { Link } from 'react-router-dom';

const IssueListItem = memo(({ issueNumber, title, author, date, comments }: Issue) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return formatter.format(date);
  };

  return (
    <ListItemLayout>
      <Link to={`/${issueNumber}`}>
        <div>
          <TitleContainer>
            <IssueNumber>#{issueNumber}</IssueNumber>
            <Title>{title}</Title>
          </TitleContainer>
          <IssueInfoBox>
            <div>
              <dt>작성자:</dt>
              <dd>{author},</dd>
            </div>
            <div>
              <dt>작성일:</dt>
              <dd>{formatDate(date)}</dd>
            </div>
          </IssueInfoBox>
        </div>
        <Comment>
          <dt>코멘트:</dt>
          <dd>{comments}</dd>
        </Comment>
      </Link>
    </ListItemLayout>
  );
});

const ListItemLayout = styled.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  border: 1px solid #d9d9d9;
  border-radius: 14px;
  padding: 24px;
  margin-bottom: 24px;
  cursor: pointer;

  & a {
    display: block;
    width: 100%;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const IssueNumber = styled.strong`
  color: red;
  margin-right: 20px;
`;

const IssueInfoBox = styled.div`
  display: flex;

  & div {
    display: flex;
    margin-right: 8px;
    & dt {
      font-weight: 700;
    }

    & dd {
      margin-left: 4px;
    }
  }

  & div:last-of-type {
    margin-right: 0;
  }
`;

const Title = styled.h2`
  margin: 0;
`;

const Comment = styled.span`
  display: flex;
  align-items: center;

  & dt {
    font-weight: 700;
  }

  & dd {
    margin-left: 4px;
  }
`;

export default IssueListItem;
