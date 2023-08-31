import { Issue } from 'types';
import instance from 'api';

const fetchGetIssues = async (
  organization: string,
  repository: string,
  page: number,
): Promise<Issue[]> => {
  const res = await instance.get(`/repos/${organization}/${repository}/issues`, {
    params: {
      sort: 'comments',
      page: page,
      per_page: 5,
    },
  });
  return res.data.map((issue: any) => {
    return {
      issueNumber: issue.number,
      author: issue.user.login,
      date: issue.created_at,
      title: issue.title,
      comments: issue.comments,
      userImage: issue.user.avatar_url,
      body: issue.body,
    };
  });
};

export { fetchGetIssues };
