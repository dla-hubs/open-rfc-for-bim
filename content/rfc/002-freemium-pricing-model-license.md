---
seq: 2
title: <DRAFT> Freemium pricing model for BIM software license 
publishDate: 2022-12-30
lastmod: 2022-12-30 
tags: ["license", "Autodesk", "Revit","ArchiCAD", "Graphisoft"]
sections: ["Motivation", "Current", "Proposal"]
summary: A proposal to introduce a freemium pricing model to the BIM software like modern SAASs to attract wider audiences to not only use the software but also for allowing more software developers to access SDKs more openly. 
closed: false 
---

# Motivation

---

Costs to purchase licenses of BIM software are often considered expensive and
raises a bar for companies of different sizes to introduce the BIM process. This
RFC aims to address that issue by requesting the software companies to introduce
a freemium pricing model like the modern SaaS to make the BIM software more
accessible.

&nbsp;

The aim of making the software more accessible is twofold. On one hand, a
cheaper license gives opportunities for a wider range of users to start
incorporating the BIM process. On the other hand, it aims to foster a more
competitive software development environment by making the SDK available for
free, which is a common practice in modern software development.

# Current

---

Autodesk provides an LT (lite) version of Revit license, however, it doesn't
address a concern of the motivation for this RFC since it's not very affordable
and it doesn't provide access to the SDK.

# Proposal

---

## The proposed license model


|                             |    Free     |        Starter        |     Enterprise      |
| :-------------------------- | :---------: | :-------------------: | :-----------------: |
| **Price**                   |    Free     |      Affordable       | The current pricing |
| **Functionality**           | Basic + SDK |      Basic + SDK      |    Full package     |
| **Cloud-base CDE**          | Unsupported |       Supported       |      Supported      |
| **Number of Collaborators** |   up to 2   | (more than free tier) |      Unlimited      |

&nbsp;

## Limitations for Free & Starter
To differentiate from the full package, some level of limitations should be
imposed on the free and starter tiers. Other than limiting modeling
functionalities, imposing limitations on the scales and complexities of
buildings should be considered instead.
