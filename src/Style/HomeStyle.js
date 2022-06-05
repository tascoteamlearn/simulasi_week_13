import styled from 'styled-components'

export const PageWrapper = styled.div`
    // background-color:green;

    .hero {
        color:yellow;
        p {
            color:blue;
        }
    }

    ${(props)=> props.cStyle}
`