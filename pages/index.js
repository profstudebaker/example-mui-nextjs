import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
// import the component you want to use
import Rating from "@mui/material/Rating"
import { useState } from "react"

export default function Index() {
  // keep track of the selected rating within state
  const [score, setScore] = useState(0);

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI - Next.js example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        {/* Then you can reference the code from the Component's documentation
          to render the component with desired settings, passing in our state value 
          and updater function
        */}
        <Rating
            name="simple-controlled"
            value={score}
            onChange={(event, newValue) => {
              setScore(newValue);
            }}
          />
        <Copyright />
      </Box>
    </Container>
  );
}
