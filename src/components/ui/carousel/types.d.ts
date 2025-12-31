import type { OptionsType, PluginType, UseEmblaCarouselType } from 'embla-carousel-react';
import type * as React from 'react';

export type Orientation = 'horizontal' | 'vertical';

export type CarouselProps = React.HTMLAttributes<HTMLDivElement> & {
  opts?: Partial<OptionsType>;
  plugins?: PluginType[];
  orientation?: Orientation;
  setApi?: (api: CarouselApi) => void;
  className?: string;
};

export type CarouselContextType = {
  carouselRef: UseEmblaCarouselType[0];
  api: UseEmblaCarouselType[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  orientation: Orientation;
  selectedScrollSnap: () => number;
  scrollSnapList: () => number[];
};
export type CarouselContentProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

export type CarouselItemProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};
export type CarouselPreviousProps = React.HTMLAttributes<HTMLButtonElement> & {
  className?: string;
  leftArrowIcon?: React.ReactNode;
};
export type CarouselNextProps = React.HTMLAttributes<HTMLButtonElement> & {
  className?: string;
  rightArrowIcon?: React.ReactNode;
};

export type CarouselApi = {
  canScrollPrev: () => boolean;
  canScrollNext: () => boolean;
  scrollPrev: () => void;
  scrollNext: () => void;
  scrollTo: (index: number) => void;
  selectedScrollSnap: () => number;
  scrollSnapList: () => number[];
  on: (event: string, callback: () => void) => void;
  off: (event: string, callback: () => void) => void;
};
