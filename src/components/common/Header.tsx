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
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  border-bottom: 1px solid #d9d9d9;
`;

const HeaderTitle = styled.h1`
  font-style: italic;
`;

export default Header;
