#  Cloak - Service

---

## Стек

- NestJS
- MongoDB + Mongoose
- Docker + docker-compose
- Swagger

---

##  Как запустить проект

### 1. Клонируем репозиторий
```bash
git clone https://github.com/amdamv/cloak-service.git
cd cloak-service
```

### 2. Запуск проекта через Docker Compose
```bash
docker-compose up --build
```

Приложение будет доступно по адресу:  
 `http://localhost:4000` — API  
 `http://localhost:4000/api` — Swagger UI

---

##  Примеры запросов

###  Проверка пользователя (бот или нет)
**POST** `/cloak/check`
```json
{
 "ip": "193.163.187.238",
 "userAgent": "Chrome 134 on macOS (Sequoia)",
 "country": "KP",
 "os": "macOS"
}
```
**Ответ:**
```json
{ "result": "true" } 
```

###  Получение логов
**GET** `http://localhost:4000/cloak/logs`

**GET** `http://localhost:4000/cloak/logs?limit=10`


### Фильтрация (MVP)
 -Подозрительные IP: 8.8.8.8, 1.1.1.1
 -Заблокированные страны: KP, IR, SY
 -Подозрительные UserAgent: curl, python-requests, PostmanRuntime



