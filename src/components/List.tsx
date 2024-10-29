import React from 'react';
import { ItemType } from '../data';
import { Box } from '@mui/material';
import { Item } from './Item';

type ListProps = {
    items: ItemType[];
};

export const List: React.FC<ListProps> = ({ items }) => {
    return (
        <Box
            sx={{
                py: 5,
                display: 'grid',
                gap: 2,
                gridTemplateColumns: 'repeat(3, 1fr)',
            }}
        >
            {items.map((item) => (
                <Item key={item.id} {...item} />
            ))}
        </Box>
    );
};
