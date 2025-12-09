import { render, screen } from '@testing-library/react';
import { Label, labelVariants } from './label';
import { cn } from '@/utils/ui';
import React from 'react';

describe('Label Component Testing', () => {
  test('label rendering', () => {
    const labelContent = 'Email';
    render(<Label>{labelContent}</Label>);
    const labelElement = screen.getByText(labelContent);
    expect(labelElement).toBeInTheDocument();
  });

  test('render label with htmlfor and data-slot attr', () => {
    const htmlForTest = 'email';
    render(<Label htmlFor={htmlForTest}>Email</Label>);
    const labelElement = screen.getByText('Email');
    expect(labelElement).toHaveAttribute('for', htmlForTest);
    expect(labelElement).toHaveAttribute('data-slot', 'label');
  });

  test('testting cva classes', () => {
    render(<Label>cva classes</Label>);
    const labelElement = screen.getByText('cva classes');
    const expectedClasses = cn(labelVariants({ color: 'primary', size: 'md', align: 'justify' }));
    expect(labelElement).toHaveClass('label', 'label-primary', 'label-md', 'label-justify');
    expect(labelElement).toHaveClass(expectedClasses);
  });
  test('test custom color and size variants', () => {
    render(
      <Label color="info" size="xl">
        Info color and xl size
      </Label>,
    );
    const expectedClasses = cn(labelVariants({ color: 'info', size: 'xl', align: 'justify' }));
    const labelElement = screen.getByText('Info color and xl size');
    expect(labelElement).toHaveClass('label-info');
    expect(labelElement).toHaveClass('label-xl');
    expect(labelElement).not.toHaveClass('label-primary');
    expect(labelElement).toHaveClass(expectedClasses);
  });
  test('testing the merge of custom and cva classes', () => {
    const customClasses = 'font-semibold bg-blue-400';
    render(
      <Label color="success" className={customClasses}>
        Merged classes
      </Label>,
    );
    const labelElement = screen.getByText('Merged classes');
    expect(labelElement).toHaveClass(customClasses);
    expect(labelElement).toHaveClass('font-semibold');
    expect(labelElement).toHaveClass('bg-blue-400');
    expect(labelElement).toHaveClass('label-success');
  });
  test('testing the forward ref', () => {
    const mockRef = React.createRef<HTMLLabelElement>();
    render(<Label ref={mockRef}>Ref test</Label>);
    expect(mockRef.current).toBeInTheDocument();
    expect(mockRef.current?.tagName).toBe('LABEL');
  });
});
