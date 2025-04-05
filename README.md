# FastAPI Coding Test Project

This coding test project is built using the [FastAPI Full Stack Template](https://github.com/fastapi/full-stack-fastapi-template). It demonstrates a production-ready full-stack web application using FastAPI, PostgreSQL, and modern frontend tooling. Minor adjustment and removal of irrelevant services had been made to simply the codebase according to the requirements of technical assessment.

## 📄 Original Template Documentation

For comprehensive setup details and documentation, please refer to the original template README file:

- [`README.original.md`](./README.original.md)
- [`Development`](./development.md)
- [`Deployment`](./development.md)
- [`Frontend`](./frontend/README.md)
- [`Backend`](./backend/README.md)

## 🚀 Quick Start with Docker Compose

### Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)


### 1. Clone the Repository
```
git clone git@github.com:boshng95/nooriam-tech-assessment.git
cd nooriam-tech-assessment
```

### 2. Run build on FastAPI and React stack
```
docker-compose build backend frontend
```

### 3. Start running backend and frontend services
```
docker-compose up backend frontend
```

### 4. Start playing around
Development URLs
Development URLs, for local development.

Frontend: http://localhost:5173

Backend: http://localhost:8000

Automatic Interactive Docs (Swagger UI): http://localhost:8000/docs

Automatic Alternative Docs (ReDoc): http://localhost:8000/redoc

Websocket: `ws://localhost:8000`

## ⚙️ Decision: Using the FastAPI Full Stack Template

### Why This Template?

To streamline development and focus on solving the core technical challenges of this coding test, I chose to build upon the [FastAPI Full Stack Template](https://github.com/tiangolo/full-stack-fastapi-postgresql). This template offers a robust and production-ready foundation that integrates:

- FastAPI (backend API)
- PostgreSQL (database)
- Alembic (migrations)
- Celery (background tasks)
- Docker (for containerization)
- Optional frontend (React)
- Pre-configured environment and CI setup

This allows me to skip over boilerplate setup and focus on delivering actual features, testing, and clean architecture.

---

### ✅ Pros

- **Production-ready architecture**: Clean separation of concerns and proven patterns.
- **Time-saving**: Reduces setup overhead and allows more time to focus on solving the test’s logic and business requirements.
- **Pre-integrated tools**: Features like Alembic for migrations, JWT authentication, and asynchronous support are already in place.
- **Docker support**: Simplifies local development and environment parity with production.
- **Scalability**: Well-suited for building larger systems if the solution needs to scale post-assessment.

---

### ❌ Cons / Trade-offs

- **Complexity overhead**: The template includes many tools and configurations that might be unnecessary for a small or limited-scope coding test.
- **Learning curve**: Reviewers unfamiliar with the template might need time to understand the structure.
- **Reduced originality**: Since much of the boilerplate is pre-built, less code is written from scratch, which could be a concern in assessments valuing custom implementation.
- **Customization time**: Adapting or removing unused parts (e.g., Celery, frontend) can still take time.

---

### Summary

Overall, the decision to use this template was driven by a focus on productivity and best practices. While it introduces some additional complexity, it allows the core of the coding test to be implemented efficiently and cleanly, without reinventing foundational features like authentication, migrations, and container orchestration.
