import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

// Mock the icons BEFORE importing carousel
jest.mock('../../shared/icons/index.ts', () => ({
  ArrowLeftIcon: () => <span data-testid="arrow-left">←</span>,
  ArrowLeft2Icon: () => <span data-testid="arrow-left-2">⇐</span>,
}));

const mockApi = {
  canScrollPrev: jest.fn(() => true),
  canScrollNext: jest.fn(() => true),
  scrollPrev: jest.fn(),
  scrollNext: jest.fn(),
  scrollTo: jest.fn(),
  selectedScrollSnap: jest.fn(() => 0),
  scrollSnapList: jest.fn(() => [0, 1, 2]),
  on: jest.fn(),
  off: jest.fn(),
};

jest.mock('embla-carousel-react', () => {
  return jest.fn(() => [
    { current: null }, // carouselRef
    mockApi, // api
  ]);
});

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselIndicator,
} from './carousel';

describe('Carousel Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockApi.canScrollPrev.mockReturnValue(true);
    mockApi.canScrollNext.mockReturnValue(true);
    mockApi.selectedScrollSnap.mockReturnValue(0);
    mockApi.scrollSnapList.mockReturnValue([0, 1, 2]);
  });
  test('render dedault', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item1</CarouselItem>
          <CarouselItem>Item2</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );
    const carousel = screen.getByRole('region');
    expect(carousel).toBeInTheDocument();
    expect(carousel).toHaveAttribute('aria-roledescription', 'carousel');
  });

  test('renders with custom className', () => {
    render(
      <Carousel className="custom-carousel">
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );

    const carousel = screen.getByRole('region');
    expect(carousel).toHaveClass('custom-carousel');
  });
  test('renders with horizontal orientation by default', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );

    const carousel = screen.getByRole('region');
    expect(carousel).toBeInTheDocument();
  });

  test('renders with vertical orientation', () => {
    render(
      <Carousel orientation="vertical">
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );

    const carousel = screen.getByRole('region');
    expect(carousel).toBeInTheDocument();
  });
  test('renders forwardRef correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <Carousel ref={ref}>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );
    expect(ref.current).toBeInTheDocument();
  });
});

