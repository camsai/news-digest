---
title: Material Intelligence — 2 November 2026
description: A weekly digest of AI developments for materials science.
date: "2026-11-02"
kind: Weekly digest
status: published
topics:
  - Atomistic simulation
sources:
  - title: v0.3.17
    url: "https://github.com/ACEsuit/mace/releases/tag/v0.3.17"
    publishedAt: "2026-10-27"
    type: Software release
    access: Abstract only
    evidence: "# MACE v0.3.17 Release Notes\r\n\r\nMACE v0.3.17 adds magnetic models, an opt-in polarizability and Fukui functions for PolarMACE, the MACE-MDP calculator, and faster stress and lower memory on large systems. It also raises the minimum versions to Python 3.11 and PyTorch 2.5, and it is the first release that warns about the options MACE v1.0 removes or replaces.\r\n\r\n## ⚠️ Breaking changes\r\n\r\n- **Python 3.11 or newer is required.** Python 3.9 and 3.10 are no longer supported. Python 3.14 is now supported and tested. ([#1520](https://github.com/ACEsuit/mace/pull/1520), [#1759](https://github.com/ACEsuit/mace/pull/1759))\r\n- **PyTorch 2.5 or newer is required.** The previous `torch>=1.12` was not true: the core path already needed 2.4. CI now tests the 2.5 floor explicitly. ([#1759](https://github.com/ACEsuit/mace/pull/1759))\r\n- **`MACECalculator(warmup=...)` is removed.** The parameter was accepted and did nothing. Passing it now raises a `TypeError`. ([#1689](https://github.com/ACEsuit/mace/pull/1689))\r\n- **IPEX support is removed.** Intel retired the extension in favour of native XPU support in PyTorch 2.8 and later. ([#1522](https://github.com/ACEsuit/mace/pull/1522))\r\n- **The `cueq-cuda-11` extra is removed.** Its kernel wheels stopped at 0.5.1 and no longer matched the frontend. Use `cueq-cuda-12` on a CUDA 11 host, or the new `cueq-cuda-13` extra. Match the extra to `torch.version.cuda`.\r\n- **cuEquivariance convolution fusion is off by default during training**, because it regressed badly on variable-shape batches. Inference keeps it on. Use `--cueq_conv_fusion=True` to opt back in. ([#1702](https://github.com/ACEsuit/mace/pull/1702))\r\n\r\n## \U0001F52C Models\r\n\r\n### MagneticMACE\r\n\r\nAdded `MagneticMACE`, a family of spin-informed models for collinear and non-collinear magnetic moments, with an ASE `MagneticMACECalculator`. Select it with `--model=MagneticScaleShiftMACE`. New flags cover magnetic forces (`--compute_magforces`, `--magforces_weight`, `--magmom_key`, `--magforces_k"
submissionIds: []
---

> Entirely AI-generated and automatically published after automated validation. Not independently human fact-checked. Automated checks do not establish scientific accuracy.

This week’s clearest AI-for-materials update is a new MACE release adding magnetic models and other capabilities for atomistic modeling. The supplied records do not establish new experimental results or materials-discovery findings.

## Featured: MACE v0.3.17 adds magnetic models and PolarMACE capabilities

MACE v0.3.17 adds MagneticMACE models for collinear and non-collinear magnetic moments, along with an ASE calculator. The release also adds opt-in polarizability and Fukui functions for PolarMACE, a MACE-MDP calculator, faster stress calculations, and lower memory use on large systems.

**Why it matters:** Magnetic models broaden MACE’s potential use in atomistic simulations of magnetic materials. The PolarMACE and performance changes may also support additional modeling workflows and larger calculations.

**Limitations:** These are release-note claims; the supplied evidence does not provide benchmarks or validate accuracy on specific materials. This is a software release, not evidence of experimental results. It requires Python 3.11+ and PyTorch 2.5+, and includes breaking changes.

[v0.3.17](https://github.com/ACEsuit/mace/releases/tag/v0.3.17) — Software release; Abstract only.
