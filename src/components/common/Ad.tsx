import styled from 'styled-components';

const Ad = () => {
  const moveHref = () => {};

  return (
    <a href="https://www.wanted.co.kr/ ">
      <AdLayout onClick={moveHref} />
    </a>
  );
};

const AdLayout = styled.li`
  display: flex;
  justify-content: space-between;
  border: 1px solid #d9d9d9;
  background-image: url('https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100');
  border-radius: 14px;
  padding: 24px;
  margin-bottom: 24px;
  cursor: pointer;
  height: 200px;
`;

export default Ad;
