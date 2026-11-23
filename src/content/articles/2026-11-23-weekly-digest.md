---
title: Material Intelligence
description: An AI-generated weekly digest of AI developments in materials science.
date: "2026-11-23"
kind: Weekly digest
status: published
topics:
  - Materials discovery
  - Data and software
  - Autonomous laboratories
  - Atomistic simulation
sources:
  - title: >-
      Physics-Guided Crystal Structure Elucidation from Powder X-Ray Diffraction
      with Universal Machine-Learning Interatomic Potentials
    url: "https://arxiv.org/abs/2611.23760v1"
    publishedAt: "2026-11-18"
    type: Preprint
    access: Abstract only
    evidence: >-
      Determining unique atomic coordinates from powder X-ray diffraction (PXRD)
      remains challenging because peak overlap, weak scattering from light
      elements, limited scattering contrast between elements with similar atomic
      numbers, and experimental noise render the inverse problem
      underdetermined. Here, we present XCAPE (XRD-Constrained Accelerated
      Prediction Engine), a crystal structure prediction (CSP) framework that
      integrates experimentally derived composition, unit cell parameters, space
      group, and PXRD data into a symmetry-aware evolutionary search. XCAPE
      explores Wyckoff-site configurations using tailored mutation operations,
      evaluates candidates by both energetic stability and diffraction
      agreement, and accelerates geometry optimization using a universal
      machine-learning interatomic potential (MLIP). The framework recovered 71
      of 77 database-derived benchmark structures (92.2%) from simulated PXRD
      patterns and all 12 reference structures from experimental PXRD patterns.
      It further identified 12 candidate structure assignments that are
      consistent with experimental PXRD patterns, lack matching entries in the
      Inorganic Crystal Structure Database (ICSD), and are thermodynamically
      competitive at the MLIP level. Density functional theory (DFT)
      calculations showed that 10 of these 12 candidates lie within 10 meV/atom
      of the convex hull. By bridging experimental diffraction data and
      physically plausible atomistic models, XCAPE can provide structural
      insight into previously unresolved materials and support accelerated
      materials discovery in automated research workflows.
  - title: Structured Extraction of Diffraction Data from Covalent Organic Frameworks
    url: "https://arxiv.org/abs/2611.23680v1"
    publishedAt: "2026-11-18"
    type: Preprint
    access: Abstract only
    evidence: >-
      Powder X-ray diffraction (PXRD) is the primary structural evidence for
      covalent organic frameworks (COFs) and many other materials. Yet decades
      of measured patterns exist only as images in published figures. Automatic
      recovery is difficult, because PXRD figures vary widely in format, from a
      single curve to crowded stacks with labels, insets, and neighboring plots
      that challenge traditional computer vision. This work presents a pipeline
      in which a vision large language model (LLM) interprets the layout of each
      figure, locating the diffraction plot and its curves and sketching a
      coarse trace of each, while classical computer vision (CV) refines every
      trace to pixel-level accuracy. Applied to 3,954 COF articles, the pipeline
      produces 11,445 calibrated diffraction curves, released in the open
      database COF-PEAK. Compared with a hand digitization of 60 panels,
      extracted peak positions differ by a median of only 0.07 degrees. Whereas
      papers usually report only a few peak angles, which limits further
      analysis, the digitized curves enable tracking how peak prominence, a
      possible marker of crystallinity, changes with synthesis conditions.
      Vision LLMs and classical CV can thus turn such figures into reusable
      experimental data.
  - title: >-
      Fast closed-loop STEM navigation using vision-language models with typed
      decisions
    url: "https://arxiv.org/abs/2611.23698v1"
    publishedAt: "2026-11-18"
    type: Preprint
    access: Abstract only
    evidence: >-
      Closed-loop scanning transmission electron microscopy (STEM), in which
      each acquired image determines the next field of view and magnification,
      offers a route to autonomous atomic-scale materials analysis. Such a loop
      would automate navigation to defects and grain boundaries, a task that has
      long relied on operator judgment, and would enable systematic analysis of
      diverse local structures at scale. Realizing it hinges on the decision
      step, which must translate each acquired image into the next operation
      both quickly and correctly; yet which decision method can deliver both
      remains unclear. Here, we isolate this decision step. Using simulated
      atomic-resolution STEM images of a substitutional W dopant and a grain
      boundary in monolayer MoS$_2$, where the true target position is known and
      every method starts from identical conditions, we compared four
      vision-language models (VLMs) and three decision methods. Our results
      demonstrate the effectiveness of Typed Decision, which directly obtains
      the probabilities of candidate labels from a pretrained VLM, for
      closed-loop STEM navigation. Typed Decision showed the shortest decision
      latency for all models (0.13-0.21 s) and generally achieved the highest
      navigation success rate among the three methods: it was the best for all
      models in W dopant navigation (66-91%) and for the best-performing model,
      Cosmos-Reason2 32B, in grain boundary navigation (43%). Furthermore,
      navigation to the different targets, the W dopant and the grain boundary,
      was possible by natural-language specification alone, without
      task-specific training of the VLM. These results indicate that Typed
      Decision is an effective decision method for realizing fast, accurate, and
      flexible closed-loop STEM.
  - title: Emergent Fatigue Dynamics from Foundational Interatomic Potentials
    url: "https://arxiv.org/abs/2611.26533v1"
    publishedAt: "2026-11-19"
    type: Preprint
    access: Abstract only
    evidence: >-
      Foundational machine-learned interatomic potentials are trained on large,
      diverse DFT datasets, but their validation rests on equilibrium states,
      which does not guarantee correct emergent behavior in large-scale
      molecular dynamics. Where no direct experimental validation is available,
      comparisons to physically motivated potentials are valuable for drawing
      insight. We distinguish static properties, which are thermally accessible,
      from emergent properties, which require work from an external fatigue
      stress to drive rare events, and compare the potentials on both. An EAM
      potential and the NequIP foundational potential both agree closely with
      reference data for many near-equilibrium properties, but NequIP predicts
      an anomalously low intrinsic stacking fault energy ($\sim7$ times lower
      than EAM) and thus predicts far more plastic deformation under fatigue
      cycling of a nanoscale flaw modeled after the classical Griffith crack
      problem. Per-atom energy distributions after loading show that the two
      potentials differ most at energies far above what is thermally accessible.
      We also document memory-related crashes and silent extrapolation as
      practical concerns for practitioners of these foundational model forms.
  - title: >-
      Generating grain boundary structures at a specified energy with a
      symmetry-constrained diffusion model
    url: "https://arxiv.org/abs/2611.27188v1"
    publishedAt: "2026-11-20"
    type: Preprint
    access: Abstract only
    evidence: >-
      Grain boundaries (GBs) govern many properties of polycrystalline
      materials, and inverse design would make the GB structure itself a design
      variable. Crystal generative models such as MatterGen operate on periodic
      cells, which contain two GBs. The cell energy defines a single GB only
      when the two are equivalent, but existing models do not enforce this
      equivalence. Building on MatterGen, we developed a symmetry-constrained
      diffusion model in which the two GBs are related by a symmetry operation:
      atoms near one GB are generated, and those near the other are
      reconstructed through a symmetry projection applied at every denoising
      step. We applied it to the $Σ5(210)[001]$ symmetric tilt GB in Al,
      conditioning generation on the GB energy from a machine-learning
      interatomic potential (MLIP). All 350 generated structures kept a
      geometrically equivalent GB pair after relaxation. Given a target GB
      energy, the model generated structures at that energy: for the three
      in-range targets with many nearby training structures, 44% to 70% fell
      within $\pm 0.1$ J/m$^2$ of the target. Tracking weakened at higher
      energies and failed outside the training range. Of the 91 near-target
      structures, 90 matched no training structure under the adopted geometric
      criterion, indicating that the model can propose configurations near the
      target energy that are distinct from the training structures, a capability
      that could help identify unknown metastable GB structures observed in
      experiments. Building GB-pair equivalence into generation thus makes GB
      properties well-defined design targets, enabling inverse design of GB
      structures.
  - title: >-
      Prediction of lattice thermal conductivity of half-Heusler compounds by
      machine learning and transfer-function calibration
    url: "https://arxiv.org/abs/2611.26788v1"
    publishedAt: "2026-11-19"
    type: Preprint
    access: Abstract only
    evidence: >-
      High-throughput searches for half-Heusler thermoelectrics increasingly
      rely on lattice thermal conductivity ($κ_L$) from first-principles
      calculations, or from machine-learning models trained on them. These
      calculations describe an ideal single crystal, whereas measurements are
      made on polycrystalline samples, in which grain boundaries and defects
      scatter heat as well. The resulting gap between calculated and measured
      $κ_L$ has been noted for individual compounds but not, to our knowledge,
      quantified across a materials class, so the values used for screening
      carry an unknown, systematic bias. Here we quantify and correct this bias
      for cubic half-Heusler compounds with 18 valence electrons. Using a
      curated literature corpus that keeps calculated and measured values apart,
      we show that calculations overestimate measured $κ_L$ in most bonding
      families, and that the excess shrinks with temperature. Scattering by
      defects, added to the intrinsic scattering between lattice vibrations,
      would give such a trend, but the data do not single out one cause. A
      simple transfer function with this temperature dependence removes the
      median offset, and refitting its magnitude within a bonding family lowers
      the median error further, though not consistently compound by compound.
      Combined with a machine-learning model that predicts the calculated value
      from crystal structure, and tested on chemistries withheld from all
      fitting, the method predicts measured $κ_L$ in this class about as closely
      as independent laboratories agree with one another, and provides testable
      predictions for compounds not yet measured.
  - title: >-
      Characterizing adsorption thermodynamics in carbon capture materials: an
      efficient first-principles approach
    url: "https://arxiv.org/abs/2611.24759v1"
    publishedAt: "2026-11-18"
    type: Preprint
    access: Abstract only
    evidence: >-
      Porous materials offer a vast design space for CO$_2$ capture, whose
      exploration hinges on efficient and accurate first-principles predictions
      of the thermodynamics governing adsorption. However, simulating isotherms
      and heats of adsorption using grand canonical molecular simulations is
      extremely computationally expensive when combined with accurate ab initio
      treatments of the molecular interactions, limiting screening to
      low-pressure uptake encoded in the Henry constant. Identifying and
      designing the best CO$_2$ capture materials requires a strategy that can
      efficiently calculate their adsorption properties using ab initio
      potential energy surfaces such as those now available from foundational
      machine-learned interatomic potentials (MLIPs). Here we develop a neural
      classical density functional (cDFT) framework for carbon capture processes
      that allows direct calculation of adsorption isotherms from low to high
      loading limits of metal-organic frameworks (MOFs) without grand canonical
      simulations. We demonstrate the success of our approach by calculating the
      ab initio adsorption isotherms for over 5,000 experimentally reported
      MOFs. From our screening, we show how these materials can be characterized
      using four isotherm shapes, arising from their pore size and binding
      sites, which the Henry constant cannot distinguish. We show that these
      shapes, rather than the binding strength alone, decide which MOFs suit
      which process: small pores with strong binding sites for vacuum and
      temperature swings at low pressure, large pores with weakly binding walls
      for pressure swings. Finally, we identify the most promising candidates by
      weighing their working capacity against the energy needed for
      regeneration.
  - title: >-
      Perfumer: A Large Language Model-based Agentic Framework Accelerating
      Structural Relaxation and Electronic Band Prediction for First-Principle
      Calculation
    url: "https://arxiv.org/abs/2611.26349v1"
    publishedAt: "2026-11-19"
    type: Preprint
    access: Abstract only
    evidence: >-
      First-principles structural relaxation and band calculations require
      substantial computation and expertise. Here we present Perfumer, a large
      language model-based agentic framework that couples Quantum ESPRESSO with
      two predictive models. Across tested structures, pre-relaxation with
      Perfumer-relax model followed by QE refinement yielded a 2.75-fold overall
      speedup over QE alone. Perfumer-band model combines a periodic graph
      neural network with a latent Hermitian spectral head returns 12 band
      energies at any requested wavevector, preserving reciprocal lattice
      periodicity and time-reversal symmetry without constructing Hamiltonian.
      Trained on 125,153 self-curated band structures, Perfumer-band model
      reaches a median per-material mean absolute error of 0.157 eV on 2,607
      test materials, including lanthanide, actinide and magnetic compounds,
      from held-out composition families spanning 85 elements, taking about 97
      ms per material on two consumer CPU cores. The agent turns
      natural-language requests into relaxation-to-band workflows, from a single
      uploaded structure to automatically constructed new candidates and returns
      predicted properties.
