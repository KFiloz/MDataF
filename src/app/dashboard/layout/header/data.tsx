import img1 from '@/assets/images/profile/user-1.jpg';
import img2 from '@/assets/images/profile/user-2.jpg';
import img3 from '@/assets/images/profile/user-3.jpg';
import img4 from '@/assets/images/profile/user-4.jpg';

import icon1 from '@/assets/images/svgs/icon-account.svg';
import icon2 from '@/assets/images/svgs/icon-inbox.svg';
import icon3 from '@/assets/images/svgs/icon-tasks.svg';

import ddIcon1 from '@/assets/images/svgs/icon-dd-chat.svg';
import ddIcon2 from '@/assets/images/svgs/icon-dd-cart.svg';
import ddIcon3 from '@/assets/images/svgs/icon-dd-invoice.svg';
import ddIcon4 from '@/assets/images/svgs/icon-dd-date.svg';
import ddIcon5 from '@/assets/images/svgs/icon-dd-mobile.svg';
import ddIcon6 from '@/assets/images/svgs/icon-dd-lifebuoy.svg';
import ddIcon7 from '@/assets/images/svgs/icon-dd-message-box.svg';
import ddIcon8 from '@/assets/images/svgs/icon-dd-application.svg';

//
// Notifications dropdown
//
export const notifications = [
  {
    avatar: img1,
    title: 'Roman Joined the Team!',
    subtitle: 'Congratulate him',
  },
  {
    avatar: img2,
    title: 'New message received',
    subtitle: 'Salma sent you new message',
  },
  {
    avatar: img3,
    title: 'New Payment received',
    subtitle: 'Check your earnings',
  },
  {
    avatar: img4,
    title: 'Jolly completed tasks',
    subtitle: 'Assign her new tasks',
  },
];

//
// Profile dropdown
//
export const profile = [
  {
    href: '/user-profile',
    title: 'My Profile',
    subtitle: 'Account Settings',
    icon: icon1,
  },
  {
    href: '/apps/email',
    title: 'My Inbox',
    subtitle: 'Messages & Emails',
    icon: icon2,
  },
  {
    href: '/apps/notes',
    title: 'My Tasks',
    subtitle: 'To-do and Daily Tasks',
    icon: icon3,
  },
];

//
// Apps dropdown
//
export const appsLink = [
  {
    href: '/apps/chats',
    title: 'Chat Application',
    subtext: 'Messages & Emails',
    avatar: ddIcon1,
  },
  {
    href: '/apps/cart',
    title: 'Cart Application',
    subtext: 'Manage your Orders',
    avatar: ddIcon2,
  },
  {
    href: '/apps/invoice',
    title: 'Invoice Application',
    subtext: 'Manage billing',
    avatar: ddIcon3,
  },
  {
    href: '/apps/calendar',
    title: 'Calendar Application',
    subtext: 'Plan your schedule',
    avatar: ddIcon4,
  },
  {
    href: '/apps/mobile',
    title: 'Mobile Application',
    subtext: 'Manage on the go',
    avatar: ddIcon5,
  },
  {
    href: '/apps/support',
    title: 'Customer Support',
    subtext: 'Help & Support',
    avatar: ddIcon6,
  },
  {
    href: '/apps/messages',
    title: 'Message Center',
    subtext: 'Check notifications',
    avatar: ddIcon7,
  },
  {
    href: '/apps/management',
    title: 'Application Manager',
    subtext: 'Admin tools',
    avatar: ddIcon8,
  },
];
