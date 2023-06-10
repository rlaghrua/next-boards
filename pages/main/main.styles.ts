import styled from "@emotion/styled";

export const mainBanner = styled.div`
  position: relative;
  max-height: 100%;
  overflow: hidden;
  margin-bottom: -7px;
`;

export const bgVideo = styled.video`
  min-width: 100%;
  min-height: 100vh;
  max-width: 100%;
  max-height: 100vh;
  object-fit: cover;
`;

// #bg-video::-webkit-media-controls {
//   display: none !important;
// }

export const videoOverlay = styled.div`
  position: absolute;
  background-color: rgba(31, 39, 43, 0.75);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
`;

export const caption = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 100px;
`;

export const captionh6 = styled.h6`
  margin-top: 0px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 600;
  color: #fff;
  letter-spacing: 1px;
`;

export const captionh2 = styled.h2`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 36px;
  text-transform: uppercase;
  font-weight: 800;
  color: #fff;
  letter-spacing: 1px;
`;

// .main-banner .caption h2 em {
//   font-style: normal;
//   color: #f5a425;
//   font-weight: 900;
// }

export const captionp = styled.p`
  color: #fff;
  font-size: 14px;
  max-width: 570px;
`;

export const mainbuttonred = styled.div`
  margin-top: 30px;
`;

// @media screen and (max-width: 767px) {
//   .main-banner .caption h6 {
//     font-weight: 500;
//   }

//   .main-banner .caption h2 {
//     font-size: 36px;
//   }
// }
