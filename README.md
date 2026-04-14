# Ausbildungsmesse

Dieses VueJS-Projekt kann zur Vorführung auf z.B. Ausbildungsmessen genutzt werden.

## Ausführung

1. Wenn `bun` installiert ist, kann das Projekt direkt mit `bun dev` gestartet werden.
   
   => Diese ist dann unter http://localhost:5173 erreichbar!
2. Die App kann mit `docker compose build && docker compose up` gestartet werden.
   
   => Diese ist dann unter http://localhost:3210 erreichbar!

## Setup

- `bun` installieren
- `bun install` installiert all `npm`-Abhänigkeiten (=> viel schneller als `npm install`)

## Development

Änderungen am Projekt hinzufügen und 

```sh
bun dev
```
ausführen

### Type-Check, Compile and Minify for Production

```sh
bun run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
bun lint
```
