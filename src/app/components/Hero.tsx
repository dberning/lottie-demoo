import Image from "next/image";
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Create a styled div that uses the fade-in animation
const FadeInDiv = styled.div`
  animation: ${fadeIn} 2s ease-in;
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }  
  }
`;

const Bounce = styled.div`
  animation-direction: alternate;  
  animation: ${bounce} 2s linear infinite;
  
`;

function Hero () {
  return (
    <FadeInDiv>
    <div className="container mx-auto h-screen grid grid-cols-12 grid-rows-12">
      <Image        
        src={'/un-mar-logo-2.png'}
        width={400}
        height={244}
        alt="Un Mar Logo"
      />
      <div style={{ fontFamily: 'BrownRegular', color: '#f48847' }} className="grid text-2xl row-start-4 row-end-6 col-start-1 col-end-7">
        <h1>Un Mar de Colores means “an ocean of colors”</h1>
      </div>
      <div style={{ fontFamily: 'BrownBold', color: '#f48847' }} className="grid text-4xl row-start-5 row-end-8 col-start-1 col-end-6">
      <h1>
      We cultivate and inspire inclusivity, diversity, and ocean stewardship through surf therapy, environmental education, and mentorship for children of color and underserved youth.  
      </h1>
      </div>
      <div className="grid row-start-5 row-end-9 col-start-8 col-end-12 -ml-14 mt-6">
        
        <Bounce>
      <Image        
        src={'/un-mar-logo.png'}
        width={400}
        height={244}
        alt="Un Mar Logo"
      />
      </Bounce>
      </div>
    </div>
    </FadeInDiv>
  )
}

export default Hero;