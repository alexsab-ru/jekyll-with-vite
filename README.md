# jekyll-with-vite

Файл `package.json` содержит набор скриптов, которые можно запускать с помощью команды `npm run` или `pnpm`.  
Вот что делает каждый из этих скриптов:

- `start`: Переходит в директорию `public` и устанавливает зависимости Ruby с помощью `bundle install`.

- `vite_dev` и `vite_dev_win`: Запускают сервер разработки Vite в директории `vite` с переменной окружения `APP_ENV` установленной в `development`.

- `vite_build` и `vite_build_win`: Создают продакшн-сборку Vite в директории `vite` с переменной окружения `APP_ENV` установленной в `production`.

- `jekyll` и `jekyll_win`: Запускают сервер разработки Jekyll в директории `public` с переменной окружения `JEKYLL_ENV` установленной в `development`.

- `jekyll_build` и `jekyll_build_win`: Создают продакшн-сборку Jekyll в директории `public` с переменной окружения `JEKYLL_ENV` установленной в `production`.

- `preview` и `preview_win`: Запускают сервер просмотра Jekyll в директории `public` с переменной окружения `JEKYLL_ENV` установленной в `production`.

- `dev` и `dev_win`: Запускают серверы разработки Vite и Jekyll одновременно с помощью `concurrently`.

- `deploy` и `deploy_win`: Создают продакшн-сборку Vite, перемещают файл `manifest.json` в директорию `_data`, удаляют старую директорию `assets` и перемещают новую директорию `assets` из сборки Vite.

- `build` и `build_win`: То же, что и `deploy`, но также создают продакшн-сборку Jekyll.

Скрипты с суффиксом `_win` предназначены для использования в Windows и используют `cross-env` для установки переменных окружения, поскольку синтаксис установки переменных окружения отличается в Windows.