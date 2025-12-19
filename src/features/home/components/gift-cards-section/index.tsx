import { filters, giftCardItems } from './constants';
import { CardSection, SectionContainer } from '@/components/shared';

export const GiftCardsSection = () => {
  return (
    <SectionContainer
      className="mt-20"
      title="گیفت کارت ها و اعتبار دیجیتال"
      showViewAll={true}
      filters={filters}
    >
      <CardSection items={giftCardItems} />
    </SectionContainer>
  );
};
