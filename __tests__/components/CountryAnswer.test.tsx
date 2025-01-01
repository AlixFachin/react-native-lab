import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CountryAnswer } from '../../components/CountryAnswer';

describe('CountryAnswer', () => {
  const mockCountryList = [
    { name: 'Country1', population: 1000 },
    { name: 'Country2', population: 2000 },
  ];
  const mockOnExit = jest.fn();

  it('renders correctly with correct answer', () => {
    const { getByText } = render(
      <CountryAnswer
        countryList={mockCountryList}
        selectedAnswer="Country1"
        rightAnswer="Country1"
        onExit={mockOnExit}
      />,
    );

    expect(getByText('Correct!')).toBeTruthy();
    expect(getByText('Country1 (1000)')).toBeTruthy();
    expect(getByText('Country2 (2000)')).toBeTruthy();
  });

  it('renders correctly with wrong answer', () => {
    const { getByText } = render(
      <CountryAnswer
        countryList={mockCountryList}
        selectedAnswer="Country2"
        rightAnswer="Country1"
        onExit={mockOnExit}
      />,
    );

    expect(getByText('Wrong!')).toBeTruthy();
    expect(getByText('Country1 (1000)')).toBeTruthy();
    expect(getByText('Country2 (2000)')).toBeTruthy();
  });

  it('calls onExit when Next! button is pressed', () => {
    const { getByText } = render(
      <CountryAnswer
        countryList={mockCountryList}
        selectedAnswer="Country1"
        rightAnswer="Country1"
        onExit={mockOnExit}
      />,
    );

    fireEvent.press(getByText('Next!'));
    expect(mockOnExit).toHaveBeenCalled();
  });
});
