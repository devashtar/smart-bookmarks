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

export const App: React.FC = () => {
    const [items, setItems] = React.useState<ItemType[]>(list);
    const [checkedTags, setCheckedTags] = React.useState<Array<string>>([]);

    const toggleTag = (tag: string) => {
        setCheckedTags((s) => {
            if (s.includes(tag)) {
                return s.filter((item) => item !== tag);
            }
            return [...s, tag];
        });
    };

    React.useEffect(() => {
        if (checkedTags.length !== 0) {
            setItems(list.filter((item) => item.tags.find((tag) => checkedTags.includes(tag))));
        } else {
            setItems(list);
        }
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
