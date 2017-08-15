import React from 'react';
import Label from '../../../../components/Label';
import Select from '../../../../components/Select';

const ShippingSelection = () => (
  <div>
    <Label>Elegí la forma de entrega</Label>
    <Select>
      <option value="0">Retiro en el local</option>
      <option value="1">Envío a domicilio</option>
    </Select>
    <Label>Datos del destino</Label>
    <Select>
      <option value="0">Av. Corrientes 3481 9°A</option>
    </Select>
    <Label>Seleccioná el método de envío</Label>
    <Select>
      <option value="0">Correo argentino</option>
      <option value="1">Micro desde Retiro</option>
      <option value="2">Moto</option>
    </Select>
  </div>
);

export default ShippingSelection;
