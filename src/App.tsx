import React from 'react';
import { Container, Grid2 as Grid, Stack } from '@mui/material';
import { items as list, ItemType } from './data';
import { Main, Sidebar } from './layouts';
import { ThemeSwitcher } from './components';

export type ExtendedItemType = {
    hidden: boolean;
} & ItemType;

const extendedItems: ExtendedItemType[] = list.map((item) => ({ ...item, hidden: false }));

export const App: React.FC = () => {
    const [checkedTags, setCheckedTags] = React.useState<Array<string>>([]);

    const toggleTag = React.useCallback(
        (tag: string) => {
            setCheckedTags((s) => {
                if (s.includes(tag)) {
                    return s.filter((item) => item !== tag);
                }
                return [...s, tag];
            });
        },
        [setCheckedTags]
    );

    return (
        <Container maxWidth="xl">
            <Stack direction="row-reverse" sx={{ pt: 2 }}>
                <ThemeSwitcher />
            </Stack>
            <Grid container spacing={2}>
                <Grid size={'grow'} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Sidebar
                        checkedTags={checkedTags}
                        toggleTag={toggleTag}
                        resetTags={() => checkedTags.length !== 0 && setCheckedTags([])}
                    />
                </Grid>
                <Grid size={{ xs: 'grow', md: 8, lg: 9 }}>
                    <Main
                        items={
                            checkedTags.length !== 0
                                ? extendedItems.map((item) => {
                                      const hidden = !Boolean(
                                          item.tags.find((tag) => checkedTags.includes(tag))
                                      );
                                      return hidden ? { ...item, hidden } : item;
                                  })
                                : extendedItems
                        }
                    />
                </Grid>
            </Grid>
        </Container>
    );
};
