---
slug: tailscale-jeedom-acces-distant
title: "Jeedom from anywhere: why Tailscale changes everything"
authors: zyg0m4t1k
tags: [tailscale, securite]
description: No more port forwarding headaches or DynDNS hassle. Tailscale gives you simple, secure remote access to Jeedom without opening a single port on your router.
image: /img/blog/tailscale-jeedom.svg
---

Accessing your Jeedom from outside your home has long been one of the most painful topics in home automation. Port forwarding, DynDNS, SSL certificates, firewall rules… a series of hurdles that put off beginners and waste time for everyone else. Tailscale solves all of it in one go.

<!--truncate-->

## The problem with classic remote access {#probleme-acces-distant}

To reach Jeedom from outside, the traditional approach requires several steps:

- **Open a port** on your router (usually 80 or 443) and forward it to Jeedom
- **Set up dynamic DNS** if your ISP changes your public IP regularly
- **Configure HTTPS** to avoid sending your password in plain text
- **Maintain all of it** when the router changes, the IP changes, or the certificate expires

On top of that, every open port is an additional attack surface exposed to the internet.

## Tailscale: the VPN that doesn't feel like a VPN {#tailscale-vpn}

[Tailscale](https://tailscale.com) is a private network built on **WireGuard**, the most modern and fastest VPN protocol available. What sets it apart:

- **Zero network configuration**: no port to open, no router rule to touch
- **P2P connection**: devices connect directly to each other whenever possible, without going through a central server
- **Automatic HTTPS**: Tailscale can generate certificates for your devices via its *Serve* feature
- **MagicDNS**: every device on the Tailscale network (the *tailnet*) is reachable by name, not IP address

In practice: you install Tailscale on your phone and on the Jeedom server. Both join your tailnet. From your phone, no matter where you are in the world, you reach Jeedom as if it were on your local network.

## The Tailscale plugin for Jeedom {#plugin-tailscale}

The [Tailscale plugin](/docs/plugins/tailscale/) goes further than simple connectivity. It integrates Jeedom at the heart of the tailnet:

### Device supervision {#supervision}

From Jeedom, you see the real-time status of all your Tailscale devices: online or offline, last activity, IP address, hostname, operating system. Useful for monitoring remote Raspberry Pis, NAS devices, or servers in other locations.

### Subnet Router {#subnet-router}

The **Subnet Router** feature lets Jeedom announce all or part of your local network to the tailnet. Result: from your phone on 4G, you can directly reach devices on your home network (IP cameras, NAS, printer…) without a dedicated VPN for each one.

Whole network via `/24` or a single device via `/32`? [The dedicated Subnet Router article](/blog/tailscale-subnet-router-routes-annoncees) covers both approaches with a concrete Plex server example.

### Serve: automatic private HTTPS {#serve}

**Tailscale Serve** exposes Jeedom over HTTPS on your tailnet with an automatic certificate. URL like `https://jeedom.mynetwork.ts.net` — no router changes, no Let's Encrypt to manage.

### Funnel: controlled public exposure {#funnel}

Need public access (webhook, temporary share)? **Tailscale Funnel** exposes a service on the internet via Tailscale relays, still without opening any port.

## Why it's better {#pourquoi-mieux}

| Classic method | With Tailscale |
|---|---|
| Port open on the router | No open ports |
| DynDNS to maintain | Automatic MagicDNS |
| SSL certificate to renew | Certificate managed by Tailscale |
| Exposed attack surface | Encrypted private network |
| Complex configuration | 10-minute setup |

## Getting started {#pour-commencer}

1. Create an account on [tailscale.com](https://tailscale.com) (free for personal use)
2. Install the [Tailscale plugin](https://market.jeedom.com/index.php?v=d&p=market_display&id=4681) from the Jeedom Market — it handles installing Tailscale on your server
3. Authenticate the plugin with an OAuth token
4. Install Tailscale on your phone

The [full plugin documentation](/docs/plugins/tailscale/) covers every step as well as advanced configuration (Subnet Router, Serve, Funnel, DNS).

---

Tailscale is today one of the most solid building blocks you can add to a home automation setup. With the Tailscale plugin, it delivers a level of comfort and security that's hard to match any other way.
