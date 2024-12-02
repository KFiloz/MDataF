'use client';

import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/dashboard/components/container/pagecontainer';
// Componentes del Dashboard
import SalesOverview from '@/app/dashboard/components/dashboard/SalesOverview';
import YearlyBreakup from '@/app/dashboard/components/dashboard/YearlyBreakup';
import MonthlyEarnings from '@/app/dashboard/components/dashboard/MonthlyEarnings';
import Blog from '@/app/dashboard/components/dashboard/Blog';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="Este es el Dashboard principal">
      <Box>
        <Grid container spacing={3}>
          {/* Sales Overview */}
          <Grid item xs={12} lg={8}>
            <SalesOverview />
          </Grid>

          {/* Yearly Breakup & Monthly Earnings */}
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>
              <Grid item xs={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>

          {/* Blog Section */}
          <Grid item xs={12}>
            <Blog />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
