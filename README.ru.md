# Postlyra MCP

**Postlyra.app — посты в Telegram из ИИ-чата.** Создавайте оформленные черновики, проверяйте предпросмотр и публикуйте в выбранный подключённый канал сейчас или по расписанию. Для ChatGPT [установите Postlyra из опубликованного каталога плагинов](https://chatgpt.com/plugins/plugin_asdk_app_6aa661b9f69c81919d9108aae8f09364); для совместимых клиентов используйте удалённый MCP.

[English](README.md) · [Сайт](https://postlyra.app/ru?utm_source=github&utm_medium=referral&utm_campaign=seo_guides_202609&utm_content=release_ru) · [Подключение](https://postlyra.app/ru/connect?utm_source=github&utm_medium=referral&utm_campaign=seo_guides_202609&utm_content=release_ru)

Postlyra связывает ИИ-чаты с Telegram: сохраняйте черновики, планируйте публикации, находите и редактируйте контент. Этот репозиторий содержит инструкции, конфигурации и диагностику интеграции. Сам сервис работает в облаке; исходный код SaaS остаётся закрытым. Токен Telegram-бота и локальный MCP-сервер не нужны.

**Свидетельства совместимости выпуска MCP 0.3.5.** Сервер предоставляет 32 инструмента. В ChatGPT проверены правки черновика в карточке, тот же пост в браузере, планирование, перенос, отмена, доставка в канал по времени и изменение/удаление выбранного сообщения. Проверка CSP включена. Все 804 теста, проверка типов, сборка и ссылки документации прошли. Проверку группы остановила автоматическая проверка клиента; остальные ограничения указаны в [таблице совместимости](docs/compatibility.md). См. [инструкцию карточки](docs/chat-card.md). Версия MCP Registry остаётся `0.2.0-rc.1`.

## Быстрый старт

1. Откройте [Postlyra](https://postlyra.app/app) и войдите через Telegram.
2. Добавьте канал или группу в «Подключениях» и предоставьте @PostlyraBot необходимые права.
3. В ChatGPT установите Postlyra из каталога плагинов. Для других клиентов с поддержкой удалённого MCP (Streamable HTTP) добавьте **https://postlyra.app/mcp**.
4. Пройдите OAuth, проверьте разрешения, попросите показать каналы и сохранить тестовый черновик.

В Claude Code:

```text
claude mcp add --transport http --scope user postlyra https://postlyra.app/mcp
```

Затем откройте `/mcp` и завершите вход. Готовые примеры: [Claude Code](clients/claude-code.json) для проектного `.mcp.json`, [Codex](clients/codex.toml) для `config.toml`, [Cursor](clients/cursor.json) для `.cursor/mcp.json`. Добавляйте секцию Postlyra, сохраняя остальные подключения. В Codex вход запускается отдельно командой `codex mcp login postlyra`.

В ChatGPT [откройте Postlyra в каталоге плагинов](https://chatgpt.com/plugins/plugin_asdk_app_6aa661b9f69c81919d9108aae8f09364) и установите плагин. Подключите аккаунт Postlyra через OAuth, войдите с Telegram и проверьте запрошенные разрешения. Попросите показать подключённые каналы, сохранить черновик и его предпросмотр. После проверки явно назовите канал и разрешите публикацию; для расписания укажите дату, время и часовой пояс. Доступность зависит от аккаунта и политики рабочего пространства. Основной путь установки — опубликованный плагин; Developer mode для него не нужен.

В Claude откройте **Customize → Connectors → Add custom connector**, добавьте MCP URL и нажмите **Connect**. Для Team/Enterprise предварительная настройка может потребоваться от владельца организации. Удалённые подключения Claude Desktop также работают через аккаунт Claude и инфраструктуру Anthropic: файл для Claude Code не заменяет этот сценарий. [Официальная инструкция Claude](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp).

Доступность зависит от аккаунта и политики организации. Инструкции сверены с текущей документацией; это не результат живой проверки каждого клиента. Дополнительные официальные источники: [Claude Code](https://code.claude.com/docs/en/mcp), [Codex](https://learn.chatgpt.com/docs/extend/mcp?surface=cli), [Cursor](https://prod.cursor.com/docs/mcp).

## Что попросить у ИИ

- «Сохрани этот текст черновиком “Итоги недели” в Postlyra».
- «Найди черновик про осенний запуск и покажи его».
- «Запланируй пост на 22 октября 2026 в 10:00 Europe/Moscow в мой подключённый канал».
- «Перенеси эту публикацию на следующий день».
- «Примени текущие правки только к публикации в новостном канале».
- «Отмени запланированную публикацию».
- «Покажи посты, которым нужно внимание».

Черновик сам по себе не публикуется. Изменение исходного текста не изменяет отправленные сообщения без отдельного действия. Для редактирования и удаления сообщений нужны сохранённые идентификаторы Telegram и права бота. Нативная и inline-отправка не всегда возвращают такие идентификаторы.

## Бесплатная бета

5 каналов или групп, 30 публикаций в день, 300 за 30 дней, 1 ГБ медиа. Для серверной публикации в подключённый чат один известный получатель считается одной публикацией; технические повторы не списываются повторно. Нативная и inline-отправка используют временные резервации и доступные подтверждения Telegram, поэтому точный подсчёт получателей не гарантируется. См. [ограничения подтверждений](docs/compatibility.md#telegram-confirmation-and-usage-limits). Подпись Postlyra обязательна. Тариф выбранного ИИ-сервиса оплачивается отдельно, если он нужен.

[Разрешения](docs/permissions.md) · [Передача медиа](docs/media.md) · [Диагностика](docs/troubleshooting.md) · [Фактические проверки клиентов](docs/compatibility.md)

Запустите `node scripts/diagnose.mjs` (Node.js 18+), чтобы проверить публичные адреса без входа или публикации. Не отправляйте в публичные issues токены, коды входа, приватные ссылки или содержимое каналов.

[Поддержка](https://t.me/postlyra) · [Конфиденциальность](https://postlyra.app/ru/privacy) · [Условия](https://postlyra.app/ru/terms)

## Публикация интеграции

В официальном MCP Registry опубликована [io.github.prof-1t/postlyra-mcp, версия 0.2.0-rc.1](https://registry.modelcontextprotocol.io/v0.1/servers/io.github.prof-1t%2Fpostlyra-mcp/versions/0.2.0-rc.1). 11 сентября 2026 года Registry API подтвердил активную запись, а production endpoint вернул метаданные нового набора инструментов. Postlyra также [опубликована в каталоге плагинов ChatGPT](https://chatgpt.com/plugins/plugin_asdk_app_6aa661b9f69c81919d9108aae8f09364). MCP Registry и каталог ChatGPT — отдельные каналы распространения; наличие записи не означает независимую живую проверку всех ИИ-клиентов. Подробности — в [записи о выпуске](docs/release.md).

## Полезные инструкции

- Telegram MCP сервер: [Русский](https://postlyra.app/ru/guides/telegram-mcp?utm_source=github&utm_medium=referral&utm_campaign=seo_guides_202609&utm_content=release_ru) · [English](https://postlyra.app/en/guides/telegram-mcp?utm_source=github&utm_medium=referral&utm_campaign=seo_guides_202609&utm_content=release_en).
- Публикация в Telegram из Claude: [Русский](https://postlyra.app/ru/guides/publish-from-claude?utm_source=github&utm_medium=referral&utm_campaign=seo_guides_202609&utm_content=release_ru) · [English](https://postlyra.app/en/guides/publish-from-claude?utm_source=github&utm_medium=referral&utm_campaign=seo_guides_202609&utm_content=release_en).
- Редактируемые таблицы в Telegram: [Русский](https://postlyra.app/ru/guides/tablicy-v-telegram?utm_source=github&utm_medium=referral&utm_campaign=seo_guides_202609&utm_content=release_ru) · [English](https://postlyra.app/en/guides/create-tables-in-telegram?utm_source=github&utm_medium=referral&utm_campaign=seo_guides_202609&utm_content=release_en).

