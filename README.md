#  Cloak Service для фильтрации ботов

---

##  Используемые технологии

- NestJS+ TypeScript
- MongoDB+ mongoose
- Docker/Docker Compose
- Swagger (`@nestjs/swagger`)
- class-validator/ DTOs


## Выполненные шаги

-  Настроен проект на NestJS с подключением к MongoDB через Docker Compose
-  Реализован эндпоинт `/cloak/check` с определением "бот" / "не бот"
-  Реализована логика фильтрации по IP, User-Agent, стране и ОС
-  Все запросы логируются в MongoDB
-  Реализован эндпоинт `/cloak/logs` для просмотра истории
-  Добавлена документация Swagger для тестирования API
-  Подключён простой HTML клиент `client.html` для ручной демонстрации

---

##  Как запустить проект

### 1. Клонируем репозиторий
```bash
git clone https://github.com/yourname/cloak-service.git
cd cloak-service
```

### 2. Запуск проекта через Docker Compose
```bash
docker-compose up --build
```

Приложение будет доступно по адресу:  
 `http://localhost:3000` — API  
 `http://localhost:3000/api` — Swagger UI

---

##  Примеры запросов

###  Проверка пользователя (бот или нет)
**POST** `/cloak/check`
```json
{
  "ip": "8.8.8.8",
  "userAgent": "curl/7.68.0",
  "country": "UA",
  "os": "Linux"
}
```
**Ответ:**
```json
{ "result": "bot" }
```

###  Получение логов
**GET** `/cloak/logs?limit=10`

**Ответ:** массив последних логов в порядке от новых к старым




