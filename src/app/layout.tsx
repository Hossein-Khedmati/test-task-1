import RootLayout from '@/layouts/root-layout';
import './globals.css';
import { PropsWithChildren } from 'react';
import { HomeLayout } from '@/layouts/home-layout';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <RootLayout>
      <HomeLayout>{children}</HomeLayout>
    </RootLayout>
  );
}
