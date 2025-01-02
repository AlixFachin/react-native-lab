import React from 'react';

import App from '../../App';
import { render, fireEvent } from '@testing-library/react-native';

describe('App', () => {
  it('renders correctly', () => {
    const { getByText } = render(<App />);
    expect(getByText('Home Screen')).toBeTruthy();
  });
});
