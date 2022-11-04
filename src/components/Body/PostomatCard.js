import * as React from 'react';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import { CssVarsProvider } from '@mui/joy/styles';
import Typography from '@mui/joy/Typography';

export default function InteractiveCard() {
  return (
	<CssVarsProvider>
    <Card
      variant="outlined"
      row
      sx={{
        width: '100%',
        gap: 2,
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
    >
      <div>
        <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
          Адресс | Индекс восстребованности
        </Typography>
        <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
          <Link
            overlay
            underline="none"
            href="#interactive-card"
            sx={{ color: 'text.tertiary' }}
          >
            California, USA
          </Link>
        </Typography>
        <Chip
          variant="outlined"
          color="primary"
          size="sm"
          sx={{ pointerEvents: 'none' }}
        >
          Cool weather all day long
        </Chip>
      </div>
    </Card>
	</CssVarsProvider>
  );
}
