-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 25, 2024 at 04:00 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bawika`
--

-- --------------------------------------------------------

--
-- Table structure for table `dongeng`
--

CREATE TABLE `dongeng` (
  `id_dongeng` int(11) NOT NULL,
  `video_youtube` varchar(255) NOT NULL,
  `judul_dongeng` varchar(100) NOT NULL,
  `sinopsis_dongeng` text DEFAULT NULL,
  `id_rekomendasi_dongeng` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `id_event` int(11) NOT NULL,
  `poster_lomba` varchar(255) NOT NULL,
  `biaya_pendaftaran` decimal(10,2) NOT NULL,
  `syarat_dan_ketentuan` text NOT NULL,
  `kriteria_penilaian` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `kartu_kredit`
--

CREATE TABLE `kartu_kredit` (
  `id_kartu_kredit` int(11) NOT NULL,
  `nomor_kartu` varchar(16) NOT NULL,
  `kode_keamanan` char(3) NOT NULL,
  `id_pembayaran` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `kuis`
--

CREATE TABLE `kuis` (
  `id_kuis` int(11) NOT NULL,
  `soal` text NOT NULL,
  `pilihan_jawaban` text NOT NULL,
  `jawaban` text NOT NULL,
  `skor` int(11) NOT NULL,
  `jumlah_soal_benar` int(11) NOT NULL,
  `id_pengguna` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `kuitansi`
--

CREATE TABLE `kuitansi` (
  `id_kuitansi` int(11) NOT NULL,
  `id_pembayaran` int(11) NOT NULL,
  `tanggal_transaksi` date NOT NULL,
  `total_pembayaran` decimal(10,2) NOT NULL,
  `nomor_tagihan` varchar(50) NOT NULL,
  `PPN` decimal(5,2) DEFAULT 10.00,
  `jumlah_PPN` decimal(10,2) GENERATED ALWAYS AS (`total_pembayaran` * (`PPN` / 100)) VIRTUAL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `materi`
--

CREATE TABLE `materi` (
  `id_materi` int(11) NOT NULL,
  `judul_materi` varchar(100) NOT NULL,
  `gambar_materi` varchar(255) NOT NULL,
  `penjelasan_materi` text NOT NULL,
  `akses` enum('free','premium') DEFAULT 'free',
  `id_rekomendasi_materi` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `materi_paket`
--

CREATE TABLE `materi_paket` (
  `id_materi` int(11) NOT NULL,
  `id_paket_premium` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `paket_premium`
--

CREATE TABLE `paket_premium` (
  `id_paket_premium` int(11) NOT NULL,
  `penjelasan_keunggulan_premium` text NOT NULL,
  `pilihan_paket` varchar(100) NOT NULL,
  `tanggal_jatuh_tempo` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pembayaran`
--

