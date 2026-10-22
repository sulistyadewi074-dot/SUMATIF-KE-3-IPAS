import { Question, LevelKognitif, Difficulty, QuestionType } from '../types';

export interface KisiKisiItem {
  id: number;
  elemen: string;
  cp: string;
  tp: string;
  indikator: string;
  levelKognitif: LevelKognitif;
  bobotSkor: number;
}

const ELEMEN_DEFAULT = 'Pemahaman IPAS (Sejarah, Sosial Budaya & Ekonomi)';
const CP_DEFAULT =
  'Peserta didik memahami latar belakang dan rute penjelajahan samudra bangsa Eropa ke Nusantara, menganalisis aturan dan penyimpangan sistem Tanam Paksa (Cultuurstelsel), mengevaluasi kebijakan Politik Etis (Trias Van Deventer), serta mengidentifikasi kondisi sosial, budaya, ekonomi, dan pendidikan masa penjajahan Belanda sebagai tonggak kebangkitan nasional.';

const TP_1 =
  'Menjelaskan latar belakang jatuhnya Konstantinopel 1453, semboyan 3G (Gold, Glory, Gospel), perkembangan teknologi navigasi, serta rute kedatangan bangsa Portugis, Spanyol, dan Belanda (VOC) ke Nusantara.';
const TP_2 =
  'Menganalisis latar belakang krisis kas Belanda, aturan resmi versus praktik penyimpangan sistem Tanam Paksa (Cultuurstelsel), komoditas wajib ekspor, serta dampak kelaparan dan penderitaan rakyat.';
const TP_3 =
  'Mengevaluasi latar belakang lahirnya Politik Etis (kritik Multatuli dan tulisan C.Th. van Deventer "Een Eereschuld"), pelaksanaan tiga program pokok (Irrigatie, Emigratie, Edukatie), serta lahirnya kaum terpelajar.';
const TP_4 =
  'Menganalisis stratifikasi sosial tiga golongan rasial, kerja paksa rodi, dualisme diskriminasi pendidikan kolonial (ELS/HIS/STOVIA), akulturasi sosial-budaya, serta merefleksikan nilai perjuangan bagi Pelajar Pancasila.';

