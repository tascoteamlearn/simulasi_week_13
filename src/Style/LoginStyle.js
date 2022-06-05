import styled from 'styled-components'

export const PageWrapper = styled.div`
    // background-color:green;

    .hero {
        color:green;
        p {
            color:red
        }
    }

    ${(props)=> props.cStyle}
`