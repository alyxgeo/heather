import styled from "styled-components"

const StyledHader = styled.header`
   background-color :var(--color-grey-0) ;
   padding: 1.2rem 4.8rem;
   border-bottom: 1px solid var(--color-grey-100);
`

const Header = () => {
  return (
    <StyledHader>Header</StyledHader>
  )
}

export default Header