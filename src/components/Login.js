import styled from "styled-components";
const Login=(props)=>{
return(
<Container>
    <Content>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" alt=""/>
        <SIGNUP>GET IT ALL THERE</SIGNUP>
        <DESCRIPTION>
        Disney+ Hotstar is an online video streaming platform owned by Novi Digital Entertainment Private Limited,
        a wholly owned subsidiary of Star India Private Limited. 
        </DESCRIPTION>
        <CTALogoTwo src="/images/cta-logo-two.png" alt=""/>
      </CTA>
      <BgImage/>
    </Content>
</Container>
);
};
const Container=styled.section`
overflow:hidden;
display:flex;
flex-direction:column;
text-align:center;
height:100vh;
`;
const Content=styled.div`
margin-bottom:10vw;
width:100%;
position:relative;
min-height:100vh;
box-sizing:border-box;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding:80px 40px;
height:100%;
`;
const BgImage=styled.div`
    background-repeat: no-repeat;
    height:100%;
    left:0;
    right:0;
    top:0;
    z-index:-1;
    position:absolute;
    background-image:url("/images/login-background.jpg");
    background-size:cover;
    background-position:top;
    background: cover;
  `;

  const CTA =styled.div`
  max-width:650px;
  width:100%;
  display:flex;
  flex-direction:column;
  ${'' /* margin-bottom:2vw;
  max-width:650px;
  flex-wrap:wrap;
  display:flex;
  flex-direction:column;
  justify-content:center;
  margin-top:0;
  align-items:center;
  text-align:center;
  margin-right:auto; 
  margin-left:auto;
  transition-timing-function:ease-out;
  transition:opacity 0.6s;
  width:100%; */}
  `;
  const CTALogoOne=styled.img`
  margin-bottom:12px;
   max-width:600px;
   min-height:1px;
   display:block;
    width:100%;
  `;

  const SIGNUP=styled.a`
  font-weight:bold;
  color:#f9f9f9;
  background-color:#0063e5;
  margin-bottom:12px;
  width:100%;
  letter-spacing:1.5px;
  font-size:18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius:4px;
  &:hover{
    background-color:#0483ee;
  }
  `;
  const DESCRIPTION=styled.p`
  color:hsla(0,01,95.31,1);
  font-size:11px;
  margin:0 0 24px;
  line-height:1.5;
  letter-spacing:1.5px;
  `;
  const CTALogoTwo=styled.img`
   max-width:600px;
   display: inline-block;
   vertical-align: bottom;
   margin-bottom:20px;
   width:100%;
  `;

export default Login;