# Postlyra card inside an AI chat

[English](#english) · [Русский](#russian)

## English

Postlyra's hosted MCP server `0.3.0` adds an optional MCP Apps card. In a compatible host, ask: **“Find my music post and show its Postlyra card.”** The client finds or creates a saved source, then calls `show_post_card` with its `postId`.

The card previews the saved content and attribution, lets you edit plain text, select a connected channel or group and an exact date/time, and schedule, move or cancel one publication. Rich content can be edited through the normal chat tools or the full editor. Saving a source does not change scheduled or sent snapshots. Opening the card does not publish anything or create a public preview link.

Use the same endpoint, `https://postlyra.app/mcp`, and refresh your client's tool list after the update. It should include `show_post_card` among 32 tools. In ChatGPT, follow the [official developer connection guide](https://developers.openai.com/plugins/deploy/connect-chatgpt). Reconnect if old consent lacks post reading, editing, connected-chat reading or publication permissions. Old connections gain no new scopes automatically.

The UI uses standard MCP Apps. Clients without that UI capability can continue using the existing tools conversationally. The card is optional; an explicit chat instruction can authorize an operation within the granted scopes. No additional OpenAI API key or model subscription is required by Postlyra for the card itself.

If a scheduling response is lost, use **Check result** or retry the frozen request. Do not create a second schedule while the first result is uncertain. The receipt shows the selected destination, exact date/time and IANA timezone.

## Russian

В MCP Postlyra `0.3.0` появилась необязательная карточка для клиентов с поддержкой MCP Apps. Попросите ИИ: **«Найди мой пост про музыку и покажи его карточку Postlyra»**. Клиент находит или создаёт исходный пост, затем вызывает `show_post_card` с его `postId`.

В карточке можно просмотреть содержимое и подпись, изменить обычный текст, выбрать подключённый канал или группу, точные дату и время, запланировать, перенести или отменить одну публикацию. Сложное оформление редактируется через инструменты в чате или полный редактор. Сохранение исходника не меняет уже запланированные и отправленные версии. Открытие карточки ничего не публикует и не создаёт публичную ссылку.

Адрес подключения прежний: `https://postlyra.app/mcp`. Обновите список инструментов клиента: среди 32 инструментов должен появиться `show_post_card`. Для ChatGPT используйте [официальную инструкцию подключения](https://developers.openai.com/plugins/deploy/connect-chatgpt). Если старому подключению не хватает прав чтения постов и чатов, редактирования или публикации, пройдите авторизацию повторно. Новые права не выдаются автоматически.

Карточка использует стандарт MCP Apps. Клиенты без поддержки интерфейса продолжают работать через обычные инструменты. Явного поручения в чате достаточно для действия в пределах выданных прав; карточка необязательна. Для неё Postlyra не требует отдельного ключа OpenAI API или собственной подписки на модель.

При потере ответа планирования нажмите **«Проверить результат»** или повторите сохранённый запрос. Не создавайте вторую задачу, пока результат первой неизвестен. Подтверждение показывает получателя, точные дату и время и часовой пояс IANA.

## Verification / Проверки

On 2026-09-11, production returned 32 tools and the static UI resource; its SHA-256 matched the locally tested bundle. An unauthenticated post-card call returned 401, and all seven readiness checks passed. The implementation passed 776 tests, typecheck and build. A local official SDK/AppBridge host exercised edits, scheduling, moving, cancellation and lost-response recovery; Russian/English, light/dark and mobile width were checked.

**Actual ChatGPT UI, its mobile apps, OpenAI review and other vendors' MCP Apps UIs have not yet been verified.** Local-host screenshots are not ChatGPT screenshots. Publishing this capability does not create an approved directory listing. The existing [Registry release record](release.md) and [client compatibility record](compatibility.md) distinguish other observed checks.

**Отображение в самом ChatGPT, его мобильных приложениях и интерфейсах других производителей пока не проверено.** Проверка в локальном MCP Apps host не заменяет эти этапы. Публикация функции не означает одобрение каталога OpenAI.
