import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './header.module.scss';

const HEADER_MENU_ITEMS = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'About',
    route: '/about',
  },
  {
    label: 'Lessons',
    route: '/lessons',
  },
  {
    label: 'Metronome',
    route: '/metronome',
  },
];

const Header = () => {
	return (
		<div className={styles.container}>
			<span>Milan Kotarlić</span>
			<div className={styles.listWrapper}>
				<ul className={styles.list}>
				{HEADER_MENU_ITEMS.map(item =>
					<li className={styles.listItem}>   <NavLink
            to={item.route}
          >
            {item.label}
          </NavLink></li>
				)
					}
				</ul>
			</div>
		</div>
	)
}

export default Header