submissionIds: []
---

> Entirely AI-generated and automatically published after automated validation. Not independently human fact-checked. Automated checks do not establish scientific accuracy.

This week: AI-assisted crystal structure determination, extraction of experimental diffraction data, and new ways to navigate and simulate materials. All studies covered are preprints, assessed from abstracts rather than full papers.

## Featured: AI-assisted search combines diffraction and energetics to resolve crystal structures

The XCAPE framework combines powder X-ray diffraction, composition, cell parameters and space group with an evolutionary search accelerated by a machine-learning interatomic potential. It recovered 71 of 77 structures from simulated patterns and all 12 reference structures tested with experimental patterns. Of 12 additional candidate assignments, 10 were within 10 meV per atom of the convex hull in density functional theory calculations.

**Why it matters:** Combining diffraction agreement with physical plausibility could narrow the space of possible structures when overlapping peaks make diffraction alone ambiguous.

**Limitations:** This is an abstract-only preprint. The additional assignments are candidates, not independently confirmed structures; the reported experimental-pattern benchmark contains 12 reference structures.

[Physics-Guided Crystal Structure Elucidation from Powder X-Ray Diffraction with Universal Machine-Learning Interatomic Potentials](https://arxiv.org/abs/2611.23760v1) — Preprint; Abstract only.

## Vision models recover diffraction curves from published figures

A pipeline uses a vision language model to locate diffraction plots and sketch curves, then classical computer vision to refine them. Applied to 3,954 covalent organic framework articles, it produced 11,445 calibrated curves in the open COF-PEAK database. Against hand digitization of 60 panels, the median peak-position difference was 0.07 degrees.

**Why it matters:** Recovering full curves from figures can make experimental evidence reusable for comparing framework structures and synthesis conditions, beyond the few peak positions often reported in text.

**Limitations:** This is an abstract-only preprint. The reported comparison covers 60 panels; peak-position accuracy alone does not establish that intensities and every extracted curve are reliable.

[Structured Extraction of Diffraction Data from Covalent Organic Frameworks](https://arxiv.org/abs/2611.23680v1) — Preprint; Abstract only.

## Fast AI navigation is tested on simulated microscopy images

Researchers compared vision-language-model decision methods for navigating simulated scanning transmission electron microscopy images of a tungsten dopant and a grain boundary in monolayer MoS2. A method that reads probabilities of candidate labels took 0.13–0.21 seconds per decision. Dopant navigation succeeded 66–91% of the time across the tested models; the best model achieved 43% success on the grain-boundary task.

**Why it matters:** Fast, language-directed decisions could help automate the search for local defects and interfaces during materials characterization.

**Limitations:** This is an abstract-only preprint using simulated images, not a demonstration on a live microscope. The grain-boundary success rate also leaves substantial room for improvement.

[Fast closed-loop STEM navigation using vision-language models with typed decisions](https://arxiv.org/abs/2611.23698v1) — Preprint; Abstract only.

## Fatigue simulations expose a potential blind spot in foundation potentials

A preprint compares an embedded-atom method potential with the NequIP foundation potential under nanoscale fatigue loading. Although both agree with reference data for many near-equilibrium properties, NequIP predicts a stacking-fault energy roughly seven times lower than the other potential and substantially more plastic deformation during cycling.

**Why it matters:** Agreement on equilibrium benchmarks does not necessarily establish reliability for rare, externally driven events. Fatigue and fracture simulations may need validation targeted to the mechanisms being studied.

**Limitations:** The comparison does not establish which potential predicts fatigue correctly: the authors note that direct experimental validation is unavailable. The report is an abstract-only preprint.

[Emergent Fatigue Dynamics from Foundational Interatomic Potentials](https://arxiv.org/abs/2611.26533v1) — Preprint; Abstract only.

## Diffusion model generates grain boundaries at target energies

A symmetry-constrained diffusion model generates paired, equivalent grain boundaries in periodic cells, making the energy of an individual boundary a well-defined target. For an aluminum boundary, all 350 generated structures retained equivalent boundary pairs after relaxation. For three in-range targets with ample nearby training examples, 44–70% fell within 0.1 J/m² of the target energy.

**Why it matters:** Conditioning generation on a boundary property could make interfaces a more direct design variable and help researchers explore potentially metastable structures.

**Limitations:** This is an abstract-only preprint for one aluminum grain-boundary geometry. Energies were supplied by a machine-learning potential, and target tracking weakened at high energies and failed outside the training range.

[Generating grain boundary structures at a specified energy with a symmetry-constrained diffusion model](https://arxiv.org/abs/2611.27188v1) — Preprint; Abstract only.

## Calibration links predicted and measured thermal conductivity

Researchers combined a machine-learning model for calculated lattice thermal conductivity with a temperature-dependent correction derived from literature measurements of half-Heusler compounds. Calculations generally overestimated measured values; on chemistries withheld from fitting, the calibrated method predicted measurements about as closely as independent laboratories agreed with one another.

**Why it matters:** Explicitly addressing the gap between ideal-crystal calculations and polycrystalline measurements could make thermoelectric screening more useful for selecting experimental candidates.

**Limitations:** This is an abstract-only preprint restricted to cubic, 18-valence-electron half-Heuslers. The correction did not consistently improve every compound, and the data do not establish a single cause of the calculation–measurement gap.

[Prediction of lattice thermal conductivity of half-Heusler compounds by machine learning and transfer-function calibration](https://arxiv.org/abs/2611.26788v1) — Preprint; Abstract only.

## Neural adsorption framework screens thousands of carbon-capture materials

A neural classical density functional framework calculated predicted adsorption isotherms for more than 5,000 experimentally reported metal-organic frameworks. The authors identify four isotherm shapes and use predicted working capacity and regeneration energy to assess suitability for different capture processes.

**Why it matters:** Screening across low and high loadings can reveal process-relevant differences that a low-pressure Henry constant alone cannot distinguish.

**Limitations:** This is an abstract-only preprint. The screening results are computational predictions, not evidence that the identified candidates achieve the projected capture performance in operation.

[Characterizing adsorption thermodynamics in carbon capture materials: an efficient first-principles approach](https://arxiv.org/abs/2611.24759v1) — Preprint; Abstract only.

## Agent combines learned predictions with first-principles band workflows

Perfumer couples Quantum ESPRESSO with learned models for structural pre-relaxation and electronic band prediction. The authors report a 2.75-fold overall speedup from learned pre-relaxation followed by Quantum ESPRESSO refinement. Their band model achieved a median per-material mean absolute error of 0.157 eV on 2,607 test materials from held-out composition families.

**Why it matters:** A natural-language interface and faster preliminary calculations could make relaxation-to-band workflows easier to run across many candidate materials.

**Limitations:** This is an abstract-only preprint. The speedup applies to the tested structures and includes first-principles refinement; predicted band energies remain approximate and should not be treated as experimental measurements.

[Perfumer: A Large Language Model-based Agentic Framework Accelerating Structural Relaxation and Electronic Band Prediction for First-Principle Calculation](https://arxiv.org/abs/2611.26349v1) — Preprint; Abstract only.
