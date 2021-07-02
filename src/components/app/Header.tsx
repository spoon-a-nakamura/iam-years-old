import { VFC } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { sppx, pcpx, pcfz } from '../../styles/sizes';
import { fontFamilies } from '../../styles/fonts';
import { mediaQueries } from '../../styles/breakPoints';

type navListsProps = {
  label: string;
  url: string;
  blank?: boolean;
}[];

const navLists: navListsProps = [
  {
    label: 'ABOUT',
    url: '/about',
  },
  {
    label: 'OUR PROFESSION',
    url: '/profession',
  },
  {
    label: 'NEWS',
    url: '/news',
  },
  {
    label: 'CAREERS',
    url: '/careers',
  },
  {
    label: 'CONTACT ',
    url: '/contacts',
  },
];
const Header: VFC = () => {
  return (
    <Root>
      <Contents>
        <Link href={'/'} passHref>
          <LogoAnchor>
            <Logo src="/assets/images/common/header/logo.svg" alt="sprout" />
          </LogoAnchor>
        </Link>
        <Menus>
          {navLists.map((navList, index) => {
            return (
              <Menu key={index}>
                <Link href={navList.url} passHref>
                  <MenuAnchor>{navList.label}</MenuAnchor>
                </Link>
              </Menu>
            );
          })}
        </Menus>
      </Contents>
    </Root>
  );
};

export default Header;

const Root = styled.header``;

const Contents = styled.div``;

const Logo = styled.img`
  width: ${pcpx(40)};
  height: ${pcpx(31)};
`;
const LogoAnchor = styled.a`
  cursor: pointer;
`;
const Menus = styled.ul`
  @media ${mediaQueries.pc} {
    display: flex;
    justify-content: center;
  }
`;
const Menu = styled.li``;
const MenuAnchor = styled.a`
  cursor: pointer;
  font-size: ${pcfz(12)};
  margin-right: ${pcpx(40)};
  ${fontFamilies.montserratMedium}
  @media ${mediaQueries.sp} {
    margin-right: ${sppx(40)};
  }
`;
