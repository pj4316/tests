import {Box, styled} from "@mui/material";


export const ContentBody = styled(Box)(() => ({
    display: 'flex',
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    gap: 8,
}));