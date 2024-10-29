import React from 'react';
import { Autocomplete, TextField, Stack, Typography, alpha } from '@mui/material';
import { List, ThemeSwitcher } from '../components';
import { ItemType } from '../data';
import DartVaderHeadImg from '../assets/png/Dart_Vader_head.png';

type MainProps = {
    items: ItemType[];
};

export const Main: React.FC<MainProps> = ({ items }) => {
    const [searchValue, setSearchValue] = React.useState<ItemType | string | null>(null);

    const filteredItems = React.useMemo(() => {
        if (searchValue === null) {
            return <List items={items} />;
        } else if (typeof searchValue === 'string') {
            return (
                <List
                    items={items.filter((item) =>
                        item.tags.find((tag) => tag.startsWith(searchValue))
                    )}
                />
            );
        }
        return <List items={[searchValue]} />;
    }, [items, searchValue]);

    return (
        <Stack sx={{ width: '100%' }}>
            {React.useMemo(
                () => (
                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                            width: '100%',
                            zIndex: 1,
                            position: 'sticky',
                            overflow: 'hidden',
                            top: 48,
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            borderRadius: 1,
                            bgcolor: (theme) => alpha(theme.palette.background.paper, 0.8),
                        }}
                    >
                        <ThemeSwitcher />
                        <Autocomplete
                            fullWidth
                            sx={{
                                maxWidth: 640,
                                bgcolor: (theme) => theme.palette.background.paper,
                                borderRadius: 1,
                            }}
                            ListboxProps={{ style: { maxHeight: 480 } }}
                            size="small"
                            freeSolo
                            options={items}
                            filterOptions={(options, state) => {
                                if (!state) return options;

                                return options.filter(
                                    (option) =>
                                        option.title
                                            .toLowerCase()
                                            .includes(state.inputValue.toLowerCase()) ||
                                        option.tags.some((tag) =>
                                            tag.includes(state.inputValue.toLowerCase())
                                        )
                                );
                            }}
                            getOptionLabel={(option) => (option as ItemType).title ?? option}
                            onChange={(_, value) => setSearchValue(value)}
                            renderOption={(props, option) => {
                                const { key, ...optionProps } = props;
                                return (
                                    <Stack
                                        key={key}
                                        direction="row"
                                        component="li"
                                        spacing={2}
                                        sx={{ width: '100%', justifyContent: 'space-between' }}
                                        {...optionProps}
                                    >
                                        <Typography variant="body2" sx={{ me: 3 }}>
                                            {option.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {option.url}
                                        </Typography>
                                    </Stack>
                                );
                            }}
                            renderInput={(params) => <TextField {...params} fullWidth />}
                        />
                        <img
                            alt="Dart Vader"
                            src={DartVaderHeadImg}
                            height={76}
                            style={{ objectFit: 'contain', objectPosition: 'center' }}
                        />
                    </Stack>
                ),
                [items]
            )}
            {filteredItems}
        </Stack>
    );
};
