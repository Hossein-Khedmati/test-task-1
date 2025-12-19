'use client';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselIndicator,
  CardFooter,
} from '@/components/ui';
import Image from 'next/image';
import { ArrowLeftIcon } from '@icons';
import { cn } from '@/utils/ui';

import type { CardSectionProps, GiftCardItem } from './types';

const hoverEffects =
  'transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-neutral-200/70 dark:hover:shadow-neutral-900/50';

export const GiftCard = ({ item, className }: { item: GiftCardItem; className?: string }) => {
  return (
    <Card
      className={cn(
        'bg-neutral-0 flex flex-col items-center gap-4 overflow-hidden rounded-2xl border border-neutral-200 p-3 text-center md:flex-row md:text-right dark:border-neutral-700 dark:bg-neutral-800',
        hoverEffects,
        className,
      )}
    >
      <div className="relative">
        <CardMedia className=" ">
          <Image
            src={item.image}
            width={1000}
            height={1000}
            alt={item.title}
            className="h-full w-20"
          />
        </CardMedia>
      </div>

      <CardContent className="mx-2" dir="rtl">
        <CardHeader className="mb-2 p-0 md:text-right">
          <CardTitle className="body-14 md:body-10 w-full">{item.title}</CardTitle>
        </CardHeader>
        <CardFooter>
          <Button
            as="link"
            variant="link"
            className="body-14 p-0"
            endIcon={<ArrowLeftIcon className="size-4" />}
          >
            خرید
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export const CardSection = ({ items, activeFilterValue }: CardSectionProps) => {
  const filteredItems = activeFilterValue
    ? items.filter((item) => item.category === activeFilterValue)
    : items;

  const limitedItems = filteredItems.slice(0, 8);

  if (!limitedItems?.length) {
    return null;
  }

  // Group items into slides of 4 for mobile carousel
  const slides = [];
  for (let i = 0; i < limitedItems.length; i += 4) {
    slides.push(limitedItems.slice(i, i + 4));
  }

  return (
    <>
      {/* Mobile: Carousel */}
      <div className="relative mt-5 md:mt-10 md:hidden">
        <Carousel>
          <CarouselContent className="-ml-4">
            {slides.map((slideItems, slideIndex) => (
              <CarouselItem key={slideIndex} className="basis-full pl-4">
                <div className="grid w-full grid-cols-2 gap-4 px-0">
                  {slideItems.map((item) => (
                    <div key={item.id} className="w-full">
                      <GiftCard item={item} />
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselIndicator />
          <CarouselPrevious className="bg-neutral-200!" />
          <CarouselNext className="bg-neutral-200!" />
        </Carousel>
      </div>

      {/* Desktop: Grid */}
      <div className="mx-auto mt-10 hidden w-full grid-cols-2 gap-5 md:grid lg:grid-cols-4">
        {limitedItems.map((item) => (
          <GiftCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};
