---
title: "From predicting crystals to designing them"
description: "A starting map of AI for materials: discovery, generative design, and simulation—and the evidence each still needs."
date: "2026-09-12"
kind: "Field notes"
status: published
topics:
  - Materials discovery
  - Atomistic simulation
sources:
  - title: "Millions of new materials discovered with deep learning"
    url: https://deepmind.google/blog/millions-of-new-materials-discovered-with-deep-learning/
    publishedAt: "2023-11-29"
    type: Announcement
    access: Full text
    evidence: "DeepMind describes GNoME as a graph-network system for predicting crystal stability and reports 2.2 million candidate structures, including 380,000 predicted stable materials."
  - title: "Materials — Microsoft Research"
    url: https://www.microsoft.com/en-us/research/project/materials/
    publishedAt: null
    type: Announcement
    access: Full text
    evidence: "The project describes MatterGen as a diffusion model for generating inorganic materials and MatterSim as a model for simulation and property prediction across elements, temperatures, and pressures."
submissionIds: []
---

> **Background reading, not a weekly news edition.** This launch field note introduces established projects and the questions we will bring to new developments. The first weekly digest is still in preparation.

AI for materials spans several different tasks. A model that proposes a crystal, a model that estimates its energy, and a system that makes it in a laboratory contribute different kinds of evidence. Our editorial starting point is to keep those distinctions visible.

## Discovery: which structures deserve a closer look?

In its November 2023 announcement, Google DeepMind described GNoME, a graph-network approach to predicting crystal stability. It reported 2.2 million candidate structures, including approximately 380,000 predicted stable materials. These are computational predictions; the number is not a count of newly synthesized materials. [Read the original announcement](https://deepmind.google/blog/millions-of-new-materials-discovered-with-deep-learning/).

**Why it matters:** a useful discovery system narrows a vast search space. For a researcher, the next questions are which candidates survive further calculations, whether they can be synthesized, and whether their properties suit the intended application. That is our interpretation of the practical value, rather than an additional benchmark claim.

## Design: start with the properties you want

Microsoft describes MatterGen as a diffusion model for generating inorganic materials. Its materials research program also includes MatterSim, which targets simulation and property prediction across elements, temperatures, and pressures. These represent complementary directions: proposing structures and assessing how materials behave. [Read the project overview](https://www.microsoft.com/en-us/research/project/materials/).

**What we will look for:** the constraints a generator can reliably satisfy, the data used to evaluate it, and the extent of experimental validation. A promising proposal is the beginning of an investigation.

## Simulation: useful accuracy for a specific problem

MatterSim illustrates another part of the field: learned models intended to make materials simulation more accessible. The project overview describes a broad operating range, but an overview alone does not establish suitability for a particular chemistry or task. [See Microsoft's description](https://www.microsoft.com/en-us/research/project/materials/).

For future releases, we will look beyond aggregate benchmark scores to ask about training coverage, difficult cases, reproducibility, and the practical cost of using the model. Those questions shape our coverage; they are not findings of an independent evaluation here.

## What comes next in this publication

Our weekly editions will focus on what changed: a new result, an important limitation, a usable release, or a dataset that enables better work. Each story will connect its claims to original sources and explain what the evidence supports.

This field note is entirely AI-generated, including its source selection and summaries. It has not been independently fact-checked by a human. It is an introduction, not an exhaustive survey or independent validation of the projects discussed.
