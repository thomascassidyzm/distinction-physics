# Distinction Physics: Rigorous Glossary

*Version 1.0 - December 2025*
*Purpose: Fix semantic drift by providing single, consistent definitions*

---

## How to Use This Glossary

Each term includes:
- **Definition**: The single, consistent meaning used throughout the framework
- **Formal Version**: Mathematical specification where available
- **Operational Criterion**: How you would identify or measure this in practice
- **What It Is NOT**: Common confusions and misreadings to avoid

All claims in the framework should use these definitions consistently. If a term appears to shift meaning, that is a bug to be fixed, not a feature.

---

## Core Terms

### 1. Distinction

**Definition**:
A stable asymmetry in a physical system's response to inputs, detectable by another system investing energy. The fundamental unit of accessible structure for any OLU.

**Formal Version**:
A distinction between states x and y exists for an observer O when:
```
diamond_O(x, y) = 1
```
where diamond_O: Delta x Delta -> {0,1} is the distinction function, subject to:
```
diamond_O(x, y) = 1  implies  E(x, y) >= kT ln 2
```
The energy cost E(x,y) is bounded below by Landauer's limit.

**Operational Criterion**:
A distinction exists if and only if:
1. A physical system produces different outputs for inputs x vs. y
2. This differential response is stable (persists over relevant timescales)
3. The system expends at least kT ln 2 of energy to maintain this differential response

Example: A thermostat distinguishes "above setpoint" from "below setpoint" because it produces different outputs (heater on vs. off) and expends energy to do so.

**What It Is NOT**:
- NOT a purely mental or subjective phenomenon (distinctions are physical, energy-expending processes)
- NOT a purely objective "thing in the world" independent of any system (distinctions are relational: they exist for systems)
- NOT observer-created reality (the asymmetry in nature exists; the distinction is its actualization through energy investment)
- NOT identical to "difference" in the abstract (abstract differences cost no energy; physical distinctions do)

---

### 2. Observer-Like-Us (OLU)

**Definition**:
Any physical system with a finite energy budget that makes and maintains distinctions through differential response to its environment. The class of systems for which this framework describes physics.

**Formal Version**:
An OLU is a 4-tuple O = (S, E_total, diamond_O, Phi) where:
```
S           = set of internal states
E_total     < infinity  (finite energy budget)
diamond_O   : Delta x Delta -> {0,1}  (distinction-making capacity)
Phi         : Delta -> S  (registration map: external distinctions -> internal states)
```
Subject to the constraint:
```
sum over active distinctions D of E(D) <= E_total
```

**Operational Criterion**:
A system qualifies as an OLU if:
1. It has finite energy available for information processing
2. It produces different internal states in response to different environmental conditions
3. These differential responses require energy expenditure

Examples of OLUs:
- Humans (obviously)
- Thermostats (distinguish temperature ranges)
- Photoreceptors (distinguish photon presence/absence)
- Measuring devices (distinguish measurement outcomes)
- Bacteria (distinguish chemical gradients)
- Any physical detector

**What It Is NOT**:
- NOT consciousness-requiring (thermostats are OLUs without being conscious)
- NOT human-centric (any physical system meeting the criteria qualifies)
- NOT supernatural or non-physical observers (OLUs are physical systems embedded in physics)
- NOT infinite or unbounded observers (finiteness is definitional)
- NOT equivalent to "conscious observer" in Copenhagen interpretation (OLU is broader and physically grounded)

---

### 3. Distinction-Making

**Definition**:
The physical process of establishing or maintaining a stable asymmetry in system response through energy investment. The actualization of potential structure into accessed structure.

**Formal Version**:
Distinction-making is a transition from:
```
diamond_O(x, y) = 0  -->  diamond_O(x, y) = 1
```
This transition requires energy expenditure:
```
Delta_E >= kT ln 2  (Landauer's limit)
```

The rate of distinction-making is bounded by available power:
```
dN/dt <= P / (kT ln 2)
```
where N is the number of distinctions and P is input power.

**Operational Criterion**:
Distinction-making occurs when:
1. A system that previously responded identically to x and y
2. Begins responding differently to x and y
3. Energy is dissipated in the process (measurable as heat)

