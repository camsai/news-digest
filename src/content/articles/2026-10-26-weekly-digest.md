---
title: "Material Intelligence — October 26, 2026"
description: >-
  An entirely AI-generated weekly digest of AI for materials science, based only
  on the supplied records.
date: "2026-10-26"
kind: Weekly digest
status: published
topics:
  - Atomistic simulation
  - Materials discovery
  - Data and software
sources:
  - title: >-
      Combining Simulations and Spectroscopy to Design Protective Coatings on
      Sulfide Solid Electrolytes
    url: "https://arxiv.org/abs/2610.32905v1"
    publishedAt: "2026-10-23"
    type: Preprint
    access: Abstract only
    evidence: >-
      Sulfide solid electrolytes are attractive for all-solid-state batteries
      because of their high Li-ion conductivity and favorable processability,
      but their practical use is limited by electrochemical instability and
      moisture-induced degradation. Molecular surface coatings offer a scalable
      strategy to improve humidity tolerance and interfacial stability, yet
      there is limited understanding of the molecular-level factors governing
      surface interactions. By combining large-scale atomistic simulations
      enabled by a machine-learning potential with targeted experiments, we
      present a comprehensive framework for designing molecular coatings on
      Li$_6$PS$_5$Cl (LPSCl). Using a PET-MAD interatomic potential fine-tuned
      on an r$^2$SCAN reference dataset covering LPSCl surfaces, molecular
      adsorbates, and their interactions, we model surface adsorption of
      carboxylic (CA), sulfonic (SA), and phosphonic (PA) acids with alkyl
      chains of varying lengths and the interaction of these coated surfaces
      with water at finite temperature. The simulations show that lithiated head
      groups generally exhibit more favorable adsorption energies. Impedance
      spectroscopy shows that the lithiated coatings maintain 40--55\% of the
      initial ionic conductivity after powder processing. While adsorption
      strength is largely controlled by head-group chemistry and lithiation
      state, coating morphology depends primarily on alkyl-chain length and
      surface coverage. In particular, long-chain lithiated carboxylates form
      dense, brush-like hydrophobic layers that reduce water access to reactive
      Li surface sites, with protection setting in at a coating thickness of
      approximately 0.8 nm. Consistent with these predictions, longer
      carboxylate chains suppress H$_2$S evolution more effectively. Because
      thicker coatings also hinder Li-ion transport, intermediate chain lengths
      offer the best balance between moisture protection and ionic conductivity.
  - title: >-
      Probing the limits of forward screening and inverse design of crystal
      materials
    url: "https://arxiv.org/abs/2610.32678v1"
    publishedAt: "2026-10-23"
    type: Preprint
    access: Abstract only
    evidence: >-
      Crystal materials are designed either by screening known crystals for a
      target property or by generating new crystals with that property. Both
      routes are judged against public databases of known crystals, but these
      databases name the same crystal differently. Several materials announced
      as new by recent generative and autonomous discovery campaigns have since
      proved to be known phases or close variants of them. The limits of both
      routes remain unmeasured. Here we probe them by matching the crystals of
      55 databases by structure into one self-extending database of 14.6 million
      crystals and 131.8 million property values, each traced to its source.
      Only 4.5% of its crystal-property pairs carry a value. To fill the empty
      pairs, we developed CGTNet, an equivariant graph transformer with
      state-of-the-art accuracy on several tasks of two public benchmarks.
      Trained on each task, it forms a library of property models whose
      predictions we release. The reach of forward screening has been
      underestimated. Known crystals hold tens of thousands of
      ultra-incompressible candidates without a recorded bulk modulus, and a
      post hoc audit of synthesis evidence finds among them ReN2, whose bulk
      modulus was measured at 428 GPa. The novelty claimed for inverse design
      has been overestimated. At an equal verification budget, a
      stiffness-conditioned generator returned more stiff hits than screening
      (100 versus 55), but all contained osmium and 82 repeated recorded
      compositions. Integrating and completing the databases of known crystals
      therefore moves the limits of both routes: it widens what screening can
      reach and sets the reference against which generated crystals are judged
      new.
  - title: >-
      How good are universal MLIPs for alloys? A benchmark is only as
      trustworthy as its controls
    url: "https://arxiv.org/abs/2610.30641v1"
    publishedAt: "2026-10-22"
    type: Preprint
    access: Abstract only
    evidence: >-
      Universal machine-learned interatomic potentials (uMLIPs) are ranked by
      their formation-energy error against a DFT database, as if that database
      were ground truth, but independent DFT databases disagree. We benchmark
      fourteen uMLIPs on 1.45 million ordered intermetallics against AFLOW,
      which none trained on, and compare every energy and stability error with
      that disagreement. For half the structures, AFLOW, Alexandria, and OQMD
      differ by less than 6-8 meV/atom, but a minority differ by far more,
      raising the average to 16-30. That disagreement sets a floor on any
      model's measurable error. Re-referenced, the best uMLIP agrees with AFLOW
      as closely as Alexandria does, and the next four sit 2-7 meV/atom above
      the floor. Once broken elemental references are screened, the energy and
      stability rankings agree almost everywhere. Three apparent model failures
      shrink or vanish under the right control: poorly correlated shear moduli,
      thousands of "bad" DFT references, and the leader's inflated lead.
  - title: >-
      Decoding Composition-Structure-Performance Relations in Sodium Layered
      Oxide Positive Electrode Materials
    url: "https://arxiv.org/abs/2610.30591v1"
    publishedAt: "2026-10-22"
    type: Preprint
    access: Abstract only
    evidence: >-
      Layered sodium transition-metal (TM) oxides, Na$_x$TMO$_2$, are among the
      most promising sodium-ion positive electrode materials, yet their
      Na/vacancy orderings, layer stacking sequences, and cooperative
      Jahn--Teller distortions are known only for a few single-TM compounds. We
      compile the Na/vacancy orderings reported in earlier studies into a single
      library of 41 unique orderings and apply this uniformly to five single-TM
      and all ten Na$_x$TM$_{0.5}$TM$'_{0.5}$O$_2$ oxides (TM = Ti, Mn, Fe, Co,
      Ni), screening more than 120,000 structures with machine-learning
      interatomic potentials prior to 1,025 accurate first-principles
      calculations. The phase diagrams explain the observed O3/P3/O1 sequences
      and voltages, and the O3-to-P3 competition hinges on ordering energies of
      a few meV per atom that scalar descriptors, such as the cationic potential
      and the interlayer-slab distance, miss. Our extensive analysis reveals
      that the redox couples form a nearly partner-independent ladder,
      Ti$^{3+/4+}$ $<$ Mn$^{3+/4+}$ $<$ Co$^{3+/4+}$ $<$ Ni$^{2+/3+}$ $<$
      Fe$^{3+/4+}$, explaining pristine charge transfer and the oxidation
      sequence. Van Vleck analysis of every TMO$_6$ octahedron reveals that TM
      mixing suppresses the cooperative Jahn--Teller distortions of Mn$^{3+}$
      and Ni$^{3+}$ through charge transfer to Jahn--Teller-inactive states or
      dilution of Jahn--Teller-active centers. We formulate an
      energy-density-versus-strain map that yields a design rule: a high-voltage
      couple without Jahn--Teller strain, which Mn$^{4+}$/Ni$^{2+}$ charge
      transfer realizes in Na$_x$Mn$_{0.5}$Ni$_{0.5}$O$_2$, the most practical
      composition. We release the ordering-resolved dataset as a training set
      for subsequent training of accurate machine-learning interatomic
      potentials.
  - title: >-
      Symmetry-Based Parameter Efficient Low-Rank Fine-Tuning for
      High-Throughput Calculation of Lattice Thermal Conductivity
    url: "https://arxiv.org/abs/2610.29634v1"
    publishedAt: "2026-10-21"
    type: Preprint
    access: Abstract only
    evidence: >-
      Accurate and efficient prediction of lattice thermal conductivity (LTC) is
      essential for developing materials for thermoelectric, microelectronic,
      and photovoltaic applications. Here, we present a methodology for
      high-throughput calculation of LTC across large datasets of compounds
      sharing a common crystal symmetry. Our approach combines fine-tuning of
      the MatterSim 1M universal machine-learned interatomic potential with LTC
      calculations based on the solution of the Boltzmann transport equation. We
      introduce a symmetry-based few-shot fine-tuning strategy (SBFS-FT) based
      on low-rank adaptation. In this approach, MatterSim 1M is fine-tuned on a
      small, carefully selected set of compounds that share a common crystal
      symmetry. The resulting potential is then applicable for accurate LTC
      calculations for compounds with this crystal symmetry, even if they were
      not included in the fine-tuning set. We tested our methodology on datasets
      of half-Heusler compounds (space group 216), materials with space group
      225, and spinels (space group 227). We demonstrated that LTC calculations
      with MatterSim 1M fine-tuned using SBFS-FT exhibited a mean absolute
      relative difference from the reference results (obtained using moment
      tensor potentials and polyMLPs) 2-3 times smaller than that achieved with
      the non-fine-tuned MatterSim 1M potential. Moreover, the accuracy of LTC
      calculations with MatterSim 1M after SBFS-FT was comparable to that
      achieved using the MatterSim 1M potentials individually fine-tuned for
      each compound. Importantly, SBFS-FT enabled generation of the potential
      suitable for accurate LTC calculations across large compound datasets
      substantially faster than fine-tuning of MatterSim 1M for each compound
      individually, reducing the computational time by approximately a factor of
      5-7 for a dataset of 100 compounds.
  - title: >-
      Microstructural Generative Inverse Models for Additive Manufacturing
      Digital Twins
    url: "https://arxiv.org/abs/2610.30404v1"
    publishedAt: "2026-10-21"
    type: Preprint
    access: Abstract only
    evidence: >-
      Metal additive manufacturing (AM) offers substantial advantages to the
      fabrication of complex structural components, but its widespread adoption
      is slowed due to complexities in the process-structure-property relations
      which is the cause for uncertainty and drives risk. Accurately quantifying
      these complex relations solely via experimental workflows is time
      consuming and costly. Integrated computational materials and engineering
      (ICME) frameworks address this challenge by leveraging advanced
      computational tools, such as crystal plasticity finite element models
      (CPFEM), to predict critical mechanical properties directly from
      microstructural data. However, these frameworks require a large datasets
      that are often difficult to obtain, and their predictive accuracy depends
      on the availability of realistic AM microstructure representations.
      Generative deep learning models are a promising approach towards
      synthesizing AM microstructures which contain complex morphological and
      crystallographic features. Denoising diffusion probabilistic models
      (DDPMs), in particular, show a strong potential to capture the inherent
      complexities of AM structures. In this work, we demonstrate that DDPMs can
      reliably synthesize digital-twin orientation-imaging micrographs, and we
      support this claim with quantitative evidence of the fidelity of the
      generated samples. Additionally, we establish a classifier-free guidance
      framework for solving complex inverse problems such as
      property-to-structure and process-to-structure mappings, and we showcase a
      potential application on a qualification-relevant uncertainty
      quantification problem. Our work highlights the potential of AI-based
      generative modeling as a key component of computational frameworks for
      accelerating AM materials qualification and certification.
  - title: >-
      Compositional neural networks for multimodal X-ray and neutron scattering
      inversion
    url: "https://arxiv.org/abs/2610.29362v1"
    publishedAt: "2026-10-21"
    type: Preprint
    access: Abstract only
    evidence: >-
      X-ray and neutron scattering are indispensable for structural
      characterization across condensed-matter physics and materials science.
      Yet, because scattering experiments generally record intensities without
      phase information, distinct structures can yield similar scattering
      patterns, rendering the corresponding inverse problems non-unique. This
      ambiguity can be reduced by combining complementary measurements, but
      their integration into machine-learning frameworks remains challenging.
      Here we introduce a modular framework for probabilistic multi-measurement
      analysis based on prior-amortized flow matching. Single-observation
      posterior estimators are trained separately for individual observation
      types or physical probes and combined only at inference time through a
      compositional sampler. This late fusion approach allows pretrained
      single-observation models to be reused without dedicated joint retraining.
      As a case in point, we consider reflectometry, which provides
      depth-resolved, nanometer-scale information about thin films and
      interfaces. Our single-observation demonstrations span X-ray,
      time-of-flight neutron and polarized neutron reflectometry. In separate
      co-refinement studies, task-matched estimators enable homogeneous
      composition across multiple neutron contrasts and heterogeneous multimodal
      composition of X-ray and neutron measurements. Together, these results
      establish compositional flow matching as a modular approach to
      uncertainty-aware inversion and co-refinement, with potential
      applicability to other scattering problems in which multiple observations
      constrain a common physical structure while retaining measurement-specific
      parameters.
  - title: >-
      Thermal expansion mechanisms, heat transport, and band-gap renormalization
      in strongly anharmonic Rb$_2$SO$_4$, Rb$_2$Ca$_2$(SO$_4$)$_3$, and
      Ba$_3$Lu(BO$_3$)$_3$ from machine-learned interatomic potentials
    url: "https://arxiv.org/abs/2610.30918v1"
    publishedAt: "2026-10-22"
    type: Preprint
    access: Abstract only
    evidence: >-
      Rb$_2$SO$_4$, Rb$_2$Ca$_2$(SO$_4$)$_3$, and Ba$_3$Lu(BO$_3$)$_3$ are
      structurally complex materials whose thermal expansion has been
      interpreted, on the basis of high-temperature x-ray diffraction, in terms
      of specific polyhedral rearrangements. We study their lattice dynamics and
      its consequences for thermal and electronic properties using molecular
      dynamics with actively learned moment tensor potentials trained on
      density-functional theory data. The anharmonicity measure $σ^A$ (compares
      the anharmonic contribution to the interatomic forces with the total
      forces acting on atoms) reaches $\approx$0.3-0.5 for $β$-Rb$_2$SO$_4$,
      Rb$_2$Ca$_2$(SO$_4$)$_3$, and Ba$_3$Lu(BO$_3$)$_3$ and $\approx$0.75 for
      orientationally disordered $α$-Rb$_2$SO$_4$, and the imaginary harmonic
      modes of Rb$_2$Ca$_2$(SO$_4$)$_3$ and $α$-Rb$_2$SO$_4$ are stabilized at
      finite temperature. The simulations reproduce the measured thermal
      expansion and support the mechanisms proposed from diffraction: expansion
      along $c$ in $β$-Rb$_2$SO$_4$ arises from both elongation and
      straightening of corrugated Rb chains, BO$_3$ reorientation accompanies
      the anisotropic expansion of Ba$_3$Lu(BO$_3$)$_3$, and bending of
      polyhedral linkages limits expansion along the weakly expanding directions
      and in cubic Rb$_2$Ca$_2$(SO$_4$)$_3$. Green-Kubo lattice thermal
      conductivities differ by more than an order of magnitude between compounds
      with comparable $σ^A$, showing that the anharmonicity measure alone does
      not determine heat transport. Phonon-induced band-gap renormalization,
      including lattice thermal expansion, reaches 2.7 and 1.7 eV at 1250 K in
      Rb$_2$Ca$_2$(SO$_4$)$_3$ and Ba$_3$Lu(BO$_3$)$_3$ and 1.4 eV at 650 K in
      $β$-Rb$_2$SO$_4$, with zero-point renormalizations of 0.64, 0.70, and 0.31
      eV for $β$-Rb$_2$SO$_4$, Rb$_2$Ca$_2$(SO$_4$)$_3$, and
      Ba$_3$Lu(BO$_3$)$_3$, respectively.
