# Quick Start Guide

## 🚀 Get Running in 5 Minutes

### Option 1: Docker (Fastest)

```bash
# Make sure Docker is installed and running
docker-compose up --build

# Then visit http://localhost:3000
```

### Option 2: Local Development

#### Prerequisites
- Node.js 18+
- PostgreSQL 15 (or Docker)
- Redis 7 (or Docker)

#### Setup

**Terminal 1 - PostgreSQL & Redis**
```bash
# Using Docker
docker run -d --name postgres -e POSTGRES_PASSWORD=password -p 5432:5432 postgres:15-alpine
docker run -d --name redis -p 6379:6379 redis:7-alpine

# Then create database
psql -U postgres -h localhost -c "CREATE DATABASE stock_portfolio_db;"
```

**Terminal 2 - Backend**
```bash
cd backend

# Setup
cp .env.example .env
# Edit .env and add your Alpha Vantage API key
npm install

# Initialize database
npm run migrate

# Start development server
npm run dev
# Backend running on http://localhost:5000
```

**Terminal 3 - Frontend**
```bash
cd frontend

# Setup
cp .env.example .env
npm install

# Start development server
npm start
# Frontend running on http://localhost:3000
```

## ✅ Verify Installation

```bash
# Check backend
curl http://localhost:5000/health
# Should return: {"status":"OK",...}

# Check frontend
open http://localhost:3000
# Should see dashboard
```

## 📝 First Steps

1. **Get API Key**
   - Visit https://www.alphavantage.co
   - Copy your free API key

2. **Configure Backend**
   ```bash
   cd backend
   nano .env  # or use your editor
   # Paste API key: ALPHA_VANTAGE_API_KEY=YOUR_KEY
   ```

3. **Create Portfolio**
   - Go to http://localhost:3000
   - Click "New Portfolio"
   - Name it (e.g., "Tech Stocks")

4. **Add Stocks**
   - Enter symbol: AAPL
   - Quantity: 10
   - Purchase price: 180.50
   - Click "Add"

5. **Monitor Real-Time**
   - Prices update every 30 seconds
   - View P&L in green/red
   - Check risk metrics

## 🔑 Key Features to Try

- ✅ Create multiple portfolios
- ✅ Real-time price updates
- ✅ P&L tracking
- ✅ Portfolio beta
- ✅ Value at Risk (VaR)
- ✅ Sector concentration
- ✅ Price alerts (email setup needed)

## 📚 Documentation

- **[README.md](./README.md)** - Overview & features
- **[IMPLEMENTATION.md](./IMPLEMENTATION.md)** - Detailed setup
- **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** - Architecture & design

## 🆘 Troubleshooting

**Backend not starting?**
```bash
# Check database connection
psql postgresql://postgres:password@localhost:5432/stock_portfolio_db

# Check Redis
redis-cli ping  # Should return PONG

# Check Node version
node --version  # Should be 18+
```

**Frontend showing blank page?**
```bash
# Check REACT_APP_API_URL in frontend/.env
# Should be: http://localhost:5000/api
```

**No prices updating?**
```bash
# Check Alpha Vantage API key
# Visit https://www.alphavantage.co
# Verify key in backend/.env
```

## 💡 Pro Tips

1. **Test with different stocks:** GOOGL, MSFT, AMZN, TSLA, META
2. **Monitor beta:** > 1 means volatile, < 1 means stable
3. **Check VaR:** 95% confidence loss estimate
4. **Diversify sectors:** Reduces concentration risk
5. **Set price alerts:** Get notified on price changes

## 🎯 Next: Production Deployment

When ready to deploy:
```bash
docker-compose -f docker-compose.yml up -d

# Configure:
# - Strong database passwords
# - HTTPS certificates
# - Email credentials
# - Environment variables
```

## 📞 Need Help?

Check the logs:
```bash
# Backend logs
npm run dev  # Watch output

# Frontend logs
npm start  # Check browser console

# Database logs
docker logs postgres

# Redis logs
docker logs redis
```

---

**You're all set! Happy portfolio tracking! 📈**
