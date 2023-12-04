import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import Link from 'next/link';
import { DarkMode } from './dark-mode';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-6">
      <div className="flex gap-x-7">
        <Link href="/">
          <h1 className='text-2xl font-extrabold tracking-tight lg:text-3xl"'>
            THE WEEKLY
          </h1>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/memoir" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  회고하기
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/challenge" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  첼린지
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  뭐하지
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex gap-x-3 ">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/18079523?v=4" />
          <AvatarFallback>HJ</AvatarFallback>
        </Avatar>

        <DarkMode />
      </div>
    </header>
  );
};

export default Header;
