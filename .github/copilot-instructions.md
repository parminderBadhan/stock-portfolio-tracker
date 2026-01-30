# Stock Portfolio Tracker - Development Guide

## Project Overview
Real-time stock portfolio tracker with risk analytics built with React, Node.js, PostgreSQL, and Redis.

## Development Progress

- [x] Set up project structure
- [ ] Set up backend (Node.js/Express)
- [ ] Configure PostgreSQL database
- [ ] Set up Redis caching
- [ ] Integrate stock APIs
- [ ] Implement P&L and risk calculations
- [ ] Set up React frontend
- [ ] Build frontend components
- [ ] Implement email alerts
- [ ] Test and deploy

## Getting Started

1. Install dependencies in backend and frontend directories
2. Set up PostgreSQL and Redis locally
3. Configure environment variables in .env files
4. Run migrations
5. Start backend and frontend servers

## Key Implementation Areas

### Backend (Node.js/Express)
- RESTful API for portfolio management
- Real-time stock price fetching (30-second intervals)
- Risk calculation engine (beta, VaR, sector concentration)
- Email alert system
- Redis caching layer

### Frontend (React)
- Dashboard with portfolio overview
- Real-time charts (Chart.js)
- Portfolio management forms
- Risk metrics display
- Alert configuration

### Database (PostgreSQL)
- Portfolio and holdings schema
- Price history tracking
- Alert configuration storage
- Risk metrics caching

### Caching (Redis)
- Stock price caching (5-minute TTL)
- Calculated metrics caching
- Session management

## Important Notes

- Free tier Alpha Vantage API has rate limits (5 calls/min, 500/day)
- Database migrations should be run before starting the app
- Stock prices update every 30 seconds in the background
- Email alerts require SMTP credentials
