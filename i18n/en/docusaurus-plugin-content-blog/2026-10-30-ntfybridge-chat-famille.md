---
slug: ntfybridge-chat-famille
title: "Family Chat: the private messaging built into NtfyBridge"
authors: zyg0m4t1k
tags: [ntfybridge, notifications]
description: NtfyBridge includes Family Chat, a private messaging PWA for your household. Dedicated channels, push notifications, photo and file sharing — all self-hosted.
image: /img/blog/ntfybridge-chat.svg
---

NtfyBridge is more than just sending Jeedom alerts to your phone. It also includes **Family Chat**, a private messaging app hosted directly on your installation. No third-party account, no data leaving your home.

<!--truncate-->

## What is Family Chat? {#quest-ce-que}

Family Chat is a **PWA** (Progressive Web App) built into NtfyBridge. It installs on your phone's home screen like a real app, but runs in the browser — no App Store or Google Play involved.

It's designed for communication within a household or a small group: family, flatmates, a team. The core idea is to **centralise home-related exchanges** in a dedicated space, entirely under your control.

## Features {#fonctionnalites}

### Discussion channels {#salons}

Family Chat is organised into **themed channels**. For example:

- `#home` — dialogue with home automation (commands, states, confirmations)
- `#alerts` — Jeedom notifications (motion, sensors, errors)
- `#family` — free messaging between household members

Each member can subscribe to the channels that matter to them and receive per-channel push notifications — handy if you don't want to be disturbed by technical alerts.

### Push notifications {#push-notifications}

Push notifications work **without the official ntfy app**. Family Chat manages its own push subscriptions via the browser. Each channel can be enabled or disabled independently in the app settings.

### File and photo sharing {#partage-fichiers}

Family Chat supports sending **photos and files** from a phone or PC. Drag-and-drop from a computer, camera from mobile — files are hosted on your NtfyBridge server, not on a third-party cloud.

### Home automation integration {#integration-domotique}

The `#home` channel is bidirectional with Jeedom. NtfyBridge's **reply rules** and **action rules** apply to Family Chat messages too:

- Type `living room light` → Jeedom replies with the light state
- Type `close shutters` → Jeedom asks for confirmation then runs the command
- Automatic alerts (detection, reminders, reports) arrive in the dedicated channel

## Installation in 5 minutes {#installation}

Family Chat is included in NtfyBridge with nothing extra to install. Once the server is configured and exposed (via Tailscale or reverse proxy):

**On iOS:**
1. Open the Family Chat URL in Safari
2. Share menu → "Add to Home Screen"
3. Sign in with your NtfyBridge credentials

**On Android:**
1. Open the URL in Chrome
2. Menu → "Add to Home Screen"
3. Sign in

**On PC/Mac:**
1. Open the URL in Chrome or Edge
2. Install icon in the address bar (if available)
3. Or use directly in the browser

## Why not WhatsApp or Signal? {#pourquoi-pas-whatsapp}

The question is legitimate. Family Chat doesn't claim to replace a mainstream messenger for all communications. Its advantage is **co-location with home automation**:

- Jeedom alerts arrive directly in the same thread as family messages
- Home automation commands happen from the same interface as messages
- All data stays on your server — message history, photos, files
- No external account to create or maintain

For a household already using Jeedom, Family Chat avoids juggling a notification app (ntfy), a remote control tool, and a separate family messenger.

## With Tailscale: fully private access {#avec-tailscale}

Like ntfy notifications, Family Chat can be exposed **exclusively via Tailscale**. The app URL is then only accessible from devices on your tailnet — phones, tablets, PCs — never going through the internet.

This is the recommended setup to keep a family messenger entirely private and out of reach from the outside world.

## Going further {#pour-aller-plus-loin}

- [NtfyBridge documentation](/docs/plugins/ntfybridge/) — "Family Chat" section
- [Usage examples](/docs/plugins/ntfybridge/examples) — multi-user and multi-channel configuration
- [NtfyBridge + Tailscale](/blog/ntfybridge-tailscale-notifications-sans-port) — expose Family Chat without opening ports
