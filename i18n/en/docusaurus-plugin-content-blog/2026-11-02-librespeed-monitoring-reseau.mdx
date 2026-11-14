---
slug: librespeed-monitoring-reseau-jeedom
title: "LibreSpeed: much more than a speedtest in Jeedom"
authors: zyg0m4t1k
tags: [librespeed, reseau, monitoring]
description: The LibreSpeed plugin goes far beyond a simple speed test. Discover how it turns Jeedom into a full network monitoring tool — internet connection, LAN links, VPN and multi-site.
image: /img/blog/librespeed-monitoring.svg
---

Running a speed test — anyone can do that. What changes with the LibreSpeed plugin is the **monitoring layer** built on top: automatic history, degradation alerts, and above all the ability to measure links **between your own machines**, not just towards the internet.

<!--truncate-->

## Speedtest or network monitoring? Both. {#speedtest-or-monitoring}

The question comes up often: why LibreSpeed when the Speedtest plugin already exists?

The answer has two parts.

First, LibreSpeed CLI is **open source end to end**. No registration, no account, no quota limit — and the ability to point to your own test servers. That matters the moment you want to measure performance outside of the internet.

Second, and this is the key point, LibreSpeed introduces a second equipment type entirely absent from the Speedtest plugin: **network links**. This is no longer about measuring your throughput to a distant datacenter, but measuring performance **between two machines in your infrastructure** — Jeedom box to NAS, site A to site B, Jeedom to a Raspberry Pi in the garage.

## Measuring internet: what the plugin does differently {#measuring-internet}

On the classic speed test side, LibreSpeed stands out mainly for its **server flexibility**.

By default, the plugin uses the public LibreSpeed servers spread around the world. But if your Jeedom is in a datacenter, on a VPS, or behind an MPLS link, you can point to **your own test server** hosted wherever you like. A Docker container is enough:

```bash
docker run -d \
  --name librespeed \
  --restart unless-stopped \
  -p 8088:8080 \
  ghcr.io/librespeed/speedtest:latest
```

The speed test equipment reports six metrics: download, upload, ping, jitter, packet loss and a **global score out of 10**. That score is the key to automated monitoring — more on that below.

## The real novelty: network links {#network-links}

This is the feature that sets LibreSpeed apart from everything that existed in Jeedom for network monitoring.

A **Network Link** equipment measures performance **point to point between two machines**. Each machine plays a role: client (the one running the test) or server (the one receiving the test). Both can hold both roles for bidirectional tests.

### Concrete use cases {#use-cases}

**Monitor the LAN link between Jeedom and a NAS**

Your NAS stores Jeedom backups and camera recordings. If throughput between Jeedom and the NAS drops (faulty cable, saturated switch, 100 Mbit/s negotiation instead of 1 Gbit/s), transfers slow down without anyone noticing. A network link scheduled every night catches the problem before it becomes critical.

**Monitor a VPN link between two sites**

You have a second site (holiday home, office) connected via VPN. The available bandwidth determines what's possible: streaming, file sync, camera access. A network link between the two sites gives an objective measure of the link, beyond the simple "it works / it doesn't".

**Check bandwidth to a remote Raspberry Pi**

Jeedom controls a Raspberry Pi in the garage (gate, lighting, temperature probe). Is the Wi-Fi link between the two sufficient? The network link answers with numbers.

### Measurements per direction and protocol {#measurements}

For each configured machine pair, the plugin creates commands for each active combination:

- **A→B** and **B→A** (if bidirectional enabled)
- **IPv4** and **IPv6** (if both targets have a global IPv6 address)

Up to 16 numerical metrics (download, upload, ping, jitter × 4 combinations), in addition to target statuses and a full test command.

## Setting up automatic monitoring {#automatic-monitoring}

This is where Jeedom makes all the sense. LibreSpeed commands work like any other command in scenarios.

### Alert on internet degradation {#internet-alert}

The global score is the most practical indicator. A score below 5/10 signals a seriously degraded connection.

> **Scenario**: if **Score** < 5, send a notification "Internet connection degraded — score: #[Network][LibreSpeed][Score]#/10"

You can refine based on your usage. If you do a lot of video calls:

> If **Upload** < 5 OR **Ping** > 50, notify "Poor conditions for video conferencing"

### Alert on an internal network link {#internal-link-alert}

> **Scenario**: if **A→B IPv4 Download** < 100 OR **A→B IPv4 Ping** > 10, notify "Link to NAS degraded"

### History and graphs {#history}

All numerical commands can be historized. After a few weeks of data, Jeedom history graphs reveal patterns impossible to see otherwise:

- Recurring throughput drops at certain hours (neighbourhood traffic on fibre)
- Progressive degradation of a Wi-Fi link (growing interference)
- Impact of a firmware update on switch performance

## LibreSpeed vs Speedtest: which to choose? {#comparison}

Both plugins coexist and don't do exactly the same thing.

| | Speedtest | LibreSpeed |
|---|---|---|
| **Servers** | speedtest.net | Public LibreSpeed or self-hosted |
| **No registration** | No (quota) | Yes |
| **Custom server** | No | Yes (LAN, VPN) |
| **Network links** | No | Yes |
| **Dependencies** | Python + venv | Single Go binary |
| **IPv6** | Limited | Native |

If you only need to monitor your internet connection to public servers, both do the job. If you want to go further — internal server, LAN measurements, multi-site infrastructure — LibreSpeed is the right choice.

## Getting started {#getting-started}

1. Install the [LibreSpeed plugin](https://market.jeedom.com/index.php?v=d&p=market_display&id=4695) from the Market
2. Install dependencies (a Go binary, no Python required)
3. Create a **Speed Test** equipment to start with your internet connection
4. Enable the cron (every 4 hours is a good starting cadence)
5. Historize the Download, Upload, Ping and Score commands
6. Add a **Network Link** equipment if you have machines to monitor

The [full plugin documentation](/docs/plugins/librespeed/) details component installation on remote targets, custom server configuration and all advanced use cases.

---

The LibreSpeed plugin is currently in beta on the Market. Now is a good time to test it and share your feedback on the Community forum.
