import styled from "@emotion/styled";
import tw from "tailwind-styled-components";

export const Items = tw.div`
py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8
`;

export const Title = tw.div`
font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold
`;

export const Content = tw.div`
text-lg text-gray-600 p-4 font-primary font-light
`;

export const Price = tw.div`
"text-palette-dark font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2 bg-palette-lighter 
 rounded-tl-sm triangle"
`;
