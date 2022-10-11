import styled from "styled-components";
import Bg from "../Assets/BackGround_Img/Cloudy.svg"

export const BgImg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    height: 100vh;
    background-size: cover;
    background: url(${Bg});
    /* background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%); */
    z-index: -1;
`