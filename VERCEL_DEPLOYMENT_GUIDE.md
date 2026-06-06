# ContentSol - Vercel Deployment Guide

## 📋 Шаги для установки на Vercel

### ✅ Шаг 1: Подготовка GitHub репозитория

#### 1.1 Создайте GitHub аккаунт (если нет)
- Перейдите на https://github.com
- Нажмите "Sign up"
- Заполните форму регистрации

#### 1.2 Создайте новый репозиторий
- На GitHub нажмите "+" → "New repository"
- Название: `content-sol` (или любое другое)
- Описание: "ContentSol - Agency Website"
- Выберите "Public" (для бесплатного хостинга)
- Нажмите "Create repository"

#### 1.3 Загрузите файлы проекта
```bash
# В папке с распакованным архивом content-sol/

# Инициализируйте git (если еще не инициализирован)
git init

# Добавьте все файлы
git add .

# Создайте первый коммит
git commit -m "Initial commit: ContentSol agency website"

# Добавьте удаленный репозиторий (замените USERNAME и REPO_NAME)
git remote add origin https://github.com/USERNAME/content-sol.git

# Загрузите на GitHub
git branch -M main
git push -u origin main
```

---

### ✅ Шаг 2: Подключение к Vercel

#### 2.1 Создайте Vercel аккаунт
- Перейдите на https://vercel.com
- Нажмите "Sign Up"
- Выберите "Continue with GitHub"
- Авторизуйтесь на GitHub
- Разрешите Vercel доступ к вашим репозиториям

#### 2.2 Создайте новый проект на Vercel
- На Vercel нажмите "Add New..." → "Project"
- Выберите ваш репозиторий `content-sol` из списка
- Нажмите "Import"

#### 2.3 Настройка проекта
- **Project Name**: `content-sol` (или любое другое)
- **Framework Preset**: Vercel автоматически определит "Vite"
- **Root Directory**: оставьте пустым (или `./`)
- **Build Command**: `npm run build` (должно быть автоматически)
- **Output Directory**: `dist` (должно быть автоматически)
- **Install Command**: `npm install` (должно быть автоматически)

#### 2.4 Нажмите "Deploy"
- Vercel начнет деплой
- Подождите 2-3 минуты
- Когда увидите "Congratulations!", деплой завершен ✅

---

### ✅ Шаг 3: Получение URL вашего сайта

После успешного деплоя:
- Vercel автоматически создаст URL вида: `https://content-sol-xxxxx.vercel.app`
- Ваш сайт уже LIVE! 🎉

Вы можете поделиться этой ссылкой с клиентами.

---

### ✅ Шаг 4: Добавление собственного домена (опционально)

#### 4.1 Если у вас уже есть домен
- На Vercel перейдите в Settings → Domains
- Нажмите "Add"
- Введите ваш домен (например, `contentsol.com`)
- Следуйте инструкциям для обновления DNS

#### 4.2 Если нужно купить домен
- На Vercel нажмите "Add" → "Purchase Domain"
- Выберите домен и оплатите
- Vercel автоматически настроит DNS

---

### ✅ Шаг 5: Автоматические обновления

Теперь каждый раз, когда вы обновляете код на GitHub:

```bash
# Внесите изменения в файлы
# Например, отредактируйте src/pages/Home.jsx

# Загрузите на GitHub
git add .
git commit -m "Update home page content"
git push

# Vercel автоматически:
# 1. Заметит изменения
# 2. Запустит build
# 3. Деплоит новую версию
# 4. Ваш сайт обновится за 1-2 минуты ✅
```

---

## 🎯 Быстрая чек-лист

- [ ] GitHub аккаунт создан
- [ ] Репозиторий `content-sol` создан
- [ ] Файлы загружены на GitHub
- [ ] Vercel аккаунт создан
- [ ] Проект импортирован в Vercel
- [ ] Деплой завершен успешно
- [ ] Сайт доступен по URL
- [ ] (Опционально) Собственный домен добавлен

---

## 🔧 Если что-то пошло не так

### Проблема: "Build failed"
**Решение:**
1. Проверьте, что все файлы загружены на GitHub
2. На Vercel нажмите "Redeploy"
3. Если не помогает, проверьте логи (Deployments → Build Logs)

### Проблема: "Cannot find module"
**Решение:**
1. Убедитесь, что `package.json` загружен
2. На Vercel нажмите Settings → Build & Development Settings
3. Убедитесь, что Install Command: `npm install`

### Проблема: Сайт выглядит странно
**Решение:**
1. Очистите кэш браузера (Ctrl+Shift+Delete)
2. Откройте в приватном окне (Ctrl+Shift+P)
3. Подождите 5 минут для полного кэширования

---

## 📞 Полезные ссылки

- **GitHub**: https://github.com
- **Vercel**: https://vercel.com
- **Документация Vercel**: https://vercel.com/docs
- **Поддержка Vercel**: https://vercel.com/support

---

## ✨ Готово!

Ваш сайт ContentSol теперь LIVE на Vercel! 🚀

Каждое обновление на GitHub автоматически деплоится на Vercel.

**Успехов в развитии вашего агентства!** 💪
