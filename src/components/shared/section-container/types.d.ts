import React from 'react';

export type FilterOption = {
  label: string;
  value: string;
  id: number;
};

export type HeaderSectionProps = {
  title: string;
  showViewAll?: boolean;
  className?: string;
};

export type FilterSectionProps = {
  filters: FilterOption[];
  activeFilter: number | null;
  setActiveFilter: (val: number | null) => void;
};

export type SectionContainerProps = {
  title: string;
  className?: string;
  showViewAll: boolean;
  filters?: FilterOption[];
  children: React.ReactNode;
};
