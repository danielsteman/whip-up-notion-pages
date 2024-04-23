# xlsx-append-only

## Upload

Leverage [s3-upload](https://next-s3-upload.codingvalue.com/).

## Design

Something like [this](https://thirdweb.com/).

## Database

```
docker run -d \
    --name xlsx-append-only-postgres \
    -e POSTGRES_DB=app \
    -e POSTGRES_USER=admin \
    -e POSTGRES_PASSWORD=admin \
    -p 5432:5432 \
    postgres:latest
```

### Migrations

Use `.env.local`, which is expected by Next.js.

```
dotenv -e .env.local -- npx prisma migrate dev --name init
```
