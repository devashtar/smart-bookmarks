import React from 'react';
import { Chip, Stack, Tooltip } from '@mui/material';
import { items, ItemType } from '../data';

type HotLinksProps = {
    links: ItemType['id'][];
    removeLink: (id: ItemType['id']) => void;
};

export const HotLinks: React.FC<HotLinksProps> = ({ links, removeLink }) => {
    return (
        <Stack direction="row-reverse" sx={{ mt: 2, minHeight: 56, flexWrap: 'wrap', gap: 1 }}>
            {links.map((id) => {
                const item = items.find((item) => item.id === id)!;
                return (
                    <Tooltip key={id} title={item.title} arrow>
                        <Chip
                            size="small"
                            label={item.url.replace(/^https?:\/\/(www\.)?/, '')}
                            variant="outlined"
                            onClick={() => window.open(item.url, '_blank')}
                            onDelete={() => removeLink(id)}
                            sx={{ color: (theme) => theme.palette.primary.main }}
                        />
                    </Tooltip>
                );
            })}
        </Stack>
    );
};
