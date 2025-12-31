import { render, screen } from '@testing-library/react';
import { Button } from './button';
import { ButtonColor, ButtonVariant } from './types';
import React from 'react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Button Component', () => {
  test('render Button with default props', () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByRole('button', { name: 'Click Me' });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('button-fill');
    expect(buttonElement).toHaveClass('button-primary');
  });
});

test.each([
  ['outline', 'button-outline'],
  ['fill', 'button-fill'],
  ['ghost', 'button-ghost'],
  ['link', 'button-link'],
])('renders %s variant correctly', (variant, expectedClass) => {
  render(<Button variant={variant as ButtonVariant}>Variant Button</Button>);
  const button = screen.getByRole('button', { name: 'Variant Button' });
  expect(button).toHaveClass(expectedClass);
});

test.each([
  ['primary', 'button-primary'],
  ['secondary', 'button-secondary'],
  ['success', 'button-success'],
  ['error', 'button-error'],
  ['gray', 'button-gray'],
  ['white', 'button-white'],
])('renders %s color correctly', (color, expectedClass) => {
  render(<Button color={color as ButtonColor}>Colors Button</Button>);
  const button = screen.getByRole('button', { name: 'Colors Button' });
  expect(button).toHaveClass(expectedClass);
});

test('renders anchor when as="link" and href', () => {
  render(
    <Button as="link" href="https://test.com">
      Link Button
    </Button>,
  );

  const link = screen.getByRole('link', { name: 'Link Button' });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', 'https://test.com');
});

test('renders anchor when as="link" without href', () => {
  render(<Button as="link">Link Button</Button>);

  const link = screen.getByRole('link', { name: 'Link Button' });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', '#');
});

test('calling onClick when button is clicked', async () => {
  const user = userEvent.setup();
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Clickable Button</Button>);
  const buttonElement = screen.getByRole('button', { name: 'Clickable Button' });

  await user.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('dont call onClick when button is disabled', async () => {
  const handlleClick = jest.fn();
  const user = userEvent.setup();
  render(
    <Button isDisabled={true} onClick={handlleClick}>
      Disabled Button
    </Button>,
  );
  const buttonElement = screen.getByRole('button', { name: 'Disabled Button' });
  expect(buttonElement).toBeDisabled();
  await user.click(buttonElement);
  expect(handlleClick).not.toHaveBeenCalled();
});

test('loading state shows loading text and disables button', () => {
  render(
    <Button isLoading={true} loadingText="Loading...">
      Submit
    </Button>,
  );
  const buttonElement = screen.getByRole('button', { name: 'Loading...' });
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveTextContent('Loading...');
});

test('satart icon rendered correctly', () => {
  render(<Button startIcon={<span data-testid="start-icon">⭐</span>}>Start Icon Button</Button>);
  const buttonElement = screen.getByRole('button', { name: /Start Icon Button/ });
  const iconElement = screen.getByTestId('start-icon');
  expect(buttonElement).toBeInTheDocument();
  expect(iconElement).toBeInTheDocument();
  expect(iconElement.parentElement).toHaveClass('ml-2');
});

test('satart icon rendered correctly', () => {
  render(<Button endIcon={<span data-testid="end-icon">⭐</span>}>End Icon Button</Button>);
  const buttonElement = screen.getByRole('button', { name: /End Icon Button/ });
  const iconElement = screen.getByTestId('end-icon');
  expect(buttonElement).toBeInTheDocument();
  expect(iconElement).toBeInTheDocument();
  expect(iconElement.parentElement).toHaveClass('mr-2');
});

test('applies custom className', () => {
  render(<Button className="custom-class">Custom Button</Button>);
  const button = screen.getByRole('button', { name: 'Custom Button' });
  expect(button).toHaveClass('custom-class');
});

test('applies fullWidth class when fullWidth prop is true', () => {
  render(<Button fullWidth>Full Width Button</Button>);
  const button = screen.getByRole('button', { name: 'Full Width Button' });
  expect(button).toHaveClass('button-fullWidth');
});

test('applies rounded class when rounded prop is true', () => {
  render(<Button rounded>Rounded Button</Button>);
  const button = screen.getByRole('button', { name: 'Rounded Button' });
  expect(button).toHaveClass('button-fullRounded');
});
