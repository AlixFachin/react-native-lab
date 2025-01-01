import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CountryQuestion } from '../../components/ CountryQuestion';

describe('CountryQuestion Component', () => {
  const mockCountryList = [
    { name: 'Country A', population: 1000000 },
    { name: 'Country B', population: 2000000 },
    { name: 'Country C', population: 3000000 },
  ];

  const mockOnAnswer = jest.fn();

  it('renders correctly', () => {
    const { getByText } = render(
      <CountryQuestion countryList={mockCountryList} onAnswer={mockOnAnswer} />,
    );

    expect(getByText('Please choose the most populated country')).toBeTruthy();
    mockCountryList.forEach(country => {
      expect(getByText(`${country.name} (${country.population})`)).toBeTruthy();
    });
  });

  it('calls onAnswer with the correct country name when a button is pressed', () => {
    const { getByText } = render(
      <CountryQuestion countryList={mockCountryList} onAnswer={mockOnAnswer} />,
    );

    fireEvent.press(getByText('Country A (1000000)'));
    expect(mockOnAnswer).toHaveBeenCalledWith('Country A');

    fireEvent.press(getByText('Country B (2000000)'));
    expect(mockOnAnswer).toHaveBeenCalledWith('Country B');

    fireEvent.press(getByText('Country C (3000000)'));
    expect(mockOnAnswer).toHaveBeenCalledWith('Country C');
  });

  it('renders the correct number of buttons', () => {
    const { getAllByTestId } = render(
      <CountryQuestion countryList={mockCountryList} onAnswer={mockOnAnswer} />,
    );

    const buttons = getAllByTestId('country-button');
    expect(buttons.length).toBe(mockCountryList.length);
  });
});
