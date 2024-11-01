// import React from 'react';
// import { Typography, Box } from '@mui/material';

// const Overview = () => {
//   return (
//     <Box sx={{ padding: '24px', backgroundColor: '#121212', color: '#fff', borderRadius: '12px' }}>
//       <Typography variant="h4" gutterBottom>Admin Übersicht</Typography>
//       <Typography variant="body1">
//         Willkommen im Admin-Bereich. Hier können Sie verschiedene administrative Aufgaben erledigen.
//       </Typography>
//     </Box>
//   );
// };

// export default Overview;

import React from 'react';
import { Box, Card, CardContent, CardHeader, Typography, Badge, Divider, CircularProgress, useTheme } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { styled } from '@mui/system';

const GaugeContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  width: 250,
  height: 250,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: theme.shadows[4],
}));

const CircularBackground = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: 200,
  height: 200,
}));

const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 1,
  color: '#c1e1c5',
}));

const GaugeText = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: theme.typography.h3.fontSize,
  color: '#ffffff',
  fontWeight: 'bold',
}));

const GaugeChart = ({ title = 'CURRENT USERS', subtitle = 'Last 10 minutes', min = 0, max = 500, value }) => {
  const theme = useTheme();
  const normalizedValue = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));

  return (
    <GaugeContainer theme={theme}>
      <Typography variant="subtitle2" color="text.secondary">
        {title}
      </Typography>
      <Typography variant="caption" color="text.secondary" gutterBottom>
        {subtitle}
      </Typography>
      <CircularBackground>
        <StyledCircularProgress
          theme={theme}
          variant="determinate"
          value={100}
          size={200}
          thickness={10}
          sx={{ color: theme.palette.grey[800] }}
        />
        <StyledCircularProgress
          theme={theme}
          variant="determinate"
          value={normalizedValue}
          size={200}
          thickness={10}
        />
        <GaugeText theme={theme}>{value}</GaugeText>
      </CircularBackground>
      <Box mt={1} display="flex" justifyContent="space-between" width="100%">
        <Typography variant="body2" color="text.secondary">
          {min}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {max}
        </Typography>
      </Box>
    </GaugeContainer>
  );
};

export default function Overview() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        mt: 4,
        px: 2,
        width: '100%',
        maxWidth: 1200,
        color: '#F5F5F5',
      }}
    >
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'space-between' }}>
        <Card sx={{ bgcolor: '#15171C', border: '1px solid #1E2027', flex: '1 1 calc(33% - 16px)', minWidth: 300 }}>
          <CardHeader
            title={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h4" color="#F5F5F5" fontWeight={600}>
                  $69,700
                </Typography>
                <Badge
                  sx={{ ml: 1, bgcolor: '#1F212A', color: '#00A261' }}
                  badgeContent="2.2%"
                  variant="standard"
                >
                  <TrendingUpIcon fontSize="small" />
                </Badge>
              </Box>
            }
            subheader={<Typography variant="body2" color="#636674">Projects Earnings in April</Typography>}
          />
          <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                { label: 'Leaf CRM', value: '$7,660', color: '#00A261' },
                { label: 'Mivy App', value: '$2,820', color: '#006AE6' },
                { label: 'Others', value: '$45,257', color: 'rgb(228, 230, 239)' },
              ].map((item, index) => (
                <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                      sx={{
                        width: 8,
                        height: 3,
                        borderRadius: 1,
                        bgcolor: item.color,
                        mr: 1,
                      }}
                    />
                    <Typography color="#636674">{item.label}</Typography>
                  </Box>
                  <Typography color="#9A9CAE" fontWeight={700}>
                    {item.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>

        <Card sx={{ bgcolor: '#15171C', border: '1px solid #1E2027', flex: '1 1 calc(33% - 16px)', minWidth: 300 }}>
          <CardHeader title={<Typography color="#B5B7C8">Highlights</Typography>} />
          <CardContent>
            {[
              { label: 'Avg. Client Rating', value: '7.8/10', isPositive: true },
              { label: 'Avg. Quotes', value: '730', isPositive: false },
              { label: 'Avg. Agent Earnings', value: '$2,309', isPositive: true },
            ].map((item, index) => (
              <React.Fragment key={index}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography color="#9A9CAE" fontWeight={500}>
                    {item.label}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {item.isPositive ? (
                      <TrendingUpIcon fontSize="small" sx={{ color: '#00A261', mr: 1 }} />
                    ) : (
                      <TrendingDownIcon fontSize="small" sx={{ color: '#E42855', mr: 1 }} />
                    )}
                    <Typography color="#F5F5F5" fontWeight={700}>
                      {item.value}
                    </Typography>
                  </Box>
                </Box>
                {index < 2 && <Divider sx={{ my: 2, borderColor: '#363843' }} />}
              </React.Fragment>
            ))}
          </CardContent>
        </Card>

        <Card sx={{ bgcolor: '#15171C', border: '1px solid #1E2027', flex: '1 1 calc(33% - 16px)', minWidth: 300 }}>
          <CardHeader title={<Typography color="#B5B7C8">Current Users</Typography>} />
          <CardContent>
            <GaugeChart title="Active Users" subtitle="Last 10 minutes" min={0} max={1000} value={100} />
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}