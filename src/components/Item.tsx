import React from 'react';
import { Box, Card, CardMedia, Divider, Typography } from '@mui/material';
import { ItemType } from '../data';
import NoImage from '../assets/No_image.svg';

type ItemProps = ItemType;

export const Item: React.FC<ItemProps> = ({ description, imgSrc, title, url }) => {
    return (
        <Card
            component="a"
            href={url}
            target="_blank"
            elevation={4}
            sx={{ textDecoration: 'none' }}
        >
            <CardMedia
                component="img"
                height="194"
                loading="lazy"
                image={imgSrc || NoImage}
                alt={title}
            />
            <Box sx={{ p: 1, overflow: 'hidden' }}>
                <Typography
                    variant="body2"
                    textAlign="right"
                    sx={{
                        overflow: 'hidden',
                        textWrap: 'nowrap',
                        textOverflow: 'ellipsis',
                        color: (theme) => theme.palette.primary.main,
                    }}
                >
                    {url}
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Typography
                    variant="body1"
                    fontWeight={600}
                    title={title}
                    sx={{ minHeight: '3rem' }}
                >
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                    {description}
                </Typography>
            </Box>
        </Card>
    );
};
