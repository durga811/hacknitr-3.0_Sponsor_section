import React from "react";
import sponsors from "./../content/Sponsors"
import  {SponsorContainer,HeadingSponsor,ParagraphSponsor,SponsorCategory,SponsorCategoryHeading,SponsorBox,SponsorIcon}from "./styles"

function App(){
  const sponsorDetails = [
    {
      title: 'ALPHA SPONSORS',
      sponsors: sponsors.alpha,
      bcolor: '#EBB722',
      color: '#EBB722',
      span: 'span 5',
      gap: '0px',
    },
    {
      title: 'BETA SPONSORS',
      sponsors: sponsors.beta,
      bcolor: '#71A0CE',
      color: '#71A0CE',
      span: 'span 5',
      gap: '30px',
    },
    {
      title: 'GAMMA SPONSORS',
      sponsors: sponsors.gamma,
      bcolor: '#E78967',
      color: '#E78967',
      grid: 'repeat(auto-fit, minmax(120px, 1fr))',
      span: 'span 2',
    },
    {
      title: 'DELTA SPONSORS',
      sponsors: sponsors.delta,
      bcolor: '#8FA963',
      color: '#8FA963',
      grid: 'repeat(auto-fit, minmax(130px, 1fr))',
      span: 'span 3',
    },
    {
      title: 'MEDIA PARTNERS',
      sponsors: sponsors['media-partners'],
      bcolor: 'transparent',
      span: 'span 5',
      gap: '0px',
    },
    {
      title: 'AUTHENTICATION PARTNER',
      sponsors: sponsors['authentication-partner'],
      bcolor: 'transparent',
      span: 'span 2',
      grid: '1fr 1fr 1fr ',
    },
    {
      title: 'MENTAL HEALTH PARTNER',
      sponsors: sponsors['mental-health-partner'],
      bcolor: 'transparent',
      span: 'span 2',
      grid: '1fr 1fr 1fr ',
    },
    {
      title: 'CODING PARTNER',
      sponsors: sponsors['coding-partner'],
      bcolor: 'transparent',
      span: 'span 1',
      grid: '1fr 1fr 1fr ',
    },
  ];
   return <SponsorContainer>
    <HeadingSponsor>{sponsors.title}</HeadingSponsor>
    <ParagraphSponsor>{sponsors.content}</ParagraphSponsor>
    {
      sponsorDetails.map(sponsorDetail=> <SponsorCategory   style={{
        borderColor: sponsorDetail.bcolor,
        gridColumnEnd: sponsorDetail.span,
      }} >
        <SponsorCategoryHeading property={sponsorDetail.color}>
            {sponsorDetail.title}
        </SponsorCategoryHeading>
        <SponsorBox style={{ gap: sponsorDetail.gap, gridTemplateColumns: sponsorDetail.grid }} >
        {sponsorDetail.sponsors.map(sponsor=><SponsorIcon sponsor={sponsor}/>)}
        </SponsorBox>
      </SponsorCategory>)
    }
   
  
    </SponsorContainer>;
}

export default App;