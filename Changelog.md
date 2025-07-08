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

#### Changed
- Updated `findOrCreate` method in `UsersService` to handle the automatic creation of default settings and a main portfolio for new users.

#### Fixed
- Resolved various TypeORM migration generation and execution issues.
- Made migrations idempotent to prevent errors on re-runs.