submissionIds: []
---

> Entirely AI-generated and automatically published after automated validation. Not independently human fact-checked. Automated checks do not establish scientific accuracy.

This week's eight selections connect machine learning to battery interfaces, crystal screening, microstructure generation and materials characterization. The featured study pairs atomistic predictions with coating experiments; two other studies scrutinize crystal novelty and interatomic-potential benchmarks. All selected sources are preprints available here only as abstracts, not peer-reviewed findings.

## Featured: Battery coatings expose the trade-off between moisture protection and ion transport

Researchers combined a fine-tuned PET-MAD interatomic potential with experiments to study molecular coatings on the sulfide electrolyte Li6PS5Cl. Simulations predict that long-chain lithiated carboxylates form hydrophobic layers, with protection emerging near 0.8 nm thickness. Experiments found stronger suppression of hydrogen sulfide evolution with longer chains, while impedance measurements showed lithiated coatings retained 40–55% of initial ionic conductivity after powder processing.

**Why it matters:** The combination connects molecular adsorption and coating morphology to measurable protection and conductivity. Intermediate chain lengths emerge as a practical design direction because thicker barriers can exclude water while also obstructing lithium-ion transport.

**Limitations:** This abstract-only preprint does not establish long-term cycling performance or full-cell durability. The approximately 0.8 nm protection threshold is a simulation result; the experimental trends support the proposed mechanism without independently verifying every predicted structural detail.