describe('CarouselContent Component', () => {
  test('renders with default props', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );
    const content = screen.getByText('Item 1').closest('.carousel-content');
    expect(content).toBeInTheDocument();
  });

  test('renders with default props', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );
    const content = screen.getByText('Item 1').closest('.carousel-content');
    expect(content).toBeInTheDocument();
  });
  test('renders with custom className', () => {
    render(
      <Carousel>
        <CarouselContent className="custom-content">
          <CarouselItem>Item 1</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );

    const content = screen.getByText('Item 1').closest('.custom-content');
    expect(content).toBeInTheDocument();
  });

  test('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();

    render(
      <Carousel>
        <CarouselContent ref={ref}>
          <CarouselItem>Item 1</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );

    expect(ref.current).toBeInTheDocument();
  });

  test('passes through additional props', () => {
    render(
      <Carousel>
        <CarouselContent data-testid="custom-content">
          <CarouselItem>Item 1</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );

    const content = screen.getByTestId('custom-content');
    expect(content).toBeInTheDocument();
  });
});
describe('CarouselItem Component ', () => {
  test('renders with default props', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );
    const item = screen.getByText('Item 1');
    expect(item).toBeInTheDocument();
    expect(item.closest('[role="group"]')).toHaveAttribute('aria-roledescription', 'slide');
  });
  test('renders with custom className', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem className="custom-item">Item 1</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );

    const item = screen.getByText('Item 1');
    expect(item.closest('.custom-item')).toBeInTheDocument();
  });

  test('renders with basis classes', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-1/2">Item 1</CarouselItem>
          <CarouselItem className="basis-1/3">Item 2</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );

    const item1 = screen.getByText('Item 1');
    const item2 = screen.getByText('Item 2');

    expect(item1.closest('[class*="basis-1/2"]')).toBeInTheDocument();
    expect(item2.closest('[class*="basis-1/3"]')).toBeInTheDocument();
  });

  test('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();

    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem ref={ref}>Item 1</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );

    expect(ref.current).toBeInTheDocument();
  });

  test('passes through additional props', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem data-testid="custom-item">Item 1</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );

    const item = screen.getByTestId('custom-item');
    expect(item).toBeInTheDocument();
  });
});
describe('CarouselPrev Component', () => {
  test('renders with default props', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
      </Carousel>,
    );
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass('carousel-previous');
    expect(screen.getByTestId('arrow-left')).toBeInTheDocument();
  });
  test('renders with custom className', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="custom-previous" />
      </Carousel>,
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-previous');
  });

  test('calls scrollPrev when clicked', async () => {
    const user = userEvent.setup();

    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
      </Carousel>,
    );

    const button = screen.getByRole('button');
    await user.click(button);

    expect(mockApi.scrollPrev).toHaveBeenCalled();
  });

  test('is disabled when canScrollPrev is false', () => {
    mockApi.canScrollPrev.mockReturnValue(false);

    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
      </Carousel>,
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  test('forwards ref correctly', () => {
    const ref = React.createRef<HTMLButtonElement>();

    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
        </CarouselContent>
        <CarouselPrevious ref={ref} />
      </Carousel>,
    );

    expect(ref.current).toBeInTheDocument();
  });

  test('passes through additional props', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
        </CarouselContent>
        <CarouselPrevious data-testid="custom-previous" aria-label="Previous" />
      </Carousel>,
    );

    const button = screen.getByTestId('custom-previous');
    expect(button).toHaveAttribute('aria-label', 'Previous');
  });
});
describe('CarouselNext Component', () => {
  test('renders with default props', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
        </CarouselContent>
        <CarouselNext />
      </Carousel>,
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('carousel-next');
    expect(screen.getByTestId('arrow-left')).toBeInTheDocument();
  });

  test('renders with custom className', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
        </CarouselContent>
        <CarouselNext className="custom-next" />
      </Carousel>,
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-next');
  });

  test('calls scrollNext when clicked', async () => {
    const user = userEvent.setup();

    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
        </CarouselContent>
        <CarouselNext />
      </Carousel>,
    );

    const button = screen.getByRole('button');
    await user.click(button);

    expect(mockApi.scrollNext).toHaveBeenCalled();
  });

  test('is disabled when canScrollNext is false', () => {
    mockApi.canScrollNext.mockReturnValue(false);

    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
        </CarouselContent>
        <CarouselNext />
      </Carousel>,
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  test('forwards ref correctly', () => {
    const ref = React.createRef<HTMLButtonElement>();

    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
        </CarouselContent>
        <CarouselNext ref={ref} />
      </Carousel>,
    );

    expect(ref.current).toBeInTheDocument();
  });

  test('passes through additional props', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
        </CarouselContent>
        <CarouselNext data-testid="custom-next" aria-label="Next" />
      </Carousel>,
    );

    const button = screen.getByTestId('custom-next');
    expect(button).toHaveAttribute('aria-label', 'Next');
  });
});
describe('CarouselIndicator Component', () => {
  test('renders with default props', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
          <CarouselItem>Item 3</CarouselItem>
        </CarouselContent>
        <CarouselIndicator />
      </Carousel>,
    );

    const indicators = screen.getAllByRole('button');
    expect(indicators).toHaveLength(3);
    expect(indicators[0]).toHaveClass('carousel-indicator-active');
  });

  test('renders with custom className', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
        </CarouselContent>
        <CarouselIndicator className="custom-indicators" />
      </Carousel>,
    );

    const container = document.querySelector('.custom-indicators');
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('carousel-indicators', 'custom-indicators');
  });

  test('calls scrollTo when indicator is clicked', async () => {
    const user = userEvent.setup();

    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
        </CarouselContent>
        <CarouselIndicator />
      </Carousel>,
    );

    const indicators = screen.getAllByRole('button');
    await user.click(indicators[1]);

    expect(mockApi.scrollTo).toHaveBeenCalledWith(1);
  });

  test('shows active indicator correctly', () => {
    mockApi.selectedScrollSnap.mockReturnValue(1);

    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
          <CarouselItem>Item 3</CarouselItem>
        </CarouselContent>
        <CarouselIndicator />
      </Carousel>,
    );

    const indicators = screen.getAllByRole('button');
    expect(indicators[1]).toHaveClass('carousel-indicator-active');
    expect(indicators[0]).not.toHaveClass('carousel-indicator-active');
  });

  test('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();

    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
        </CarouselContent>
        <CarouselIndicator ref={ref} />
      </Carousel>,
    );

    expect(ref.current).toBeInTheDocument();
  });

  test('passes through additional props', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
        </CarouselContent>
        <CarouselIndicator data-testid="custom-indicators" />
      </Carousel>,
    );

    const container = screen.getByTestId('custom-indicators');
    expect(container).toBeInTheDocument();
  });
});

