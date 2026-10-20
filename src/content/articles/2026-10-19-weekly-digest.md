---
title: "Material Intelligence — October 19, 2026"
description: >-
  An entirely AI-generated weekly digest of AI for materials science, based only
  on the supplied records.
date: "2026-10-19"
kind: Weekly digest
status: published
topics:
  - Autonomous laboratories
  - Atomistic simulation
  - Materials discovery
  - Data and software
sources:
  - title: >-
      Autonomous adaptive spectral analysis with an LLM agent for self-driving
      laboratories
    url: "https://arxiv.org/abs/2610.25619v1"
    publishedAt: "2026-10-19"
    type: Preprint
    access: Abstract only
    evidence: >-
      Self-driving laboratories accelerate materials exploration through
      autonomous closed-loop integration of synthesis, characterization, and
      next-experiment selection. However, characterization does not always
      directly provide the target property; measured spectra or images often
      require automated analysis to extract quantitative descriptors based on
      physically motivated assumptions and predefined criteria. Such procedures
      can fail for measurements outside these criteria, requiring a decision on
      whether a reliable value can be recovered or no numerical value should be
      reported. Here, we implemented an autonomous adaptive spectral-analysis
      agent using a large language model (LLM) to supervise a deterministic
      numerical-analysis routine. For each spectrum, the agent executes the
      predefined analysis script and assesses the result using the measured
      spectrum and fitting diagnostics. Valid results are accepted unchanged,
      recoverable failures are reanalyzed through bounded adjustments of
      predefined fitting parameters, and NaN (not a number) is returned when no
      scientifically defensible value can be obtained. We evaluated the workflow
      on optical transmittance spectra from 203 epitaxial beta-Ga2O3 films grown
      during a previously reported self-driving thin-film growth campaign. The
      predefined optical analysis script returned Urbach energy, an
      optical-quality metric, for 183 spectra and failed for 20. The agent
      retained those 183 values and evaluated 20 exception cases, recovering 16
      through bounded parameter adjustments and returning NaN for 4 when the
      spectral evidence did not support a reliable Urbach tail. The audit
      records captured spectral features, parameter changes, and rationale for
      each decision. These results demonstrate autonomous scientific exception
      handling by an LLM agent while leaving quantitative property extraction to
      deterministic numerical analysis.
  - title: >-
      Understanding compression-extension error asymmetry in universal
      machine-learning interatomic potentials
    url: "https://arxiv.org/abs/2610.24514v1"
    publishedAt: "2026-10-17"
    type: Preprint
    access: Abstract only
    evidence: >-
      Universal machine-learning interatomic potentials are increasingly used
      across diverse materials, yet their reliability under directional
      deformation remains unclear. We compare compression and extension along
      paired deformation paths from the same parent structures for eleven
      pretrained potentials. The benchmark comprises 1,963 Materials Project
      trajectory (MPtrj) parents and 1,286 experimental-source MinX-Eq parents
      at six strain magnitudes from 1% to 10%. Density-functional theory
      provides references for isotropic, uniaxial and biaxial loading in MPtrj
      and isotropic loading in MinX-Eq. At $\pm 10\%$, every model has a larger
      median force error under compression, with pooled isotropic
      compression-to-extension ratios of 2.12 and 3.30 for MPtrj and MinX-Eq.
      Decomposing error growth into DFT force-scale growth and relative-error
      evolution shows that relative errors decrease on both branches, faster
      under compression in MPtrj but slower under compression in MinX-Eq.
      Force-scale matching moves the error ratios toward unity, although MinX-Eq
      retains a compression-side excess across models. Radial and SOAP analyses
      place compressed structures at shorter separations and farther from public
      reference pools, while readout-associated model features show larger
      compression-side displacements. These results distinguish stronger
      physical responses from changes in relative predictive accuracy and
      provide a basis for assessing universal potentials in deformation
      simulations.
  - title: Challenging Atomistic Foundation Models on Disordered Carbons
    url: "https://arxiv.org/abs/2610.26701v1"
    publishedAt: "2026-10-19"
    type: Preprint
    access: Abstract only
    evidence: >-
      Foundation machine-learned interatomic potentials (MLIPs) promise broad
      transferability, yet their out-of-domain reliability is hard to establish.
      Here, we use pure and O/H-containing disordered carbon spanning multiple
      phases, competing hybridisations and porous frameworks to stress-test six
      popular foundation MLIPs. We first screen all six on density functional
      theory (DFT) energy and force errors and binding curves, then subject four
      to melt-quench-anneal molecular dynamics and evaluate the resulting
      structural observables. Binding curves and O/H-containing trajectories
      reveal unphysical extrapolation and dynamical failures that low DFT energy
      and force errors fail to reveal. Of the models tested, MACE-MH-1 is the
      most consistently robust, with low DFT errors and stable MD. Despite
      differing architectures, OMAT-based models share structural biases,
      highlighting the importance of training coverage. All four models generate
      structures of nanoporous carbon that reproduce the principal experimental
      and specialised carbon potential signatures. Incorporating O/H leaves
      short-range order largely unchanged but shifts pore-size distributions
      towards larger pores. These results emphasise the need for
      application-specific validation and extend molecular dynamics modelling of
      nanoporous carbon towards experimentally realistic structures.
  - title: >-
      Scalable long-range machine learning interatomic potentials with
      electrical response for atomistic material modeling
    url: "https://arxiv.org/abs/2610.23643v1"
    publishedAt: "2026-10-16"
    type: Preprint
    access: Abstract only
    evidence: >-
      Accurate atomistic simulations of materials under electric fields require
      long-range electrostatics and electrical-response modeling at length
      scales beyond the reach of conventional first-principles methods. Yet
      these capabilities remain difficult to reconcile with the scalability of
      machine-learning interatomic potentials (MLIPs). Strictly local models
      enable efficient spatial parallelization but neglect long-range
      interactions, whereas existing electrostatic extensions introduce global
      dependencies that hinder distributed computation. Here, we overcome this
      limitation by analytically separating the long-range electrostatic forces
      and Born effective charges (BECs) into a global electrostatics calculation
      and strictly local derivatives of learned latent charges. This formulation
      preserves the spatial decomposability of equivariant MLIPs while enabling
      distributed evaluation of energies, forces, stresses, and BECs across
      different boundary conditions. Implemented as DPA4C-LR on the
      \texttt{nvalchemi} platform, the framework scales to 5.2 million atoms on
      four GPUs at approximately twice the computational cost of its short-range
      backbone. Trained on energies and forces, DPA4C-LR accurately infers BECs
      and reproduces the field-dependent infrared spectra of water. We further
      demonstrate its capabilities by recovering the characteristic slim
      polarization hysteresis of relaxor \ce{Pb(Mg_{1/3}Nb_{2/3})O3}, which is
      obscured by finite-size effects in smaller simulations; predicting a
      room-temperature field-driven ionic conductivity of $6.8 \pm 0.7$~mS/cm in
      amorphous \ce{Li_{0.9}NbO_{0.9}Cl_{4.1}}; and modeling interfacial thermal
      transport across Si/diamond interfaces with slab-corrected electrostatics.
      By combining long-range physics, electrical-response inference, and
      distributed computation, this framework extends predictive atomistic
      modeling toward device-relevant length scales.
  - title: >-
      Linear response for machine-learned interatomic potentials: phonons at
      arbitrary wave vectors from the primitive cell
    url: "https://arxiv.org/abs/2610.23545v1"
    publishedAt: "2026-10-16"
    type: Preprint
    access: Abstract only
    evidence: >-
      Phonon calculations with machine-learned interatomic potentials are almost
      exclusively performed with finite displacements in supercells, an approach
      that is exact only at wave vectors commensurate with the supercell and
      whose error depends on the range of the force constants. In
      message-passing networks this range grows with the number of layers, and
      reaches 140 angstrom for the deepest universal models. Here we show that
      the dynamical matrix of a message-passing potential can be obtained
      exactly in the primitive cell, at any wave vector, as the linear response
      of the forces to a displacement modulated by a Bloch phase, in the spirit
      of density-functional perturbation theory. The phase enters only where the
      features of neighboring atoms are gathered, and the trained model is used
      without modification. One further derivative yields group velocities and
      mode Grüneisen parameters analytically. We apply the method to NequIP and
      Prophet, and reproduce the Hessians of supercells to machine precision.
      Using these results as a reference, we find that the supercells commonly
      employed in high-throughput calculations lead to errors of several tenths
      of a THz in the phonon frequencies, and that these errors decrease slowly
      with the size of the supercell, in particular for deep models. For a
      low-symmetry silicate, the supercell predicts a dynamical instability that
      the model does not have. Quantities that depend on derivatives of the
      dispersion, such as the group velocities and the Grüneisen parameter at
      low temperature, are considerably more affected than the frequencies
      themselves. When both approaches are used to obtain the same force
      constants, their computational cost is comparable for crystals with
      symmetry.
  - title: >-
      NEP-kappa 2.0: A unified framework for phonon transport and nonequilibrium
      thermalization with machine-learning interatomic potentials
    url: "https://arxiv.org/abs/2610.25477v1"
    publishedAt: "2026-10-18"
    type: Preprint
    access: Abstract only
    evidence: >-
      We present NEP-kappa 2.0, a unified framework that integrates
      density-functional theory, material-specific machine-learning interatomic
      potentials, and pretrained force models for advanced phonon calculations.
      A common workflow enables harmonic lattice dynamics, quasi-harmonic and
      stochastic self-consistent phonon treatments, three- and four-phonon
      transport, Wigner population--coherence transport, and time-dependent
      phonon dynamics. Applications to 3C-SiC, BAs, and Cs$_2$AgInCl$_6$
      demonstrate consistent force-model comparisons, finite-temperature
      renormalization, higher-order scattering, and intermode coherence. Beyond
      steady-state transport, mode-resolved simulations of selectively excited
      3C-SiC reveal that half of the injected optical-phonon energy reaches
      acoustic modes within approximately 3.75 ps, primarily through
      one-optical--two-acoustic scattering. Acoustic branches exhibit response
      times differing by a factor of five, with competing scattering channels
      producing a transient energy overshoot. Channel-resolved entropy
      production and persistent nonthermal occupations distinguish interbranch
      energy redistribution from intrabranch thermalization. The framework
      connects equilibrium phonon transport with microscopic nonequilibrium
      energy dynamics.
  - title: >-
      Atomistic prediction of magnetic behaviour across chemistry, structure and
      temperature
    url: "https://arxiv.org/abs/2610.24407v1"
    publishedAt: "2026-10-17"
    type: Preprint
    access: Abstract only
    evidence: >-
      Controlling magnetic phases and properties through composition and
      external conditions is central to the development of magnetic materials.
      Atomistic foundation models offer a route to predicting such behaviour
      across diverse materials, but magnetic materials remain challenging
      because their atomic structure and local moments are strongly coupled,
      while temperature and disorder drive magnetic moments into non-collinear
      states with evolving orientations and magnitudes. Broadly pretrained
      atomistic models still sample only limited magnetic diversity, while
      finite-temperature descriptions of coupled lattice and magnetic
      fluctuations remain largely material-specific. Here we introduce MagPT,
      pretrained across 48 elements on 912,492 spin-lattice configurations
      spanning structural, orientational and longitudinal magnetic fluctuations
      over 0 $\sim$ 1,000 K and 0 $\sim$ 10 GPa. By treating species, atomic
      positions and vector moments together, MagPT distinguishes magnetic states
      that share the same atomic structure but differ in spin configuration and
      energy. It captures magnetic behaviour across composition, temperature and
      length scales, from Slater-Pauling-type composition-magnetism relations in
      transition-metal alloys and finite-temperature phase evolution in
      elemental ferromagnets and magnetic shape-memory Heusler alloys, to
      emergent long-wavelength non-collinear spin textures in chiral magnets and
      local chemistry-magnetism coupling in high-entropy alloys. MagPT moves
      atomistic studies of magnetic materials beyond material-specific
      approaches, establishing a general framework for exploring and designing
      magnetic matter across diverse chemistries and conditions.
  - title: >-
      A Comprehensive Survey of Crystal Structural Prototypes: Construction,
      Classification, and Applications
    url: "https://arxiv.org/abs/2610.22600v1"
    publishedAt: "2026-10-15"
    type: Preprint
    access: Abstract only
    evidence: >-
      Crystal structural prototypes describe recurring atomic arrangements
      across chemically distinct materials. Prototype libraries are built
      through crystallographic curation, standardization, geometric matching,
      local-environment clustering, and periodic-graph analysis, and support
      chemical substitution, derivative enumeration, high-throughput screening,
      structure solution, crystal structure prediction (CSP), and generative
      design. This survey compares methods by the structural information they
      retain and the equivalence rules they impose, distinguishing
      crystallographic structure types, geometric realizations,
      chemistry-anonymous topologies, and chemical decorations. We review
      curated and automatically extracted prototype libraries (AFLOW, CSPD,
      LAE-ICSPD, EMFDTW, TYPIX, ICSD structure types), their source databases,
      and algorithms for assigning family membership. A GraphID-based analysis
      of samples from ICSD, the Materials Project, OQMD, and LeMat shows that
      the 100 most frequent families in each sample cover 30 to 67 percent of
      analyzed structures, while 72 to 82 percent of observed families are
      singletons. The GraphIDs of up to 76 percent of structures change when the
      neighbor tolerance is varied. In our comparison of 12 generative CSP
      models, template retrieval achieves the highest top-1 success rate.
      Removing a reduced-stoichiometry class from training introduces new
      failures in 50 to 78 percent of the test structures of that class, which
      measures sensitivity to stoichiometric coverage, not generalization to
      unseen prototypes. We relate these findings to earlier statistics of
      structure types, space groups, and periodic nets, and to protein-fold
      coverage studies. We propose independent-database coverage measurements,
      discovery-rate analyses, and family-held-out tests to assess how prototype
      reuse affects prediction accuracy, generalization, and novelty.
  - title: >-
      topas-editor and TOPilot: tools for AI-driven analysis of diffraction and
      total scattering data
    url: "https://arxiv.org/abs/2610.23512v1"
    publishedAt: "2026-10-16"
    type: Preprint
    access: Abstract only
    evidence: >-
      This paper describes topas-editor and TOPilot, which provide a powerful
      interface to the TOPAS software suite and allow generative AI-driven
      automation of complex crystallographic tasks. topas-editor is a
      TOPAS-aware VS Code extension designed for the rapid creation and editing
      of TOPAS input files and for interacting with the software. It knows TOPAS
      syntax, has crystallographic-aware editing features and provides in-line
      user guidance via hover tips and automated links to reference manuals.
      TOPilot is a collection of Python routines and machine-accessible
      reference documents that allow AI-driven automated analysis in TOPAS. It
      uses a transferable topas-inp-writer skill that can be applied in all
      TOPAS application areas. We demonstrate the power and reliability of the
      approach using examples including: a complex Rietveld refinement with
      sample- and data-related complications; automatic analysis of multiple
      data sets; a pipeline from indexing through structure solution to
      refinement; automatic identification of the phases present in a sample;
      single crystal and powder diffraction analysis of incommensurate
      structures; and fitting PDF data. TOPilot can be used directly alongside
      topas-editor, via a stand-alone topilot-wizard, or via command line
      interfaces or desktop apps from major AI providers. TOPilot was developed
      and tested using Claude large language models, but can be configured to
      use other cloud or local models. topas-editor and TOPilot are freely
      available.
  - title: >-
      Reticulating Local Dynamics in Three-Dimensional Covalent Organic
      Frameworks
    url: "https://arxiv.org/abs/2610.24418v1"
    publishedAt: "2026-10-17"
    type: Preprint
    access: Abstract only
    evidence: >-
      In covalent organic frameworks (COFs), the geometry of the building units
      predetermines the structure of the framework, yet comparable design
      principles relating the COF linkers to the local motions that govern guest
      adsorption and diffusion as well as mechanical response have remained
      beyond reach. Here, we combine synchrotron X-ray pair distribution
      function (PDF) analysis with molecular dynamics (MD) simulations
      accelerated by machine learning interatomic potentials to resolve and
      compare the local dynamics of two three-dimensional imine-linked COFs,
      chosen to differ in the geometry and rigidity of one of their two building
      units. Both are constructed from the same 4-connected square planar
      linker, $4,4',4'',4'''$-(pyrene-1,3,6,8-tetrayl)tetraaniline (PyTTA),
      reticulated with the 12-connected nanographene
      hexakis{[3,5-bis($p$-formylphenyl)-4,6-dimethoxyphenyl]}hexabenzocoronene
      to give COF-412, {[(HBC-LA$_{12}$)(PyTTA)$_3$]}$_{\mathit{imine}}$, and
      with the 6-connected triptycene
      2,3,6,7,14,15-hexakis(4-formylphenyl)triptycene to give COF-564,
      {[(Trip-CHO)$_2$(PyTTA)$_3$]}$_{\mathit{imine}}$. The PDF-MD approach
      resolves the amplitude, the time scale, and the spatial extent of the
      motion of all COF linkers, separating the limited libration of the fused
      aromatic cores from the larger reorientational tilts of the pendant aryl
      rings they carry and from the translation of whole linkers within the net.
      The simulations further reveal that exchanging the nanographene- for the
      triptycene-based linker tunes the equilibrium tilt and the positional
      probability density of PyTTA, raising the tilt amplitude of its linker
      partner, and, notably, strengthens the coupling between the translations
      of neighbouring linkers. This approach provides a blueprint for
      understanding local dynamical properties in COFs, and shows them to be
      selectable through the choice of building unit and amenable to design.
