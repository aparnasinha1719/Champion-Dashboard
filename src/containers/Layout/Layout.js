import React, { Component } from 'react';
import classes from './Layout.module.css';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import NavigationWrapper from '../../components/Navigation/NavigationWrapper/NavigationWrapper';

export class Layout extends Component {
	render() {
		return (
			<Auxiliary>
				<NavigationWrapper></NavigationWrapper>
                <div className={classes.contents}>
				{this.props.children}
                </div>
			</Auxiliary>
		);
	}
}

export default Layout;
