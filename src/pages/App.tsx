import {Box, Typography} from '@mui/material';
import React from 'react';
import {ContentHeader} from "../layouts/ContentHeader";
import {ContentBody} from "../layouts/ContentBody";

function App() {
    return (
        <Box>
            <ContentHeader>
                <Typography variant={'h3'}> hello </Typography>
            </ContentHeader>
            <ContentBody>
                <Box>1</Box>
                <Box>2</Box>
                <Box>3</Box>
                <Box>4</Box>
                <Box>5</Box>
            </ContentBody>
        </Box>
    );
}

export default App;
