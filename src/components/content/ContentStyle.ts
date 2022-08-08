import { Content } from "antd/lib/layout/layout";
import styled from "styled-components";

const ContentStyles = styled(Content)`
  flex: 1 0 100%;
  padding: 25px 50px;
  background-color: white;
  background-image: url(imgs/bg.svg), url(imgs/Cloud.svg), url(imgs/goodie1.svg),
    url(imgs/red_cartoon3.svg);
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
  background-position: center bottom, center, 20% 50%, 90% 50%;
`;

export default ContentStyles;
