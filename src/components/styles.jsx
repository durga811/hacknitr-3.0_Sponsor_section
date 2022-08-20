import React from "react";
import styled from "styled-components";
 const font_family =`font-family: Roboto, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";`;
  const SponsorContainer = styled.div`
    margin: 3%;
  `;
 const HeadingSponsor = styled.div`
   color: white;
   font-size: 2.5rem;
   font-weight: 400;
   ${font_family}
`;

const ParagraphSponsor=styled.p`
@media only screen and (min-width: 768px) {
 margin-right: 30%;
}
    margin: auto ;
    color:#67676d;
    ${font_family}
`;

const SponsorCategory =styled.div`
border: 3px solid  ${(prop)=> prop.property};  
border-radius :6px;
margin-top: 2rem;
`
const SponsorCategoryHeading = styled.div`
   
    font-size: larger;
    font-weight: 600;
    ${font_family}
    margin: 10px 20px auto 20px;
`
const SponsorBox = styled.div`
    display: grid;
    width: 100%;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

@media (max-width: 1380px) {
  grid-template-columns: repeat(3, minmax(80px, 1fr));
}
@media (max-width: 639px) {
  grid-template-columns: repeat(2, minmax(50px, 1fr));
}
    //grid-template-columns: auto auto auto;
    //grid-template-columns: repeat(3, minmax(80px, 1fr));;
`
const Sponsor = styled.div`
padding: 2rem;
margin: auto;
justify-content: center;
`;
const SponsorIcon =({sponsor})=>{
    const {src, alt, size, link, margin, marginTop}=sponsor;
    return<>
      <Sponsor >
        <a href={link}>
            <img src={src} alt={alt} style={{ width:size,marginTop: marginTop }}/>
        </a>
      </Sponsor>
    </>;
}
export {SponsorContainer,HeadingSponsor,ParagraphSponsor,SponsorCategory,SponsorCategoryHeading,SponsorBox,SponsorIcon}