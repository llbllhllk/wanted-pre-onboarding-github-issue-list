import Header from 'components/common/Header';
import Container from 'components/common/Container';
import IssueDetail from 'components/issue/IssueDetail';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

const Detail = () => {
  const { organization, repository } = useSelector((state: RootState) => state.issues);
  return (
    <>
      <Header ownerName={organization} repoName={repository} />
      <Container>
        <IssueDetail />
      </Container>
    </>
  );
};

export default Detail;
