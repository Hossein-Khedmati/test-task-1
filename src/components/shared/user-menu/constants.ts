import { ComponentType } from 'react';
import { SidebarRightIcon, NotificationIcon, Send2Icon, SettingIcon } from '@icons';

export interface UserMenuItem {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
}

export const UserMenuItems: UserMenuItem[] = [
  {
    label: 'پنل کاربری',
    href: '/dashboard',
    icon: SidebarRightIcon,
  },
  {
    label: 'پیام های من',
    href: '/notifications',
    icon: NotificationIcon,
  },
  {
    label: 'درخواست ها',
    href: '/requests',
    icon: Send2Icon,
  },
  {
    label: 'تنظیمات',
    href: '/setting',
    icon: SettingIcon,
  },
];
