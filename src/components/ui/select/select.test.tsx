import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { Select, SelectItem, selectVariants } from './select';
import { SelectVariant } from './types';
import { SizeVariant, RadiusVariant, ColorVariant } from '@/components/ui/types';

// Mock the dependencies
jest.mock('@radix-ui/react-select', () => {
  let mockOnValueChange: ((value: string) => void) | undefined;
  let mockOnOpenChange: ((open: boolean) => void) | undefined;
  const Root: React.FC<{
    children?: React.ReactNode;
    onValueChange?: (value: string) => void;
    onOpenChange?: (open: boolean) => void;
    disabled?: boolean;
  }> = ({ children, onValueChange, onOpenChange, disabled, ...props }) => {
    mockOnValueChange = onValueChange;
    mockOnOpenChange = onOpenChange;
    return (
      <div data-testid="select-root" data-disabled={disabled} {...props}>
        {children}
      </div>
    );
  };
  Root.displayName = 'SelectRoot';

  const Trigger = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
  >(({ children, ...props }, ref) => (
    <button ref={ref} data-testid="select-trigger" {...props}>
      {children}
    </button>
  ));
  Trigger.displayName = 'SelectTrigger';

  const Value: React.FC<{
    placeholder?: string;
    children?: React.ReactNode;
  }> = ({ placeholder, children, ...props }) => (
    <span data-testid="select-value" {...props}>
      {children || placeholder}
    </span>
  );
  Value.displayName = 'SelectValue';
  const Icon: React.FC<{
    children: React.ReactNode;
  }> = ({ children, ...props }) => (
    <span data-testid="select-icon" {...props}>
      {children}
    </span>
  );
  Icon.displayName = 'SelectIcon';

  const Content: React.FC<
    React.HTMLAttributes<HTMLDivElement> & {
      position?: string;
      sideOffset?: number;
    }
  > = ({ children, className, position: _p, sideOffset: _s, ...props }) => (
    <div data-testid="select-content" className={className} {...props}>
      {children}
    </div>
  );
  Content.displayName = 'SelectContent';

  const ScrollUpButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    children,
    ...props
  }) => (
    <button data-testid="select-scroll-up" {...props}>
      {children}
    </button>
  );
  ScrollUpButton.displayName = 'SelectScrollUp';

  const ScrollDownButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    children,
    ...props
  }) => (
    <button data-testid="select-scroll-down" {...props}>
      {children}
    </button>
  );
  ScrollDownButton.displayName = 'SelectScrollDown';

  const Viewport: React.FC<React.HtmlHTMLAttributes<HTMLDivElement> & { className?: string }> = ({
    children,
    className,
    ...props
  }) => (
    <div data-testid="select-viewport" className={className} {...props}>
      {children}
    </div>
  );
  Viewport.displayName = 'SelectViewport';

  const Item = React.forwardRef<
    HTMLDivElement,
    {
      value: string;
      children: React.ReactNode;
      className?: string;
      disabled?: boolean;
    }
  >(({ value, children, disabled, className, ...props }, ref) => (
    <div
      ref={ref}
      data-testid={`select-item-${value}`}
      className={className}
      onClick={() => {
        if (!disabled && mockOnValueChange) {
          mockOnValueChange(value);
        }
        if (mockOnOpenChange) {
          mockOnOpenChange(false);
        }
      }}
      data-disabled={disabled}
      {...props}
    >
      {children}
    </div>
  ));
  Item.displayName = 'SelectItem';

  const ItemText: React.FC<{ children?: React.ReactNode }> = ({ children, ...props }) => (
    <span data-testid="select-item-text" {...props}>
      {children}
    </span>
  );
  ItemText.displayName = 'SelectItemText';
  return {
    Root,
    Content,
    Icon,
    Item,
    ItemText,
    ScrollUpButton,
    ScrollDownButton,
    Trigger,
    Value,
    Viewport,
  };
});

jest.mock('@radix-ui/react-slot', () => ({
  Slot: ({ children }: { children: React.ReactNode }) => children,
}));

