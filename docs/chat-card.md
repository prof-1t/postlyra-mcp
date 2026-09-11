# Postlyra card inside an AI chat

[English](#english) · [Русский](#russian)

## English

Postlyra's hosted MCP server `0.3.3` adds an optional MCP Apps card. In a compatible host, ask: **“Find my music post and show its Postlyra card.”** The client finds or creates a saved source, then calls `show_post_card` with its `postId`.

The card previews the saved content and attribution, lets you edit plain text, select a connected channel or group and an exact date/time, and schedule, move or cancel one publication. Rich content can be edited through the normal chat tools or the full editor. Saving a source does not change scheduled or sent snapshots. Opening the card does not publish anything or create a public preview link.

Use the same endpoint, `https://postlyra.app/mcp`, and refresh your client's tool list after the update. It should include `show_post_card` among 32 tools. In ChatGPT, follow the [official developer connection guide](https://developers.openai.com/plugins/deploy/connect-chatgpt). Reconnect if old consent lacks post reading, editing, connected-chat reading or publication permissions. Old connections gain no new scopes automatically.

If you only see a screenshot/browser link, check the tool list. Signing in again does not necessarily refresh it. In ChatGPT open Postlyra in **Plugins → Plugin actions → Settings**, press **Refresh** under Information, confirm `show_post_card` and start a fresh conversation. `preview_post` is a browser preview; `show_post_card` is the embedded UI. A `draftId` from draft search is also the `postId` for the card. If an old client registration rejects the new scopes with `invalid_scope`, create a fresh developer connection and authorize it normally.

The UI uses standard MCP Apps. Clients without that UI capability can continue using the existing tools conversationally. The card is optional; an explicit chat instruction can authorize an operation within the granted scopes. No additional OpenAI API key or model subscription is required by Postlyra for the card itself.

If a scheduling response is lost, use **Check result** or retry the frozen request. Do not create a second schedule while the first result is uncertain. The receipt shows the selected destination, exact date/time and IANA timezone.

## Russian

В MCP Postlyra `0.3.3` появилась необязательная карточка для клиентов с поддержкой MCP Apps. Попросите ИИ: **«Найди мой пост про музыку и покажи его карточку Postlyra»**. Клиент находит или создаёт исходный пост, затем вызывает `show_post_card` с его `postId`.

В карточке можно просмотреть содержимое и подпись, изменить обычный текст, выбрать подключённый канал или группу, точные дату и время, запланировать, перенести или отменить одну публикацию. Сложное оформление редактируется через инструменты в чате или полный редактор. Сохранение исходника не меняет уже запланированные и отправленные версии. Открытие карточки ничего не публикует и не создаёт публичную ссылку.

Адрес подключения прежний: `https://postlyra.app/mcp`. Обновите список инструментов клиента: среди 32 инструментов должен появиться `show_post_card`. Для ChatGPT используйте [официальную инструкцию подключения](https://developers.openai.com/plugins/deploy/connect-chatgpt). Если старому подключению не хватает прав чтения постов и чатов, редактирования или публикации, пройдите авторизацию повторно. Новые права не выдаются автоматически.

Если вместо карточки показывается картинка или ссылка в браузер, проверьте список инструментов. Повторный вход сам по себе не обновляет этот список. В ChatGPT откройте **Плагины → Postlyra → Действия с плагином → Настройки** и нажмите **Обновить** в разделе информации. Убедитесь, что появился `show_post_card`, затем начните новый чат. `preview_post` открывает браузерный предпросмотр, а `show_post_card` выводит интерфейс внутри чата. Полученный из поиска `draftId` подходит как `postId`. Если старая регистрация отклоняет новые права с ошибкой `invalid_scope`, создайте новое подключение разработчика и пройдите обычное согласие.

Карточка использует стандарт MCP Apps. Клиенты без поддержки интерфейса продолжают работать через обычные инструменты. Явного поручения в чате достаточно для действия в пределах выданных прав; карточка необязательна. Для неё Postlyra не требует отдельного ключа OpenAI API или собственной подписки на модель.

При потере ответа планирования нажмите **«Проверить результат»** или повторите сохранённый запрос. Не создавайте вторую задачу, пока результат первой неизвестен. Подтверждение показывает получателя, точные дату и время и часовой пояс IANA.

## Verification / Проверки

On 2026-09-11, production server `0.3.3` returned 32 tools and the v3 UI resource; its SHA-256 matched the tested local build. Protected reads returned 401 without authorization and all seven readiness checks passed. The initial implementation passed 776 tests; the final compatibility patch passed 50 focused tests and typecheck/build.

On 2026-09-11 the owner approved a new dynamically registered ChatGPT connection with all ten current scopes through the normal consent page. The older five-scope grant was preserved. ChatGPT settings Refresh loaded all 32 tools and the UI resource. Actual desktop Chrome rendering passed for both reopening a saved conversation and a fresh show_post_card invocation. The card displayed the existing rich post, attribution, current quota and scheduling controls. Its Refresh button completed a real get_post call. The recipient started unselected and the form showed Asia/Bangkok. These checks did not edit the source, create a job or send a Telegram message.

В настоящем ChatGPT в Chrome проверены обычная OAuth-авторизация, обновление списка инструментов, открытие карточки из истории и новым запросом, чтение актуальных данных кнопкой «Обновить» и открытие формы планирования. Получатель изначально не выбран; часовой пояс — Asia/Bangkok. Пост не изменялся, публикации не создавались.

ChatGPT write operations, mobile clients, other vendors' MCP Apps UIs and OpenAI review remain separate acceptance gates. The account's existing "Enforce CSP in developer mode" switch was off and was not changed; no hosted CSP/Scan Tools approval is claimed. External media outside the declared app/storage origins appears as an explicit link. Local harness screenshots are not ChatGPT screenshots. No public OpenAI submission or directory approval is claimed.

Изображения с внешних сайтов за пределами разрешённых хранилищ открываются по ссылкам. Запись и публикация через интерфейс ChatGPT, мобильные приложения и интерфейсы других производителей пока не проверены. Локальные проверки планирования не заменяют эти этапы; публикация функции не означает одобрение каталога OpenAI. См. [Registry](release.md) и [совместимость](compatibility.md).