[Combining Simulations and Spectroscopy to Design Protective Coatings on Sulfide Solid Electrolytes](https://arxiv.org/abs/2610.32905v1) — Preprint; Abstract only.

## A consolidated crystal database challenges claims of generative novelty

A preprint reports structure-based integration of 55 databases into a collection of 14.6 million crystals and 131.8 million property values. Only 4.5% of crystal-property pairs have recorded values. At an equal verification budget, a stiffness-conditioned generator produced 100 stiff hits versus 55 from screening, but every generated hit contained osmium and 82 repeated recorded compositions.

**Why it matters:** Incomplete property coverage can make known crystals look exhausted as a discovery resource. Structural deduplication and source-traced records could improve both forward screening and the reference used to assess whether generated candidates are genuinely new.

**Limitations:** Only the preprint abstract is supplied. Repeated compositions are not necessarily duplicate structures, and the generator comparison concerns one stiffness task. Predicted stiff candidates are not experimental discoveries; the cited 428 GPa measurement for ReN2 comes from a retrospective audit of existing synthesis evidence.

[Probing the limits of forward screening and inverse design of crystal materials](https://arxiv.org/abs/2610.32678v1) — Preprint; Abstract only.

## Alloy-potential rankings depend on the quality of their DFT controls

Researchers benchmarked 14 universal machine-learned interatomic potentials against 1.45 million ordered intermetallic structures from AFLOW, which the authors report none of the models trained on. Comparisons among AFLOW, Alexandria and OQMD revealed substantial reference disagreement. After re-referencing, the best model agreed with AFLOW about as closely as Alexandria did, while the next four were 2–7 meV per atom above that disagreement floor.

**Why it matters:** Benchmark error can mix model shortcomings with inconsistent reference calculations. Explicit database controls and elemental-reference checks could prevent misleading rankings and help identify which apparent failures merit new calculations rather than model retraining.

**Limitations:** This abstract-only preprint primarily addresses ordered intermetallic energy and stability comparisons. Agreement within cross-database variation does not establish experimental accuracy or reliable behavior for defects, finite-temperature dynamics and other configurations outside the benchmark.

[How good are universal MLIPs for alloys? A benchmark is only as trustworthy as its controls](https://arxiv.org/abs/2610.30641v1) — Preprint; Abstract only.

## ML-assisted screening maps ordering and distortion in sodium cathodes

Using a library of 41 sodium/vacancy orderings, researchers screened more than 120,000 layered-oxide structures with machine-learning interatomic potentials before performing 1,025 first-principles calculations. The resulting phase diagrams explain reported stacking sequences and voltages. Their analysis favors combining high-voltage redox chemistry with low Jahn–Teller strain and identifies Na\_xMn0.5Ni0.5O2 as a practical composition within the study.

**Why it matters:** The workflow connects composition, charge transfer and cooperative distortion rather than relying on a single structural descriptor. It also reports release of an ordering-resolved dataset that could support more accurate potentials for related sodium-ion electrode searches.

**Limitations:** The supplied evidence is a preprint abstract describing computational results, not new battery testing. The search applies a fixed ordering library to selected transition metals, and key stacking competitions involve only a few meV per atom, making small energy differences consequential.

[Decoding Composition-Structure-Performance Relations in Sodium Layered Oxide Positive Electrode Materials](https://arxiv.org/abs/2610.30591v1) — Preprint; Abstract only.

## Symmetry-guided fine-tuning reduces the cost of thermal-conductivity calculations

A low-rank adaptation strategy fine-tunes MatterSim 1M on a small selection of compounds sharing a crystal symmetry, then applies the potential to other compounds with that symmetry. Across half-Heuslers, space-group-225 materials and spinels, the authors report thermal-conductivity relative errors 2–3 times smaller than with the untuned model. For 100 compounds, the reported computational time was about 5–7 times lower than individual compound fine-tuning.

**Why it matters:** Sharing adaptation across a structural family could make thermal-transport screening more affordable without requiring a separate fine-tuning workflow for every material. That would be useful when comparing thermoelectrics or heat-management materials within related crystal classes.

**Limitations:** This abstract-only preprint compares conductivity calculations with references obtained using moment tensor potentials and polyMLPs, not direct experimental measurements. The reported accuracy and speed gains apply to the tested families and do not establish transfer across arbitrary symmetries or chemistries.

[Symmetry-Based Parameter Efficient Low-Rank Fine-Tuning for High-Throughput Calculation of Lattice Thermal Conductivity](https://arxiv.org/abs/2610.29634v1) — Preprint; Abstract only.

## Diffusion models generate microstructure inputs for additive-manufacturing digital twins

Researchers report denoising diffusion models that synthesize orientation-imaging micrographs containing morphological and crystallographic features of metal additive-manufacturing microstructures. They also introduce classifier-free guidance for property-to-structure and process-to-structure inverse mappings, with an example aimed at qualification-related uncertainty quantification.

**Why it matters:** Realistic synthetic microstructures could expand the inputs available to crystal-plasticity simulations when measured datasets are scarce. Conditional generation could help explore structural variability associated with a target property or processing condition.

**Limitations:** The preprint abstract reports quantitative fidelity assessment but provides no numerical metrics. Realistic generated images do not by themselves establish accurate mechanical properties, physically achievable processing routes or qualification-ready uncertainty estimates.

[Microstructural Generative Inverse Models for Additive Manufacturing Digital Twins](https://arxiv.org/abs/2610.30404v1) — Preprint; Abstract only.

## Composable neural inference combines X-ray and neutron reflectometry

A probabilistic framework trains posterior estimators separately for individual scattering measurements, then combines them at inference time using a compositional sampler. Reflectometry demonstrations cover X-ray, time-of-flight neutron and polarized neutron observations, including co-refinement across neutron contrasts and across X-ray and neutron measurements.

**Why it matters:** Combining complementary probes can reduce structural ambiguity in thin films and interfaces. Reusing individual estimators without dedicated joint retraining could make uncertainty-aware analysis more modular as measurement combinations change.

**Limitations:** This abstract-only preprint demonstrates reflectometry applications, not general resolution of scattering inverse problems. The supplied evidence does not quantify uncertainty calibration, runtime or robustness to inconsistent measurements; broader scattering applications remain prospective.

[Compositional neural networks for multimodal X-ray and neutron scattering inversion](https://arxiv.org/abs/2610.29362v1) — Preprint; Abstract only.

## ML potentials disentangle thermal expansion from heat transport in anharmonic crystals

Actively learned moment tensor potentials enabled molecular-dynamics studies of Rb2SO4, Rb2Ca2(SO4)3 and Ba3Lu(BO3)3. Simulations reproduced measured thermal expansion and supported previously proposed structural mechanisms. Calculated thermal conductivities differed by more than an order of magnitude between compounds with comparable anharmonicity measures, while predicted temperature-driven band-gap renormalization reached 2.7 eV in one compound.

**Why it matters:** The results illustrate how ML-enabled dynamics can connect atomic rearrangements to thermal and electronic properties in systems poorly described by harmonic models. They also caution against using a single anharmonicity metric as a shortcut for predicting heat transport.

**Limitations:** The evidence is limited to a preprint abstract. Thermal-expansion agreement provides an experimental check, but the conductivity and band-gap changes are computational predictions in the supplied record. Their accuracy depends on the underlying density-functional data and learned potentials.

[Thermal expansion mechanisms, heat transport, and band-gap renormalization in strongly anharmonic Rb$\_2$SO$\_4$, Rb$\_2$Ca$\_2$(SO$\_4$)$\_3$, and Ba$\_3$Lu(BO$\_3$)$\_3$ from machine-learned interatomic potentials](https://arxiv.org/abs/2610.30918v1) — Preprint; Abstract only.