The minimum energy cost of kT ln 2 per bit is measurable in principle (and has been measured in careful experiments on Landauer's limit).

**What It Is NOT**:
- NOT perception (perception may involve distinction-making, but distinction-making is broader)
- NOT consciousness or awareness (unconscious systems make distinctions)
- NOT "measurement" in the Copenhagen sense (no collapse postulate, no special role for consciousness)
- NOT costless or abstract (always involves physical energy expenditure)
- NOT instantaneous (rate-limited by available power)

---

### 4. Energy Budget

**Definition**:
The finite quantity of energy available to an OLU for distinction-making and maintenance. The fundamental constraint that limits what any OLU can access.

**Formal Version**:
For an OLU O = (S, E_total, diamond_O, Phi):
```
E_total in R+  (positive real, finite)
```
This constrains the maximum number of simultaneous distinctions:
```
N_max <= E_total / (kT ln 2)
```

For time-dependent analysis, the power constraint is:
```
dE_spent/dt <= P_input
```
where P_input is the power available to the OLU.

**Operational Criterion**:
The energy budget is measurable as:
1. The total metabolic/electrical/mechanical energy available to the system
2. For biological systems: ATP consumption rate, metabolic rate
3. For artificial systems: power consumption, battery capacity
4. For physical detectors: energy available for state changes

**What It Is NOT**:
- NOT metaphorical (the constraint is literal, physical, measurable)
- NOT infinite or "effectively infinite" (finiteness is the whole point)
- NOT unbounded in principle (thermodynamic limits apply to all physical systems)
- NOT merely practical (the constraint is fundamental, not technological)

---

### 5. Effective Discreteness

**Definition**:
The phenomenon whereby quantities that may be mathematically continuous appear discrete to any OLU because distinguishing infinitely many values would require infinite energy. A constraint on observation, not necessarily a claim about underlying reality.

**Formal Version**:
**Theorem (Effective Discreteness)**:
For any OLU with energy budget E_total observing a property Q valued in interval [a,b]:

The number of distinguishable values is bounded:
```
N_max <= E_total / (kT ln 2)
```

The minimum distinguishable separation is:
```
delta_Q >= (b - a) * (kT ln 2) / E_total
```

**Proof**:
1. Each distinction costs at least kT ln 2 (Landauer bound)
2. Total energy available is E_total < infinity
3. Maximum distinctions = E_total / (kT ln 2) < infinity
4. Therefore observable values form a finite set
5. A finite set is discrete

[DERIVED] - This genuinely follows from the axioms.

**Operational Criterion**:
Effective discreteness predicts:
1. No OLU can report infinitely many distinct values for any quantity
2. Resolution improves with energy investment (more energy = finer distinctions)
3. There exists a minimum distinguishable difference for any measurement given finite energy

**What It Is NOT**:
- NOT a claim that reality itself is discrete (the claim is epistemic, not ontological)
- NOT a derivation of quantum discreteness (quantum discreteness has additional structure)
- NOT the claim that spacetime is fundamentally granular (that would be a separate, stronger claim)
- NOT dependent on consciousness (applies to thermostats as much as humans)
- NOT a derivation of the Planck scale (the specific scale is IMPORTED, not derived)

---

## Physics Terms (Framework Interpretations)

### 6. Entropy (in this framework)

**Definition**:
The measure of distinction-decay; the degree to which states that were distinguishable have become indistinguishable. An INTERPRETATION of standard thermodynamic entropy, not a replacement for it.

**Formal Version**:
Standard thermodynamic entropy:
```
S = k_B ln W
```
where W = number of microstates indistinguishable at the macroscopic level.

Framework interpretation: W counts configurations that an OLU cannot distinguish given its energy budget and distinction structure. Entropy increase = distinctions decaying = more configurations becoming indistinguishable.

For an isolated system, distinction decay follows:
```
dN_distinctions/dt = -Gamma * N_distinctions
```
leading to:
```
dS/dt >= 0  (Second Law)
```

[INTERPRETED] - We reframe existing physics; we do not derive the Second Law from scratch.

**Operational Criterion**:
Same as standard entropy measurements. The framework offers a conceptual reframing, not new measurement protocols.

**What It Is NOT**:
- NOT a derivation of entropy from the axioms alone (statistical mechanics is IMPORTED)
- NOT a replacement for Boltzmann's definition (we interpret Boltzmann, not replace)
- NOT derived from pure distinction-making (requires additional statistical assumptions)
- NOT a solution to the arrow of time problem (reframes but doesn't solve)

---

### 7. Measurement (in this framework)

**Definition**:
The physical process of distinction-actualization through energy investment. When an OLU makes a distinction regarding a quantum system, this constitutes measurement. An INTERPRETATION of quantum measurement, not a solution to the measurement problem.

**Formal Version**:
A measurement on system with states {|psi_i>} is a distinction-making process where:
```
diamond_O(|psi_i>, |psi_j>) = 1  for i != j
```
This requires:
```
E >= n * kT ln 2  for n-outcome measurement
```

[INTERPRETED] - We reframe what measurement means; we do not derive the Born rule or explain collapse.

**Operational Criterion**:
Same as standard quantum measurement. The framework offers interpretation, not new experimental signatures.

Potential empirical content: The claim that n-outcome measurements require at least n * kT ln 2 energy is in principle testable, though standard physics also predicts this via Landauer's principle.

**What It Is NOT**:
- NOT a solution to the measurement problem (we interpret measurement, not explain collapse)
- NOT a derivation of the Born rule (probability interpretation is IMPORTED)
- NOT an explanation of why measurement causes definite outcomes (this remains mysterious)
- NOT "consciousness causes collapse" (OLUs need not be conscious)
- NOT equivalent to Copenhagen measurement (no special role for observers beyond being physical systems)

---

### 8. Superposition (in this framework)

**Definition**:
The condition of a system prior to distinction-making, where multiple possibilities remain undistinguished by any OLU. An INTERPRETATION of quantum superposition as "undistinguished structure," not a derivation or explanation of interference.

**Formal Version**:
A system in superposition state |psi> = sum_i c_i |phi_i> satisfies:
```
diamond_O(|phi_i>, |phi_j>) = 0  for all i, j
```
for observer O until measurement/distinction-making occurs.

[INTERPRETED] - We reframe what superposition means conceptually; we do not derive the Hilbert space formalism.

**Operational Criterion**:
Same as standard quantum superposition detection (interference experiments). The framework offers interpretation only.

**What It Is NOT**:
- NOT a derivation of superposition from axioms (Hilbert space structure is IMPORTED)
- NOT an explanation of interference (we interpret, not explain)
- NOT a claim that superposition is "merely epistemic" (we take no position on this)
- NOT an explanation of why superpositions exist (we accept them as given)

---

## Meta-Terms

### 9. Transcendental

**Definition**:
Concerning necessary conditions for possible experience, knowledge, or (in this framework) physics-as-accessible-to-OLUs. In the tradition of Kant: identifying what any observer must necessarily face, not making claims about reality-independent-of-observation.

**Formal Version**:
A claim is transcendental if it has the form:
```
For all OLUs O: [property P necessarily holds for O's physics]
```
Example: "For all OLUs: resolution is finite" is transcendental.
Counter-example: "c = 299,792,458 m/s" is empirical, not transcendental.

**Operational Criterion**:
A claim is transcendental if:
1. It concerns constraints on observation/distinction-making rather than specific physical facts
2. It would hold for ANY finite-energy observer, not just humans
3. Its negation would contradict the definition of OLU

Transcendental claims that survive in this framework:
- Resolution limits are necessary for any finite-energy observer
- Trade-offs between precision in different domains are unavoidable
- Complete knowledge is impossible for any OLU
- Undistinguished structure necessarily exceeds any OLU's distinctions

**What It Is NOT**:
- NOT mystical or supernatural (Kant's transcendental philosophy is rigorous, not mystical)
- NOT claims about "transcendent" reality beyond experience (transcendental != transcendent)
- NOT a priori deduction of physics (we identify constraints, not derive specific laws)
- NOT idealism (we don't claim mind creates reality; we identify what any physical observer must face)

---

### 10. Derived vs. Interpreted

**Definition**:
The distinction between claims that LOGICALLY FOLLOW from the framework's axioms versus claims that are CONCEPTUALLY REFRAMED using framework vocabulary but depend on external physics.

**Formal Version**:

DERIVED [marked as [DERIVED]]:
```
Axioms A1, A2, ... An |- Claim C (logical proof exists)
```
The claim follows by valid logical inference from stated axioms alone.

INTERPRETED [marked as [INTERPRETED]]:
```
External physics E + Framework vocabulary V => Restatement R
```
We describe known physics using framework concepts but do not derive the physics.

**Operational Criterion**:
To check if a claim is derived vs. interpreted:
1. Can you write a complete logical proof from stated axioms to the claim?
2. If yes: DERIVED
3. If proof requires smuggling in external physics: INTERPRETED

Current status: Most claims in the framework are INTERPRETED. Very few are genuinely DERIVED.

Example of genuine derivation:
- "Finite energy implies finite distinctions" [DERIVED]
  - Proof: Each distinction costs >= kT ln 2. Finite E / (kT ln 2) = finite N.

Example of interpretation:
- "Superposition = undistinguished possibilities" [INTERPRETED]
  - We accept quantum superposition from physics and redescribe it.

**What It Is NOT**:
- "Derived" does NOT mean "consistent with" (consistency is weaker than derivation)
- "Interpreted" does NOT mean "wrong" (interpretations can be valuable and correct)
- This distinction is NOT pedantic (overclaiming derivations is a major credibility problem)

---

## Epistemic Status Labels

Use these labels consistently throughout all framework documents.

### 11. [DERIVED]

**Meaning**: The claim logically follows from the framework's axioms via explicit proof.

**Criteria for use**:
- A complete proof from axioms to claim exists
- No external physics is smuggled in
- The derivation is valid by standard logical/mathematical reasoning

**Current examples**:
- "Finite energy implies finite distinctions" [DERIVED]
- "No OLU can make infinitely many distinctions" [DERIVED]
- "Effective discreteness for finite-energy observers" [DERIVED]

---

### 12. [INTERPRETED]

**Meaning**: The claim redescribes known physics using framework vocabulary. Existing physics is accepted and reframed, not derived.

**Criteria for use**:
- The underlying physics comes from external theory (QM, thermodynamics, etc.)
- The framework provides a conceptual reframing
- No new empirical content is added

**Current examples**:
- "Entropy = distinction decay" [INTERPRETED]
- "Superposition = undistinguished possibilities" [INTERPRETED]
- "Measurement = distinction-making" [INTERPRETED]
- "The Born rule reflects..." anything [INTERPRETED]

---

### 13. [CONSISTENT]

**Meaning**: The claim does not contradict the framework but is not derived from or by it. The framework accommodates the claim without generating it.

**Criteria for use**:
- The claim is compatible with framework axioms
- The framework neither predicts nor forbids the claim
- The claim comes from external physics and is simply accepted

**Current examples**:
- Lorentz invariance [CONSISTENT]
- Specific values of coupling constants [CONSISTENT]
- Details of the Standard Model [CONSISTENT]

---

### 14. [IMPORTED]

**Meaning**: The concept or value is taken directly from external physics without derivation. The framework uses this as input, not output.

**Criteria for use**:
- The concept/value comes from empirical physics
- The framework cannot function without it
- No attempt is made to derive it

**Current examples**:
- Physical constants: h-bar, k_B, G, c [IMPORTED]
- Planck scale [IMPORTED]
- Hilbert space structure of QM [IMPORTED]
- Statistical mechanics (equiprobability, phase space) [IMPORTED]
- Landauer's principle itself [IMPORTED]

---

### 15. [CONJECTURED]

**Meaning**: A speculative extension of the framework. Not derived, not yet well-integrated, possibly wrong.

**Criteria for use**:
- The claim goes beyond current axioms and interpretations
- It represents a research direction, not established framework content
- It may be falsified or abandoned

**Current examples**:
- "Gravity affects coherence in distinction-relevant ways" [CONJECTURED]
- "Spacetime emerges from distinction structures" [CONJECTURED]
- "The framework resolves the hard problem of consciousness" [CONJECTURED] (actually: likely false)

---

## Summary Table

| Term | Type | Key Point |
|------|------|-----------|
| Distinction | Core | Stable physical asymmetry, costs energy |
| OLU | Core | Any finite-energy distinction-making system |
| Distinction-Making | Core | Energy-expending process of actualizing asymmetry |
| Energy Budget | Core | Finite, physical constraint on distinctions |
| Effective Discreteness | Core [DERIVED] | Finite energy -> finite observable values |
| Entropy | Physics [INTERPRETED] | Reframed as distinction-decay |
| Measurement | Physics [INTERPRETED] | Reframed as distinction-actualization |
| Superposition | Physics [INTERPRETED] | Reframed as undistinguished states |
| Transcendental | Meta | Necessary conditions for OLU physics |
| Derived vs. Interpreted | Meta | Logical proof vs. conceptual reframing |

---

## Version History

- v1.0 (December 2025): Initial rigorous glossary created in response to immune system analysis identifying semantic drift as a vulnerability.

---

*This glossary is part of the Distinction Physics meta-documentation. All framework documents should use these definitions consistently.*
