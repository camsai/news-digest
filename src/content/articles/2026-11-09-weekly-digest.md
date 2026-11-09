---
title: Material Intelligence — AI for Materials Science
description: >-
  A weekly digest of AI-driven materials discovery, simulation and scientific
  workflows.
date: "2026-11-09"
kind: Weekly digest
status: published
topics:
  - Materials discovery
  - Atomistic simulation
  - Data and software
  - Autonomous laboratories
sources:
  - title: >-
      Inverse design of superconductors and semiconductors with differentiable
      foundation models
    url: "https://arxiv.org/abs/2611.09572v1"
    publishedAt: "2026-11-06"
    type: Preprint
    access: Abstract only
    evidence: >-
      Designing a crystal for a target property requires choosing its elements,
      stoichiometry, and atomic structure together, yet gradients exist only for
      the continuous structural variables. We introduce differentiable
      Equiformer fast effective-atom theory (DEFEAT), which lets a pretrained
      EquiformerV3 foundation model accept continuous species weights and site
      occupancies without retraining on fractional data, thereby enabling
      gradient-based materials optimization. Gradients from fine-tuned property
      models and a machine-learned energy penalty then guide updates to
      composition, atom count, atomic positions, and lattice vectors in a single
      optimization. In a search for phonon-mediated superconductors,
      density-functional perturbation theory on 45 structurally novel designs
      gives isotropic Allen-Dynes critical temperatures above 10 K for 39; the
      highest is 24.0 K for ZrTiNb2CN3, and H4LiPd3 (23.2 K) lies on the static
      DFT hull. In searches for photovoltaic absorbers, SCAN calculations
      confirm ten novel crystal structures with band gaps within 20% of a 1.34
      eV target on their respective raw or empirically corrected scales, all
      within 70 meV/atom of the DFT hull, and show that the systematic gap error
      of the training functional propagates into the designs unless the
      objective corrects for it. Quasiharmonic free energies from
      machine-learned potentials further show that finite-temperature
      competition with solid phases can reorder candidates relative to the
      static hull.
  - title: >-
      Physics Informed Priors for Machine Learning Interatomic Potentials with
      Uncertainty Quantification
    url: "https://arxiv.org/abs/2611.09325v1"
    publishedAt: "2026-11-06"
    type: Preprint
    access: Abstract only
    evidence: >-
      Standard uncertainty quantification methods for machine learning
      interatomic potentials often fail to quantify the effects of model
      misspecification despite its prominence as a source of error. To combat
      this, misspecification-aware uncertainty schemes have been gaining
      attention, pointwise optimal parameter set regression (POPS-Regression)
      among them. However, no guarantees on the physicality of the posterior
      distribution are given and uncertainty estimates can be conservative
      compared to the true error. To combat this, we present a model
      misspecification aware scheme that builds on POPS-Regression by allowing
      users to specify physical priors that are enforced across the obtained
      ensemble of models. This allows the user to incorporate
      misspecification-aware uncertainties without compromising on physical
      properties. The scheme is applicable to any physical quantity that can be
      represented by a convex set of parameters and so is robust for a wide
      variety of static properties which can help inform dynamical simulations.
      Here, we demonstrate the scheme for phononic vibrations and elastic
      properties. The scheme is also applied to both linear and message-passing
      neural network potentials by exploiting the linearity available in both
      architectures; for neural network potentials we approximate the readout
      layer as a linear model based on fixed non-linear features. The
      versatility of the method provides an alternative to hand-crafted or
      active learning approaches to data-set construction to correct physical
      failures by adding data thus reducing the computational overhead for
      designing potentials for specific applications.
  - title: >-
      Jackknife-conformal uncertainty for linear ACE potentials: calibrated
      forces and silicon properties compared with Bayesian and POPS baselines
    url: "https://arxiv.org/abs/2611.08678v1"
    publishedAt: "2026-11-05"
    type: Preprint
    access: Abstract only
    evidence: >-
      Machine-learned interatomic potentials are misspecified, so Bayesian
      posterior variances understate their errors. For linear atomic cluster
      expansion (ACE) potentials we derive calibrated uncertainties from one
      misspecification-robust parameter covariance, the delete-one-configuration
      jackknife. Scaled by one conformal quantile from a held-out part of the
      training set, it gives per-atom force uncertainties close to their target
      coverage on held-out silicon data and on cracks left out of the fit; screw
      dislocations left out are under-covered by the smaller of the two models.
      With one scale fitted to the forces of a held-out test split, the same
      parameter distribution is propagated to 21 properties of silicon, from
      elastic constants to defect and surface energies, by implicit
      differentiation through each relaxation and by committees, and is tested
      against density functional theory (DFT) without tuning on any property.
      For a smaller and a larger model the intervals cover most properties, and
      the larger model's are about 4 times tighter. The Bayesian posterior with
      one calibrated scale has the wrong shape: it covers fewer properties and
      has far lower joint evidence. Pointwise optimal parameter sets (POPS),
      once their hypercube is numerically defined, performs comparably on the
      properties, but its per-atom force regions are not calibrated to a target
      (0.95 and 0.84 at a nominal 0.90). Where the jackknife fails is relaxed
      point defects, whose training cells are all hot snapshots: a bias that
      every configuration shares is invisible to a jackknife, but it can be
      measured from the training labels, and as a discrepancy term, devised
      after the property results were seen, it brings the coverage close to
      nominal.
  - title: >-
      Temperature-Dependent Ion Dynamics in Argyrodite Superionic Conductor
      Li$_{6}$PS$_{5}$Cl with Fine-Tuned MACE Foundation Model
    url: "https://arxiv.org/abs/2611.05946v1"
    publishedAt: "2026-11-04"
    type: Preprint
    access: Abstract only
    evidence: >-
      The rapid growth of machine-learning interatomic potentials (MLIP),
      particularly the foundational models for materials chemistry, such as
      MACE, has significantly strengthened our capabilities in studying the
      complex dynamics of materials through statistical sampling. Here, by
      performing molecular dynamics with a fine-tuned MACE model, that are
      further combined with essential dynamics analysis, a tool that is commonly
      applied in (bio)molecular simulations, we examine the
      temperature-dependent ion dynamics in a prototypical inorganic solid
      superionic conductor, namely argyrodite Li$_{6}$PS$_{5}$Cl. Our analyses
      show clear localised phonon-like dynamics for Li$^+$ ions below 500 K with
      trajectories lying in a low-dimensional manifold that is highly nonlinear,
      which is opposite to the case in the high-temperature ($\sim$800 K) end.
      Between 500-700 K, the system exhibit strong competition in the dynamics
      between the Li$^+$ and framework ions, that are reflected in both the
      eigenspectrum and the projected low-dimensional embeddings characterising
      these dynamics not showing a simple monotonic dependency upon rising
      temperatures, and is further supported by investigations employing
      Langevin dynamics that systematically examine how damping the framework
      motions affects the dynamics of the Li$^+$ ions, thanks to the
      computational efficiency provided by MLIP. This work thus contributes
      towards the broader theoretical and data-driven framework for studying the
      lattice dynamics of solids.
  - title: >-
      Equivariant Deep Learning in Direct-Product Space for Electronic-Structure
      Hamiltonian Prediction
    url: "https://arxiv.org/abs/2611.07695v1"
    publishedAt: "2026-11-05"
    type: Preprint
    access: Abstract only
    evidence: >-
      Most existing equivariant architectures for Hamiltonian prediction
      propagate features in direct-sum spaces of irreducible spherical tensors,
      whereas the target Hamiltonian is naturally an operator block in a
      direct-product representation over local orbital and spin bases. This
      representation mismatch fragments contiguous Hamiltonian blocks, obscures
      direct manipulation of orbital couplings, and organizes features into
      irregular angular-momentum components that require numerous
      transformations and are poorly aligned with efficient hardware execution
      and memory management. To address both the representation mismatch and
      computational bottleneck, we propose DP-Learner, an equivariant learning
      framework that performs message passing directly on Hamiltonian-like
      operator blocks in the direct-product space. Theoretically, we propose
      Lie-generator-based directional embedding and invariantly weighted
      left--right products and contractions that preserve equivariance to SO(3),
      SU(2), and spatial inversions, without explicit Clebsch--Gordan
      decomposition or inverse reconstruction. Methodologically, we instantiate
      this principle as a Transformer architecture, in which Hamiltonian-like
      feature matrices or tensors evolve through equivariant operators in the
      direct-product space, while non-linear invariant scalar routing controls
      structured gating over matrix units, directional propagation, attention,
      and environment-embedded context interactions. We further construct
      MP-HAM-110K, a large-scale Hamiltonian dataset comprising more than
      110,000 material structures covering 68 elements with both Hamiltonian and
      wavefunction data. Experiments on MP-HAM-110K and Materials-HAM-SOC
      demonstrate that DP-Learner dramatically improves Hamiltonian prediction
      accuracy and inference efficiency over the state-of-the-art method.
  - title: >-
      Thermally Conditioned Time-Series Forecasting of Grain Growth in
      Polycrystalline Materials
    url: "https://arxiv.org/abs/2611.06843v1"
    publishedAt: "2026-11-04"
    type: Preprint
    access: Abstract only
    evidence: >-
      Grain growth during heat treatment strongly affects the microstructure of
      polycrystalline materials and, consequently, their mechanical properties.
      Although numerical methods such as front-tracking or front-capturing
      simulations can accurately describe grain growth, their high computational
      cost limits their use for long or non-isothermal thermal cycles. In
      previous work, grain growth was successfully predicted under isothermal
      conditions by treating grain size distributions as time series and
      forecasting their evolution using recurrent neural networks, allowing
      complete grain growth trajectories to be generated in seconds rather than
      through costly PDE-based simulations. In the present work, this
      forecasting framework is reformulated to handle non-isothermal conditions
      by explicitly incorporating thermal information into the model
      architecture. Grain size distributions are encoded using a convolutional
      neural network, thermal descriptors are embedded through a dedicated
      multilayer perceptron, and temporal evolution is predicted using a
      recurrent network. Instantaneous temperature and thermal rate are provided
      at each time step, allowing the model to adapt its predictions to changing
      thermal conditions. The framework is trained and evaluated on datasets
      generated from validated front-tracking simulations across a wide range of
      non-isothermal thermal paths. The results show that the thermally
      conditioned model accurately reproduces grain growth dynamics under
      complex thermal histories, achieving, in k-fold cross-validation over all
      simulations, mean relative errors of 2.99% (one-hour cycles) and 4.51%
      (four-hour cycles) with coefficients of determination exceeding 0.99, and
      mean relative errors between 1.91% and 14.66% on ten simulations following
      four unseen thermal histories of increasing complexity.
  - title: >-
      DefectSkills: Guiding AI agents through first-principles calculations for
      point defects in semiconductors and insulators
    url: "https://arxiv.org/abs/2611.05654v1"
    publishedAt: "2026-11-03"
    type: Preprint
    access: Abstract only
    evidence: >-
      First-principles defect calculations can now be performed autonomously by
      AI agents, enabled by established computational methods and open-source
      Python toolkits. However, reliable and repeatable defect calculations
      require clear scientific and technical guidance that helps agents resolve
      ambiguities and avoid errors in calculation setup, execution,
      postprocessing, and analysis. Here, we present DefectSkills, a set of
      structured prompts that provides human-in-the-loop guidance to AI agents
      performing first-principles calculations of point defects in
      semiconductors and insulators using the Vienna Ab initio Simulation
      Package (VASP). The prompts encode human expertise and guide agents
      through unit-cell relaxation, electronic-structure and dielectric
      calculations, phase-stability and chemical-potential analysis,
      charged-defect supercell generation and calculations, finite-size
      corrections, formation-energy calculations and thermodynamic analysis, and
      data backup. By packaging this expertise as reusable agent skills,
      DefectSkills supports consistent workflow execution across agentic AI
      systems and reproducible defect calculations.
  - title: Data-Driven Modeling of Molten Chloride Corrosion Using Static Test Data
    url: "https://arxiv.org/abs/2611.07125v1"
    publishedAt: "2026-11-04"
    type: Preprint
    access: Abstract only
    evidence: >-
      Molten chloride corrosion has been studied for decades, yet reliable
      prediction across different alloys, salts, and test conditions remains
      difficult. In this work, 291 static molten chloride corrosion experiments
      reported in the literature were compiled into a structured dataset and
      used to develop an interpretable machine-learning framework for
      corrosion-rate predictions. To better represent the differences in salt
      condition across studies, a Chloride Salt Preparation Index (CSPI) was
      introduced to bring the reported salt-treatment method, atmosphere
      control, and pre-exposure impurity condition on a common numerical scale.
      A blended tree-based ensemble provided the most consistent predictive
      performance, achieving a cross-validated \(R^2\) of 0.85 and an MAE of
      0.41 mg cm\(^{-2}\) day\(^{-1}\). The graded CSPI retained more useful
      information than a simple purified/unpurified classification and emerged
      as the dominant model descriptor. Global sensitivity and SHAP analyses
      further identified exposure time, temperature, and alloy chemistry as
      important contributors to the model predictions, with several observed
      trends consistent with the established molten-chloride corrosion behavior.
      The conformal prediction intervals were well calibrated, providing an
      estimate of prediction uncertainty in addition to the point prediction.
      Overall, the framework demonstrates that historical corrosion data can
      support quantitative, interpretable, and uncertainty-aware prediction when
      experimental context is represented explicitly, while also highlighting
      where more consistent reporting and targeted experiments are needed to
      improve future molten-salt corrosion models.
