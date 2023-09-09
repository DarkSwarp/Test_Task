import { nanoid } from 'nanoid';
import { useState } from 'react';
import {
  Btn,
  BtnText,
  InputTo,
  InputFrom,
  MileageText,
  MileageLabel,
  SelectPrice,
  PriceText,
  PriceLabel,
  SelectCar,
  CarText,
  CarLabel,
  Form,
  Option,
  OptionBlack,
} from './Search.styled';

export const Search = ({ filterCatalogCars, carsArray, inputPrice }) => {
  const [price, setPrise] = useState();
  const [selectedCar, setSelectedCar] = useState();
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  const handleCarChange = e => {
    switch (e.target.name) {
      case 'carBrand':
        setSelectedCar(e.target.value);
        break;
      case 'priceCar':
        setPrise(e.target.value);
        break;
      case 'from':
        setMileageFrom(e.target.value.slice(5));
        break;
      case 'to':
        setMileageTo(e.target.value.slice(3));
        break;
      default:
        return;
    }
  };
  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        if (mileageFrom || mileageTo || price || selectedCar) {
          filterCatalogCars(selectedCar, price, mileageFrom, mileageTo);
          setMileageTo('');
          setMileageFrom('');
          setSelectedCar('');
          setPrise('');
        }
      }}
    >
      <CarLabel>
        <CarText>Car brand</CarText>
        <SelectCar
          name="carBrand"
          value={selectedCar}
          onChange={handleCarChange}
        >
          <option value="">Select a car</option>
          {carsArray.map(car => {
            if (car === selectedCar) {
              return (
                <OptionBlack
                  key={nanoid()}
                  defaultValue={car}
                  onClick={e => console.log(e.currentTarget)}
                >
                  {car}
                </OptionBlack>
              );
            } else {
              return (
                <Option
                  key={nanoid()}
                  defaultValue={car}
                  onClick={e => console.log(e.currentTarget)}
                >
                  {car}
                </Option>
              );
            }
          })}
        </SelectCar>
      </CarLabel>
      <PriceLabel>
        <PriceText>Price/ 1 hour</PriceText>
        <SelectPrice name="priceCar" value={price} onChange={handleCarChange}>
          <Option value="">To $</Option>
          {inputPrice.map(input => {
            if (input === parseInt(price)) {
              return (
                <OptionBlack key={nanoid()} defaultValue={input}>
                  {input}
                </OptionBlack>
              );
            } else {
              return (
                <Option key={nanoid()} defaultValue={input}>
                  {input}
                </Option>
              );
            }
          })}
        </SelectPrice>
      </PriceLabel>
      <MileageLabel>
        <MileageText>Сar mileage / km</MileageText>
        <InputFrom
          name="from"
          value={`From ${mileageFrom}`}
          onChange={handleCarChange}
        />
        <InputTo
          name="to"
          value={`To ${mileageTo}`}
          onChange={handleCarChange}
        />
      </MileageLabel>

      <Btn>
        <BtnText>Search</BtnText>
      </Btn>
    </Form>
  );
};
