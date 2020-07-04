import React from 'react';
import { Box } from '@material-ui/core';
import classes from './WrapperCard.module.css';
const wrapperCard = (props) => {
	return (
		<Box className={classes.wrapperCard}>
            <h2 className={classes.wrapperHeading}>{props.title}</h2>
			<Box  p={2} className={classes.cardContainer}>
			{props.children}
			</Box>
        </Box>
	);
};

export default wrapperCard;