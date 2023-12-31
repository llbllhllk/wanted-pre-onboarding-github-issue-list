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
        </div>
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
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  & a {
    display: block;
    width: 100%;
  }

  &:hover {
    box-shadow:
      0 14px 28px rgba(0, 0, 0, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.22);
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

  @media screen and (max-width: 767px) {
    margin-right: 12px;
  }
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

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    font-size: 12px;
  }
`;

const Title = styled.h2`
  margin: 0;

  @media screen and (max-width: 1023px) {
    font-size: 18px;
  }

  @media screen and (max-width: 767px) {
    width: 150px;
    font-size: 16px;
  }
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

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;

export default IssueListItem;
