---
seq: 1
title: RFC Process
publishDate: 2022-12-26
lastmod: 2022-12-26 
tags: ["general"]
sections: ["Motivation", "Lifecycle", "Review process", "Modification", "Format"]
summary: A general guideline for wiring up new RFC and also sets the process from initiatination to the acceptance of a new RFC on the platform as well as its lifecycle.
closed: false 
---

# Motivation

---

A guideline for managing all the aspects of RFCs on the platform. Any
suggestions to change how the RFC process should work should be done via
discussion and PR on this RFC.

# Lifecycle

---

An ideal case for a successful RFC would look like this:

1. A submission of RFC draft via PR
2. An initial review by the maintainer
3. A discussion board on Git page for discussion
4. Receive the comments from the maintainer and revise the RFC
5. Send PR
6. Published on Open RFC for BIM.

&nbsp;

The initial state for all the RFCs is Open and may become closed in the future
when the RFC is no longer relevant for one or more of the following reasons.

- The issue outlined in the RFC has been fixed following the proposed proposal
- The practice proposed in the RFC has become widely accepted in the industry.

# Review process

---

Currently, the initial review process is done by the maintainer alone as the
project is still at a very early stage. A meaningful review process shall be
developed as the platform grows.

# Modification

---

The existing RFC can be modified via PR.

# Implmentation

---

Since the platform doesn't own or develop any of standards, guidance, or
software which are subject to the RFCs, it's up to the audiences of the platform
to decide how to implement or use any of the RFCs on the platform with or
without the attributions to the platform and the RFC.

# Format

---

## Introduction

All new RFCs need to be written using the official template
[000a-rfc-template.md](https://github.com/dla-hubs/open-rfc-for-bim/blob/main/content/rfc/000a-rfc-template.md).

## Header

This is where all the basic info of the RFC goes and it should be filled as per
the guide below.

```yaml
---
# RFC Number - a number to be assigned upon the successful PR.
seq: 0 

# RFC Title - keep it as concicse as possible.
title: RFC template

# Published date for RFC - to be modfied after the PR.
publishDate: 2022-12-05

# Last modified date since the first publication 
lastmod: 2023-08-21 

# Hashtags - 
tags: ["createyourown"]

# List out sections for the navbar.
sections: ["Motivation", "Current", "Proposal", "Workarounds"]

# Brief description of the RFC around 140 words.
summary: This is a minimum template for all new RFCs, duplicate this markdown file (.md) to start writing up your RFC!
closed: false 
---
```

## Section and Body

The body should consist of clear headers for each sections.

```markdown
# Title of section (no title case)

---

body text
```

Each RFC should consist of at least 3 sections: Motivation, Issue, & Proposal as
included in the template. Any other sections could be added to suits the needs
of the RFC.

## Stylying

A general example of styling texts can be found in
[000b-markdown-check.md](https://github.com/dla-hubs/open-rfc-for-bim/blob/main/content/rfc/000b-markdown-check.md).
