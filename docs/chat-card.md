# Postlyra card inside an AI chat

[English](#english) · [Русский](#russian)

## English

Postlyra's hosted MCP server `0.3.5` adds an optional MCP Apps card. In a compatible host, ask: **“Find my music post and show its Postlyra card.”** The client finds or creates a saved source, then calls `show_post_card` with its `postId`.

The card previews the saved content and attribution, lets you edit plain text, select a connected channel or group and an exact date/time, and schedule, move or cancel one publication. Rich content can be edited through the normal chat tools or the full editor. Saving a source does not change scheduled or sent snapshots. Opening the card does not publish anything or create a public preview link.

Use the same endpoint, `https://postlyra.app/mcp`, and refresh your client's tool list after the update. It should include `show_post_card` among 32 tools. In ChatGPT, follow the [official developer connection guide](https://developers.openai.com/plugins/deploy/connect-chatgpt). Reconnect if old consent lacks post reading, editing, connected-chat reading or publication permissions. Old connections gain no new scopes automatically.

If you only see a screenshot/browser link, check the tool list. Signing in again does not necessarily refresh it. In ChatGPT open Postlyra in **Plugins → Plugin actions → Settings**, press **Refresh** under Information, confirm `show_post_card` and start a fresh conversation. `preview_post` is a browser preview; `show_post_card` is the embedded UI. A `draftId` from draft search is also the `postId` for the card. If an old client registration rejects the new scopes with `invalid_scope`, create a fresh developer connection and authorize it normally.

The UI uses standard MCP Apps. Clients without that UI capability can continue using the existing tools conversationally. The card is optional; an explicit chat instruction can authorize an operation within the granted scopes. No additional OpenAI API key or model subscription is required by Postlyra for the card itself.

If a scheduling response is lost, use **Check result** or retry the frozen request. Do not create a second schedule while the first result is uncertain. The receipt shows the selected destination, exact date/time and IANA timezone.

## Russian

В MCP Postlyra `0.3.5` появилась необязательная карточка для клиентов с поддержкой MCP Apps. Попросите ИИ: **«Найди мой пост про музыку и покажи его карточку Postlyra»**. Клиент находит или создаёт исходный пост, затем вызывает `show_post_card` с его `postId`.

В карточке можно просмотреть содержимое и подпись, изменить обычный текст, выбрать подключённый канал или группу, точные дату и время, запланировать, перенести или отменить одну публикацию. Сложное оформление редактируется через инструменты в чате или полный редактор. Сохранение исходника не меняет уже запланированные и отправленные версии. Открытие карточки ничего не публикует и не создаёт публичную ссылку.

Адрес подключения прежний: `https://postlyra.app/mcp`. Обновите список инструментов клиента: среди 32 инструментов должен появиться `show_post_card`. Для ChatGPT используйте [официальную инструкцию подключения](https://developers.openai.com/plugins/deploy/connect-chatgpt). Если старому подключению не хватает прав чтения постов и чатов, редактирования или публикации, пройдите авторизацию повторно. Новые права не выдаются автоматически.

Если вместо карточки показывается картинка или ссылка в браузер, проверьте список инструментов. Повторный вход сам по себе не обновляет этот список. В ChatGPT откройте **Плагины → Postlyra → Действия с плагином → Настройки** и нажмите **Обновить** в разделе информации. Убедитесь, что появился `show_post_card`, затем начните новый чат. `preview_post` открывает браузерный предпросмотр, а `show_post_card` выводит интерфейс внутри чата. Полученный из поиска `draftId` подходит как `postId`. Если старая регистрация отклоняет новые права с ошибкой `invalid_scope`, создайте новое подключение разработчика и пройдите обычное согласие.

Карточка использует стандарт MCP Apps. Клиенты без поддержки интерфейса продолжают работать через обычные инструменты. Явного поручения в чате достаточно для действия в пределах выданных прав; карточка необязательна. Для неё Postlyra не требует отдельного ключа OpenAI API или собственной подписки на модель.

При потере ответа планирования нажмите **«Проверить результат»** или повторите сохранённый запрос. Не создавайте вторую задачу, пока результат первой неизвестен. Подтверждение показывает получателя, точные дату и время и часовой пояс IANA.

## Verification / Проверки

On September 12, 2026, desktop ChatGPT completed one disposable channel lifecycle: create a draft, show/edit its card, find the same source in the browser, schedule/move/cancel, deliver once at the selected time, save a new working revision without changing the sent snapshot, explicitly apply it to that selected message, delete the message and archive the source. Actual Telegram Web and read-only delivery records confirmed the result and cleanup. Developer CSP enforcement was enabled. This live flow ran on 0.3.3/v3; 0.3.4/v4 adds the fixes below.

Release 0.3.4 keeps canceled/deleted deliveries from marking a source as failed, permits editing the bot's own tracked group messages without a channel-only admin flag, and shows useful labels/links for external or unavailable media. The local harness checked RU/light at 390 px and EN/dark at 320 px. The full suite passed 804 tests; types and build passed. Source ownership, revisions, granted permissions and delivery idempotency remain enforced. Old UI URIs remain explicit compatibility aliases, and old OAuth grants gain no scopes automatically.

В ChatGPT проверен полный ограниченный сценарий в выделенном канале: создание, правка, планирование, перенос, отмена, доставка по времени, изменение выбранного сообщения и удаление теста. Тот же исходник доступен в браузере. В версии 0.3.4 отменённая доставка не превращает пост в ошибочный; недоступное или внешнее медиа отображается понятным блоком со ссылкой. Проверка CSP в ChatGPT включена.

A designated test-group send was blocked by OpenAI automatic safety review before reaching Postlyra and was not retried through another route. Real group, mobile, remaining vendor clients and hosted portal Scan Tools remain separate gates. No public OpenAI submission or directory approval is claimed. Publisher identity verification is required before creating the portal draft.

Отправку в тестовую группу остановила автоматическая проверка OpenAI до выполнения Postlyra. Группа, мобильные устройства, остальные ИИ-клиенты и проверка в портале OpenAI пока не подтверждены. Внешние изображения вне разрешённых хранилищ открываются по явной ссылке. Локальный стенд не заменяет настоящий ChatGPT. См. [Registry](release.md) и [совместимость](compatibility.md).

Version 0.3.5 clarifies that an archived source must be restored before editing or scheduling; reconnecting OAuth does not restore it. / Версия 0.3.5 объясняет, что архивный пост сначала нужно восстановить; повторная OAuth-авторизация не требуется для восстановления статуса.
