import React from 'react';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
} from './ServicesElement';
import Icon1 from '../../../images/undraw_wallet_aym5.png';
import Icon2 from '../../../images/undraw_check_boxes_m3d0.png';
import Icon3 from '../../../images/undraw_digital_nomad_9kgl.png';
const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Service</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesP>
            Support Easy Access to Finance 
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesP>
            Trusted Delivery Service 
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesP>
            Be a Digital Innovator 
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
