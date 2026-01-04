import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from './sheet';

describe('Sheet Component', () => {
  const renderSheet = () =>
    render(
      <Sheet>
        <SheetTrigger asChild>
          <button>Open Sheet</button>
        </SheetTrigger>
        <SheetContent data-testid="sheet">
          <SheetHeader data-testid="header">
            <SheetTitle>Test Sheet</SheetTitle>
            <SheetDescription>This is a test sheet description</SheetDescription>
          </SheetHeader>
          Content
          <SheetFooter data-testid="footer">
            <SheetClose asChild>
              <button data-testid="sheet-close-btn">Close</button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>,
    );
  test('open trigger should exist', () => {
    renderSheet();
    expect(screen.getByText('Open Sheet')).toBeInTheDocument();
  });

  test('open trigger should open the Sheet', () => {
    renderSheet();
    fireEvent.click(screen.getByText('Open Sheet'));
    const sheet = screen.getByTestId('sheet');
    expect(sheet).toHaveAttribute('data-state', 'open');
  });

  test('close button should close the Sheet', () => {
    renderSheet();
    fireEvent.click(screen.getByText('Open Sheet'));
    const sheet = screen.getByTestId('sheet');
    expect(sheet).toHaveAttribute('data-state', 'open');

    fireEvent.click(screen.getByTestId('sheet-close-btn'));
    expect(sheet).toHaveAttribute('data-state', 'closed');
    expect(sheet).not.toBeInTheDocument();
  });
  test('all side variants of the sheet', () => {
    const sides = ['right', 'left', 'top', 'bottom'] as const;

    sides.forEach((side) => {
      const { unmount } = render(
        <Sheet open={true}>
          <SheetContent side={side} data-testid={`content-${side}`}>
            Content
          </SheetContent>
        </Sheet>,
      );

      const content = screen.getByTestId(`content-${side}`);

      switch (side) {
        case 'right':
          expect(content).toHaveClass('data-[state=closed]:slide-out-to-right');
          expect(content).toHaveClass('data-[state=open]:slide-in-from-right');
          break;
        case 'left':
          expect(content).toHaveClass('data-[state=closed]:slide-out-to-left');
          expect(content).toHaveClass('data-[state=open]:slide-in-from-left');
          break;
        case 'top':
          expect(content).toHaveClass('data-[state=closed]:slide-out-to-top');
          expect(content).toHaveClass('data-[state=open]:slide-in-from-top');
          break;
        case 'bottom':
          expect(content).toHaveClass('data-[state=closed]:slide-out-to-bottom');
          expect(content).toHaveClass('data-[state=open]:slide-in-from-bottom');
          break;
      }

      unmount();
    });
  });
  test('should render header and footer inside sheet', () => {
    renderSheet();
    fireEvent.click(screen.getByText('Open Sheet'));
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