submissionIds: []
---

> Entirely AI-generated and automatically published after automated validation. Not independently human fact-checked. Automated checks do not establish scientific accuracy.

This week's developments focus on making AI-assisted materials research more dependable: bounded exception handling for laboratory spectra, application-specific tests of foundation potentials, and phonon calculations that avoid supercell artifacts. Other highlights extend simulations to long-range electrical response and magnetic fluctuations. All selected reports are preprints available here only as abstracts; computational predictions are distinguished from measured results, and none is presented as peer-reviewed evidence.

## Featured: An LLM handles spectral-analysis exceptions without replacing numerical fitting

An adaptive analysis agent supervised a deterministic fitting routine on measured optical transmittance spectra from 203 epitaxial beta-Ga2O3 films. It preserved the routine's 183 successful Urbach-energy estimates, recovered 16 of 20 failed cases through bounded fitting-parameter adjustments, and declined to report values for the remaining four. Audit records documented spectral features, changes and rationale.

**Why it matters:** Characterization failures can interrupt autonomous experimentation or feed unreliable descriptors into experiment selection. This workflow offers a concrete division of labor: numerical routines extract properties, while an LLM manages exceptions within predefined bounds and can abstain when the evidence is inadequate.

**Limitations:** This abstract-only preprint evaluates previously collected experimental spectra, not a newly demonstrated closed-loop growth campaign. Recovery counts alone do not establish that the adjusted estimates are accurate; the supplied abstract does not describe independent reference values or performance on other materials and instruments.

