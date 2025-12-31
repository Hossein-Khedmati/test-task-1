export interface CardSectionProps {
  items: GiftCardItem[];
  activeFilterValue?: string | null;
}

export interface GiftCardItem {
  id: number;
  title: string;
  image: string;
  category: string;
}
