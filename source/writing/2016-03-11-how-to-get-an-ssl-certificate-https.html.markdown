---
itemtype: WebPage
title: How to Get an SSL Certificate (HTTPS) for Your Business
description: Learn how to get the green address bar and padlock for your website with an OV or EV SSL certificate, and secure your business website's connection over HTTPS.
date: 2016-03-11
tags: business, guides, https, ssl, website
---

Look in the URL bar of your browser. See the green box with a padlock followed by a similarly green "https"? That indicates your connection to this website is secure (plus it looks pretty legit). In this article we'll give you the rundown of how to get your own green bar &ndash; known as an SSL (or TLS) certificate &ndash; where to buy one, and in a future post, how to install one on your website.

## What is HTTPS and Why Should I Care? 

<a href="https://en.wikipedia.org/wiki/HTTPS" title="Wikipedia — HTTPS" target="_blank">HTTPS</a> (otherwise known as Hyper Text Transfer Protocol Secure) is a secure connection between your browser and a website, where all communications between you and the web server are encrypted. This greatly reduces so-called <a href="https://en.wikipedia.org/wiki/Man-in-the-middle_attack" title="Wikipedia — Man-in-the-middle attack" target="_blank">man-in-the-middle attacks</a>, where a third-party intercepts your communications and can steal or alter your data.

In the past HTTPS was found almost exclusively on eCommerce platforms and other websites that require or store sensitive personal information (banks, eBay, Amazon, etc.). More recently, however, it's become a best practice for any business website as a method to verify the company's authenticity and establish user trust; and if that's not enough, it can potentially give your website a boost in <a href="https://googlewebmastercentral.blogspot.com/2014/08/https-as-ranking-signal.html" title="HTTPS as a Ranking Signal" target="_blank">Google's search results</a>.


## Types of SSL Certificates

So you're sold on the green bar, now where to start? To secure your website you'll need an <a href="https://en.wikipedia.org/wiki/Transport_Layer_Security" title="Wikipedia — Transport Layer Security" target="_blank">SSL certificate</a>, a cryptographic key that verifies your company's authenticity. The SSL certificate is what the browser uses to verify a domain belongs to a particular organization and establish the HTTPS connection. SSLs come in 3 flavors: DV (Domain Validation), OV (Organization Validation), and EV (Extended Validation a.k.a. the green bar). As a business you'll want to get OV or EV, since Domain Validation (DV) doesn't verify any of your company's details and therefore offers very little security.

## How Many Domains Can I Secure?

With OV (Organization Validation) certificates, there are certain types that secure unlimited subdomains (subdomain.yourdomain.com), known as <a href="https://www.namecheap.com/security/ssl-certificates/comodo/premiumssl-wildcard.aspx" title="Namecheap | Comodo PremiumSSL Wildcard Certificate" target="_blank">wildcard certificates</a>, and others, known as <a href="https://www.namecheap.com/security/ssl-certificates/comodo/multi-domain-ssl.aspx" title="Namecheap | Comodo Multi-Domain SSL Certificate">multi-domain certificates</a>, that secure up to 100 different unique domains on the same or different servers. Unfortunately OV certificates don't offer the green bar (just a green "https"), and EV (Extended Validation) certificates, which do, can only secure a single domain at a time, so choose wisely (or choose both).


## Getting a D-U-N-S Number

Get a what? Before you begin the process of buying an OV or EV SSL, you'll want to first get a <a href="https://iupdate.dnb.com/" title="Dun & Bradstreet — Get a D-U-N-S Number" target="_blank">D-U-N-S number</a>, a unique identifier for your company through <a href="http://www.dnb.com/" title="Dun & Bradstreet | Business Information | Credit Reports" target="_blank">Dun & Bradstreet</a> which enables third-parties &ndash; in this case an SSL certificate issuing authority &ndash; to verify your business's information. Getting a free D-U-N-S (or DUNS) number takes about 30 days, but you can pay a fee to speed up processing time if desired. Beware, their online system is rather archaic (Chrome is not supported), and about a day after your submission someone will call you to verify all your business information, including your name, address, phone number, industry, number of employees and incept date.

<a href="https://iupdate.dnb.com/" title="Dun & Bradstreet — Get a D-U-N-S Number" target="_blank">Get a D-U-N-S Number</a>

## Where to Buy an SSL Certificate

SSL prices can range quite a bit, and depending on your needs you may want to shop around. We ended up going with a Comodo InstantSSL EV certificate (from Comodo's <a href="https://www.instantssl.com/" title="InstantSSL | SSL Certificates from Comodo" target="_blank">InstantSSL.com</a>) clocking in at around $100 per year, but if you have your domain through Namecheap (and no special characters in your company's name like an ampersand ;) they have pretty competitive pricing, especially on OV and wildcard certificates.

<a href="https://www.instantssl.com/" title="InstantSSL | SSL Certificates from Comodo" target="_blank">Comodo InstantSSL</a> (our provider)<br>
<a href="https://www.rapidssl.com/buy-ssl/" title="RapidSSL | SSL Certificates and Wildcard SSL" target="_blank">RapidSSL</a><br>
<a href="https://www.namecheap.com/security/ssl-certificates.aspx" title="Namecheap | SSL Certificates" target="_blank">Namecheap SSL</a>

## Verification Process

Once you purchase an SSL certificate the issuing authority must verify your business. They may ask for your D-U-N-S number (or a similar third-party validation service such as Manta) in the online purchase form, or via a followup email. After validating your company info they may — read probably — call you to make sure you actually exist. Note, when Comodo called us they asked for a second person to verify over the phone the contact person's (myself) name and business position. So be prepared for a phone call with little to no warning; they emailed about 5 – 10 minutes before calling, and have a friend/employee on hand to corroborate your details. If all goes well soon after you should receive an email with your shiny new SSL certificate.

## Setting Up the SSL Certificate on your Website

A topic we're actively working on for a future post, but until then, if you're using a static site generator like <a href="https://middlemanapp.com/" title="Middleman: Hand-crafted frontend development" target="_blank">Middleman</a> or <a href="https://jekyllrb.com/" title="Jekyll • Simple, blog-aware, static sites" target="_blank">Jekyll</a>, here is a great resource explaning how to get your SSL cert up and <a href="https://bryce.fisher-fleig.org/blog/setting-up-ssl-on-aws-cloudfront-and-s3/" title="Setting Up SSL on AWS CloudFront and S3 | Bryce Fisher–Fleig" target="_blank">running on AWS CloudFront</a>.






