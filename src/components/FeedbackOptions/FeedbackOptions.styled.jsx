import styled from 'styled-components';

const FeedbackButton = styled.button`
  font-size: 16px;
  padding: 8px 16px;
  margin-right: 8px;
  border-radius: 10px;
  background-color: #fbfb8d;
  &:hover {
    transform: scale(1.1);
    transition: 250ms;
    background-color: #f7f708;
    cursor: pointer;
  }
`;

const FeedbackOptionsContainer = styled.div`
  display: flex;
  margin-top: 8px;
`;

export { FeedbackButton, FeedbackOptionsContainer };