describe('Carousel Integration', () => {
  test('renders complete carousel with all components', () => {
    // Set up mock to return exactly 2 scroll snaps for 2 items
    mockApi.scrollSnapList.mockReturnValue([0, 1]);

    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
        </CarouselContent>
        <CarouselIndicator />
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>,
    );

    expect(screen.getByRole('region')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(4); // 2 indicators + previous + next
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  test('navigation buttons work correctly', async () => {
    const user = userEvent.setup();
    mockApi.canScrollPrev.mockReturnValue(true);
    mockApi.canScrollNext.mockReturnValue(true);
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>,
    );

    const buttons = screen.getAllByRole('button');
    const previousButton = buttons.find((btn) => btn.classList.contains('carousel-previous'));
    const nextButton = buttons.find((btn) => btn.classList.contains('carousel-next'));

    // Click the navigation buttons
    if (previousButton) {
      await user.click(previousButton);
    }

    if (nextButton) {
      await user.click(nextButton);
    }

    expect(mockApi.scrollPrev).toHaveBeenCalled();
    expect(mockApi.scrollNext).toHaveBeenCalled();
  });

  test('handles empty carousel content', () => {
    render(
      <Carousel>
        <CarouselContent>{/* Empty content */}</CarouselContent>
      </Carousel>,
    );

    const carousel = screen.getByRole('region');
    expect(carousel).toBeInTheDocument();
  });

  test('handles single carousel item', () => {
    // Override mock for single item test - need to mock before render
    mockApi.scrollSnapList.mockReturnValue([0]);

    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Single Item</CarouselItem>
        </CarouselContent>
        <CarouselIndicator />
      </Carousel>,
    );

    expect(screen.getByText('Single Item')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(1); // Single indicator
  });

  describe('Extra coverage for Carousel internals', () => {
    test('calls setApi when setApi prop is provided (line 43)', () => {
      const setApiMock = jest.fn();

      render(
        <Carousel setApi={setApiMock}>
          <CarouselContent>
            <CarouselItem>Item 1</CarouselItem>
          </CarouselContent>
        </Carousel>,
      );

      expect(setApiMock).toHaveBeenCalledWith(mockApi);
    });

    test('executes onSelect and updates scroll states (line 63)', () => {
      mockApi.canScrollPrev.mockReturnValueOnce(false);
      mockApi.canScrollNext.mockReturnValueOnce(true);

      render(
        <Carousel>
          <CarouselContent>
            <CarouselItem>Item 1</CarouselItem>
          </CarouselContent>
        </Carousel>,
      );

      const selectHandler = mockApi.on.mock.calls.find(([evt]) => evt === 'select')[1];

      act(() => {
        selectHandler(mockApi);
      });

      expect(mockApi.canScrollPrev).toHaveBeenCalled();
      expect(mockApi.canScrollNext).toHaveBeenCalled();
    });

    test('cleans up select listener on unmount (lines 80–85)', () => {
      const { unmount } = render(
        <Carousel>
          <CarouselContent>
            <CarouselItem>Item 1</CarouselItem>
          </CarouselContent>
        </Carousel>,
      );

      unmount();
      expect(mockApi.off).toHaveBeenCalledWith('select', expect.any(Function));
    });

    test('updates current indicator on api select event (line 96)', () => {
      mockApi.scrollSnapList.mockReturnValue([0, 1]);

      render(
        <Carousel>
          <CarouselContent>
            <CarouselItem>Item 1</CarouselItem>
            <CarouselItem>Item 2</CarouselItem>
          </CarouselContent>
          <CarouselIndicator />
        </Carousel>,
      );

      mockApi.selectedScrollSnap.mockReturnValue(1);
      const selectHandler = mockApi.on.mock.calls.find(([evt]) => evt === 'select')[1];

      act(() => {
        selectHandler();
      });

      const indicators = screen.getAllByRole('button');
      expect(indicators[1]).toHaveClass('carousel-indicator-active');
    });

    test('cleans up indicator listener on unmount (line 101)', () => {
      const { unmount } = render(
        <Carousel>
          <CarouselContent>
            <CarouselItem>Item 1</CarouselItem>
          </CarouselContent>
          <CarouselIndicator />
        </Carousel>,
      );

      unmount();
      expect(mockApi.off).toHaveBeenCalledWith('select', expect.any(Function));
    });
  });
});

describe('Carousel keyboard navigation', () => {
  test('calls scrollPrev on ArrowLeft key press', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );

    const carousel = screen.getByRole('region');
    carousel.focus();

    fireEvent.keyDown(carousel, { key: 'ArrowLeft' });

    expect(mockApi.scrollPrev).toHaveBeenCalled();
  });

  test('calls scrollNext on ArrowRight key press', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );

    const carousel = screen.getByRole('region');
    carousel.focus();

    fireEvent.keyDown(carousel, { key: 'ArrowRight' });

    expect(mockApi.scrollNext).toHaveBeenCalled();
  });
});