export const KISI_KISI_MAP: Record<number, KisiKisiItem> = {
  // --- BAGIAN I: PILIHAN GANDA (10 BUTIR) ---
  1: {
    id: 1,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan stimulus narasi jatuhnya Konstantinopel 1453 dan peta jalur perdagangan, peserta didik dapat mengidentifikasi faktor pendorong utama bangsa Eropa melakukan penjelajahan samudra langsung ke Nusantara.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    id: 2,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan stimulus diagram konsep semboyan 3G (Gold, Glory, Gospel), peserta didik dapat menentukan arti operasional misi "Glory" dalam penjelajahan samudra bangsa Barat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  3: {
    id: 3,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan stimulus infografis ekspedisi pelayaran, peserta didik dapat mengidentifikasi pemimpin armada Belanda pertama yang berhasil mendarat di Pelabuhan Banten pada tahun 1596.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    id: 4,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan stimulus narasi kebangkrutan kas Kerajaan Belanda akibat Perang Diponegoro, peserta didik dapat menentukan nama Gubernur Jenderal penggagas sistem Tanam Paksa (Cultuurstelsel) tahun 1830.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  5: {
    id: 5,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan stimulus perbandingan tabel aturan resmi Staatblad 1834 vs praktik lapangan, peserta didik dapat menganalisis bentuk penyimpangan sistem Tanam Paksa terkait batas waktu kerja dan pemilihan tanah petani.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  6: {
    id: 6,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan stimulus gambar tanaman komoditas wajib ekspor, peserta didik dapat menentukan jenis tanaman industri yang paling banyak menyita lahan sawah subur dan tenaga petani pada masa Cultuurstelsel.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    id: 7,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan stimulus kutipan majalah De Gids tahun 1899 berjudul "Een Eereschuld", peserta didik dapat mengidentifikasi nama tokoh Belanda pembela hak bangsa Indonesia pencetus Trias Van Deventer.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  8: {
    id: 8,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan stimulus bagan alur tiga program Trias Van Deventer, peserta didik dapat menganalisis penyimpangan pelaksanaan program "Irrigatie" (irigasi) oleh penguasa kolonial Belanda.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  9: {
    id: 9,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan stimulus piramida stratifikasi sosial masa Hindia Belanda, peserta didik dapat menentukan kedudukan hukum dan ekonomi rakyat pribumi (inlander) dalam tingkatan sosial kolonial.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    id: 10,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan stimulus narasi pembangunan Jalan Raya Pos (Anyer-Panarukan) oleh Daendels dan dualisme sekolah ELS/HIS/STOVIA, peserta didik dapat mengevaluasi dampak diskriminasi pendidikan dan ekonomi kolonial bagi rakyat.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },

  // --- BAGIAN II: PILIHAN GANDA KOMPLEKS (5 BUTIR) ---
  11: {
    id: 11,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan stimulus infografis faktor penjelajahan samudra, peserta didik dapat memilih minimal 2 kemajuan ilmu pengetahuan dan teknologi navigasi yang memungkinkan pelaut Eropa mengarungi samudra luas.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  12: {
    id: 12,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan stimulus piagam Hak Istimewa VOC (Hak Octrooi) tahun 1602, peserta didik dapat memilih minimal 2 kewenangan istimewa luar biasa yang membuat kongsi dagang VOC bertindak layaknya sebuah negara berdaulat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  13: {
    id: 13,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan stimulus narasi bencana kelaparan di Cirebon dan Grobogan, peserta didik dapat memilih minimal 2 faktor penyebab utama penyimpangan aturan Tanam Paksa yang dipicu oleh ambisi imbalan cultuurprocenten.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  14: {
    id: 14,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan stimulus diagram Politik Etis, peserta didik dapat memilih minimal 2 dampak positif tak terduga (bumerang bagi Belanda) dari pelaksanaan program Edukatie bagi kebangkitan bangsa Indonesia.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  15: {
    id: 15,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan stimulus gambar dan narasi kebudayaan, peserta didik dapat memilih minimal 2 bukti konkret pengaruh dan peninggalan masa kolonial Belanda dalam bidang sosial-budaya dan bahasa di Indonesia saat ini.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },

  // --- BAGIAN III: PGK KATEGORI BENAR/SALAH (5 BUTIR) ---
  16: {
    id: 16,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan 3 butir pernyataan mengenai rute dan tokoh pelaut bangsa Eropa (Vasco da Gama, Magellan-Elcano, dan Cornelis de Houtman), peserta didik dapat menentukan status kebenaran (Benar/Salah) masing-masing pernyataan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  17: {
    id: 17,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan 3 butir pernyataan terkait sistem kerja, jenis komoditas wajib ekspor, dan akibat finansial Tanam Paksa (batig slot), peserta didik dapat menentukan kesesuaian fakta (Sesuai/Tidak Sesuai).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  18: {
    id: 18,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan 3 butir pernyataan seputar buku Max Havelaar karya Multatuli dan artikel Een Eereschuld, peserta didik dapat menilai kebenaran argumen kritik humaniter terhadap penjajahan Belanda.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  19: {
    id: 19,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan 3 butir pernyataan mengenai implementasi program Irrigatie, Emigratie, dan Edukatie dalam Trias Van Deventer, peserta didik dapat menentukan status kesesuaian fakta sejarahnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    id: 20,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan 3 butir pernyataan tentang kasta sosial masa Hindia Belanda, kerja paksa rodi, dan pendirian sekolah kedokteran STOVIA, peserta didik dapat menganalisis kebenaran kondisinya.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },

  // --- BAGIAN IV: MENJODOHKAN (5 BUTIR) ---
  21: {
    id: 21,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan nama 4 tokoh penjelajah samudra bangsa Eropa, peserta didik dapat menjodohkan secara tepat dengan rute pelayaran atau daerah persinggahan/penaklukannya di Nusantara.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  22: {
    id: 22,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan 4 istilah kebijakan kolonial pada era VOC dan Tanam Paksa, peserta didik dapat memasangkan dengan definisi dan konsep historisnya yang benar.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  23: {
    id: 23,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan 4 pilar/konsep dalam kebijakan Politik Etis (Trias Van Deventer), peserta didik dapat menjodohkan dengan realitas tujuan tersembunyi atau penyimpangan penerapannya di lapangan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  24: {
    id: 24,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan 4 tingkatan golongan masyarakat dan sekolah kolonial masa Hindia Belanda, peserta didik dapat memasangkan dengan deskripsi kelompok masyarakat pengisinya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  25: {
    id: 25,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan 4 komoditas tanaman wajib sistem Tanam Paksa, peserta didik dapat menjodohkan dengan kegunaan dan pasar ekspor utamanya bagi Belanda di Eropa.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },

  // --- BAGIAN V: ISIAN SINGKAT (5 BUTIR) ---
  26: {
    id: 26,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan stimulus narasi motivasi penjelajahan samudra bangsa Eropa, peserta didik dapat menuliskan istilah semboyan tiga kata (3G) yang melandasi misi bangsa Barat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  27: {
    id: 27,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan deskripsi kongsi dagang Hindia Timur Belanda yang didirikan tahun 1602 untuk memonopoli rempah-rempah, peserta didik dapat menuliskan singkatan resminya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  28: {
    id: 28,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan deskripsi kebijakan kewajiban menanam tanaman komersial ekspor tahun 1830, peserta didik dapat menuliskan nama sebutan Gubernur Jenderal Belanda perancangnya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  29: {
    id: 29,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan stimulus kutipan kisah kemanusiaan di Lebak Banten tahun 1860, peserta didik dapat menuliskan judul buku kritik kolonial karya Multatuli (Eduard Douwes Dekker).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  30: {
    id: 30,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan deskripsi sekolah kedokteran bumiputera di Batavia yang menjadi tempat lahirnya organisasi pemuda Budi Utomo (1908), peserta didik dapat menuliskan akronim nama sekolah tersebut.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },

  // --- BAGIAN VI: URAIAN (5 BUTIR, BOBOT 2 SKOR) ---
  31: {
    id: 31,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan peta jalur perdagangan rempah-rempah laut Tengah, peserta didik dapat menguraikan hubungan sebab-akibat antara jatuhnya Konstantinopel (1453) dengan dimulainya pelayaran samudra bangsa Eropa ke Nusantara.',
    levelKognitif: 'L2',
    bobotSkor: 2,
  },
  32: {
    id: 32,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Peserta didik dapat menganalisis secara kritis faktor pendorong yang mengubah sistem Tanam Paksa (Cultuurstelsel) dari aturan resmi menjadi bencana kelaparan hebat di Jawa dengan menyebutkan minimal 3 bentuk penyimpangan praktiknya.',
    levelKognitif: 'L3',
    bobotSkor: 2,
  },
  33: {
    id: 33,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Peserta didik dapat mengevaluasi secara mendalam mengapa program "Edukatie" (pendidikan) dalam Trias Van Deventer yang awalnya dirancang mencetak pegawai rendahan murah justru berbalik menjadi senjata makan tuan (bumerang) bagi penjajah Belanda.',
    levelKognitif: 'L3',
    bobotSkor: 2,
  },
  34: {
    id: 34,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Peserta didik dapat menguraikan pembagian stratifikasi sosial tiga golongan masa Hindia Belanda serta dampaknya terhadap ketidakadilan hak hukum, ekonomi, dan perlakuan sosial bagi rakyat pribumi.',
    levelKognitif: 'L2',
    bobotSkor: 2,
  },
  35: {
    id: 35,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Peserta didik dapat merefleksikan nilai-nilai keteladanan pahlawan bangsa dalam melawan penindasan kolonial untuk diterapkan dalam kehidupan nyata sebagai Pelajar Pancasila yang berintegritas dan cinta tanah air.',
    levelKognitif: 'L3',
    bobotSkor: 2,
  },
};

/**
 * Memperkaya objek Question dari defaultQuestions dengan metadata kisi-kisi resmi
 */
export function enrichQuestion(q: Question): Question {
  const meta = KISI_KISI_MAP[q.id];
  if (!meta) return q;

  return {
    ...q,
    elemen: meta.elemen,
    cp: meta.cp,
    tp: meta.tp,
    indikator: meta.indikator,
    levelKognitif: meta.levelKognitif,
    bobotSkor: meta.bobotSkor,
  };
}

export interface KisiKisiSummaryStats {
  totalSoal: number;
  totalSkor: number;
  elemenCounts: Record<string, number>;
  levelCounts: {
    L1: { count: number; percent: number; label: string };
    L2: { count: number; percent: number; label: string };
    L3: { count: number; percent: number; label: string };
  };
  difficultyCounts: {
    Mudah: { count: number; percent: number };
    Sedang: { count: number; percent: number };
    Sukar: { count: number; percent: number };
  };
  typeCounts: Record<QuestionType, number>;
}

/**
 * Menghitung rekapitulasi ringkasan statistik kisi-kisi untuk 4 summary cards
 */
export function calculateKisiKisiStats(questions: Question[]): KisiKisiSummaryStats {
  const total = questions.length || 1;
  let totalScore = 0;

  const elemenCounts: Record<string, number> = {};
  const levelRaw = { L1: 0, L2: 0, L3: 0 };
  const diffRaw = { Mudah: 0, Sedang: 0, Sukar: 0 };
  const typeCounts: Record<QuestionType, number> = {
    pg: 0,
    pgk: 0,
    pgk_kategori: 0,
    menjodohkan: 0,
    isian: 0,
    uraian: 0,
  };

  questions.forEach((q) => {
    const enriched = enrichQuestion(q);
    const score = enriched.bobotSkor || (q.type === 'uraian' ? 2 : 1);
    totalScore += score;

    const el = enriched.elemen || ELEMEN_DEFAULT;
    elemenCounts[el] = (elemenCounts[el] || 0) + 1;

    const lvl =
      enriched.levelKognitif ||
      (enriched.difficulty === 'Mudah' ? 'L1' : enriched.difficulty === 'Sedang' ? 'L2' : 'L3');
    if (lvl in levelRaw) {
      levelRaw[lvl as keyof typeof levelRaw] += 1;
    }

    const diff = enriched.difficulty || 'Sedang';
    if (diff in diffRaw) {
      diffRaw[diff as keyof typeof diffRaw] += 1;
    }

    if (q.type in typeCounts) {
      typeCounts[q.type as keyof typeof typeCounts] += 1;
    }
  });

  return {
    totalSoal: questions.length,
    totalSkor: totalScore,
    elemenCounts,
    levelCounts: {
      L1: {
        count: levelRaw.L1,
        percent: Math.round((levelRaw.L1 / total) * 100),
        label: 'L1 - Pemahaman & Pengetahuan',
      },
      L2: {
        count: levelRaw.L2,
        percent: Math.round((levelRaw.L2 / total) * 100),
        label: 'L2 - Aplikasi & Penerapan',
      },
      L3: {
        count: levelRaw.L3,
        percent: Math.round((levelRaw.L3 / total) * 100),
        label: 'L3 - Penalaran & Analisis HOTS',
      },
    },
    difficultyCounts: {
      Mudah: { count: diffRaw.Mudah, percent: Math.round((diffRaw.Mudah / total) * 100) },
      Sedang: { count: diffRaw.Sedang, percent: Math.round((diffRaw.Sedang / total) * 100) },
      Sukar: { count: diffRaw.Sukar, percent: Math.round((diffRaw.Sukar / total) * 100) },
    },
    typeCounts,
  };
}
