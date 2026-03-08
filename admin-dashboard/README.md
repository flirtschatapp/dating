# FlirtsChat Admin Dashboard Integration

Use your existing Flirtschat dashboard UI as the visual layer and connect these backend endpoints:

- `GET /api/admin/users`
- `GET /api/admin/revenue`
- `POST /api/admin/ban-user/:id`

All admin routes require:

```http
Authorization: Bearer <admin-jwt-token>
```

## Suggested modules

1. Users table (search, ban)
2. Premium analytics cards
3. Reports queue
4. Subscription trend charts
