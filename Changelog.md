# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Phase 2: Core Services Development

#### Added
- **User Profile Management**
  - Extended `User` entity with `username` and `bio` fields.
  - Added `GET /users/me` endpoint to fetch the authenticated user's profile.
  - Added `PATCH /users/me` endpoint to update the authenticated user's profile.

- **User Preferences & Settings**
  - Created `UserSetting` entity for `preferredCurrency` and `theme`.
  - New users now receive default settings upon creation.
  - Added `PATCH /users/me/settings` endpoint for users to update their preferences.

- **Portfolio Initialization & Management**
  - Created `Portfolio` entity with `name` and `description`.
  - New users now receive a default "Main Portfolio" upon creation.
  - Implemented a full CRUD API at `/portfolios` for authenticated users to manage their portfolios (Create, Read, Update, Delete).

- **OKX DEX API Integration Service (Phase 2)**
  - **Module Setup**: Created a new `OkxModule` to encapsulate all DEX integration logic.
  - **Configuration**: Set up `HttpModule` and `ConfigModule` to manage the OKX API base URL and credentials securely via environment variables.
  - **Authentication**: Implemented the required HMAC-SHA256 request signing mechanism in `OkxService`.
  - **API Endpoint**: Exposed a `GET /okx/chains` endpoint to fetch the list of supported chains, protected by JWT authentication.

#### Changed
- Updated `findOrCreate` method in `UsersService` to handle the automatic creation of default settings and a main portfolio for new users.

#### Fixed
- Resolved various TypeORM migration generation and execution issues.
- Made migrations idempotent to prevent errors on re-runs.
