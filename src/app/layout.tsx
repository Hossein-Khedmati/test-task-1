import RootLayout from '@/layouts/root-layout';
import './globals.css';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return <RootLayout>{children}</RootLayout>;
}
