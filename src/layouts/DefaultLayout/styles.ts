import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem; // 74 * 16 = 1184px
  height: calc(100vh - 10rem);
  margin: auto;
  padding: 2.5rem;
  background-color: ${({ theme }) => theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
