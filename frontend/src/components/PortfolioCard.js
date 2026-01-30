import React from 'react';
import { Card, CardContent, CardActionArea, Typography, Box } from '@mui/material';
import { formatCurrency, getPnLColor } from '../utils/formatters';

const PortfolioCard = ({ portfolio, selected, onClick }) => {
  return (
    <Card
      sx={{
        mb: 2,
        border: selected ? '2px solid #1976d2' : '1px solid #e0e0e0',
        cursor: 'pointer',
        backgroundColor: selected ? '#f5f5f5' : 'white',
      }}
    >
      <CardActionArea onClick={onClick}>
        <CardContent>
          <Typography variant="h6">{portfolio.name}</Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" color="textSecondary">
              Value: {formatCurrency(portfolio.totalValue || 0)}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: getPnLColor(portfolio.totalPnL || 0) }}
            >
              P&L: {formatCurrency(portfolio.totalPnL || 0)}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PortfolioCard;
