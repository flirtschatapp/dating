# FlirtsChat A-Z Starter

A full-stack starter architecture for a futuristic 2050 dating app:

- **Backend API**: Node.js + Express + MongoDB
- **Mobile app starter**: React Native (Expo-ready structure)
- **Admin dashboard integration**: connect existing dashboard UI to admin endpoints
- **Monetization hooks**: free tier limits + premium upgrade behavior

## Project Structure

```text
backend/           # Express API + MongoDB models + auth/admin/match routes
mobile-app/        # React Native starter screens + API client
admin-dashboard/   # Notes to connect your existing dashboard UI
database/          # MongoDB schema documentation
```

## Backend Quick Start

```bash
cd backend
npm install
cp .env.example .env
npm run start
```

### Core Endpoints

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/users/me`
- `PUT /api/users/me`
- `GET /api/users/discover`
- `POST /api/match/like`
- `GET /api/match/mine`
- `POST /api/messages`
- `GET /api/messages/thread/:userId`
- `GET /api/admin/users` (admin only)
- `GET /api/admin/revenue` (admin only)
- `POST /api/admin/ban-user/:id` (admin only)

## Free vs Premium Logic Included

- Free users: **15 likes/day**
- Premium users: **unlimited likes**
- Revenue estimate endpoint for dashboard analytics

## Next Build Steps

1. Add realtime messaging with Socket.IO.
2. Add payment provider (Stripe/Razorpay) for FlirtsChat Plus.
3. Add AI matching service (compatibility scoring from profile + behavior).
4. Build virtual date rooms (WebRTC / 3D scene layer).
