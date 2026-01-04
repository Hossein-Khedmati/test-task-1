import { FC } from 'react';
import { PropsWithChildren } from '@/types/children';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