CREATE TABLE `pembayaran` (
  `id_pembayaran` int(11) NOT NULL,
  `id_pengguna` int(11) NOT NULL,
  `media_pembayaran` enum('kartu_kredit','transfer_bank','ewallet') NOT NULL,
  `tanggal_batas_pembayaran` date NOT NULL,
  `status_pembayaran` enum('pending','success','failed') DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pendaftaran`
--

CREATE TABLE `pendaftaran` (
  `id_pendaftaran` int(11) NOT NULL,
  `id_pengguna` int(11) NOT NULL,
  `nama_peserta` varchar(100) NOT NULL,
  `tempat_tanggal_lahir` date NOT NULL,
  `asal_sekolah` varchar(100) DEFAULT NULL,
  `alamat` text DEFAULT NULL,
  `nomor_hp` varchar(15) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `jenis_lomba` varchar(50) DEFAULT NULL,
  `foto_peserta` varchar(255) DEFAULT NULL,
  `id_event` int(11) NOT NULL,
  `status_pembayaran` enum('pending','paid') DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pengguna`
--

CREATE TABLE `pengguna` (
  `id_pengguna` int(11) NOT NULL,
  `nama_depan` varchar(50) NOT NULL,
  `nama_belakang` varchar(50) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `alamat` text DEFAULT NULL,
  `nomor_telepon` varchar(15) DEFAULT NULL,
  `foto_profil` varchar(255) DEFAULT NULL,
  `status_akses` enum('free','premium') DEFAULT 'free',
  `tanggal_bergabung` date DEFAULT curdate()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tembang`
--

CREATE TABLE `tembang` (
  `id_tembang` int(11) NOT NULL,
  `audio` varchar(255) NOT NULL,
  `lirik_lagu` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dongeng`
--
ALTER TABLE `dongeng`
  ADD PRIMARY KEY (`id_dongeng`),
  ADD KEY `id_rekomendasi_dongeng` (`id_rekomendasi_dongeng`);

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id_event`);

--
-- Indexes for table `kartu_kredit`
--
ALTER TABLE `kartu_kredit`
  ADD PRIMARY KEY (`id_kartu_kredit`),
  ADD KEY `id_pembayaran` (`id_pembayaran`);

--
-- Indexes for table `kuis`
--
ALTER TABLE `kuis`
  ADD PRIMARY KEY (`id_kuis`),
  ADD KEY `id_pengguna` (`id_pengguna`);

--
-- Indexes for table `kuitansi`
--
ALTER TABLE `kuitansi`
  ADD PRIMARY KEY (`id_kuitansi`),
  ADD KEY `id_pembayaran` (`id_pembayaran`);

--
-- Indexes for table `materi`
--
ALTER TABLE `materi`
  ADD PRIMARY KEY (`id_materi`),
  ADD KEY `id_rekomendasi_materi` (`id_rekomendasi_materi`);

--
-- Indexes for table `materi_paket`
--
ALTER TABLE `materi_paket`
  ADD PRIMARY KEY (`id_materi`,`id_paket_premium`),
  ADD KEY `id_paket_premium` (`id_paket_premium`);

--
-- Indexes for table `paket_premium`
--
ALTER TABLE `paket_premium`
  ADD PRIMARY KEY (`id_paket_premium`);

--
-- Indexes for table `pembayaran`
--
ALTER TABLE `pembayaran`
  ADD PRIMARY KEY (`id_pembayaran`),
  ADD KEY `id_pengguna` (`id_pengguna`);

--
-- Indexes for table `pendaftaran`
--
ALTER TABLE `pendaftaran`
  ADD PRIMARY KEY (`id_pendaftaran`),
  ADD KEY `id_pengguna` (`id_pengguna`),
  ADD KEY `id_event` (`id_event`);

--
-- Indexes for table `pengguna`
--
ALTER TABLE `pengguna`
  ADD PRIMARY KEY (`id_pengguna`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `tembang`
--
ALTER TABLE `tembang`
  ADD PRIMARY KEY (`id_tembang`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dongeng`
--
ALTER TABLE `dongeng`
  MODIFY `id_dongeng` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
  MODIFY `id_event` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kartu_kredit`
--
ALTER TABLE `kartu_kredit`
  MODIFY `id_kartu_kredit` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kuis`
--
ALTER TABLE `kuis`
  MODIFY `id_kuis` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kuitansi`
--
ALTER TABLE `kuitansi`
  MODIFY `id_kuitansi` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `materi`
--
ALTER TABLE `materi`
  MODIFY `id_materi` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `paket_premium`
--
ALTER TABLE `paket_premium`
  MODIFY `id_paket_premium` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pembayaran`
--
ALTER TABLE `pembayaran`
  MODIFY `id_pembayaran` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pendaftaran`
--
ALTER TABLE `pendaftaran`
  MODIFY `id_pendaftaran` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pengguna`
--
ALTER TABLE `pengguna`
  MODIFY `id_pengguna` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tembang`
--
ALTER TABLE `tembang`
  MODIFY `id_tembang` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `dongeng`
--
ALTER TABLE `dongeng`
  ADD CONSTRAINT `dongeng_ibfk_1` FOREIGN KEY (`id_rekomendasi_dongeng`) REFERENCES `dongeng` (`id_dongeng`);

--
-- Constraints for table `kartu_kredit`
--
ALTER TABLE `kartu_kredit`
  ADD CONSTRAINT `kartu_kredit_ibfk_1` FOREIGN KEY (`id_pembayaran`) REFERENCES `pembayaran` (`id_pembayaran`);

--
-- Constraints for table `kuis`
--
ALTER TABLE `kuis`
  ADD CONSTRAINT `kuis_ibfk_1` FOREIGN KEY (`id_pengguna`) REFERENCES `pengguna` (`id_pengguna`);

--
-- Constraints for table `kuitansi`
--
ALTER TABLE `kuitansi`
  ADD CONSTRAINT `kuitansi_ibfk_1` FOREIGN KEY (`id_pembayaran`) REFERENCES `pembayaran` (`id_pembayaran`);

--
-- Constraints for table `materi`
--
ALTER TABLE `materi`
  ADD CONSTRAINT `materi_ibfk_1` FOREIGN KEY (`id_rekomendasi_materi`) REFERENCES `materi` (`id_materi`);

--
-- Constraints for table `materi_paket`
--
ALTER TABLE `materi_paket`
  ADD CONSTRAINT `materi_paket_ibfk_1` FOREIGN KEY (`id_materi`) REFERENCES `materi` (`id_materi`),
  ADD CONSTRAINT `materi_paket_ibfk_2` FOREIGN KEY (`id_paket_premium`) REFERENCES `paket_premium` (`id_paket_premium`);

--
-- Constraints for table `pembayaran`
--
ALTER TABLE `pembayaran`
  ADD CONSTRAINT `pembayaran_ibfk_1` FOREIGN KEY (`id_pengguna`) REFERENCES `pengguna` (`id_pengguna`);

--
-- Constraints for table `pendaftaran`
--
ALTER TABLE `pendaftaran`
  ADD CONSTRAINT `pendaftaran_ibfk_1` FOREIGN KEY (`id_pengguna`) REFERENCES `pengguna` (`id_pengguna`),
  ADD CONSTRAINT `pendaftaran_ibfk_2` FOREIGN KEY (`id_event`) REFERENCES `event` (`id_event`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
