import React from 'react';
import { ItemType } from '../data';
import { Box } from '@mui/material';
import { Item } from './Item';
import { ExtendedItemType } from '../App';

type ListProps = {
    items: ExtendedItemType[];
    addLink: (id: ItemType['id']) => void;
};

export const List: React.FC<ListProps> = ({ items, addLink }) => {
    return (
        <Box
            sx={{
                pt: 2,
                pb: 5,
                display: 'grid',
                gap: {
                    xs: 1,
                    md: 2,
                },
                gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    lg: 'repeat(3, 1fr)',
                },
            }}
        >
            {items.map((item) => (
                <Item key={item.id} {...item} onClick={() => addLink(item.id)} />
            ))}
        </Box>
    );
};
