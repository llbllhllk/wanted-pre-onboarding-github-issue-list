import Header from 'components/common/Header';
import Container from 'components/common/Container';
import IssueList from 'components/issue/IssueList';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

const Home = () => {
  const { organization, repository } = useSelector((state: RootState) => state.issues);

  return (
    <>
      <Header ownerName={organization} repoName={repository} />
      <Container>
        <IssueList />
      </Container>
    </>
  );
};

export default Home;
