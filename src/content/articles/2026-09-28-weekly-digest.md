---
title: "Material Intelligence — September 28, 2026"
description: >-
  A weekly digest of AI for materials science, based on supplied research
  records.
date: "2026-09-28"
kind: Weekly digest
status: published
topics:
  - Atomistic simulation
  - Autonomous laboratories
  - Materials discovery
sources:
  - title: >-
      Assessing the Transferability of General-Purpose MachineLearning
      Interatomic Potentials for Heterogeneous Catalysis with HetCat26
    url: "https://arxiv.org/abs/2609.30621v1"
    publishedAt: "2026-09-24"
    type: Preprint
    access: Abstract only
    evidence: >-
      Foundation machine learning interatomic potentials (MLIPs) promise
      near-density functional theory (DFT) accuracy across broad areas of
      chemistry and materials science. However, their performance in describing
      systems and processes relevant to heterogeneous catalysis remains
      underexplored. Here, we introduce HetCat26, a collection of benchmark
      tests designed to assess pre-trained MLIPs across key aspects of catalytic
      modeling, including surface energetics, metal-metal oxide interactions,
      adsorption, and catalytic reaction networks. Evaluating fifteen foundation
      models, we find that performance on existing general materials benchmarks
      is only weakly predictive of performance on HetCat26; transferability to
      heterogeneous catalysis cannot be inferred from these general benchmarks.
      Across the benchmark tests, current models describe surface energetics
      and, perhaps surprisingly, reaction barriers well, whereas larger errors
      are observed for adsorption, and DFT site preferences are often not
      reproduced. Two models, eSEN-30M-OAM and MACE-MH-1-OMAT, nevertheless
      achieve high accuracy across the properties evaluated. Beyond model
      benchmarking, HetCat26 highlights the importance of training data
      consistency: PBE and PBE+U calculations should not be mixed within a
      training set. Overall, we identify challenges limiting the transferability
      of current foundation MLIPs to heterogeneous catalysis and, more broadly,
      to chemical reactions at interfaces, providing guidance for the
      development of the next generation of foundation models.
  - title: >-
      AtomWorld-Mem: Memory-Restored World States for Long-Horizon Atomistic
      Evolution
    url: "https://arxiv.org/abs/2609.31133v1"
    publishedAt: "2026-09-25"
    type: Preprint
    access: Abstract only
    evidence: >-
      High-fidelity atomistic evolution over long timescales requires more than
      observing the current crystal configuration. Instantaneous atomistic
      snapshots are often incomplete: locally similar configurations can
      correspond to different hidden dynamical contexts, future event
      preferences, and waiting-time scales. We argue that this snapshot
      ambiguity makes long-horizon atomistic evolution fundamentally a
      memory-based world-state restoration problem. To address this, we
      introduce AtomWorld-Mem, a memory-restored atomistic world model that
      recovers the latent world state missing from instantaneous crystal
      snapshots. AtomWorld-Mem treats the evolving alloy as an AtomWorld:
      spatial encoders write multi-scale atomistic keyframes from dense local
      topology and sparse long-range defect context, while short-term event
      memory and long-term structural memory integrate these keyframes across
      time to restore a future-predictive evolutionary state. The restored state
      is used to prioritize legal vacancy-mediated events under single-event
      Kinetic Monte Carlo (KMC) constraints, while event legality, physical
      execution, and residence-time updates remain governed by the underlying
      simulator. Empirically, AtomWorld-Mem improves long-horizon atomistic
      progress under fixed microscopic event budgets while maintaining
      high-fidelity evolution across energetic, structural, and
      vacancy-transport observables. It further transfers zero-shot across
      diverse unseen alloy-temperature AtomWorlds, suggesting that the learned
      memory-restoration mechanism captures reusable principles of hidden-state
      inference rather than a system-specific local energy heuristic. These
      results position memory-restored world-state modeling as a promising route
      toward efficient, physically grounded, and transferable atomistic
      evolution.
  - title: >-
      Energetically Driven Structure Matching for Autonomous Total X-ray
      Scattering Experiments
    url: "https://arxiv.org/abs/2609.30852v1"
    publishedAt: "2026-09-25"
    type: Preprint
    access: Abstract only
    evidence: >-
      The emergence of autonomous laboratories motivates rapid conversion of
      experimental data into reliable atomistic models on time-scales compatible
      with closed-loop optimization. Here we develop an energetically driven
      structure matching framework for analysis during ongoing total X-ray
      scattering experiments. Using data from gold nanoparticles, we match
      against idealized spherical, octahedral, decahedral, and icosahedral
      geometries, their machine-learned interatomic potential (MLIP)-relaxed
      structures, and molecular dynamics (MD) ensembles. Idealized models are
      fast to generate but can misassign morphology and systematically
      underestimate size by neglecting surface relaxation, strain, and thermal
      disorder. MLIP relaxation markedly improves both, while MD ensemble
      averaging agrees best with experiment. We therefore introduce a
      hierarchical workflow combining rapid idealized screening with targeted
      MLIP and MD refinement of top candidates, delivering improved structural
      feedback without interrupting autonomous operation. This framework
      provides a route towards autonomous campaigns in which the target
      structure itself can be updated in response to the evolving energy
      landscape of structures compatible with the experimental data.
  - title: >-
      Structural prediction of B$_{18}$Y$_{2}$ cluster: A
      Machine-Learning-Assisted Basin-Hopping Study
    url: "https://arxiv.org/abs/2609.31533v1"
    publishedAt: "2026-09-25"
    type: Preprint
    access: Abstract only
    evidence: >-
      The structural and optical properties of the doubly yttrium-doped boron
      cluster B$_{18}$Y$_2$ have been systematically investigated using density
      functional theory calculations. The lowest-energy structure was identified
      through extensive basin-hopping searches accelerated by a pre-trained MACE
      machine-learning potential and subsequently refined and validated at the
      DFT level. The resulting global-minimum structure adopts a double-ring
      geometry, consisting of two fused B$_9$ rings stabilized by yttrium atoms
      positioned above and below the boron framework. Vibrational frequency
      calculations confirm the dynamical stability of the optimized structure,
      while the calculated infrared and UV--Vis spectra provide characteristic
      signatures of the Y--B interactions and the electronic structure of the
      boron framework. These results demonstrate how yttrium doping can
      stabilize unusual double-ring boron architectures and highlight the
      effectiveness of machine-learning-assisted basin-hopping searches for
      exploring the complex potential-energy landscapes of doped boron clusters.
  - title: >-
      Retrainable physics-integrated neural differentiable modeling of sintering
      across material systems
    url: "https://arxiv.org/abs/2609.31518v1"
    publishedAt: "2026-09-25"
    type: Preprint
    access: Abstract only
    evidence: >-
      Sintering is widely used to manufacture ceramics, but coupled
      densification and grain growth, material-dependent kinetics, and sparse
      measurements complicate predictive modeling and process design. We present
      Sinter-PiNDiff, a retrainable physics-integrated neural differentiable
      framework for predicting density and grain-size evolution. Two neural
      networks learn densification and grain-growth coefficients within coupled
      rate equations, while a smooth saturation factor attenuates densification
      near theoretical density. The same governing structure, network
      architecture, and training procedure were fitted independently to
      published data for MgO, Al-doped ZnO, and CaO-doped ThO2. Tests at
      held-out temperatures and compositions yielded the lowest mean error in
      all twelve material-metric comparisons against multilayer perceptron and
      residual network baselines. For MgO, Al-doped ZnO, and CaO-doped ThO2,
      respectively, density normalized root-mean-square errors were 14.6%,
      10.8%, and 14.4%, and grain-size errors using the same metric were 8.6%,
      12.1%, and 19.3%. Removing evolving density from both neural-network
      inputs increased density and grain-size trajectory errors in all three
      systems and ten of twelve aggregate errors, supporting density-dependent
      kinetic feedback. Deep ensembles estimated model disagreement, but
      empirical coverage showed that the uncertainty bands were not calibrated
      and did not capture all model-data discrepancies. These results establish
      Sinter-PiNDiff as a retrainable framework for sparse-data prediction and
      uncertainty-informed selection of sintering conditions.
  - title: Scaling Density Functional Theory with Gaussian Splatting
    url: "https://arxiv.org/abs/2609.31483v1"
    publishedAt: "2026-09-25"
    type: Preprint
    access: Abstract only
    evidence: >-
      Density functional theory (DFT) strikes a practical balance between
      accuracy and computational cost in many problems of computational
      chemistry and materials science. However, many DFT calculations are
      limited by fixed atom-centered basis sets, which dictate how accuracy and
      cost scale with system size. We propose Gaussian Splatting for Density
      Functional Theory (GS-DFT), which represents molecular orbitals as a cloud
      of Gaussians whose positions, shapes, and mixing coefficients are
      optimized jointly by gradient descent to minimize the energy without
      training data. Conceptually, GS-DFT is 3D Gaussian splatting with the
      renderer replaced by quantum mechanics. We introduce two key solver
      components: adaptive density fitting with screening for efficient
      evaluation of two-electron integrals, and a regularized differentiable
      orthogonalization of the molecular orbitals. Empirically, the optimized
      basis reaches the accuracy of the largest conventional basis sets with a
      fraction of the parameters, converging systematically in energy, density,
      and nuclear forces. At equal parameter count, it captures the
      stretched-bond and anion physics that fixed bases only recover with
      specialized basis augmentation. The resulting solver exhibits quadratic
      peak memory scaling in the cloud size, allowing us to simulate systems of
      up to 2,742 atoms (10,406 electrons) without any modifications at
      triple-zeta scale using a single four-GPU node.
