---
seq: 3
title: Clean naming conveiton for BIM elements
publishDate: 2023-01-27
lastmod: 2023-01-27 
tags: ["general", "convention", "naming"]
sections: ["Motivation", "Current", "Proposal"]
summary: Generally, the naming convention used in BIM today requires a high cognitive load because of its complexity. The RFC proposes a naming convention that could reduce this cognitive load.
closed: false 
---

# Motivation

---

Generally, the naming convention used in BIM today requires a high cognitive
load because of its complexity. The RFC proposes a naming convention that could
reduce this cognitive load.

&nbsp;

# Current

---

In most conventions, an organization name or a project name is often required to
be included in the naming of the various assets (or simply Family in the case of
Revit) as a prefix. This practice makes the name unnecessarily long and results
in a repetition of the obvious information that can be stored in a different
way.

Another problem is an abbreviation. The naming often relies on enigmatic
abbreviations that pose a lot of cognitive barriers in naming and understating
the names.

# Proposal

---

## Principles of clean naming convention

The following principles should be considered for making a clean naming
convention in BIM.

**The name should**

- Deliver the most useful information
- Be notated in the shortest way possible
- Avoid the abbreviations all together
- Offload static information to the parameters

**The name should not contain**

- Special characters
- Hard-coded information

## Should do:

**Deliver the most useful information**

All the names should be clear on their own, and they shouldn’t presuppose any
prior knowledge about the BIM standards. It should contain the most useful
information that can facilitate the user to choose the right one in the most
concise way possible.

For instance, a name like **“generic wall”** can already be very confusing. It’s
clear from the name that the element is for a generic (general) purpose but its
actual function in the project isn't clear. It is quite normal in architectural
projects to assign a nominal thickness to the wall without knowing or worrying
about what it actually is, especially at the early stages of the project. But,
the name generic doesn't quite suggest that. It rather signifies that the wall
is consisted to be a “generic” one rather than something to be considered and
changed into something sensible later on. An alternative word like
**“placeholder”** would clearly suggest that a wall was drawn only as a
placeholder and requires consideration later on.

To make it even more descriptive, it might be tempting to distinguish element
that is for exterior or interior use. However, such a distinction could cause
confusion I, say, one wall protrudes out from the building envelope. A better
solution would be to set up parameters to store such a piece of information.

&nbsp;

**Be notated in the shortest way possible**

In order to keep a line length short and also to make it more machine-friendly,
additional separators such as space (” “), underscore (\_), or hyphen (-) should
not be used in the main body of the name. Instead, it should be notated in
PascalCase, while additional information like dimension may be provided followed
by an underscore (”_”).

&nbsp;

For instance, a common convention may look like: **Generic Wall 200mm.**

It should be notated as: **PlaceholderWall_200mm.**

&nbsp;

**Avoid the abbreviations all together**

Abbreviations should be avoided in order to make the name more understandable.
The abbreviations can be very ambiguous and confusing since there are so many
different conventions depending on the countries and the companies. To simplify
all the potential confusion, abbreviations should be avoided altogether and they
should always be written in a plane full name in PascalCase.

&nbsp;

Some examples:

| Do Not | Do                    |
| ------ | --------------------- |
| Bldg   | Building              |
| CRW    | ConcreteRetainingWall |
| CW     | CurtainWall           |
| DR_SGL | DoorSingle            |
| FR     | FireRated             |
| SW     | StoneWall             |
| WIN    | Window                |

&nbsp;

**Offload static information to the parameters**

Parameters should be used as much as possible to store static information other
than making the names longer unnecessarily.

The common practice of including the name of the originator is a good example of
this. It makes the name unnecessarily longer and ends up with repetitions of the
apparent information, which can be offloaded to a parameter for sorting
purposes.

&nbsp;

## The name should not contain:

**Special characters**

For compatibility reasons, only letters (A to Z), and numbers (0-9) without
space should be used. Although PascaleCase is a preferred method of notation, an
underscore (_) may still be used as a separator to improve the legibility of the
name.

&nbsp;

**Hard-coded Information**

_**(the following proposal requires implementation on the software level)**_\
The name often includes numerical information to clarify the element's
dimensions. The current system relies on human input to create and update the
name, resulting in unnecessary duplication of tasks.

Introducing a separation between the "typed-in name" and "display name" along
with template literals would be a better system. The template literals is a
notation system in JavaScript that can use a value from a variable (parameter)
in constructing the string (textual data).

&nbsp;

For instance, instead of hard-coding the name like: **ConcreteWall_300mm.**

With the template literals, it can be notated as:
`` `ConcreteWall_${<nameOfParameter>}` ``\
and the display name becomes: **ConcreteWall_300mm**.

&nbsp;

The backtick (`) can be used to signal a BIM software to use a display name for
the user interface so that it’s human-friendly. The original input with the
template literals can be stored separately as a “typed-in name”, which gets
called back every time the parameters change to update the display name.
