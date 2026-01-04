import Link from 'next/link';
import React, { FC } from 'react';
import { customerSupport, quickAccessItem, socialItem } from './constants';
import Image from 'next/image';

const QuickAccess: FC = () => {
  return (
    <nav className="flex flex-col space-y-2.5 lg:space-y-3">
      {quickAccessItem.map((item, index) => (
        <p
          key={index}
          className="body-15 xl:body-12 hover:dark:text-neutral-0 text-center text-neutral-500 transition hover:text-neutral-700 sm:text-start dark:text-neutral-200"
        >
          <Link href={item.href}>{item.label}</Link>
        </p>
      ))}
    </nav>
  );
};

const CustomerSupport: FC = () => {
  return (
    <nav className="flex flex-col space-y-2.5 lg:space-y-3">
      {customerSupport.map((item, index) => (
        <p
          key={index}
          className="body-15 xl:body-12 hover:dark:text-neutral-0 text-center text-neutral-500 transition hover:text-neutral-700 sm:text-start dark:text-neutral-200"
        >
          <Link href={item.href}>{item.label}</Link>
        </p>
      ))}
    </nav>
  );
};

const SocialLinks: FC = () => {
  return (
    <nav className="flex gap-4">
      {socialItem.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          target="_blank"
          className="bg-neutral-0 text-primary-500 flex h-12 w-12 items-center justify-center rounded-xl text-2xl transition-all duration-300 hover:scale-110 xl:h-14 xl:w-14 dark:bg-neutral-800"
        >
          <item.icon />
        </Link>
      ))}
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      <div className="flex w-full justify-center bg-neutral-200 dark:bg-neutral-900">
        <div className="w-full px-5 py-8 sm:py-[45px] md:px-15 lg:w-[1440px]">
          <div className="hidden items-center gap-3.5 sm:flex">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={1000}
              height={700}
              className="h-[68px] w-[60px] sm:block"
            />
            <div className="flex flex-col items-start">
              <p className="dark:text-neutral-0 font-extrabold tracking-[1] text-neutral-700 sm:text-2xl">
                ETMIFY
              </p>
              <p className="text-neutral-500 sm:text-xs sm:font-medium dark:text-neutral-200">
                کیفیت و سرعت در یک مسیر شفاف
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-16 sm:mt-8 lg:flex-row">
            <div className="flex w-full flex-col justify-between lg:w-1/2 lg:pl-12">
              <div className="w-full">
                <h4 className="heading-3 sm:heading-4 dark:text-neutral-0 text-center text-neutral-800 sm:text-start">
                  درباره اتمیفای
                </h4>
                <p className="body-15 xl:body-12 mt-3.5 text-center text-neutral-700 sm:text-justify dark:text-neutral-200">
                  اتمیفای؛ مرجع تخصصی خرید گیفت‌کارت، اکانت‌های قانونی بازی و لایسنس‌های اورجینال.
                  ما با حذف واسطه‌ها، تجربه‌ای امن، سریع و ارزان را برای گیمرها و کاربران ایرانی
                  فراهم می‌کنیم.
                </p>
              </div>
              <div className="mt-8 flex h-fit w-full flex-col-reverse items-center gap-8 sm:flex-row sm:justify-between">
                <SocialLinks />

                <p className="body-15 xl:body-12 text-neutral-700 dark:text-neutral-200">
                  تلفن پشتیبانی: ۴۴۳۴۹۸۶۷-۰۲۱
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col gap-16 sm:flex-row sm:gap-0 lg:w-1/2">
              <div className="flex w-full sm:w-2/3">
                <div className="w-1/2">
                  <h3 className="heading-4 dark:text-neutral-0 mb-4 text-center text-neutral-800 sm:text-start">
                    دسترسی سریع
                  </h3>
                  <QuickAccess />
                </div>
                <div className="w-1/2">
                  <h3 className="heading-4 dark:text-neutral-0 mb-4 text-center text-neutral-800 sm:text-start">
                    پشتیبانی مشتریان
                  </h3>
                  <CustomerSupport />
                </div>
              </div>
              <div className="flex w-full justify-center gap-4 sm:w-1/3 lg:flex-col xl:flex-row">
                <div className="bg-neutral-0 flex h-[90px] w-[90px] items-center justify-center overflow-hidden rounded-xl xl:h-[100px] xl:w-[100px] dark:bg-neutral-700">
                  <Image
                    src="/images/1.jpg"
                    width={1000}
                    height={700}
                    alt="Enemad"
                    className="h-[58px] w-[50px] object-cover xl:h-[64px] xl:w-[54px]"
                  />
                </div>
                <div className="bg-neutral-0 flex h-[90px] w-[90px] items-center justify-center overflow-hidden rounded-xl xl:h-[100px] xl:w-[100px] dark:bg-neutral-700">
                  <Image
                    src="/images/2.jpg"
                    width={1000}
                    height={700}
                    alt="Enemad"
                    className="h-[58px] w-[50px] object-cover xl:h-[64px] xl:w-[54px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center bg-neutral-900 lg:h-14 dark:bg-neutral-800">
        <div className="flex w-full flex-col-reverse items-center gap-4 py-4 lg:h-full lg:w-[1224px] lg:flex-row lg:justify-between lg:px-6 lg:py-0">
          <p className="body-18 sm:body-15 text-neutral-200">
            کلیه حقوق این سایت متعلق به فروشگاه اتمیفای می باشد.
          </p>

          <p className="body-18 sm:body-15 text-neutral-200">etmify.com.2025 &copy; copyright</p>
        </div>
      </div>
    </footer>
  );
};
