# Elm Bun – Nice, Simple and Tasty

## What is this?

A means to just do either `bun build.js` (for production), or `bun dev.js` (for development). Just like that.

## Featuring

- Tailwind support!
- No `bun audit` warnings!
- `elm-janitor` patching done @ postinstall (that is, after `bun install`)
- True HMR for Elm[^1] without killing or restarting the app
- PLAIN AND SIMPLE configuration, no craziness

[^1]: The tailwind part of this is not yet quiiite working; that is – it _works_ as in "class names are changed on the fly", BUT tailwinds tree-shaking isn't re-run. Meaning: if you add a new tailwind class that's not already present in your app, you need to refresh for it to get added.

Made by hand, btw (I feel like I need to specify these days...)
