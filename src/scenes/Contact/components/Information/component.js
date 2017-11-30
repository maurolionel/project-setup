import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InfoTitle from '../InfoTitle';
import Label from '../../../../components/Label';
import Input from '../../../../components/Input';
import Anchor from '../../../../components/Anchor';

const Wrapper = styled.div`
  display: flex;
  padding-top: 1.5rem;
  margin-top: 2.5rem;
  border-top: 1px solid ${({ theme }) => theme.grayLighter};
`;

const InfoBox = styled.div`
  flex: 1;
  padding: 0.5rem 1rem;
  margin: 0.3rem;
  font-size: 0.9rem;
`;

const InfoList = styled.ul`
  padding: 0;
  margin: 0;
  line-height: 1.5;
`;

const CustomInfoList = styled(InfoList)`
  & > li {
    &:first-child {
      margin-bottom: 5px;
    }
    margin-bottom: 1rem;
    > * {
      width: 100%;
    }
  }
`;

const InfoListItem = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.gray};
`;

const StyledLabel = styled(Label)`
  margin: 10px 0 0;
`;

const Information = ({ onOpenModalSchedules, onOpenModalShippings }) => {
  const openModalSchedules = (event) => {
    event.preventDefault();
    onOpenModalSchedules();
  };
  const openModalShippings = (event) => {
    event.preventDefault();
    onOpenModalShippings();
  };

  return (
    <Wrapper>
      <InfoBox>
        <InfoTitle>Ubicación</InfoTitle>
        <InfoList>
          <InfoListItem>Agüero 931, Ciudad Autónoma de Buenos Aires, Argentina</InfoListItem>
          <InfoListItem>
            <Anchor to="#" onClick={openModalSchedules}>Horarios</Anchor>
          </InfoListItem>
          <InfoListItem>
            <Anchor to="#" onClick={openModalShippings}>Métodos de envío</Anchor>
          </InfoListItem>
        </InfoList>
      </InfoBox>

      <InfoBox>
        <InfoTitle>Ventas</InfoTitle>
        <InfoList>
          <InfoListItem>
            <StyledLabel>Líneas telefónicas:</StyledLabel>
          </InfoListItem>
          <InfoListItem>+54 (011) 3220-0500</InfoListItem>
          <InfoListItem>+54 (011) 6885-0225</InfoListItem>
          <InfoListItem>
            <StyledLabel>E-mail:</StyledLabel>
          </InfoListItem>
          <InfoListItem>ventas@imprek.com.ar</InfoListItem>
        </InfoList>
      </InfoBox>

      <InfoBox>
        <InfoTitle>Soporte</InfoTitle>
        <InfoList>
          <InfoListItem>
            <StyledLabel>Líneas telefónicas:</StyledLabel>
          </InfoListItem>
          <InfoListItem>+54 (011) 3220-0500</InfoListItem>
          <InfoListItem>+54 (011) 6885-0225</InfoListItem>
          <InfoListItem>
            <StyledLabel>E-mail:</StyledLabel>
          </InfoListItem>
          <InfoListItem>soporte@imprek.com.ar</InfoListItem>
        </InfoList>
      </InfoBox>

      <InfoBox>
        <InfoTitle>¡Quiero que me llamen!</InfoTitle>
        <CustomInfoList>
          <InfoListItem>
            <StyledLabel htmlFor="telephone">Ingresá tu teléfono:</StyledLabel>
          </InfoListItem>
          <InfoListItem>
            <Input id="telephone" type="text" />
          </InfoListItem>
          <InfoListItem>
            <Input type="submit" value="Solicitar llamada" primary />
          </InfoListItem>
        </CustomInfoList>
      </InfoBox>
    </Wrapper>
  );
};

Information.propTypes = {
  onOpenModalSchedules: PropTypes.func.isRequired,
  onOpenModalShippings: PropTypes.func.isRequired
};

export default Information;
