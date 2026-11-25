/* ============================================================
   СПИСОК МАГАЗИНОВ — редактируйте только этот массив
   Поля:
     address — адрес (крупно)
     meta    — часы работы / уточнение (мелко)
     photo   — имя файла фото рядом с index.html
     badge   — бейдж (необязательно): "24 часа", "Новый" и т.п.
     map     — ссылка на точку в Яндекс.Картах (необязательно)
   ============================================================ */
var STORES = [
  { address:"Московское ш., 205",     meta:"ТЦ «ТЦ Эль Рио», 1 этаж · Круглосуточно", photo:"store-1.jpg",  badge:"24 часа", map:"https://yandex.ru/maps/org/sputnik/215720106527/?ll=50.236243%2C53.258071&z=16.2" },
  { address:"ул. Стара-Загора, 139А",    meta:"Круглосуточно",    photo:"store-2.jpg", badge:"24 часа", map:"https://yandex.ru/maps/org/sputnik/71364217357/?display-text=%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA&ll=50.234393%2C53.228490&mode=search&sctx=ZAAAAAgBEAAaKAoSCezZc5maJElAEaPIWkOpm0pAEhIJ%2F3Vu2ozT6T8RfsSvWMNF0j8iBgABAgMEBSgPOABAmZ0GSAFqAnJ1nQHNzMw9oAEAqAEAvQHFxAiawgGCAeb%2F65qfAdqSkrD5A%2F3lpfWtAr%2Bc5Ku9Bf%2Fkyui7A7GHtu%2B5AZL21PHPA9aq0J6zA9qRq7rXBb3z%2BcrkBbjJ3JhG1aiNvuED4K2q9PUEuJeL%2F60C9Kv1mrUB0%2Bys3o0Hl9Ls1r8BjZSO7YkCw%2B6sl2KzhLDsgwPj1oPYzQWfw93%2FtgSCAhooKGNoYWluX2lkOigzMzYyMTkxMTg5MykpKYoCAJICAJoCDGRlc2t0b3AtbWFwc6oCCzMzNjIxOTExODkzsAIB&sll=50.234393%2C53.228490&sspn=0.034567%2C0.019252&text=%7B%22text%22%3A%22%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%2233621911893%22%5D%7D%5D%7D&utm_source=share&z=14" },
  { address:"ул. Анетты Басс, 4",    meta:"стр. 3, п. г. т. Стройкерамика · 09:00–23:00",      photo:"store-3.jpg",  map:"https://yandex.ru/maps/org/sputnik/188347989332/?display-text=%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA&ll=50.328649%2C53.304080&mode=search&sctx=ZAAAAAgBEAAaKAoSCffJUYAoKklAEdzykZT0pkpAEhIJC7Q7pBggcT8RGHsvvmiPVz8iBgABAgMEBSgKOABA0IsGSAFqAnJ1nQHNzMw9oAEAqAEAvQHFxAiawgEG1Pqo070FggIaKChjaGFpbl9pZDooMzM2MjE5MTE4OTMpKSmKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=50.329679%2C53.304080&sspn=0.005077%2C0.001745&text=%7B%22text%22%3A%22%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%2233621911893%22%5D%7D%5D%7D&utm_source=share&z=18" },
  { address:"Аэродромная ул., 47А",    meta:"ТЦ «Аврора», 0 этаж · 10:00–22:00",   photo:"store-4.jpg",  map:"https://yandex.ru/maps/org/sputnik/180757719182/?display-text=%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA&indoorLevel=1&ll=50.190810%2C53.190611&mode=search&sctx=ZAAAAAgBEAAaKAoSCSB551CGIklAEd9RY0LMoUpAEhIJWHIVi98Uyj8RURISaRt%2Fsj8iBgABAgMEBSgKOABAm50GSAFqAnJ1nQHNzMw9oAEAqAEAvQHFxAiawgEM1aiNvuEDjtH%2Fr6EFggIaKChjaGFpbl9pZDooMzM2MjE5MTE4OTMpKSmKAgCSAgCaAgxkZXNrdG9wLW1hcHOqAgszMzYyMTkxMTg5M7ACAQ%3D%3D&sll=50.190810%2C53.190611&sspn=0.006439%2C0.003381&text=%7B%22text%22%3A%22%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%2233621911893%22%5D%7D%5D%7D&utm_source=share&z=17" },
  { address:"Аэродромная ул., 47А",    meta:"ТЦ «Аврора», 0 этаж · 09:00–23:00",        photo:"store-5.jpg",  map:"https://yandex.ru/maps/org/sputnik/129247695957/?display-text=%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA&ll=50.263105%2C53.215754&mode=search&sctx=ZAAAAAgBEAAaKAoSCcQLIlLTDElAESAJ%2B3YSmUpAEhIJ%2BWcG8YEd1z8ROX09X7NcwD8iBgABAgMEBSgKOABAM0gBagJydZ0BzczMPaABAKgBAL0BxcQImsIBZdqSkrD5A%2F3lpfWtAv%2Fkyui7A7GHtu%2B5AfSr9Zq1Aeb%2F65qfAb3z%2BcrkBdWojb7hA9aq0J6zA5L21PHPA7%2Bc5Ku9BcXwwvj2AeCtqvT1BNqRq7rXBbjJ3JhGuJeL%2F60Cl9Ls1r8BggIaKChjaGFpbl9pZDooMzM2MjE5MTE4OTMpKSmKAgCSAgCaAgxkZXNrdG9wLW1hcHOqAgszMzYyMTkxMTg5M7ACAQ%3D%3D&sll=50.263105%2C53.215754&sspn=0.526884%2C0.293537&text=%7B%22text%22%3A%22%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%2233621911893%22%5D%7D%5D%7D&utm_source=share&z=10" },
  { address:"ул. Дыбенко, 120",    meta:"09:00–23:00",             photo:"store-6.jpg",  map:"https://yandex.ru/maps/org/sputnik/188265074239/?display-text=%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA&ll=50.263105%2C53.215754&mode=search&sctx=ZAAAAAgBEAAaKAoSCcQLIlLTDElAESAJ%2B3YSmUpAEhIJ%2BWcG8YEd1z8ROX09X7NcwD8iBgABAgMEBSgKOABAM0gBagJydZ0BzczMPaABAKgBAL0BxcQImsIBZdqSkrD5A%2F3lpfWtAv%2Fkyui7A7GHtu%2B5AfSr9Zq1Aeb%2F65qfAb3z%2BcrkBdWojb7hA9aq0J6zA5L21PHPA7%2Bc5Ku9BcXwwvj2AeCtqvT1BNqRq7rXBbjJ3JhGuJeL%2F60Cl9Ls1r8BggIaKChjaGFpbl9pZDooMzM2MjE5MTE4OTMpKSmKAgCSAgCaAgxkZXNrdG9wLW1hcHOqAgszMzYyMTkxMTg5M7ACAQ%3D%3D&sll=50.263105%2C53.215754&sspn=0.526884%2C0.293537&text=%7B%22text%22%3A%22%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%2233621911893%22%5D%7D%5D%7D&utm_source=share&z=10" },
  { address:"просп. Кирова, 233А",    meta:"09:00–23:00",     photo:"store-7.jpg",  map:"https://yandex.ru/maps/org/sputnik/212089683977/?display-text=%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA&ll=50.259280%2C53.229804&mode=search&sctx=ZAAAAAgBEAAaKAoSCZ%2BSc2IPF0lAEfZgUnx8mkpAEhIJRUYHJGHfuj8RilbuBWaFoj8iBgABAgMEBSgKOABAmp0GSAFiO3JlbGV2X3JhbmtpbmdfaGVhdnlfcmVsZXZfd29ybGRfZm9ybXVsYT0wLjc6bDNfZGM3MjAzNDJfZXhwYjpyZWxldl9yYW5raW5nX2hlYXZ5X3JlbGV2X21hcHNfZm9ybXVsYT0wLjY6bDNfZGM3MjAzNDJfZXhwagJydZ0BzczMPaABAKgBAL0BxcQImsIBRv%2Fkyui7A9qSkrD5A%2F3lpfWtAr3z%2BcrkBbiXi%2F%2BtAr%2Bc5Ku9BdWojb7hA7GHtu%2B5AbjJ3JhGs4Sw7IMD9K38gJkCw%2B6sl2KCAhooKGNoYWluX2lkOigzMzYyMTkxMTg5MykpKYoCAJICAJoCDGRlc2t0b3AtbWFwc6oCCzMzNjIxOTExODkzsAIB&sll=50.259280%2C53.229804&sspn=0.072012%2C0.036174&text=%7B%22text%22%3A%22%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%2233621911893%22%5D%7D%5D%7D&utm_source=share&z=14" },
  { address:"просп. Карла Маркса, 450",   meta:"Cтроение около дома· 09:00–23:00",    photo:"store-8.jpg",  map:"https://yandex.ru/maps/org/sputnik/51453307159/?display-text=%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA&ll=50.263105%2C53.215754&mode=search&sctx=ZAAAAAgBEAAaKAoSCcQLIlLTDElAESAJ%2B3YSmUpAEhIJ%2BWcG8YEd1z8ROX09X7NcwD8iBgABAgMEBSgKOABAM0gBagJydZ0BzczMPaABAKgBAL0BxcQImsIBZdqSkrD5A%2F3lpfWtAv%2Fkyui7A7GHtu%2B5AfSr9Zq1Aeb%2F65qfAb3z%2BcrkBdWojb7hA9aq0J6zA5L21PHPA7%2Bc5Ku9BcXwwvj2AeCtqvT1BNqRq7rXBbjJ3JhGuJeL%2F60Cl9Ls1r8BggIaKChjaGFpbl9pZDooMzM2MjE5MTE4OTMpKSmKAgCSAgCaAgxkZXNrdG9wLW1hcHOqAgszMzYyMTkxMTg5M7ACAQ%3D%3D&sll=50.263105%2C53.215754&sspn=0.526884%2C0.293537&text=%7B%22text%22%3A%22%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%2233621911893%22%5D%7D%5D%7D&utm_source=share&z=10" },
  { address:"Краснодонская ул., 8",   meta:"09:00–23:00",      photo:"store-9.jpg",  map:"https://yandex.ru/maps/org/sputnik/244205696595/?display-text=%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA&ll=50.267537%2C53.225902&mode=search&sctx=ZAAAAAgBEAAaKAoSCWzQl97%2BGElAEdgrLLgfmkpAEhIJ%2BWcG8YEdtz8RVyQmqOFboD8iBgABAgMEBSgKOABA0IsGSAFqAnJ1nQHNzMw9oAEAqAEAvQHFxAiawgFr5v%2Frmp8B2pGrutcF%2F%2BTK6LsD%2FeWl9a0CsYe277kB2pKSsPkDkvbU8c8Dv5zkq70F1aiNvuED1qrQnrMDvfP5yuQFxfDC%2BPYB9Kv1mrUB4K2q9PUEl9Ls1r8BuMncmEa4l4v%2FrQLT7KzejQeCAhooKGNoYWluX2lkOigzMzYyMTkxMTg5MykpKYoCAJICAJoCDGRlc2t0b3AtbWFwc6oCCzMzNjIxOTExODkz&sll=50.219241%2C53.225902&sspn=0.264396%2C0.093510&text=%7B%22text%22%3A%22%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%2233621911893%22%5D%7D%5D%7D&utm_source=share&z=12" },
  { address:"ул. Мира, 9А",   meta:"микрорайон Крутые Ключи «ТЦ МИР» · 09:00–21:00",    photo:"store-10.jpg", map:"https://yandex.ru/maps/org/sputnik/59671536880/?display-text=%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA&ll=50.303123%2C53.316069&mode=search&sctx=ZAAAAAgBEAAaKAoSCcPX17rUJklAEXkiiPNwqEpAEhIJiIVa07zjVD8RWI0lrI2xQz8iBgABAgMEBSgKOABAnJ0GSAFqAnJ1nQHNzMw9oAEAqAEAvQHFxAiawgEG8MnNpd4BggIaKChjaGFpbl9pZDooMzM2MjE5MTE4OTMpKSmKAgCSAgCaAgxkZXNrdG9wLW1hcHOqAgszMzYyMTkxMTg5M7ACAQ%3D%3D&sll=50.303123%2C53.316069&sspn=0.014528%2C0.005116&text=%7B%22text%22%3A%22%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%2233621911893%22%5D%7D%5D%7D&utm_source=share&z=16" },
  { address:"ул. Мяги, 13",   meta:"09:00–23:00",      photo:"store-11.jpg", map:"https://yandex.ru/maps/org/sputnik/198799423933/?display-text=%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA&ll=50.263105%2C53.215754&mode=search&sctx=ZAAAAAgBEAAaKAoSCcQLIlLTDElAESAJ%2B3YSmUpAEhIJ%2BWcG8YEd1z8ROX09X7NcwD8iBgABAgMEBSgKOABAM0gBagJydZ0BzczMPaABAKgBAL0BxcQImsIBZdqSkrD5A%2F3lpfWtAv%2Fkyui7A7GHtu%2B5AfSr9Zq1Aeb%2F65qfAb3z%2BcrkBdWojb7hA9aq0J6zA5L21PHPA7%2Bc5Ku9BcXwwvj2AeCtqvT1BNqRq7rXBbjJ3JhGuJeL%2F60Cl9Ls1r8BggIaKChjaGFpbl9pZDooMzM2MjE5MTE4OTMpKSmKAgCSAgCaAgxkZXNrdG9wLW1hcHOqAgszMzYyMTkxMTg5M7ACAQ%3D%3D&sll=50.263105%2C53.215754&sspn=0.526884%2C0.293537&text=%7B%22text%22%3A%22%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%2233621911893%22%5D%7D%5D%7D&utm_source=share&z=10" },
  { address:"ул. Николая Панова, 50",   meta:"09:00–23:00",    photo:"store-12.jpg", map:"https://yandex.ru/maps/org/sputnik/81045058301/?display-text=%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA&ll=50.263105%2C53.215754&mode=search&sctx=ZAAAAAgBEAAaKAoSCcQLIlLTDElAESAJ%2B3YSmUpAEhIJ%2BWcG8YEd1z8ROX09X7NcwD8iBgABAgMEBSgKOABAM0gBagJydZ0BzczMPaABAKgBAL0BxcQImsIBZdqSkrD5A%2F3lpfWtAv%2Fkyui7A7GHtu%2B5AfSr9Zq1Aeb%2F65qfAb3z%2BcrkBdWojb7hA9aq0J6zA5L21PHPA7%2Bc5Ku9BcXwwvj2AeCtqvT1BNqRq7rXBbjJ3JhGuJeL%2F60Cl9Ls1r8BggIaKChjaGFpbl9pZDooMzM2MjE5MTE4OTMpKSmKAgCSAgCaAgxkZXNrdG9wLW1hcHOqAgszMzYyMTkxMTg5M7ACAQ%3D%3D&sll=50.263105%2C53.215754&sspn=0.526884%2C0.293537&text=%7B%22text%22%3A%22%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%2233621911893%22%5D%7D%5D%7D&utm_source=share&z=10" },
  { address:"Ново-Садовая ул., 106",   meta:"Корп. О · 09:00–23:00",        photo:"store-13.jpg", map:"https://yandex.ru/maps/org/sputnik/49894228913/?display-text=%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA&ll=50.263105%2C53.215754&mode=search&sctx=ZAAAAAgBEAAaKAoSCcQLIlLTDElAESAJ%2B3YSmUpAEhIJ%2BWcG8YEd1z8ROX09X7NcwD8iBgABAgMEBSgKOABAM0gBagJydZ0BzczMPaABAKgBAL0BxcQImsIBZdqSkrD5A%2F3lpfWtAv%2Fkyui7A7GHtu%2B5AfSr9Zq1Aeb%2F65qfAb3z%2BcrkBdWojb7hA9aq0J6zA5L21PHPA7%2Bc5Ku9BcXwwvj2AeCtqvT1BNqRq7rXBbjJ3JhGuJeL%2F60Cl9Ls1r8BggIaKChjaGFpbl9pZDooMzM2MjE5MTE4OTMpKSmKAgCSAgCaAgxkZXNrdG9wLW1hcHOqAgszMzYyMTkxMTg5M7ACAQ%3D%3D&sll=50.263105%2C53.215754&sspn=0.526884%2C0.293537&text=%7B%22text%22%3A%22%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%2233621911893%22%5D%7D%5D%7D&utm_source=share&z=10" },
  { address:"ул. Пушкина, 286",   meta:"09:00–23:00",      photo:"store-14.jpg", map:"https://yandex.ru/maps/org/sputnik/169089865440/?display-text=%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA&ll=50.263105%2C53.215754&mode=search&sctx=ZAAAAAgBEAAaKAoSCcQLIlLTDElAESAJ%2B3YSmUpAEhIJ%2BWcG8YEd1z8ROX09X7NcwD8iBgABAgMEBSgKOABAM0gBagJydZ0BzczMPaABAKgBAL0BxcQImsIBZdqSkrD5A%2F3lpfWtAv%2Fkyui7A7GHtu%2B5AfSr9Zq1Aeb%2F65qfAb3z%2BcrkBdWojb7hA9aq0J6zA5L21PHPA7%2Bc5Ku9BcXwwvj2AeCtqvT1BNqRq7rXBbjJ3JhGuJeL%2F60Cl9Ls1r8BggIaKChjaGFpbl9pZDooMzM2MjE5MTE4OTMpKSmKAgCSAgCaAgxkZXNrdG9wLW1hcHOqAgszMzYyMTkxMTg5M7ACAQ%3D%3D&sll=50.263105%2C53.215754&sspn=0.526884%2C0.293537&text=%7B%22text%22%3A%22%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%2233621911893%22%5D%7D%5D%7D&utm_source=share&z=10" },
  { address:"ул. Промышленности, 307",   meta:"09:00–23:00",    photo:"store-15.jpg", map:"https://yandex.ru/maps/org/sputnik/18842330296/?display-text=%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA&ll=50.263105%2C53.215754&mode=search&sctx=ZAAAAAgBEAAaKAoSCcQLIlLTDElAESAJ%2B3YSmUpAEhIJ%2BWcG8YEd1z8ROX09X7NcwD8iBgABAgMEBSgKOABAM0gBagJydZ0BzczMPaABAKgBAL0BxcQImsIBZdqSkrD5A%2F3lpfWtAv%2Fkyui7A7GHtu%2B5AfSr9Zq1Aeb%2F65qfAb3z%2BcrkBdWojb7hA9aq0J6zA5L21PHPA7%2Bc5Ku9BcXwwvj2AeCtqvT1BNqRq7rXBbjJ3JhGuJeL%2F60Cl9Ls1r8BggIaKChjaGFpbl9pZDooMzM2MjE5MTE4OTMpKSmKAgCSAgCaAgxkZXNrdG9wLW1hcHOqAgszMzYyMTkxMTg5M7ACAQ%3D%3D&sll=50.263105%2C53.215754&sspn=0.526884%2C0.293537&text=%7B%22text%22%3A%22%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%2233621911893%22%5D%7D%5D%7D&utm_source=share&z=10" },
  { address:"Революционная ул., 125",   meta:"09:00–23:00",     photo:"store-16.jpg", map:"https://yandex.ru/maps/org/sputnik/75432400628/?display-text=%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA&ll=50.196636%2C53.206889&mode=search&sll=50.180157%2C53.206924&sspn=0.104971%2C0.036174&text=%7B%22text%22%3A%22%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%2233621911893%22%5D%7D%5D%7D&utm_source=share&z=14" },
  { address:"Солнечная ул., 4",   meta:"09:00–23:00",             photo:"store-17.jpg", map:"https://yandex.ru/maps/org/sputnik/124523985682/?display-text=%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA&ll=50.263105%2C53.215754&mode=search&sctx=ZAAAAAgBEAAaKAoSCcQLIlLTDElAESAJ%2B3YSmUpAEhIJ%2BWcG8YEd1z8ROX09X7NcwD8iBgABAgMEBSgKOABAM0gBagJydZ0BzczMPaABAKgBAL0BxcQImsIBZdqSkrD5A%2F3lpfWtAv%2Fkyui7A7GHtu%2B5AfSr9Zq1Aeb%2F65qfAb3z%2BcrkBdWojb7hA9aq0J6zA5L21PHPA7%2Bc5Ku9BcXwwvj2AeCtqvT1BNqRq7rXBbjJ3JhGuJeL%2F60Cl9Ls1r8BggIaKChjaGFpbl9pZDooMzM2MjE5MTE4OTMpKSmKAgCSAgCaAgxkZXNrdG9wLW1hcHOqAgszMzYyMTkxMTg5M7ACAQ%3D%3D&sll=50.263105%2C53.215754&sspn=0.526884%2C0.293537&text=%7B%22text%22%3A%22%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%2233621911893%22%5D%7D%5D%7D&utm_source=share&z=10" },
  { address:"Средне-Садовая ул., 50",   meta:"09:00–23:00",    photo:"store-18.jpg", map:"https://yandex.ru/maps/org/sputnik/26355644227/?display-text=%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA&ll=50.249047%2C53.208567&mode=search&sctx=ZAAAAAgBEAAaKAoSCXWvk%2FqyFklAEc12hT5YmkpAEhIJ%2BWcG8YEdtz8R6%2BI2GsBboD8iBgABAgMEBSgKOABAmZ0GSAFqAnJ1nQHNzMw9oAEAqAEAvQHFxAiawgEFw%2B6sl2KCAhooKGNoYWluX2lkOigzMzYyMTkxMTg5MykpKYoCAJICAJoCDGRlc2t0b3AtbWFwc6oCCzMzNjIxOTExODkzsAIB&sll=50.219066%2C53.208567&sspn=0.163887%2C0.057986&text=%7B%22text%22%3A%22%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%2233621911893%22%5D%7D%5D%7D&utm_source=share&z=13" },
  { address:"ул. Стара-Загора, 147",   meta:"09:00–23:00",         photo:"store-19.jpg", map:"https://yandex.ru/maps/org/sputnik/42737532902/?display-text=%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA&ll=50.263105%2C53.215754&mode=search&sctx=ZAAAAAgBEAAaKAoSCcQLIlLTDElAESAJ%2B3YSmUpAEhIJ%2BWcG8YEd1z8ROX09X7NcwD8iBgABAgMEBSgKOABAM0gBagJydZ0BzczMPaABAKgBAL0BxcQImsIBZdqSkrD5A%2F3lpfWtAv%2Fkyui7A7GHtu%2B5AfSr9Zq1Aeb%2F65qfAb3z%2BcrkBdWojb7hA9aq0J6zA5L21PHPA7%2Bc5Ku9BcXwwvj2AeCtqvT1BNqRq7rXBbjJ3JhGuJeL%2F60Cl9Ls1r8BggIaKChjaGFpbl9pZDooMzM2MjE5MTE4OTMpKSmKAgCSAgCaAgxkZXNrdG9wLW1hcHOqAgszMzYyMTkxMTg5M7ACAQ%3D%3D&sll=50.263105%2C53.215754&sspn=0.526884%2C0.293537&text=%7B%22text%22%3A%22%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%2233621911893%22%5D%7D%5D%7D&utm_source=share&z=10" },
  { address:"ул. Стара-Загора, 140",   meta:"09:00–23:00",   photo:"store-20.jpg", map:"https://yandex.ru/maps/org/sputnik/195274918106/?display-text=%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA&ll=50.263105%2C53.215754&mode=search&sctx=ZAAAAAgBEAAaKAoSCcQLIlLTDElAESAJ%2B3YSmUpAEhIJ%2BWcG8YEd1z8ROX09X7NcwD8iBgABAgMEBSgKOABAM0gBagJydZ0BzczMPaABAKgBAL0BxcQImsIBZdqSkrD5A%2F3lpfWtAv%2Fkyui7A7GHtu%2B5AfSr9Zq1Aeb%2F65qfAb3z%2BcrkBdWojb7hA9aq0J6zA5L21PHPA7%2Bc5Ku9BcXwwvj2AeCtqvT1BNqRq7rXBbjJ3JhGuJeL%2F60Cl9Ls1r8BggIaKChjaGFpbl9pZDooMzM2MjE5MTE4OTMpKSmKAgCSAgCaAgxkZXNrdG9wLW1hcHOqAgszMzYyMTkxMTg5M7ACAQ%3D%3D&sll=50.263105%2C53.215754&sspn=0.526884%2C0.293537&text=%7B%22text%22%3A%22%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%2233621911893%22%5D%7D%5D%7D&utm_source=share&z=10" },
  { address:"ул. Тухачевского, 84",   meta:"10:00–00:00",        photo:"store-22.jpg", map:"https://yandex.ru/maps/org/sputnik/81065593784/?display-text=%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA&ll=50.263105%2C53.215754&mode=search&sctx=ZAAAAAgBEAAaKAoSCcQLIlLTDElAESAJ%2B3YSmUpAEhIJ%2BWcG8YEd1z8ROX09X7NcwD8iBgABAgMEBSgKOABAM0gBagJydZ0BzczMPaABAKgBAL0BxcQImsIBZdqSkrD5A%2F3lpfWtAv%2Fkyui7A7GHtu%2B5AfSr9Zq1Aeb%2F65qfAb3z%2BcrkBdWojb7hA9aq0J6zA5L21PHPA7%2Bc5Ku9BcXwwvj2AeCtqvT1BNqRq7rXBbjJ3JhGuJeL%2F60Cl9Ls1r8BggIaKChjaGFpbl9pZDooMzM2MjE5MTE4OTMpKSmKAgCSAgCaAgxkZXNrdG9wLW1hcHOqAgszMzYyMTkxMTg5M7ACAQ%3D%3D&sll=50.263105%2C53.215754&sspn=0.526884%2C0.293537&text=%7B%22text%22%3A%22%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%2233621911893%22%5D%7D%5D%7D&utm_source=share&z=10" },
  { address:"3-й пр., 50А",   meta:"09:00–23:00",             photo:"store-23.jpg", map:"https://yandex.ru/maps/org/sputnik/135660865882/?display-text=%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA&ll=50.263105%2C53.215754&mode=search&sctx=ZAAAAAgBEAAaKAoSCcQLIlLTDElAESAJ%2B3YSmUpAEhIJ%2BWcG8YEd1z8ROX09X7NcwD8iBgABAgMEBSgKOABAM0gBagJydZ0BzczMPaABAKgBAL0BxcQImsIBZdqSkrD5A%2F3lpfWtAv%2Fkyui7A7GHtu%2B5AfSr9Zq1Aeb%2F65qfAb3z%2BcrkBdWojb7hA9aq0J6zA5L21PHPA7%2Bc5Ku9BcXwwvj2AeCtqvT1BNqRq7rXBbjJ3JhGuJeL%2F60Cl9Ls1r8BggIaKChjaGFpbl9pZDooMzM2MjE5MTE4OTMpKSmKAgCSAgCaAgxkZXNrdG9wLW1hcHOqAgszMzYyMTkxMTg5M7ACAQ%3D%3D&sll=50.263105%2C53.215754&sspn=0.526884%2C0.293537&text=%7B%22text%22%3A%22%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%2233621911893%22%5D%7D%5D%7D&utm_source=share&z=10" }
];

