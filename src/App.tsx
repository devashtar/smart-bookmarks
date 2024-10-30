import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { items as list, ItemType } from './data';
import { Container, CssBaseline, Grid2 as Grid } from '@mui/material';
import { Main, Sidebar } from './layouts';

const theme = createTheme({
    colorSchemes: {
        light: true,
        dark: true,
    },
});

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

    const items = React.useMemo(() => {
        if (checkedTags.length !== 0) {
            return extendedItems.map((item) => {
                const hidden = !Boolean(item.tags.find((tag) => checkedTags.includes(tag)));
                return hidden ? { ...item, hidden } : item;
            });
        }
        return extendedItems;
    }, [checkedTags]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Container sx={{ pt: 6 }} maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid size={3}>
                        <Sidebar
                            checkedTags={checkedTags}
                            toggleTag={toggleTag}
                            resetTags={() => checkedTags.length !== 0 && setCheckedTags([])}
                        />
                    </Grid>
                    <Grid size={9}>
                        <Main items={items} />
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};
