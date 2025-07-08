# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2025-07-09

### Added

-   **Phase 1: Backend Foundation & Security**
    -   **Authentication:** Implemented a complete JWT-based authentication system with wallet signature verification (`ethers.js`). Includes `AuthModule`, `AuthService`, `LocalStrategy`, `JwtStrategy`, and protected `/auth/login` and `/auth/profile` endpoints.
    -   **API Security:**
        -   Configured rate limiting using `@nestjs/throttler` to protect against brute-force attacks.
        -   Enabled CORS and added security headers with `helmet`.
        -   Created a full API key management system (`ApiKeysModule`) with a protected route (`/protected`) to allow secure access for third-party services.
    -   **Database:**
        -   Set up TypeORM with a PostgreSQL database hosted on Supabase.
        -   Established a migration-based workflow for database schema management. Created initial migrations for users and API keys.
    -   **Configuration:** Centralized configuration management using `@nestjs/config` and a `.env` file.
    -   **Health Checks:** Implemented a `/health` endpoint using `@nestjs/terminus` for service monitoring.
    -   **Caching:** Integrated Redis for caching using `cache-manager-redis-store`.
    -   **Validation:** Enabled global `ValidationPipe` for automatic request payload validation.
