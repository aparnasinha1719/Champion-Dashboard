import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		maxWidth: '30%',
        padding: '5px 0px 10px',
        boxShadow:'0 1.5px 5px 0 rgba(0, 0, 0, 0.16)'
	},
	btn: {
		background: '#799d4b',
		boxShadow: 'none',
        fontSize: 9,
        '&:hover':{
            background:'#6f8e48'
        }
	},
	cardActions: {
		justifyContent: 'center',
    },
    description:{
        color:'#003b71',
		fontSize:12,
		height:68,
		overflow:'hidden'
	},
	quickLinkDescription:{
		minHeight:32,
		height:0
	},
	descriptionImg: {
		width: '45%',
		borderRadius:5,
		margin: '0 auto',
	},
});

const DescriptionCard = (props) => {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia 
                component="img" 
                alt="client image"
                image={props.cardData.imgData} 
                title="Client image" 
                className={classes.descriptionImg}
                />
				<CardContent>
					<Typography 
					variant="body2" 
					component="p" 
					className={props.isQuickLink?`${classes.description} ${classes.quickLinkDescription}`:classes.description}>
                    {props.cardData.description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions className={classes.cardActions}>
				<Button 
				variant="contained" 
				size="small" 
				color="primary" 
				className={classes.btn}>
					{props.cardData.btnText}
				</Button>
			</CardActions>
		</Card>
	);
};

export default DescriptionCard;
