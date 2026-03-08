# FlirtsChat MongoDB Collections

## users
- name
- email (unique)
- password (hashed)
- age
- gender
- interests[]
- bio
- location
- lifeGoals[]
- auraColor
- premium (boolean)
- role (`user` or `admin`)
- createdAt/updatedAt

## matches
- fromUser (ObjectId -> users)
- toUser (ObjectId -> users)
- type (`like` or `pass`)
- compatibilityScore (0-100)
- matched (boolean)
- createdAt/updatedAt

## messages
- sender (ObjectId -> users)
- receiver (ObjectId -> users)
- text
- emotion (`calm`, `romantic`, `fun`, `neutral`)
- translatedText
- createdAt/updatedAt

## subscriptions (future)
- userId
- plan (`free`, `plus`)
- status
- nextBillingAt

## reports (future)
- reporterId
- targetUserId
- reason
- status