/* ============================================================
   Дальше можно не трогать — рендер и логика слайдера
   ============================================================ */
(function () {
  // Год в подвале
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var track   = document.getElementById('sliderTrack');
  var dotsBox = document.getElementById('sliderDots');
  var counter = document.getElementById('sliderCounter');
  var slider  = document.getElementById('storeSlider');
  if (!track || !slider) return;

  var prevBtn = slider.querySelector('.slider-arrow.prev');
  var nextBtn = slider.querySelector('.slider-arrow.next');

  // 1) Собираем слайды из массива
  STORES.forEach(function (s, i) {
    var slide = document.createElement('div');
    slide.className = 'slide';

    var badgeHTML = s.badge ? '<span class="badge">' + s.badge + '</span>' : '';
    var loadingAttr = i === 0 ? 'eager' : 'lazy';

    // размытая копия фото на фоне
    var blurHTML =
      '<img class="slide-photo-blur" src="' + s.photo + '" alt="" aria-hidden="true" ' +
      'loading="' + loadingAttr + '" onerror="this.remove()">';

    // основное фото по центру
    var mainHTML =
      '<img class="slide-photo-main" src="' + s.photo + '" alt="' + s.address + '" ' +
      'loading="' + loadingAttr + '" onerror="this.remove()">';

    slide.innerHTML =
      '<div class="slide-photo">' +
        blurHTML +
        '<span class="ph">Фото магазина</span>' +
        badgeHTML +
        mainHTML +
      '</div>' +
      '<div class="slide-caption">' +
        '<div class="slide-address">' + s.address + '</div>' +
        '<div class="slide-meta">' + s.meta + '</div>' +
      '</div>';

    track.appendChild(slide);
  });

  var slides = Array.prototype.slice.call(track.querySelectorAll('.slide'));
  if (!slides.length) return;

  // Если магазин всего один — слайдер не нужен
  if (slides.length < 2) {
    if (dotsBox) dotsBox.remove();
    if (counter) counter.remove();
    if (prevBtn) prevBtn.remove();
    if (nextBtn) nextBtn.remove();
    return;
  }

  // 2) Точки-индикаторы
  var dots = slides.map(function (_, i) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'slider-dot';
    b.setAttribute('aria-label', 'Магазин ' + (i + 1));
    b.addEventListener('click', function () { goTo(i); });
    dotsBox.appendChild(b);
    return b;
  });

  function width() { return track.clientWidth || 1; }
  function index() { return Math.round(track.scrollLeft / width()); }

  function goTo(i) {
    i = Math.max(0, Math.min(slides.length - 1, i));
    track.scrollTo({ left: i * width(), behavior: 'smooth' });
  }

  function update() {
    var i = index();
    dots.forEach(function (d, k) { d.classList.toggle('active', k === i); });
    if (counter) counter.textContent = (i + 1) + ' / ' + slides.length;
    prevBtn.classList.toggle('hidden', i === 0);
    nextBtn.classList.toggle('hidden', i === slides.length - 1);
  }

  var ticking = false;
  track.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { update(); ticking = false; });
  }, { passive: true });

  prevBtn.addEventListener('click', function () { goTo(index() - 1); });
  nextBtn.addEventListener('click', function () { goTo(index() + 1); });

  window.addEventListener('resize', function () {
    track.scrollTo({ left: index() * width(), behavior: 'auto' });
  });

  // Клик по фото — открыть точку на карте (если задана)
  track.addEventListener('click', function (e) {
    var slide = e.target.closest('.slide');
    if (!slide) return;
    var i = slides.indexOf(slide);
    var s = STORES[i];
    if (s && s.map) window.open(s.map, '_blank', 'noopener');
  });

  update();
})();