[Autonomous adaptive spectral analysis with an LLM agent for self-driving laboratories](https://arxiv.org/abs/2610.25619v1) — Preprint; Abstract only.

## Stress tests expose blind spots in universal interatomic potentials

Two benchmarks probe reliability beyond average prediction errors. Across eleven pretrained potentials, compression produced larger median force errors than extension at paired 10% strains, with pooled isotropic ratios of 2.12 and 3.30 in two datasets. Separately, tests on disordered carbons found unphysical binding behavior and molecular-dynamics failures that low DFT energy and force errors did not reveal; MACE-MH-1 was the most consistently robust model in that comparison.

**Why it matters:** Together, the studies argue for validating the intended simulation, not just a static test set. Deformation paths, binding curves and trajectory stability can expose risks that aggregate error metrics miss, helping researchers decide whether a foundation model needs targeted training before use.

**Limitations:** Both reports are abstract-only preprints. The compression study separates stronger physical force responses from changes in relative predictive accuracy, so larger absolute errors do not by themselves establish poorer relative accuracy. The carbon ranking is specific to the tested models and environments, not a universal leaderboard.

[Understanding compression-extension error asymmetry in universal machine-learning interatomic potentials](https://arxiv.org/abs/2610.24514v1) — Preprint; Abstract only.

[Challenging Atomistic Foundation Models on Disordered Carbons](https://arxiv.org/abs/2610.26701v1) — Preprint; Abstract only.

## Long-range electrical response reaches multi-million-atom simulations

DPA4C-LR separates global electrostatic calculations from strictly local derivatives of learned latent charges, enabling distributed evaluation of energies, forces, stresses and Born effective charges. The authors report simulations of 5.2 million atoms on four GPUs at roughly twice the cost of the short-range backbone, alongside applications to infrared spectra, relaxor polarization, ionic conductivity and interfacial thermal transport.

**Why it matters:** Long-range interactions and electrical response matter for dielectrics, ion conductors and interfaces, but can undermine the parallel scalability of local potentials. This formulation could make larger simulations of field-dependent materials behavior practical while retaining explicit long-range physics.

**Limitations:** The evidence is an abstract-only preprint, with no independent assessment of scaling or accuracy supplied. The reported room-temperature ionic conductivity of 6.8 ± 0.7 mS/cm in amorphous Li0.9NbO0.9Cl4.1 is a computational prediction, not an experimental measurement. The scaling claim applies to the reported hardware and setup.

[Scalable long-range machine learning interatomic potentials with electrical response for atomistic material modeling](https://arxiv.org/abs/2610.23643v1) — Preprint; Abstract only.

## Phonon methods tackle supercell errors and nonequilibrium heat flow

A linear-response method calculates message-passing potentials' phonon dynamical matrices at arbitrary wave vectors directly in the primitive cell, reproducing supercell Hessians to machine precision. It identifies commonly used supercells with frequency errors of several tenths of a THz and one spurious instability. Separately, NEP-kappa 2.0 combines force-model comparisons, anharmonic transport and time-dependent phonon dynamics in a unified workflow.

**Why it matters:** The complementary developments address two needs: faithfully evaluating a learned potential's vibrational predictions and translating those predictions into thermal-transport analysis. NEP-kappa's simulated energy redistribution in SiC also distinguishes energy transfer between phonon branches from thermalization within them.

**Limitations:** Both are abstract-only preprints, and their results are computational rather than new experimental measurements. Exact linear response means exact evaluation of the learned model, not exact agreement with the physical material. Its reported cost is comparable to supercell calculations for crystals with symmetry when obtaining the same force constants; a blanket speedup is not established.

[Linear response for machine-learned interatomic potentials: phonons at arbitrary wave vectors from the primitive cell](https://arxiv.org/abs/2610.23545v1) — Preprint; Abstract only.

[NEP-kappa 2.0: A unified framework for phonon transport and nonequilibrium thermalization with machine-learning interatomic potentials](https://arxiv.org/abs/2610.25477v1) — Preprint; Abstract only.

## MagPT learns coupled atomic and magnetic fluctuations

MagPT is pretrained on 912,492 spin-lattice configurations across 48 elements, spanning 0–1,000 K and 0–10 GPa. By representing atomic species, positions and vector magnetic moments together, it distinguishes spin states sharing the same atomic structure. Reported applications include alloy composition–magnetism trends, temperature-dependent phases and long-wavelength non-collinear spin textures.

**Why it matters:** Atomic coordinates alone cannot distinguish all relevant magnetic states. Joint spin-lattice modeling offers a route to exploring how chemistry, disorder and temperature interact in magnetic materials, potentially reducing reliance on separately constructed models for each system.

**Limitations:** This abstract-only preprint reports modeling capabilities, not newly synthesized or experimentally validated magnetic materials. Element count and training-set size do not establish transferability to every composition or magnetic phase. The supplied evidence lacks detailed error metrics, held-out evaluation protocols and computational-cost comparisons.

[Atomistic prediction of magnetic behaviour across chemistry, structure and temperature](https://arxiv.org/abs/2610.24407v1) — Preprint; Abstract only.

## A prototype survey questions how crystal-generation novelty is measured

A survey of crystal structural prototypes compares libraries, equivalence rules and twelve generative crystal-structure-prediction models. In its comparison, template retrieval achieves the highest top-1 success rate. Graph-based family assignments also prove sensitive to neighbor definitions: up to 76% of structures change GraphID when the neighbor tolerance varies.

**Why it matters:** Successful structure prediction and discovery of genuinely new structural families are different achievements. The survey proposes independent-database coverage measurements and family-held-out tests to distinguish effective prototype reuse from generalization beyond familiar structures.

**Limitations:** This is an abstract-only survey preprint, not an experimental discovery report. Rankings depend on the evaluated datasets and protocols. Removing a reduced-stoichiometry class introduced new failures in 50–78% of that class's test structures, but the authors explicitly identify this as sensitivity to stoichiometric coverage, not a test of unseen-prototype generalization.

[A Comprehensive Survey of Crystal Structural Prototypes: Construction, Classification, and Applications](https://arxiv.org/abs/2610.22600v1) — Preprint; Abstract only.

## TOPilot brings AI-assisted workflows to crystallographic analysis

The topas-editor extension and TOPilot routines provide TOPAS-aware editing and AI-driven diffraction and total-scattering analysis. Reported demonstrations include complicated Rietveld refinements, multi-dataset analysis, indexing through structure solution, phase identification and pair-distribution-function fitting. The tools are described as freely available.

**Why it matters:** These are materials-specific analysis tools rather than generic coding releases. Machine-accessible reference documents and a reusable input-writing skill could reduce the effort needed to connect crystallographic software with AI assistants across several characterization tasks.

**Limitations:** The abstract-only preprint lists demonstrations but supplies no quantitative failure rate, independent benchmark or measure of required human correction. Development and testing used Claude models; configurability for other models does not establish equivalent performance. Free availability does not, by itself, establish an open-source license or unrestricted access to TOPAS.

[topas-editor and TOPilot: tools for AI-driven analysis of diffraction and total scattering data](https://arxiv.org/abs/2610.23512v1) — Preprint; Abstract only.

## Scattering measurements and learned dynamics reveal motion inside COFs

Researchers combine synchrotron X-ray pair-distribution-function analysis with machine-learning-potential molecular dynamics to compare two three-dimensional imine-linked covalent organic frameworks, COF-412 and COF-564. The combined analysis resolves distinct linker motions; simulations further indicate that exchanging a nanographene-based building unit for a triptycene-based one changes tilts and strengthens coupling between neighboring linker translations.

**Why it matters:** Framework design usually emphasizes static geometry, but local motion also matters for adsorption, diffusion and mechanical response. Connecting measured structural information with atomistic dynamics could help turn building-unit selection into a strategy for controlling motion as well as topology.

**Limitations:** This abstract-only preprint combines experimental characterization with simulation-based interpretation; the detailed dynamical conclusions should not all be treated as direct measurements. Evidence covers two frameworks, and the supplied abstract does not demonstrate improved guest transport, adsorption performance or mechanical properties.

[Reticulating Local Dynamics in Three-Dimensional Covalent Organic Frameworks](https://arxiv.org/abs/2610.24418v1) — Preprint; Abstract only.