submissionIds: []
---

> Entirely AI-generated and automatically published after automated validation. Not independently human fact-checked. Automated checks do not establish scientific accuracy.

This edition focuses on where learned models help—and where their reliability remains uncertain: catalytic interfaces, atomistic evolution, structure searches, scattering analysis and ceramic processing. All cited studies are preprints available here only as abstracts; computational predictions should not be read as experimental results.

## Featured: Catalysis benchmark exposes gaps in general-purpose interatomic potentials

The HetCat26 preprint evaluates 15 pretrained machine-learning interatomic potentials on surfaces, metal–oxide interactions, adsorption and reaction networks. General materials benchmark scores weakly predicted performance on these catalytic tasks. The authors report comparatively good results for surface energetics and reaction barriers, but larger adsorption errors and frequent disagreement with DFT-preferred sites.

**Why it matters:** Researchers choosing a potential for catalyst screening need interface-specific checks rather than relying on broad benchmark rankings. The study also flags inconsistent mixing of PBE and PBE+U training calculations as a data-quality concern.

**Limitations:** These are preprint benchmark results, not peer-reviewed evidence of experimental catalytic accuracy. Performance on HetCat26 does not establish reliability for every catalyst or reaction condition.

[Assessing the Transferability of General-Purpose MachineLearning Interatomic Potentials for Heterogeneous Catalysis with HetCat26](https://arxiv.org/abs/2609.30621v1) — Preprint; Abstract only.

## Learned memory steers long-horizon alloy simulations

AtomWorld-Mem uses stored structural and event context to prioritize vacancy-mediated events in kinetic Monte Carlo simulations. The preprint reports more long-horizon progress under fixed event budgets and zero-shot transfer to unseen alloy–temperature settings, while leaving event execution and residence-time updates to the underlying simulator.

**Why it matters:** A model that selects informative events without replacing the physical simulator could make slow atomistic evolution more tractable.

**Limitations:** The reported gains are simulation results in an abstract-only preprint. They do not establish experimental fidelity or transfer to mechanisms beyond the tested vacancy-mediated setting.

[AtomWorld-Mem: Memory-Restored World States for Long-Horizon Atomistic Evolution](https://arxiv.org/abs/2609.31133v1) — Preprint; Abstract only.

## Machine-learned relaxation improves nanoparticle structure matching

A preprint on total X-ray scattering from gold nanoparticles compares idealized shapes, structures relaxed with a machine-learned interatomic potential, and molecular-dynamics ensembles. The authors report that idealized shapes can misidentify morphology and underestimate size; relaxation improves matching, while ensemble averaging agrees best with experiment.

**Why it matters:** The proposed progression from fast screening to targeted refinement could provide more useful structural feedback during autonomous experiments without pausing data collection.

**Limitations:** The demonstrated comparison uses gold nanoparticles. The abstract does not establish performance across other materials or demonstrate a complete closed-loop synthesis campaign; the paper is a preprint.

[Energetically Driven Structure Matching for Autonomous Total X-ray Scattering Experiments](https://arxiv.org/abs/2609.30852v1) — Preprint; Abstract only.

## MACE-assisted search predicts a doped boron cluster structure

Researchers used a pretrained MACE potential to accelerate basin-hopping searches for B18Y2, then refined the lowest-energy candidate with density functional theory. Their preprint predicts a yttrium-stabilized double-ring structure and calculated vibrational and optical signatures.

**Why it matters:** The workflow illustrates how a learned potential can narrow an expensive structure search before higher-fidelity calculations assess the candidates.

**Limitations:** The proposed structure and spectra are computational predictions, not an experimental identification. The abstract-only preprint does not establish that the search found the global minimum.

[Structural prediction of B$\_\{18\}$Y$\_\{2\}$ cluster: A Machine-Learning-Assisted Basin-Hopping Study](https://arxiv.org/abs/2609.31533v1) — Preprint; Abstract only.

## Physics-integrated neural model predicts ceramic sintering trajectories

Sinter-PiNDiff places learned densification and grain-growth coefficients inside coupled rate equations. Independently fitted to published data for three material systems, it reports the lowest mean error in all 12 held-out material–metric comparisons against two neural-network baselines.

**Why it matters:** Combining rate equations with trainable kinetics may help estimate processing outcomes where measurements are sparse and material-specific behavior matters.

**Limitations:** Its density normalized root-mean-square errors still range from 10.8% to 14.6%, and grain-size errors from 8.6% to 19.3%. The authors report uncalibrated uncertainty bands; this preprint does not demonstrate reliable uncertainty-guided process selection.

[Retrainable physics-integrated neural differentiable modeling of sintering across material systems](https://arxiv.org/abs/2609.31518v1) — Preprint; Abstract only.

## Optimized Gaussian orbitals offer another route to scaling DFT

GS-DFT represents molecular orbitals with Gaussians whose positions, shapes and coefficients are optimized by gradient descent without training data. The preprint reports systematic convergence and a calculation of a 2,742-atom system on a four-GPU node.

**Why it matters:** Adaptive orbital representations could reduce the parameters needed for some large electronic-structure calculations, offering a computational alternative to fixed atom-centered bases.

**Limitations:** This is an optimization-based DFT method, not a trained materials predictor. The abstract-only preprint does not establish a general speed or accuracy advantage across materials workloads or hardware.

[Scaling Density Functional Theory with Gaussian Splatting](https://arxiv.org/abs/2609.31483v1) — Preprint; Abstract only.
