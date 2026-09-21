# 04. ALGORITHMS AND MATHEMATICAL FORMULATIONS
## Model Matematis, Formulasi Linguistik Komputasional, dan Algoritma Heuristik
### Proyek Disertasi: IELTS Writing Band 8 Master

---

## 1. Formulasi Matematis Penilaian Resmi IELTS Writing

Sesuai spesifikasi pengujian resmi *IELTS Partner* (British Council, IDP, Cambridge Assessment English), skor keseluruhan penulisan esai dihitung dari rata-rata aritmatika terbobot dari empat kriteria analitik, yang kemudian dibulatkan ke interval 0,5 terdekat (*rounded to the nearest half-band*).

### 1.1. Persamaan Skor Keseluruhan (Overall Band Score)

$$\text{Band}_{\text{raw}} = \frac{\text{TR} + \text{CC} + \text{LR} + \text{GRA}}{4}$$

$$\text{Band}_{\text{overall}} = \frac{\left\lfloor 2 \cdot \text{Band}_{\text{raw}} + 0.5 \right\rfloor}{2}$$

Di mana:
- $\text{TR}$: Skor *Task Response* (Task 2) atau *Task Achievement* (Task 1), rentang $[0, 9]$.
- $\text{CC}$: Skor *Coherence and Cohesion*, rentang $[0, 9]$.
- $\text{LR}$: Skor *Lexical Resource*, rentang $[0, 9]$.
- $\text{GRA}$: Skor *Grammatical Range and Accuracy*, rentang $[0, 9]$.

---

## 2. Algoritma Evaluasi Heuristik Komputasional (`band8Analyzer.js`)

Untuk menyediakan evaluasi instan tanpa latensi jaringan (*zero-latency offline feedback*), sistem mengimplementasikan algoritma diagnostik berbasis aturan komputasi linguistik:

### 2.1. Formulasi Task Achievement / Response ($\text{TR}$)

Skor $\text{TR}$ dirumuskan sebagai fungsi dari pemenuhan kuota kata minimum ($W$), jumlah paragraf ($P$), serta deteksi *Overview Clause* pada Task 1:

$$\text{TR} = \text{TR}_{\text{base}} + f_{\text{word}}(W, W_{\text{target}}) + f_{\text{para}}(P) + f_{\text{overview}}(T)$$

Di mana:
- $\text{TR}_{\text{base}} = 5.0$ (Skor dasar kompetensi rata-rata).
- Fungsi penalti jumlah kata:
  $$f_{\text{word}}(W, W_{\text{target}}) = \begin{cases} +1.5, & \text{jika } W \ge W_{\text{target}} \\ +0.5, & \text{jika } 0.75 \cdot W_{\text{target}} \le W < W_{\text{target}} \\ 0.0, & \text{jika } W < 0.75 \cdot W_{\text{target}} \end{cases}$$
  dengan $W_{\text{target}} = 250$ untuk Task 2, dan $W_{\text{target}} = 150$ untuk Task 1.
- Fungsi arsitektur paragraf:
  $$f_{\text{para}}(P) = \begin{cases} +1.0, & \text{jika } 4 \le P \le 5 \text{ (Task 2) atau } 3 \le P \le 4 \text{ (Task 1)} \\ 0.0, & \text{lainnya} \end{cases}$$
- Fungsi deteksi *Overview Task 1*:
  $$f_{\text{overview}}(T) = \begin{cases} +0.5, & \text{jika } T \text{ cocok dengan regex } \mathcal{R}_{\text{overview}} \\ 0.0, & \text{lainnya} \end{cases}$$
  dengan regex $\mathcal{R}_{\text{overview}} = \texttt{/\textbackslash b(overall\textbar in summary\textbar it is notable that)\textbackslash b/i}$.

$$\text{TR} = \min(9.0, \max(4.0, \text{TR}))$$

---

### 2.2. Formulasi Coherence and Cohesion ($\text{CC}$)

Skor $\text{CC}$ mengukur alur logis melalui densitas penanda kohesi tingkat lanjut ($C_{\text{adv}}$) dan mengenakan penalti terhadap penggunaan berlebihan konjungsi mekanik dasar ($C_{\text{basic}}$):

$$\text{CC} = \text{CC}_{\text{base}} + f_{\text{adv}}(C_{\text{adv}}) - f_{\text{penalty}}(C_{\text{basic}}) + f_{\text{struct}}(P)$$

