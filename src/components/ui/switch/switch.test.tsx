import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Switch } from './switch';

describe('Switch Component', () => {
  const renderSwitch = (props = {}) => render(<Switch data-testid="switch" {...props} />);

  test('renders with default props', () => {
    renderSwitch();

    const switchElement = screen.getByTestId('switch');

    expect(switchElement).toBeInTheDocument();
  });

  test('renders with checked state', () => {
    renderSwitch({ checked: true });
    const switchElement = screen.getByTestId('switch');

    expect(switchElement).toHaveAttribute('data-state', 'checked');
  });

  test('renders children inside switch', () => {
    renderSwitch({
      children: <span data-testid="switch-icon">🌙</span>,
    });
    expect(screen.getByTestId('switch-icon')).toBeInTheDocument();
  });

  test('handles direction prop', () => {
    renderSwitch({ dir: 'rtl' });

    expect(screen.getByTestId('switch')).toHaveAttribute('dir', 'rtl');
  });

  test('calls onCheckedChange when clicked', () => {
    const handleChange = jest.fn();
    renderSwitch({ onCheckedChange: handleChange });

    fireEvent.click(screen.getByTestId('switch'));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  describe('Thumb className logic', () => {
    test('applies correct classes: thumb and rtl when dir is rtl', () => {
      renderSwitch({ dir: 'rtl' });

      const switchElement = screen.getByTestId('switch');
      const thumbElement = switchElement.querySelector('[data-slot="switch-thumb"]');

      expect(thumbElement).toHaveClass('thumb', 'rtl');
      expect(thumbElement).not.toHaveClass('ltr');
    });

    test('applies correct classes: thumb and ltr when dir is ltr', () => {
      renderSwitch({ dir: 'ltr' });

      const switchElement = screen.getByTestId('switch');
      const thumbElement = switchElement.querySelector('[data-slot="switch-thumb"]');

      expect(thumbElement).toHaveClass('thumb', 'ltr');
      expect(thumbElement).not.toHaveClass('rtl');
    });

    test('applies rtl class by default when dir is not provided', () => {
      renderSwitch();

      const switchElement = screen.getByTestId('switch');
      const thumbElement = switchElement.querySelector('[data-slot="switch-thumb"]');

      expect(thumbElement).toHaveClass('thumb', 'rtl');
    });

    test('merges custom thumb classNames from classNames.thumb prop', () => {
      const customClassNames = {
        thumb: 'custom-thumb-class another-class',
      };

      renderSwitch({
        dir: 'ltr',
        classNames: customClassNames,
      });

      const switchElement = screen.getByTestId('switch');
      const thumbElement = switchElement.querySelector('[data-slot="switch-thumb"]');

      expect(thumbElement).toHaveClass('thumb', 'ltr', 'custom-thumb-class', 'another-class');
    });

    test('updates thumb classes when dir prop changes', () => {
      const { rerender } = render(<Switch data-testid="switch" dir="ltr" />);

      let thumbElement = screen.getByTestId('switch').querySelector('[data-slot="switch-thumb"]');
      expect(thumbElement).toHaveClass('ltr');
      expect(thumbElement).not.toHaveClass('rtl');

      rerender(<Switch data-testid="switch" dir="rtl" />);

      thumbElement = screen.getByTestId('switch').querySelector('[data-slot="switch-thumb"]');
      expect(thumbElement).toHaveClass('rtl');
      expect(thumbElement).not.toHaveClass('ltr');
    });
  });
});
