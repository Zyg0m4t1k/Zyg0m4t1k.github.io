---
slug: ntfybridge-tailscale-notifications-sans-port
title: "NtfyBridge + Tailscale: Jeedom notifications without opening a single port"
authors: zyg0m4t1k
tags: [ntfybridge, tailscale, notifications, securite]
description: "NtfyBridge includes a native Tailscale assistant that configures everything automatically. Your ntfy server stays private, no open ports, free HTTPS."
image: /img/blog/ntfybridge-tailscale.svg
---

To receive Jeedom notifications on your phone, the ntfy server built into NtfyBridge needs to be accessible from outside. The classic approach — reverse proxy + SSL certificate + open port — works but requires configuration. The Tailscale assistant built into NtfyBridge removes all that complexity.

<!--truncate-->

## How NtfyBridge works {#rappel-ntfybridge}

[NtfyBridge](/docs/plugins/ntfybridge/) is a Jeedom plugin that integrates an [ntfy](https://ntfy.sh) server directly into your installation. It enables:

- **Jeedom → phone**: sending alerts, photos, reports, files
- **Phone → Jeedom**: triggering commands, asking questions, getting states
- **Family Chat**: private messaging between household members (topic of the next article)

For all of this to work, the ntfy app on your phone must be able to reach the NtfyBridge server. When you're home on Wi-Fi, that's trivial. From outside, that's where things get complicated.

## The problem with public exposure {#probleme-exposition}

To expose NtfyBridge on the internet, the traditional approach requires:

1. A reverse proxy (Apache, Nginx, Caddy)
2. A domain name
3. An SSL certificate (Let's Encrypt)
4. Port 443 open on the router
5. Maintaining all of it over time

NtfyBridge includes a **reverse proxy assistant** that automates this configuration. But it's still non-trivial network setup, and it still exposes a public port.

## The alternative: Tailscale {#alternative-tailscale}

With Tailscale, the NtfyBridge server stays **entirely private** — accessible only from devices on your tailnet. Your phone reaches the server via the Tailscale VPN, without any port being opened to the outside world.

The advantages:

- **No exposed port** on your router
- **Automatic HTTPS** via Tailscale Serve certificates
- **No domain needed** — the URL is `.ts.net`
- **Zero maintenance** — certificates renew themselves

## NtfyBridge's Tailscale assistant {#assistant-tailscale}

NtfyBridge v2 includes a **Tailscale configuration assistant** directly in the admin interface. The procedure boils down to:

1. Open the NtfyBridge server configuration
2. Choose the **"Embedded + Tailscale"** mode
3. Click the assistant — it automatically detects the presence of the Tailscale plugin
4. Choose your Jeedom's URL on the tailnet
5. Save and restart the daemon

NtfyBridge then automatically configures Tailscale Serve to expose the ntfy server over HTTPS on your tailnet. The final URL looks like `https://jeedom.mynetwork.ts.net:2586`.

## Phone configuration {#config-telephone}

On the ntfy client side, the setup is identical to any other server — just enter the Tailscale URL instead of a public URL:

```
Server: https://jeedom.mynetwork.ts.net:2586
Username / Password: (your NtfyBridge credentials)
```

Tailscale must be active on the phone for the connection to work. In practice, you leave Tailscale running in the background — it uses very little battery with WireGuard.

## Two plugins, better together {#plugins-ensemble}

| Feature | Tailscale only | NtfyBridge only | Both |
|---|---|---|---|
| Remote Jeedom access | ✅ | — | ✅ |
| Push notifications | — | ✅ (port required) | ✅ no port |
| Family Chat | — | ✅ (port required) | ✅ private |
| Commands from mobile | — | ✅ | ✅ |
| Zero open ports | ✅ | — | ✅ |

The combination gives you a **fully private** home automation setup: Jeedom is never directly exposed on the internet, notifications travel through an encrypted private channel, and your network stays under control.

## Going further {#pour-aller-plus-loin}

- [NtfyBridge documentation](/docs/plugins/ntfybridge/) — "Embedded + Tailscale mode" section
- [Tailscale documentation](/docs/plugins/tailscale/) — Serve configuration
- [NtfyBridge quick start guide](/docs/plugins/ntfybridge/setup)
