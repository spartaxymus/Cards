import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import faker from 'faker';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({

    root: {
        width: 345,
        margin: 50,
        justifyContent: 'space-between',
        boxShadow: '0 5px 10px 0 rgba(0,0,0,0.2)',
        '&:hover': {
            boxShadow: '0 5px 10px 0 rgba(0,0,0,0.5)',
        },
    },
    media: {
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        border: '3px solid #76D7C4',
    },
    profile_pic: {
        maxHeight: 50,
        maxWidth: 50
    },
    highlight: {
        '&:hover': {
            color: '#76D7C4',
        },
    },
    description: {
        height: '50px',
    }

}));

function CardView() {
    const classes = useStyles();

    var cardData = [];

    for (var i = 1; i <= 12; i++) {
        cardData.push({ 'profilePic': faker.image.avatar(), 'productName': faker.commerce.productName(), 'productPrice': faker.finance.amount(1, 100, 2, '$'), 'productDescription': faker.commerce.productDescription(), 'productMoreDescription': faker.lorem.paragraphs(), 'productImage': faker.image.image() });
    }

    var cardItems = cardData.map((d) =>
        <Grid item spacing={4} lg={3} md={4} sm={12}>
            <Card key={d.productName} className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="profile-pic" className={classes.avatar}>
                            <img src={d.profilePic} className={classes.profile_pic} alt='user-avatar' />
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings" className={classes.highlight}>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={d.productName}
                    subheader={d.productPrice}
                />
                <CardMedia
                    className={classes.media}
                    image={d.productImage}
                    title={d.productName}
                />
                <CardContent>
                    <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
                        {d.productDescription}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites" className={classes.highlight}>
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share" className={classes.highlight}>
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
    return (
        <>
            <Grid container >
                {cardItems}
            </Grid>
        </>
    );
}

export default CardView;