Di mana:
$$f_{\text{adv}}(C_{\text{adv}}) = \begin{cases} +2.0, & \text{jika } C_{\text{adv}} \ge 3 \\ +1.0, & \text{jika } 1 \le C_{\text{adv}} < 3 \\ 0.0, & \text{jika } C_{\text{adv}} = 0 \end{cases}$$

$$f_{\text{penalty}}(C_{\text{basic}}) = \begin{cases} 0.5, & \text{jika } C_{\text{basic}} > 5 \text{ (Overuse of mechanical linkers)} \\ 0.0, & \text{jika } C_{\text{basic}} \le 5 \end{cases}$$

$$f_{\text{struct}}(P) = \begin{cases} +1.0, & \text{jika } P \ge 3 \\ 0.0, & \text{lainnya} \end{cases}$$

$$\text{CC} = \min(9.0, \max(4.0, \text{CC}))$$

---

### 2.3. Formulasi Lexical Resource ($\text{LR}$)

Skor $\text{LR}$ dihitung dari densitas leksikal akademik (*Academic Lexical Density* - $\rho_{\text{AWL}}$) dan jumlah kemunculan kata pasaran/lemah ($N_{\text{weak}}$):

$$\rho_{\text{AWL}} = \frac{N_{\text{academic}}}{W}$$

$$\text{LR} = \text{LR}_{\text{base}} + f_{\text{lex}}(\rho_{\text{AWL}}, N_{\text{academic}}) - f_{\text{weak}}(N_{\text{weak}})$$

Di mana:
$$f_{\text{lex}}(\rho_{\text{AWL}}, N_{\text{academic}}) = \begin{cases} +2.5, & \text{jika } N_{\text{academic}} \ge 6 \lor \rho_{\text{AWL}} \ge 0.04 \\ +1.5, & \text{jika } 3 \le N_{\text{academic}} < 6 \\ +0.5, & \text{jika } 1 \le N_{\text{academic}} < 3 \\ 0.0, & \text{lainnya} \end{cases}$$

$$f_{\text{weak}}(N_{\text{weak}}) = \begin{cases} 0.5, & \text{jika } N_{\text{weak}} > 4 \\ 0.0, & \text{lainnya} \end{cases}$$

$$\text{LR} = \min(9.0, \max(4.0, \text{LR}))$$

---

### 2.4. Formulasi Grammatical Range and Accuracy ($\text{GRA}$)

Skor $\text{GRA}$ mengevaluasi variasi struktur kalimat berdasarkan rasio sintaksis kompleks dan lanjutan terhadap total kalimat:

$$R_{\text{complex}} = \frac{S_{\text{complex}} + S_{\text{advanced}}}{S_{\text{total}}}$$

$$\text{GRA} = \text{GRA}_{\text{base}} + f_{\text{grammar}}(R_{\text{complex}}, S_{\text{advanced}})$$

Di mana:
$$f_{\text{grammar}}(R_{\text{complex}}, S_{\text{advanced}}) = \begin{cases} +3.0, & \text{jika } S_{\text{advanced}} \ge 2 \land R_{\text{complex}} \ge 0.50 \\ +2.0, & \text{jika } R_{\text{complex}} \ge 0.40 \\ +1.0, & \text{jika } R_{\text{complex}} \ge 0.20 \\ 0.0, & \text{lainnya} \end{cases}$$

$$\text{GRA} = \min(9.0, \max(4.0, \text{GRA}))$$

---

## 3. Algoritma Sintesis Audio Web Audio API (`soundEffects.js`)

Sintesis sinyal audio murni tanpa berkas eksternal memanfaatkan osilator frekuensi dengan penurunan amplitudo eksponensial (*Exponential Gain Decay*):

$$A(t) = A_0 \cdot \exp\left(-\frac{t}{\tau}\right)$$

Di mana $A_0$ adalah amplitudo awal ($0,12 - 0,15$), $t$ adalah waktu elapsed, dan $\tau$ adalah tetapan waktu luruh (*decay constant*).

Harmonisasi *Chime* Sukses dibentuk melalui superposisi 3 nada mayor (*C-E-G Triad*):

$$S(t) = \sin(2\pi \cdot 523.25 \cdot t) + \sin(2\pi \cdot 659.25 \cdot (t - 0.08)) + \sin(2\pi \cdot 783.99 \cdot (t - 0.16))$$

---

## 4. Model Gamifikasi Matematis (Leveling Progression)

Tingkatan belajar dihitung berdasarkan kurva akumulasi linier terkuantisasi:

$$\text{Level}(XP) = \left\lfloor \frac{XP}{500} \right\rfloor + 1$$

$$\text{Progress}(XP) = \frac{XP \pmod{500}}{500} \times 100\%$$
