---
title: VulNyx Manager靶机复盘
author: LingMj
date: 2025-01-16
categories: [VulNyx]
tags: [SNMP,SMB]
description: 难度-Hard
typora-root-url: ./..\assets\images
---

# VulNyx Manager靶机复盘

## 概述

这是一篇关于VulNyx Manager靶机的详细复盘文章。该靶机难度为Hard级别，主要涉及SNMP和SMB协议的安全测试。

## 环境准备

在进行靶机测试之前，需要准备以下环境：

- Kali Linux虚拟机
- 目标靶机IP地址
- 必要的渗透测试工具

## 信息收集

### 端口扫描

首先使用nmap进行端口扫描：

```bash
nmap -sS -sV -O 192.168.1.100
```

扫描结果显示以下开放端口：
- 22/tcp SSH
- 80/tcp HTTP
- 139/tcp SMB
- 445/tcp SMB
- 161/udp SNMP

### SNMP枚举

发现SNMP服务后，尝试进行SNMP枚举：

```bash
snmpwalk -v2c -c public 192.168.1.100
```

通过SNMP枚举获得了重要的系统信息。

## 漏洞利用

### SMB漏洞利用

发现SMB服务存在已知漏洞，使用相应的exploit进行利用。

### 权限提升

获得初始访问权限后，通过多种方法进行权限提升。

## 总结

通过这次靶机练习，学习了：

1. SNMP协议的安全测试方法
2. SMB服务的漏洞利用
3. 权限提升技术
4. 后渗透技术

## 参考资料

- [SNMP安全测试指南](https://example.com)
- [SMB漏洞利用手册](https://example.com)
