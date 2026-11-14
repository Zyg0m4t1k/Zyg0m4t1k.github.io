---
slug: tailscale-subnet-router-routes-annoncees
title: "Tailscale Subnet Router: whole local network or a single device?"
authors: zyg0m4t1k
tags: [tailscale, reseau, subnet-router]
description: Understanding announced routes with Tailscale Subnet Router. Open the entire local network with /24 or target a single device with /32 — a Plex server, a NAS, a camera.
image: /img/blog/tailscale-subnet-router.svg
---

The Subnet Router is the Tailscale feature that lets you reach devices on your local network without having to install Tailscale on each of them. But when configuring the routes to announce, a question comes up: should you open the whole network, or only the device you actually need?

<!--truncate-->

## How the Subnet Router works {#fonctionnement}

Without a Subnet Router, Tailscale only connects devices that have Tailscale installed. Your phone reaches Jeedom because both have Tailscale. But your Plex server, your NAS, your IP camera — they don't have Tailscale.

The Subnet Router changes that. By configuring it on Jeedom, you make Jeedom a **gateway** between your tailnet and your local network:

```
Phone on 4G (Tailscale active)
          ↓  encrypted VPN
     Jeedom at home  ← Subnet Router
          ↓  local network
     Plex: 192.168.1.40
```

From your phone, you open `http://192.168.1.40:32400` exactly as if you were home. The traffic passes through Jeedom transparently.

## The concept of an announced route (CIDR) {#cidr}

An announced route is an address range that Jeedom proposes to make accessible via the tailnet. It's written in **CIDR** notation: a network address followed by a mask.

Two practical cases:

| Notation | What's accessible |
|---|---|
| `192.168.1.0/24` | All devices from `192.168.1.1` to `192.168.1.254` |
| `192.168.1.40/32` | Only the device at address `192.168.1.40` |

The `/24` opens your entire local network. The `/32` targets a single device.

:::tip Finding your local network
From Jeedom, the Tailscale plugin detects and displays your local network in the **Subnet Router** tab. The address usually starts with `192.168.x.x` or `10.0.x.x`.
:::

## Opening everything with /24: for whom, and why {#reseau-complet}

Announcing `192.168.1.0/24` makes everything on your local network accessible at once: NAS, cameras, printer, router, smart TV…

**Advantages:**
- A single route to configure, once and for all
- No need to remember the IP addresses of individual devices
- Ideal for managing your network remotely (router admin interface, SSH to a Raspberry Pi, etc.)

**Disadvantages:**
- All authorised tailnet devices can reach your entire home
- If you share your tailnet with other people, the accessible surface is large

This choice works well for **personal use** where you're the only user of your tailnet.

## Targeting a single device with /32: the Plex example {#appareil-unique}

You have a Plex server at `192.168.1.40` and you want to reach it from outside to stream your films, without opening your whole network. The `/32` route is made for that.

**Advantages:**
- Minimal access: only that device is reachable
- If you share the tailnet with someone (a friend, a family member), they can access Plex without seeing the rest of your network
- Principle of least privilege: expose only what's necessary
- **No Plex Pass subscription needed** for remote access: Tailscale makes the connection appear local, which bypasses Plex's relay service and the subscription it requires. Also handy for installing Plex on a TV or an external box temporarily without paying for a Pass

**Disadvantage:**
- If you add a second device to share, you need to add a second route

### Concrete configuration for Plex {#config-plex}

In the **Subnet Router** tab of the Tailscale plugin:

1. Enter `192.168.1.40/32` in the custom route field (replace with your Plex's actual IP)
2. Click **Add** and confirm
3. Click **Approve routes** — the plugin sends the approval directly via the Tailscale API, without going through the web console (requires OAuth configured with `devices:core:read` and `devices:routes` permissions)
4. On your phone, open the Plex app and add the server manually at `http://192.168.1.40:32400`

:::warning Fixed IP required
With `/32`, you're targeting a precise address. If your Plex server changes IP (random DHCP assignment), the Subnet Router will stop working. Make sure to **assign a fixed IP** to your Plex in your router or modem's configuration.
:::

## Combining multiple routes {#plusieurs-routes}

Nothing stops you from announcing several targeted routes. If you have a Plex server and a NAS to expose:

```
192.168.1.40/32   ← Plex server
192.168.1.50/32   ← NAS
```

Add both routes in the plugin. The other devices on the network remain unreachable from the tailnet.

## The prerequisite: IP forwarding {#routage-ip}

For Jeedom to be able to forward traffic between Tailscale and the local network, **IP forwarding** must be enabled on the machine. The Tailscale plugin checks this status in the Subnet Router tab.

If the status shows an error, the [plugin documentation](/docs/plugins/tailscale/administration#subnet-router) details the two commands to run to enable it on Debian.

## Tailscale access rules (ACL) {#acl}

Announcing and approving a route isn't always enough. Tailscale applies **access rules** (ACLs) that define which tailnet devices can reach which destinations.

By default, new tailnets have a permissive rule that allows everything. But if you've customised your ACLs, verify that they authorise the relevant devices to reach the addresses you're announcing.

## Summary {#recapitulatif}

| Need | Route to announce |
|---|---|
| Access the entire local network | `192.168.1.0/24` |
| Access a single Plex server | `192.168.1.40/32` |
| Access Plex + NAS | `192.168.1.40/32` and `192.168.1.50/32` |

The rule is simple: **start with /32 if you have a single specific need**, switch to /24 if you regularly manage several devices from outside. Both approaches work perfectly with the Tailscale plugin.

The [full Subnet Router documentation](/docs/plugins/tailscale/administration#subnet-router) covers all configuration steps and common troubleshooting.
