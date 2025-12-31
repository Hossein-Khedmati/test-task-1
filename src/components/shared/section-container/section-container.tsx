'use client';

import { cn } from '@/utils/ui';
import { Button, Select, SelectItem } from '@/components/ui';
import React, { useState } from 'react';
import { ArrowLeftIcon } from '@icons';
import { FilterSectionProps, HeaderSectionProps, SectionContainerProps } from './types';

const HeaderSection = ({ title, showViewAll, className }: HeaderSectionProps) => {
  return (
    <div className={cn('flex flex-wrap items-center justify-between gap-3 sm:gap-4', className)}>
      <h1 className="dark:text-neutral-0 align-middle text-[18px] font-semibold text-neutral-700 sm:text-[20px] md:text-[28px]">
        {title}
      </h1>
      {showViewAll && (
        <div className="flex-shrink-0">
          <Button
            as="link"
            variant="link"
            href="/"
            endIcon={<ArrowLeftIcon className="size-4 lg:size-5" />}
            className="p-0 text-[14px] text-neutral-500 sm:text-[16px] md:text-[18px] dark:text-neutral-200"
          >
            مشاهده همه
          </Button>
        </div>
      )}
    </div>
  );
};

const FilterSection = ({ filters, activeFilter, setActiveFilter }: FilterSectionProps) => {
  if (filters.length === 0) return null;
  const handleFilter = (val: number | null) => {
    setActiveFilter(val === activeFilter ? null : val);
  };
  const ALL_FILTER_ID = 0;

  return (
    <div className="flex items-center gap-2">
      <Select
        value={activeFilter !== null ? String(activeFilter) : String(ALL_FILTER_ID)}
        onValueChange={(val) => {
          const numVal = Number(val);
          handleFilter(numVal === ALL_FILTER_ID ? null : numVal);
        }}
        placeholder="انتخاب فیلتر"
        variant="fill"
        color="neutral"
        className="dark:text-neutral-0 min-w-30 bg-neutral-200 px-2 py-1 text-sm text-neutral-800 lg:hidden dark:bg-neutral-800"
      >
        <SelectItem value={ALL_FILTER_ID.toString()}>همه</SelectItem>
        {filters.map((f) => (
          <SelectItem key={f.id} value={f.id.toString()}>
            {f.label}
          </SelectItem>
        ))}
      </Select>
      <div className="hidden items-center gap-6 lg:flex">
        <Button
          color="white"
          onClick={() => handleFilter(null)}
          className={cn(
            'button-text-md h-12 rounded-xl border px-6 py-2.5 font-semibold',
            activeFilter === null
              ? 'text-neutral-0 dark:bg-neutral-0 border-none bg-neutral-800 dark:text-neutral-800'
              : 'dark:text-neutral-0 border-neutral-200 text-neutral-800 dark:border-neutral-700 dark:bg-neutral-800',
          )}
        >
          همه
        </Button>
        {filters.map((f) => (
          <Button
            color="white"
            onClick={() => handleFilter(f.id)}
            key={f.id}
            className={cn(
              'button-text-md h-12 rounded-xl border px-6 py-2.5 font-semibold',
              activeFilter === f.id
                ? 'text-neutral-0 dark:bg-neutral-0 border-none bg-neutral-800 dark:text-neutral-800'
                : 'dark:text-neutral-0 border-neutral-200 text-neutral-800 dark:border-neutral-700 dark:bg-neutral-800',
            )}
          >
            {f.label}
          </Button>
        ))}
      </div>
    </div>
  );
};
export const SectionContainer = ({
  children,
  className,
  title,
  filters = [],
  showViewAll,
}: SectionContainerProps) => {
  const [activeFilter, setActiveFilter] = useState<number | null>(null);
  const activeFilterValue = filters.find((f) => f.id === activeFilter)?.value ?? null;

  const enhancedChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return child;
    }

    if (typeof child.type === 'string') {
      return child;
    }

    return React.cloneElement(child as React.ReactElement<{ activeFilterValue?: string | null }>, {
      activeFilterValue,
    });
  });

  return (
    <section className={cn('container', className)}>
      <HeaderSection title={title} showViewAll={showViewAll} />
      <div className="mt-5 md:mt-10">
        <FilterSection
          filters={filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </div>
      <div>{enhancedChildren}</div>
    </section>
  );
};
