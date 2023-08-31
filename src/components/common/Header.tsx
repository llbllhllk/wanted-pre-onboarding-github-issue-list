import styled from 'styled-components';

interface Props {
  ownerName: string;
  repoName: string;
}

const Header = ({ ownerName, repoName }: Props) => {
  return (
    <HeaderLayout>
      <HeaderTitle>
        {ownerName} / {repoName}
      </HeaderTitle>
    </HeaderLayout>
  );
};

const HeaderLayout = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const HeaderTitle = styled.h1`
  font-style: italic;
`;

export default Header;
