import React from 'react';
import { Checkbox, Divider, FormControlLabel, FormGroup, Stack, Typography } from '@mui/material';
import { tags } from '../data';

type SidebarProps = {
    checkedTags: Array<string>;
    toggleTag: (tag: string) => void;
    resetTags: () => void;
};

export const Sidebar: React.FC<SidebarProps> = ({ checkedTags, toggleTag, resetTags }) => {
    return (
        <Stack
            spacing={2}
            direction="column"
            sx={{
                position: 'sticky',
                top: 48,
                height: 'calc(100vh - 48px)',
                overflow: 'hidden',
                py: 2,
                borderRight: 1,
                borderColor: 'grey.300',
            }}
        >
            <Stack spacing={1} sx={{ px: 2 }}>
                <Typography variant="body1">Настройки</Typography>
                <Typography variant="body2" color="textSecondary">
                    Меняйтся настройки чтобы добиться более точного результат поиска
                </Typography>
            </Stack>
            <Divider />
            <Stack flexGrow={1} sx={{ p: 2, overflowY: 'auto' }}>
                <FormGroup
                    sx={{
                        '.MuiFormControlLabel-root': {
                            width: '100%',
                        },
                        '.MuiFormControlLabel-label': {
                            fontSize: 14,
                            overflow: 'hidden',
                            textWrap: 'nowrap',
                            textOverflow: 'ellipsis',
                            '&::first-letter': {
                                textTransform: 'capitalize',
                            },
                        },
                    }}
                >
                    <FormControlLabel
                        control={
                            <Checkbox
                                size="small"
                                onChange={resetTags}
                                checked={checkedTags.length === 0}
                            />
                        }
                        label="Все"
                    />
                    {tags.map((tag) => (
                        <FormControlLabel
                            key={tag}
                            control={<Checkbox size="small" onChange={() => toggleTag(tag)} />}
                            label={tag}
                            title={tag}
                            checked={checkedTags.includes(tag)}
                        />
                    ))}
                </FormGroup>
            </Stack>
        </Stack>
    );
};
