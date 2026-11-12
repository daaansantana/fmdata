# Notas da exploração da API — 12/11/2026

Base: https://fmdata-api.onrender.com (a doc diz localhost:3000, é erro dela)

## Tamanho
- /scrobbles: 51.706 registros, 26 MB, 4,8s com a API acordada
- /scrobbles/amostra: 100 registros, 50 KB
- Hospedagem gratuita: a API adormece, a primeira chamada é muito mais lenta

## Formato
- date_uts em SEGUNDOS (10 dígitos) -> new Date(date_uts * 1000)
- O Scrobble real tem 13 campos; o guia lista 10 (faltam os 3 mbid e track_url)
- tags e similar_artists: texto separado por vírgula
- tracklist_names: separado por ponto e vírgula
- loved: 0 ou 1, não booleano

## Parâmetros
- /scrobbles e /scrobbles/amostra não aceitam parâmetro nenhum
- /artist-info: artist | /album-info: artist + album | /track-image: artist + album + track
- Todos os lookups são case-insensitive

## Erros
- Corpo: {"error": {"code": "...", "message": "..."}}
- 400 = missing_parameter | 404 = not_found

## Casos limite na amostra de 100
- nowplaying: true -> 1 (e é o mesmo registro com date_iso e date_uts null)
- image_url null -> 0 | tags vazia -> 0 (mas ambos nuláveis no schema)
- 22 artistas distintos
