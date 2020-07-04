import React from 'react';
import { linkData } from './QuickLinkConfig';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import DescriptionCard from '../Cards/DescriptionCard/DescriptionCard';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	heading: {
		width: '100%',
		fontSize: '1.4rem',
		fontWeight: 'bold',
		color: '#003b71',
	},
});

const QuickLink = () => {
	const classes = useStyles();
	return (
		<Auxiliary>
			<h4 className={classes.heading}>Quick links</h4>
			{linkData.map((value, index) => (
				<DescriptionCard cardData={value} isQuickLink="true" key={index}></DescriptionCard>
			))}
		</Auxiliary>
	);
};

export default QuickLink;
