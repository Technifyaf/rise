/** @jsx jsx */
import { jsx, Container, Flex, Button, Box,Text } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { IoIosUnlock } from 'react-icons/io';
import { NavLink} from 'components/link';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Logo from 'components/logo';
import Link from 'next/link'

import { DrawerProvider } from 'contexts/drawer/drawer.provider';
import MobileDrawer from './mobileDrawer';
import menuItems from './header.data';

export default function Header({ className }) {
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className}>
        <Container sx={styles.container}>
         <a sx={styles.nav.navLink} href ="/">
         <Text > Rise international</Text>
         </a> 
       

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
             <ul>	
             <a sx = {styles.nav.navLink}
               ///activeClass='active'
               href={path}
               key={i}
             >
               {label}
             </a>
             </ul>
            ))}
          </Flex>
          <Link 	href='/donate'>
          <Button
					
						ml={2}
						label='Get Technified'
						sx={styles.headerBtn}
						variant='buttons.primary'
					>
			Donate
					</Button>
         </Link> 
          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const styles = {
  headerBtn: {
    fontSize: '16px',
    fontWeight: 700,
    backgroundColor: '#FCF2E8',
    display: ['none', null, null, null, 'inline-block'],
  },
  header: {
    color: 'text_white',
    fontWeight: 'normal',
    py: '25px',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    '&.sticky': {
      backgroundColor: 'background',
      color: 'text',
      py: '15px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '1430px',
    '@media(max-width:1440px)': {
      maxWidth: '1230px',
    },
    '@media screen and (max-width: 991px)': {
      justifyContent: 'space-between',
    },
  },
  nav: {
    mx: 'auto',
    '@media screen and (max-width: 991px)': {
      display: 'none',
    },
    navLink: {
      textDecoration : 'none',
      fontSize: '16px',
      color: '#02073E',
      fontWeight: '400',
      cursor: 'pointer',
      lineHeight: '1.2',
      mr: '48px',
      transition: '500ms',
      ':last-child': {
        mr: '0',
      },
      '&:hover, &.active': {
        color: 'primary',
      },
    },
  },
};
