import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { withTests } from '@storybook/addon-jest';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselIndicator,
} from './carousel';
import results from '~/.jest-test-results.json';

const meta: Meta<typeof Carousel> = {
  title: 'UI/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Tests: Story = {
  args: {
    children: (
      <>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/4">
              <div className="p-1">
                <div className="flex h-72 items-end rounded-2xl border border-neutral-600 p-2">
                  <div className="bg-dark">
                    <h3 className="text-lg font-semibold">Featured Content {index + 1}</h3>
                    <p className="text-muted-foreground text-sm">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselIndicator />
        <CarouselPrevious />
        <CarouselNext />
      </>
    ),
  },
  render: (args) => <Carousel>{args.children}</Carousel>,
};

Tests.decorators = [withTests({ results })];

export const Basic: Story = {
  render: () => {
    return (
      <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-1/4 md:basis-1/2">
            <div className="p-2">
              <div className="rounded-md border">
                <div className="flex items-center justify-center p-5">
                  <span className="text-4xl font-bold">1</span>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/4 md:basis-1/2">
            <div className="p-2">
              <div className="rounded-md border">
                <div className="flex items-center justify-center p-5">
                  <span className="text-4xl font-bold">2</span>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/4 md:basis-1/2">
            <div className="p-2">
              <div className="rounded-md border">
                <div className="flex items-center justify-center p-5">
                  <span className="text-4xl font-bold">3</span>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  },
};
export const WithIndicator: Story = {
  render: () => {
    return (
      <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-1/4 md:basis-1/2">
            <div className="p-2">
              <div className="rounded-md border">
                <div className="flex items-center justify-center p-5">
                  <span className="text-4xl font-bold">1</span>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/4 md:basis-1/2">
            <div className="p-2">
              <div className="rounded-md border">
                <div className="flex items-center justify-center p-5">
                  <span className="text-4xl font-bold">2</span>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/4 md:basis-1/2">
            <div className="p-2">
              <div className="rounded-md border">
                <div className="flex items-center justify-center p-5">
                  <span className="text-4xl font-bold">3</span>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <CarouselIndicator />
      </Carousel>
    );
  },
};

export const BasisExamples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Basis 1/2 - 2 items per row */}
      <div className="mb-15">
        <h3 className="mb-4 text-lg font-semibold">Basis 1/2 (2 items per row)</h3>
        <Carousel>
          <CarouselContent>
            {Array.from({ length: 4 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/2">
                <div className="p-1">
                  <div className="rounded-lg border shadow-sm">
                    <div className="flex aspect-square items-center justify-center p-6">
                      <span className="text-2xl font-semibold">{index + 1}</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Basis 1/3 - 3 items per row */}
      <div className="mb-15">
        <h3 className="mb-4 text-lg font-semibold">Basis 1/3 (3 items per row)</h3>
        <Carousel>
          <CarouselContent>
            {Array.from({ length: 6 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <div className="p-1">
                  <div className="rounded-lg border shadow-sm">
                    <div className="flex aspect-square items-center justify-center p-6">
                      <span className="text-xl font-semibold">{index + 1}</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselIndicator />
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Basis 1/4 - 4 items per row */}
      <div className="mb-15">
        <h3 className="mb-4 text-lg font-semibold">Basis 1/4 (4 items per row)</h3>
        <Carousel>
          <CarouselContent>
            {Array.from({ length: 8 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/4">
                <div className="p-1">
                  <div className="rounded-lg border shadow-sm">
                    <div className="flex aspect-square items-center justify-center p-6">
                      <span className="text-lg font-semibold">{index + 1}</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselIndicator />
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Basis 1/5 - 5 items per row */}
      <div className="mb-15">
        <h3 className="mb-4 text-lg font-semibold">Basis 1/5 (5 items per row)</h3>
        <Carousel>
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/5">
                <div className="p-1">
                  <div className="rounded-lg border shadow-sm">
                    <div className="flex aspect-square items-center justify-center p-6">
                      <span className="text-base font-semibold">{index + 1}</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselIndicator />
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Mixed Basis Sizes */}
      <div className="mb-15">
        <h3 className="mb-4 text-lg font-semibold">Mixed Basis Sizes</h3>
        <Carousel>
          <CarouselContent>
            <CarouselItem className="basis-1/2">
              <div className="p-1">
                <div className="rounded-lg border bg-blue-50 shadow-sm">
                  <div className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold">1/2</span>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div className="p-1">
                <div className="rounded-lg border bg-green-50 shadow-sm">
                  <div className="flex aspect-square items-center justify-center p-6">
                    <span className="text-xl font-semibold">1/3</span>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <div className="p-1">
                <div className="rounded-lg border bg-yellow-50 shadow-sm">
                  <div className="flex aspect-square items-center justify-center p-6">
                    <span className="text-lg font-semibold">1/4</span>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/5">
              <div className="p-1">
                <div className="rounded-lg border bg-red-50 shadow-sm">
                  <div className="flex aspect-square items-center justify-center p-6">
                    <span className="text-base font-semibold">1/5</span>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselIndicator />
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  ),
};