describe('useCarousel error handling', () => {
  test('throws error when used outside of Carousel', () => {
    // suppress error output in test
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => {
      render(<CarouselPrevious />);
    }).toThrow('useCarousel must be used within a <Carousel />');

    spy.mockRestore();
  });
});

describe('Carousel with no api', () => {
  test('does not crash when embla api is null', () => {
    jest.doMock('embla-carousel-react', () => {
      return jest.fn(() => [
        { current: null },
        null, // api is null
      ]);
    });

    const { Carousel, CarouselContent, CarouselItem } = require('./carousel');

    expect(() =>
      render(
        <Carousel>
          <CarouselContent>
            <CarouselItem>Item 1</CarouselItem>
          </CarouselContent>
        </Carousel>,
      ),
    ).not.toThrow();
  });
});

describe('Carousel keyboard events', () => {
  test('ArrowLeft prevents default and calls scrollPrev', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );

    const carousel = screen.getByRole('region');
    carousel.focus();

    const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
    jest.spyOn(event, 'preventDefault');

    carousel.dispatchEvent(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(mockApi.scrollPrev).toHaveBeenCalled();
  });

  test('ArrowRight prevents default and calls scrollNext', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );

    const carousel = screen.getByRole('region');
    carousel.focus();

    const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
    jest.spyOn(event, 'preventDefault');

    carousel.dispatchEvent(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(mockApi.scrollNext).toHaveBeenCalled();
  });
});

test('handles reInit event correctly', () => {
  render(
    <Carousel>
      <CarouselContent>
        <CarouselItem>Item</CarouselItem>
      </CarouselContent>
    </Carousel>,
  );

  const reInitHandler = mockApi.on.mock.calls.find(([event]) => event === 'reInit')[1];

  act(() => {
    reInitHandler(mockApi);
  });

  expect(mockApi.canScrollPrev).toHaveBeenCalled();
  expect(mockApi.canScrollNext).toHaveBeenCalled();
});
test('renders custom right arrow icon when rightArrowIcon is true', () => {
  render(
    <Carousel>
      <CarouselContent>
        <CarouselItem>Item</CarouselItem>
      </CarouselContent>
      <CarouselNext rightArrowIcon />
    </Carousel>,
  );

  expect(screen.queryByTestId('arrow-left')).not.toBeInTheDocument();
});
test('renders custom left arrow icon when leftArrowIcon is true', () => {
  render(
    <Carousel>
      <CarouselContent>
        <CarouselItem>Item</CarouselItem>
      </CarouselContent>
      <CarouselPrevious leftArrowIcon />
    </Carousel>,
  );

  expect(screen.queryByTestId('arrow-left')).not.toBeInTheDocument();
});