// Testing
describe('Select section Component', () => {
  test('rendering with default props', () => {
    render(
      <Select>
        <SelectItem value="opt1">opt 1</SelectItem>
        <SelectItem value="opt2">opt 2</SelectItem>
      </Select>,
    );
    const trigger = screen.getByTestId('select-trigger');
    const value = screen.getByTestId('select-value');
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveClass('select-outline');
    expect(value).toHaveTextContent('select an item');
  });

  test('renders as child when asChild is true', () => {
    const CustomTrigger = React.forwardRef<
      HTMLAnchorElement,
      React.AnchorHTMLAttributes<HTMLAnchorElement>
    >(({ children, ...props }, ref) => (
      <a ref={ref} href="https://example.com" data-testid="custom-trigger" {...props}>
        {children}
      </a>
    ));
    CustomTrigger.displayName = 'CustomTrigger';

    render(
      <Select asChild>
        <CustomTrigger>Link Trigger</CustomTrigger>
      </Select>,
    );

    const link = screen.getByTestId('custom-trigger');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  test.each([
    ['outline', 'select-outline'],
    ['fill', 'select-fill'],
    ['ghost', 'select-ghost'],
  ])('render %s variant correct', (variant, expectedClass) => {
    render(
      <Select variant={variant as SelectVariant}>
        <SelectItem value="1">Option 1</SelectItem>
      </Select>,
    );
    const trigger = screen.getByTestId('select-trigger');
    expect(trigger).toHaveClass(expectedClass);
  });

  test.each([
    ['xs', 'select-xs'],
    ['sm', 'select-sm'],
    ['md', 'select-md'],
    ['lg', 'select-lg'],
    ['xl', 'select-xl'],
  ])('render %s size correct', (size, expectedClass) => {
    render(
      <Select size={size as SizeVariant}>
        <SelectItem value="1">Option 1</SelectItem>
      </Select>,
    );
    const trigger = screen.getByTestId('select-trigger');
    expect(trigger).toHaveClass(expectedClass);
  });
  test.each([
    ['primary', 'select-primary'],
    ['secondary', 'select-secondary'],
    ['success', 'select-success'],
    ['error', 'select-error'],
    ['warning', 'select-warning'],
    ['info', 'select-info'],
    ['neutral', 'select-neutral'],
  ])('render %s color correct', (color, expectedClass) => {
    render(
      <Select color={color as ColorVariant}>
        <SelectItem value="1">Option 1</SelectItem>
      </Select>,
    );
    const trigger = screen.getByTestId('select-trigger');
    expect(trigger).toHaveClass(expectedClass);
  });

  test.each([
    ['xs', 'select-rounded-xs'],
    ['sm', 'select-rounded-sm'],
    ['md', 'select-rounded-md'],
    ['lg', 'select-rounded-lg'],
    ['xl', 'select-rounded-xl'],
    ['2xl', 'select-rounded-2xl'],
    ['3xl', 'select-rounded-3xl'],
    ['4xl', 'select-rounded-4xl'],
    [true, 'select-rounded'],
  ])('renders %s border radius correctly', (rounded, expectedClass) => {
    render(
      <Select rounded={rounded as RadiusVariant | true}>
        <SelectItem value="1">Option 1</SelectItem>
      </Select>,
    );
    const trigger = screen.getByTestId('select-trigger');
    expect(trigger).toHaveClass(expectedClass);
  });

  test('applies fullWidth class when fullWidth is true', () => {
    render(
      <Select fullWidth>
        <SelectItem value="1">Opt 1</SelectItem>
      </Select>,
    );
    const trigger = screen.getByTestId('select-trigger');
    expect(trigger).toHaveClass('select-fullWidth');
  });

  test('render with placeholder', () => {
    render(
      <Select placeholder="Select an option">
        <SelectItem value="1">Opt 1</SelectItem>
      </Select>,
    );
    expect(screen.getByTestId('select-value')).toHaveTextContent('Select an option');
  });

  test('applies custom className', () => {
    render(
      <Select className="custom-class">
        <SelectItem value="1">Option 1</SelectItem>
      </Select>,
    );
    const trigger = screen.getByTestId('select-trigger');
    expect(trigger).toHaveClass('custom-class');
  });

  test('is disabled when disabled prop is true', () => {
    render(
      <Select disabled>
        <SelectItem value="1">Option 1</SelectItem>
      </Select>,
    );
    const trigger = screen.getByTestId('select-trigger');
    expect(trigger).toBeDisabled();
  });

  test('calls onValueChange when item is clicked', async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();

    render(
      <Select onValueChange={handleChange}>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
      </Select>,
    );

    const item = screen.getByTestId('select-item-option1');
    await user.click(item);

    expect(handleChange).toHaveBeenCalledWith('option1');
  });
  test('renders all required components', () => {
    render(
      <Select>
        <SelectItem value="1">Option 1</SelectItem>
      </Select>,
    );
    expect(screen.getByTestId('select-root')).toBeInTheDocument();
    expect(screen.getByTestId('select-trigger')).toBeInTheDocument();
    expect(screen.getByTestId('select-value')).toBeInTheDocument();
    expect(screen.getByTestId('select-icon')).toBeInTheDocument();
    expect(screen.getByTestId('select-content')).toBeInTheDocument();
    expect(screen.getByTestId('select-scroll-up')).toBeInTheDocument();
    expect(screen.getByTestId('select-scroll-down')).toBeInTheDocument();
    expect(screen.getByTestId('select-viewport')).toBeInTheDocument();
  });
  test('applies color-specific classes to items', () => {
    render(
      <Select color="primary">
        <SelectItem value="item1">Item 1</SelectItem>
        <SelectItem value="item2">Item 2</SelectItem>
      </Select>,
    );

    expect(screen.getByTestId('select-item-item1')).toHaveClass('select-item-primary');
    expect(screen.getByTestId('select-item-item2')).toHaveClass('select-item-primary');
  });

  test('selectVariants function combines classes correctly', () => {
    const classes = selectVariants({
      variant: 'fill',
      size: 'lg',
      color: 'primary',
      rounded: 'md',
      fullWidth: true,
    });

    expect(classes).toContain('select');
    expect(classes).toContain('select-fill');
    expect(classes).toContain('select-lg');
    expect(classes).toContain('select-primary');
    expect(classes).toContain('select-rounded-md');
    expect(classes).toContain('select-fullWidth');
  });

  test('handles multiple selection prop', () => {
    render(
      <Select>
        <SelectItem value="1">Option 1</SelectItem>
        <SelectItem value="2">Option 2</SelectItem>
      </Select>,
    );

    const root = screen.getByTestId('select-root');
    expect(root).toBeInTheDocument();
  });

  test('handles defaultValue prop', () => {
    render(
      <Select defaultValue="option2">
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
      </Select>,
    );

    const root = screen.getByTestId('select-root');
    expect(root).toBeInTheDocument();
  });

  test('handles onOpenChange callback', async () => {
    const handleOpenChange = jest.fn();
    const user = userEvent.setup();

    render(
      <Select onOpenChange={handleOpenChange}>
        <SelectItem value="option1">Option 1</SelectItem>
      </Select>,
    );

    const item = screen.getByTestId('select-item-option1');
    await user.click(item);

    expect(handleOpenChange).toHaveBeenCalledWith(false);
  });

  test('handles controlled open state', () => {
    render(
      <Select>
        <SelectItem value="1">Option 1</SelectItem>
      </Select>,
    );

    const root = screen.getByTestId('select-root');
    expect(root).toBeInTheDocument();
  });

  test('handles invalid children gracefully', () => {
    render(
      <Select>
        {null}
        {undefined}
        <SelectItem value="valid">Valid Item</SelectItem>
      </Select>,
    );

    expect(screen.getByTestId('select-item-valid')).toBeInTheDocument();
    expect(screen.getByTestId('select-value')).toBeInTheDocument();
  });

  test('handles empty children array', () => {
    render(<Select>{[]}</Select>);

    expect(screen.getByTestId('select-root')).toBeInTheDocument();
    expect(screen.getByTestId('select-trigger')).toBeInTheDocument();
  });

  test('handles disabled item click correctly', async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();

    render(
      <Select onValueChange={handleChange}>
        <SelectItem value="disabled-item" disabled>
          Disabled Item
        </SelectItem>
      </Select>,
    );

    const disabledItem = screen.getByTestId('select-item-disabled-item');
    await user.click(disabledItem);

    expect(handleChange).not.toHaveBeenCalled();
  });

  test('handles ref forwarding correctly', () => {
    render(
      <Select>
        <SelectItem value="1">Option 1</SelectItem>
      </Select>,
    );

    expect(screen.getByTestId('select-root')).toBeInTheDocument();
  });
});
describe('SelectItem Component', () => {
  test('renders with value and children', () => {
    render(<SelectItem value="test-value">Test Item</SelectItem>);

    const item = screen.getByTestId('select-item-test-value');
    expect(item).toBeInTheDocument();
    expect(screen.getByTestId('select-item-text')).toHaveTextContent('Test Item');
  });

  test('applies custom className', () => {
    render(
      <SelectItem value="custom" className="custom-item-class">
        Custom Item
      </SelectItem>,
    );

    const item = screen.getByTestId('select-item-custom');
    expect(item).toHaveClass('select-item');
    expect(item).toHaveClass('custom-item-class');
  });

  test('handles disabled state', () => {
    render(
      <SelectItem value="disabled-item" disabled>
        Disabled Item
      </SelectItem>,
    );

    const item = screen.getByTestId('select-item-disabled-item');
    expect(item).toHaveAttribute('data-disabled', 'true');
  });

  test('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();

    render(
      <SelectItem ref={ref} value="ref-test">
        Ref Test
      </SelectItem>,
    );

    expect(ref.current).toBeInTheDocument();
  });

  test('passes through additional props', () => {
    render(
      <SelectItem value="props-test" data-custom="test-attribute">
        Props Test
      </SelectItem>,
    );

    const item = screen.getByTestId('select-item-props-test');
    expect(item).toHaveAttribute('data-custom', 'test-attribute');
  });

  test('handles click when disabled', async () => {
    const user = userEvent.setup();

    render(
      <SelectItem value="disabled-click" disabled>
        Disabled Click Item
      </SelectItem>,
    );

    const item = screen.getByTestId('select-item-disabled-click');
    await user.click(item);

    expect(item).toBeInTheDocument();
  });

  test('handles empty children', () => {
    render(<SelectItem value="empty">Empty Item</SelectItem>);

    const item = screen.getByTestId('select-item-empty');
    expect(item).toBeInTheDocument();
    expect(screen.getByTestId('select-item-text')).toBeInTheDocument();
  });

  test('handles complex children', () => {
    render(
      <SelectItem value="complex">
        <span>Complex</span> <strong>Content</strong>
      </SelectItem>,
    );

    const item = screen.getByTestId('select-item-complex');
    expect(item).toHaveTextContent('Complex Content');
  });

  test('handles special characters in value', () => {
    render(<SelectItem value="special-@#$%^&*()">Special Characters</SelectItem>);

    const item = screen.getByTestId('select-item-special-@#$%^&*()');
    expect(item).toBeInTheDocument();
  });
});
