import React from 'react';
import { Autocomplete, TextField, Stack, Typography, alpha } from '@mui/material';
import { HotLinks, List, ThemeSwitcher } from '../components';
import { ItemType } from '../data';
import { escapeRegExp, getHotLinks, removeHotLink, addHotLink, hasHotLink } from '../tools';
import DartVaderHeadImg from '../assets/png/Dart_Vader_head.png';

type MainProps = {
    items: ItemType[];
};

const LIMIT_HOT_LINKS = 15;

const getDefaultLinks = () => {
    const links = getHotLinks();
    if (links === null || links.length === 0) {
        return [];
    }
    return links.split(' ').map((l) => Number(l));
};

export const Main: React.FC<MainProps> = ({ items }) => {
    const [links, setLinks] = React.useState<ItemType['id'][]>(getDefaultLinks());
    const [searchValue, setSearchValue] = React.useState<ItemType | string | null>(null);

    const addLink = React.useCallback(
        (curId: ItemType['id']) => {
            if (!hasHotLink(curId)) {
                setLinks((s) => {
                    if (s.length === LIMIT_HOT_LINKS) {
                        removeHotLink(s[0]);
                        addHotLink(curId);
                        return [...s.slice(1), curId];
                    }
                    addHotLink(curId);
                    return [...s, curId];
                });
            }
        },
        [setLinks]
    );

    const removeLink = React.useCallback(
        (curId: ItemType['id']) => {
            removeHotLink(curId);
            setLinks((s) => s.filter((id) => id !== curId));
        },
        [setLinks]
    );

    return (
        <>
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
            <HotLinks links={links} removeLink={removeLink} />
            {React.useMemo(() => {
                if (searchValue === null) {
                    return <List items={items} addLink={addLink} />;
                } else if (typeof searchValue === 'string') {
                    const val = escapeRegExp(searchValue);
                    return (
                        <List
                            items={items.filter(
                                (item) =>
                                    item.title.match(new RegExp(val, 'gi')) ||
                                    item.tags.find((tag) => tag.match(new RegExp(val, 'gi')))
                            )}
                            addLink={addLink}
                        />
                    );
                }
                return <List items={[searchValue]} addLink={addLink} />;
            }, [items, searchValue])}
        </>
    );
};
