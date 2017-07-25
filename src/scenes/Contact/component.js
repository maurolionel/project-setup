import React from 'react';
import styled from 'styled-components';

const information = [
  {
    title: 'Dirección',
    content: ['Agüero 931, Ciudad Autónoma de Buenos Aires, Argentina']
  },
  {
    title: 'Ventas',
    content: [
      'Teléfonos:',
      '+54(011)3220-0500',
      '+54(011)6885-0225',
      'E-mail:',
      'ventas@imprek.com.ar'
    ]
  },
  {
    title: 'Soporte',
    content: [
      'Teléfonos:',
      '+54(011)3220-0500',
      '+54(011)6885-0225',
      'E-mail:',
      'soporte@imprek.com.ar'
    ]
  }
];

const Wrapper = styled.div``;

const InfoBoxContainer = styled.div``;

const InfoBox = styled.div``;

const InfoTitle = styled.h3``;

const InfoContent = styled.div``;

const renderInfoBoxContent = (aContentItem, index) => (
  <li key={index}>{aContentItem}</li>
);

const renderInfoBox = (anInfoItem, index) => (
  <InfoBox key={index}>
    <InfoTitle>{anInfoItem.title}</InfoTitle>
    <InfoContent>
      <ul>
        {anInfoItem.content.map(renderInfoBoxContent)}
      </ul>
    </InfoContent>
  </InfoBox>
);

const Contact = () => (
  <Wrapper>
    <InfoBoxContainer>
      {information.map(renderInfoBox)}
      <InfoBox>
        <InfoTitle>s</InfoTitle>
        <InfoContent>
          <ul>
            <li>Teléfono:</li>
          </ul>
        </InfoContent>
      </InfoBox>
    </InfoBoxContainer>
  </Wrapper>
);

export default Contact;
