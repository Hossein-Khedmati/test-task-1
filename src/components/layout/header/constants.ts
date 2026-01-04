import { MenuItem } from '@/components/shared/navigation-menus/types';
import {
  BookIcon,
  CardIcon,
  CrownIcon,
  GameIcon,
  HeadphoneIcon,
  HelpIcon,
  HomeIcon,
  MobileIcon,
  MonitorIcon,
  PlaystationIcon,
  XboxIcon,
} from '@icons';

export const NavMainMenu: MenuItem[] = [
  { label: 'خانه', href: '/', icon: HomeIcon },
  { label: 'بلاگ', href: '/blog', icon: BookIcon },
  { label: 'ارتباط با ما', href: '/contact-us', icon: HeadphoneIcon },
  { label: 'راهنما', href: '/giudes', icon: HelpIcon },
];

export const subMenuItem: MenuItem[] = [
  {
    label: 'بازی‌ها',
    icon: GameIcon,
    columns: [
      {
        label: 'پلی استیشن',
        icon: PlaystationIcon,
        items: [
          { label: 'اکانت قانونی PS5', href: '/games/ps/ps5' },
          { label: 'اکانت قانونی ps4', href: '/games/ps/ps4' },
        ],
      },
      {
        label: 'ایکس باکس',
        icon: XboxIcon,
        items: [
          { label: 'اکانت های ظرفیت هوم / سوئیچ', href: '/games/xbox/home' },
          { label: 'کد دیجیتال بازی', href: '/games/xbox/digital-code' },
          { label: 'گیم پس التیمیت', href: '/games/xbox/game-pass' },
        ],
      },
      {
        label: 'پی سی (pc)',
        icon: MonitorIcon,
        items: [
          { label: 'بازی های استیم (Steam)', href: '/games/pc/steam' },
          { label: 'بتل نت (Call Of Duty)', href: '/games/pc/call-of-duty' },
          { label: 'ریجن ترکیه و اکراین', href: '/games/pc/region' },
        ],
      },
      {
        label: 'موبایل',
        icon: MobileIcon,
        items: [
          { label: 'سی پی کالاف دیوتی', href: '/games/mobile/cp' },
          { label: 'جم فری فایر', href: '/games/mobile/free-fire' },
          { label: 'پابجی', href: '/games/mobile/pubg' },
        ],
      },
    ],
  },
  {
    label: 'گیفت کارت ها',
    icon: CardIcon,
    columns: [
      {
        label: 'اپل و گوگل',
        icon: PlaystationIcon,
        items: [
          { label: 'گیفت کارت آیتونز آمریکا', href: '/gift/itunes-us' },
          { label: 'گیفت کارت آیتونز انگلیس', href: '/gift/itunes-uk' },
          { label: 'گیفت کارت گوگل پلی', href: '/gift/google-play' },
          { label: 'کارت شارژ PSN', href: '/gift/psn' },
        ],
      },
      {
        label: 'کنسول',
        icon: XboxIcon,
        items: [
          { label: 'گیفت کارت PlayStation', href: '/gift/ps' },
          { label: 'گیفت کارت Xbox', href: '/gift/xbox' },
          { label: 'گیفت کارت Nintendo', href: '/gift/nintendo' },
        ],
      },
      {
        label: 'سرویس ها',
        icon: MonitorIcon,
        items: [
          { label: 'گیفت کارت آمازون', href: '/gift/amazon' },
          { label: 'اشتراک‌های پرمیوم', href: '/gift/premium' },
          { label: 'اشتراک نتفلیکس', href: '/gift/netflix' },
        ],
      },
    ],
  },
  {
    label: 'اشتراک پلاس و گیم پس',
    href: '/plus',
    icon: CrownIcon,
  },
  {
    label: 'نرم افزار و لایسنس',
    href: 'software',
    icon: GameIcon,
  },
];

export const mobileMenuItem: MenuItem[] = [
  {
    label: 'خانه',
    href: '/',
    submenu: [
      {
        label: 'بازی‌ها',
        href: '/',
      },
      {
        label: 'گیفت کارت‌ها',
        href: '/gift-card',
      },
      {
        label: 'اشتراک پلاس و گیمپس',
        href: '/plus',
      },
      {
        label: 'نرمافزار و لایسنس',
        href: '/software',
      },
    ],
  },
  {
    label: 'بلاگ',
    href: '/blogs',
  },
  {
    label: 'درباره ما',
    href: '/about-us',
  },
  {
    label: 'راهنما',
    href: '/help',
  },
];
