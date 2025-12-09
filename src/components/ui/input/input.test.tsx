import { render, screen } from '@testing-library/react';
import { Input } from './input';
import { InputColor, InputType, InputVariant } from './types';
import React from 'react';
import userEvent from '@testing-library/user-event';

describe('Input Component', () => {
  test('render Input with default props', () => {
    render(<Input />);
    const inputElement = screen.getByRole('textbox');
    const parentElement = inputElement.parentElement;

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('placeholder', 'سرچ کنید...');
    expect(parentElement).toBeInTheDocument();
    expect(parentElement).toHaveClass('input-primary');
  });

  test('Label render', () => {
    const labelTest = 'Label Input';
    render(<Input label={labelTest} />);

    const labelElement = screen.getByText(labelTest);
    const inputElement = screen.getByRole('textbox');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveAttribute('for', inputElement.id);
  });

  test.each([
    ['fill', 'input-fill'],
    ['ghost', 'input-ghost'],
    ['outline', 'input-outline'],
  ])('render %s variants', (variant, className) => {
    render(<Input variant={variant as InputVariant} />);

    const inputElement = screen.getByRole('textbox');
    const containerElement = inputElement.parentElement;

    expect(containerElement).toHaveClass(className);
  });

  test.each([
    ['primary', 'input-primary'],
    ['secondary', 'input-secondary'],
    ['error', 'input-error'],
    ['warning', 'input-warning'],
    ['info', 'input-info'],
    ['neutral', 'input-neutral'],
    ['success', 'input-success'],
  ])('render %s colors', (color, className) => {
    render(<Input color={color as InputColor} />);

    const inputElement = screen.getByRole('textbox');
    const containerElement = inputElement.parentElement;

    expect(containerElement).toHaveClass(className);
  });
  test('states color have priority to color if we have both', () => {
    render(<Input color="primary" state="error" />);

    const inputElement = screen.getByRole('textbox');
    const containerElement = inputElement.parentElement;

    expect(containerElement).toBeInTheDocument();
    expect(containerElement).toHaveClass('input-error');
    expect(containerElement).not.toHaveClass('input-primary');
  });

  test('input messege displays only when we have both state and input messege', () => {
    render(<Input inputMessage="messege" state="error" />);

    const messegeElement = screen.getByText('messege');

    expect(messegeElement).toBeInTheDocument();
    expect(messegeElement).toHaveClass('inputMessage');
  });

  test('input messege doesnt display without having state', () => {
    render(<Input inputMessage="messege" />);

    const messegeElement = screen.queryByText('message');

    expect(messegeElement).not.toBeInTheDocument();
  });
  test('input messege doesnt display with only having state', () => {
    render(<Input state="error" />);

    const messegeElement = document.querySelector('.inputMessage');

    expect(messegeElement).not.toBeInTheDocument();
  });

  test('rendering start icon element', () => {
    render(<Input startIcon={<span data-testid="start-icon">❤️</span>} />);
    const icon = screen.getByTestId('start-icon');
    expect(icon).toBeInTheDocument();
  });
  test('rendering end icon element', () => {
    render(<Input endIcon={<span data-testid="end-icon">❤️</span>} />);
    const icon = screen.getByTestId('end-icon');
    expect(icon).toBeInTheDocument();
  });
  test('applies full width when its true', () => {
    render(<Input fullWidth={true} />);
    const inputElement = screen.getByRole('textbox');
    const containerElement = inputElement.parentElement;
    expect(containerElement).toHaveClass('w-full');
  });

  test('spplies disable when its true', () => {
    render(<Input disabled={true} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeDisabled();

    userEvent.click(inputElement);
    expect(inputElement).not.toHaveFocus();
  });
  test('Display the correct initial value prop', () => {
    const initialValue = 'This is a initial Value';
    const mockOnValueChange = jest.fn();
    render(<Input value={initialValue} onValueChange={mockOnValueChange} />);

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveValue(initialValue);
  });
  test('calls onValueChange when user types', async () => {
    const initialValue = 'hi';
    const TestingOnChange = () => {
      const [value, setValue] = React.useState(initialValue);
      return <Input value={value} onValueChange={(event: any) => setValue(event.target.value)} />;
    };
    render(<TestingOnChange />);
    const inputElement = screen.getByRole('textbox');
    await userEvent.setup().type(inputElement, 'whatsup');
    expect(inputElement).toHaveValue('hiwhatsup');
  });

  test('forwards ref to the input element', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} />);
    const inputElement = screen.getByRole('textbox');

    expect(ref.current).toBe(inputElement);
  });
  test('renders custom placeholder', () => {
    render(<Input placeholder="hello" />);
    expect(screen.getByPlaceholderText('hello')).toBeInTheDocument();
  });
  test.each(['text', 'password', 'email', 'number', 'search', 'tel', 'url', 'date'])(
    'renders input type = %s',
    (type) => {
      render(<Input type={type as InputType} />);
      const inputElement = screen.getByPlaceholderText('سرچ کنید...');
      expect(inputElement).toHaveAttribute('type', type);
    },
  );
  test('supports dir prop', () => {
    render(<Input dir="ltr" />);
    const inputElement = screen.getByPlaceholderText('سرچ کنید...');
    expect(inputElement).toHaveAttribute('dir', 'ltr');
  });
});
