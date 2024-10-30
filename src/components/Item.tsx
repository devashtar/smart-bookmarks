import React from 'react';
import { Card, CardMedia, Divider, Typography } from '@mui/material';
import { ExtendedItemType } from '../App';
import NoImage from '../assets/No_image.svg';

type ItemProps = {
    onClick: () => void;
} & ExtendedItemType;

export const Item: React.FC<ItemProps> = ({ onClick, description, imgSrc, title, url, hidden }) => {
    return (
        <Card
            component="a"
            href={url}
            target="_blank"
            onMouseDown={(e) => [0, 1].includes(e.button) && onClick()}
            elevation={4}
            hidden={hidden}
            sx={{ textDecoration: 'none' }}
        >
            <CardMedia
                component="img"
                height="194"
                loading="lazy"
                image={imgSrc || NoImage}
                alt={title}
            />
            <Typography
                variant="body2"
                textAlign="right"
                sx={{
                    p: 1,
                    overflow: 'hidden',
                    textWrap: 'nowrap',
                    textOverflow: 'ellipsis',
                    color: (theme) => theme.palette.primary.main,
                }}
            >
                {url}
            </Typography>
            <Divider sx={{ mx: 1 }} />
            <Typography
                variant="body1"
                fontWeight={600}
                title={title}
                sx={{ mt: 1, px: 1, minHeight: '3rem' }}
            >
                {title}
            </Typography>
            <Typography variant="body2" sx={{ p: 1, pt: '4px', color: 'text.secondary' }}>
                {description}
            </Typography>
        </Card>
    );
};
