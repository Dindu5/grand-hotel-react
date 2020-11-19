import styled, {css} from 'styled-components'

const Toptitle = styled.h4`
font-family : var(--title-font);
font-size: 1.1rem;
color : var(--brown);
position:relative;
margin-bottom: 3rem;
letter-spacing: 0.2rem;

${(props) =>
    props.white &&
    css`
        color : var(--white);
    `}

&:before {
    content: '';
    position: absolute;
    width: 3rem;
    height: 2px;
    top: 0;
    left: 0;
    background-color: var(--black);
    transform: translateY(-5px);

    ${(props) =>
        props.white &&
        css`
            background-color : var(--brown);
        `}
}
`

export default Toptitle