submissionIds: []
---

> Entirely AI-generated and automatically published after automated validation. Not independently human fact-checked. Automated checks do not establish scientific accuracy.

This edition highlights differentiable crystal design, uncertainty-aware interatomic potentials, and AI methods for modeling materials properties and calculations. All cited works are arXiv preprints, and the available evidence is limited to their abstracts; reported results have not been independently assessed here.

## Featured: Differentiable foundation models search for superconductors and photovoltaic materials

DEFEAT enables gradient-based optimization of crystal composition, occupancy, atomic positions and lattice parameters using a pretrained Equiformer model. In its preprint-reported searches, calculations identified 39 of 45 novel superconducting designs with predicted isotropic Allen–Dynes critical temperatures above 10 K, and ten photovoltaic candidates with calculated band gaps near the target and energies within 70 meV/atom of the DFT hull.

**Why it matters:** Optimizing composition and structure together could make inverse design more direct than searching only among fixed candidate structures. The calculations also show how functional-dependent band-gap errors and finite-temperature phase competition can affect which candidates look promising.

**Limitations:** This is a preprint, not peer-reviewed evidence. The reported outcomes are computational predictions, not experimental demonstrations of superconductivity or photovoltaic performance; the authors also report that finite-temperature stability can reorder candidates.

[Inverse design of superconductors and semiconductors with differentiable foundation models](https://arxiv.org/abs/2611.09572v1) — Preprint; Abstract only.

## Uncertainty methods address model misspecification in interatomic potentials

Two preprints explore uncertainty estimates that account for errors caused by imperfect model assumptions. One adds user-specified physical priors to POPS-Regression ensembles and demonstrates the approach for phononic vibrations and elastic properties. The other uses a jackknife-conformal method for linear ACE potentials, reporting near-target force coverage on held-out silicon data and property intervals for 21 silicon properties, while also identifying under-coverage for screw dislocations and relaxed point defects.

**Why it matters:** Uncertainty estimates that expose model failures could help researchers judge when a potential is suitable for a simulation, rather than relying on confidence estimates that overlook shared biases or physical constraints.

**Limitations:** Both works are preprints, and the reported evaluations are specific to their methods and test cases. The jackknife study reports failures on some defect and dislocation settings; the physical-prior approach is demonstrated on selected quantities and does not establish universal calibration.

[Physics Informed Priors for Machine Learning Interatomic Potentials with Uncertainty Quantification](https://arxiv.org/abs/2611.09325v1) — Preprint; Abstract only.

[Jackknife-conformal uncertainty for linear ACE potentials: calibrated forces and silicon properties compared with Bayesian and POPS baselines](https://arxiv.org/abs/2611.08678v1) — Preprint; Abstract only.

## Fine-tuned MACE model probes temperature-dependent ion motion in Li₆PS₅Cl

A preprint uses molecular dynamics with a fine-tuned MACE model to study lithium-ion dynamics in the superionic conductor Li₆PS₅Cl. The authors report localized, phonon-like lithium motion below 500 K, more complex competition between lithium and framework motion at 500–700 K, and different behavior near 800 K.

**Why it matters:** The work illustrates how machine-learned potentials can support temperature-dependent dynamical analysis in an ionic conductor, where collective motion and framework vibrations both matter.

**Limitations:** These are simulation results reported in a preprint, not direct measurements. The available abstract does not establish how the model's accuracy transfers beyond the studied material or conditions.

[Temperature-Dependent Ion Dynamics in Argyrodite Superionic Conductor Li$\_\{6\}$PS$\_\{5\}$Cl with Fine-Tuned MACE Foundation Model](https://arxiv.org/abs/2611.05946v1) — Preprint; Abstract only.

## DP-Learner predicts electronic-structure Hamiltonians in operator space

DP-Learner performs equivariant message passing directly on Hamiltonian-like blocks in a direct-product representation. Its authors report improved accuracy and inference efficiency over a state-of-the-art method on two datasets, and introduce MP-HAM-110K, a dataset with more than 110,000 structures across 68 elements.

**Why it matters:** Predicting Hamiltonians efficiently could support downstream electronic-structure calculations, while a large dataset may provide a useful benchmark for this class of models.

**Limitations:** The results and dataset description are from a preprint; the abstract does not provide enough detail to assess dataset availability, benchmark comparability or performance across applications beyond those evaluated.

[Equivariant Deep Learning in Direct-Product Space for Electronic-Structure Hamiltonian Prediction](https://arxiv.org/abs/2611.07695v1) — Preprint; Abstract only.

## AI forecasts grain growth under changing heat-treatment schedules

A thermally conditioned neural-network framework forecasts grain-size distributions under non-isothermal thermal histories. Trained and evaluated on data from validated front-tracking simulations, it reports mean relative errors of 2.99% for one-hour cycles and 4.51% for four-hour cycles in cross-validation, with errors of 1.91%–14.66% on four unseen thermal histories.

**Why it matters:** Fast forecasts could help explore complex heat-treatment schedules without running a costly simulation for every trajectory, potentially aiding microstructure process design.

**Limitations:** This preprint evaluates predictions against simulation-generated data, not experimental grain-growth measurements. The abstract reports a limited set of unseen histories, so performance on other materials and processing conditions remains uncertain.

[Thermally Conditioned Time-Series Forecasting of Grain Growth in Polycrystalline Materials](https://arxiv.org/abs/2611.06843v1) — Preprint; Abstract only.

## DefectSkills packages guidance for AI-assisted defect calculations

DefectSkills is a set of structured prompts intended to guide AI agents through first-principles point-defect calculations in semiconductors and insulators using VASP. The workflow covers setup, charged-defect calculations, corrections, formation energies, analysis and data backup.

**Why it matters:** Reusable, domain-specific guidance could help make agent-assisted computational workflows more consistent and reproducible, while keeping human expertise in the process.

**Limitations:** The work is a preprint describing prompts and workflow guidance; the abstract does not report a quantitative evaluation of agent reliability or demonstrate that the prompts prevent calculation errors across systems.

[DefectSkills: Guiding AI agents through first-principles calculations for point defects in semiconductors and insulators](https://arxiv.org/abs/2611.05654v1) — Preprint; Abstract only.

## Corrosion model combines historical tests with salt-preparation context

A preprint compiles 291 reported molten-chloride corrosion experiments and trains an interpretable machine-learning framework. A graded salt-preparation index captures differences in treatment, atmosphere and impurity conditions; the reported blended tree ensemble achieves cross-validated R² of 0.85 and mean absolute error of 0.41 mg cm⁻² day⁻¹.

**Why it matters:** Representing experimental context explicitly may help models make more useful comparisons across historical corrosion studies and highlight where standardized reporting or new experiments are needed.

**Limitations:** The dataset is assembled from literature reports, so inconsistent measurements and unreported factors may affect results. Cross-validation on this dataset does not establish predictive performance for new alloys, salts or laboratories.

[Data-Driven Modeling of Molten Chloride Corrosion Using Static Test Data](https://arxiv.org/abs/2611.07125v1) — Preprint; Abstract only.
