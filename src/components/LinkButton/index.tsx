import './style.css';
import { Box, Button } from '@mui/material';

type Props = {
  to: string;
  text: string;
};

export const LinkButton = ({ to = '', text = '' }: Props) => {
  return (
    <Box className="btn">
      <Button component="a" href={to}>
        {text}
      </Button>
    </Box>
  );
};
