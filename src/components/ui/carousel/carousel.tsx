'use client';
import * as React from 'react';
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';
import { cn } from '@/utils/ui';
import { ArrowLeft2Icon, ArrowLeftIcon } from '@icons';
import {
  CarouselApi,
  CarouselContentProps,
  CarouselContextType,
  CarouselItemProps,
  CarouselNextProps,
  CarouselPreviousProps,
  CarouselProps,
} from './types';

export const CarouselContext = React.createContext<CarouselContextType | null>(null);

export const useCarousel = () => {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }
  return context;
};

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ orientation = 'horizontal', setApi, opts, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        align: 'start',
        containScroll: 'trimSnaps1',
        loop: true,
        breakpoints: {
          '(max-width: 640px)': {
            align: 'center',
            dragFree: true,
          },
        },
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y',
      },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const onSelect = React.useCallback((api: UseEmblaCarouselType[1]) => {
      if (!api) return;
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);
    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);
    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);
    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext],
    );
    React.useEffect(() => {
      if (!api || !setApi) return;
      setApi(api as CarouselApi);
    }, [api, setApi]);
    React.useEffect(() => {
      if (!api) return;
      onSelect(api);
      api.on('reInit', onSelect);
      api.on('select', onSelect);
      return () => {
        api?.off('select', onSelect);
      };
    }, [api, onSelect]);
    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          orientation,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          scrollSnapList: () => api?.scrollSnapList() || [],
          selectedScrollSnap: () => api?.selectedScrollSnap() || 0,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn('carousel', className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
          dir="ltr"
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);

Carousel.displayName = 'Carousel';

export const CarouselContent = React.forwardRef<HTMLDivElement, CarouselContentProps>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return (
      <div ref={carouselRef} className="carousel-content" data-orientation={orientation}>
        <div
          ref={ref}
          className={cn(
            'flex',
            orientation === 'vertical' ? 'h-full flex-col' : 'flex-row',
            className,
          )}
          data-orientation={orientation}
          {...props}
        />
      </div>
    );
  },
);
CarouselContent.displayName = 'CarouselContent';

export const CarouselItem = React.forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn('carousel-item', className)}
        data-orientation={orientation}
        {...props}
      />
    );
  },
);

CarouselItem.displayName = 'CarouselItem';

export const CarouselPrevious = React.forwardRef<HTMLButtonElement, CarouselPreviousProps>(
  ({ className, leftArrowIcon, ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();

    return (
      <button
        ref={ref}
        className={cn('carousel-previous', className)}
        data-orientation={orientation}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        {leftArrowIcon ? (
          <ArrowLeft2Icon className="size-5" />
        ) : (
          <ArrowLeftIcon className="size-4" />
        )}
      </button>
    );
  },
);
CarouselPrevious.displayName = 'CarouselPrevious';

export const CarouselNext = React.forwardRef<HTMLButtonElement, CarouselNextProps>(
  ({ className, rightArrowIcon, ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    return (
      <button
        ref={ref}
        className={cn('carousel-next', className)}
        data-orientation={orientation}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        {rightArrowIcon ? (
          <ArrowLeft2Icon className="size-5 rotate-180" />
        ) : (
          <ArrowLeftIcon className="size-4 rotate-180" />
        )}
      </button>
    );
  },
);
CarouselNext.displayName = 'CarouselNext';

export const CarouselIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { api, selectedScrollSnap, scrollSnapList } = useCarousel();
  const [current, setCurrent] = React.useState(0);
  React.useEffect(() => {
    if (!api) return;

    const handler = () => setCurrent(selectedScrollSnap());
    setCurrent(selectedScrollSnap());

    api.on('select', handler);

    return () => {
      api.off('select', handler);
    };
  }, [api, selectedScrollSnap]);

  return (
    <div ref={ref} className={cn('carousel-indicators', className)} {...props}>
      {scrollSnapList().map((_, index) => (
        <button
          key={index}
          onClick={() => api?.scrollTo(index)}
          className={cn('carousel-indicator', current === index && 'carousel-indicator-active')}
        />
      ))}
    </div>
  );
});
CarouselIndicator.displayName = 'CarouselIndicator';
