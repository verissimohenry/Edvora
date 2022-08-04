import Head from 'next/head';
import styled from 'styled-components';

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #E5E5E5;
`;

const Heading = styled.h1`
  position: absolute;
  width: 118px;
  height: 22px;
  left: 43px;
  top: 113px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */
  color: #FFFFFF;
`;

const p = styled.p`
color: #red;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
    
  );
}
