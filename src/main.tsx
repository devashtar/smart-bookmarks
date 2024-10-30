import ReactDom from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { App } from './App.tsx';

const theme = createTheme({
    typography: { fontFamily: 'Roboto' },
    colorSchemes: {
        light: true,
        dark: true,
    },
});

ReactDom.createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <App />
    </ThemeProvider>
);
