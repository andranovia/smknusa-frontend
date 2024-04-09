import Image from "next/image";
import React from "react";

const ProfileHistory = () => {
  return (
    <div className="w-full lg:pt-24 px-3 rounded-[10px] text-[#081B34]">
      <div className="relative  bg-white flex flex-col items-center  pt-10 pb-20">
        <div className="flex flex-col lg:items-center gap-4 w-[80%] lg:w-2/3 lg:text-center">
          <h1 className="font-[700] lg:text-[46px] text-[24px] ">
            Sejarah Berdirinya Sekolah
          </h1>
          <p className="font-[500] text-[18px] text-[#696969]">
            Sedikit pengetahuan mengenai bagaimana sejarah berdirinya SMK Negeri
            1 Purwosari
          </p>
          <hr className="w-full border mt-8" />
        </div>
        <div className="flex flex-col items-center gap-8 w-[80%]">
          <Image
            src={"/assets/profile/history/profile-history.png"}
            alt=""
            className="w-full rounded-[10px]"
            width={800}
            height={800}
          />
          <p className="flex flex-col items-start gap-10 font-[500] text-[18px] text-[#081B34]">
            <span>
              SMK Negeri 1 Purwosari, merupakan sebuah institusi pendidikan yang
              berdiri pada tahun 2000, telah menjadi salah satu landasan
              pendidikan yang penting di Kabupaten Pasuruan. Pada awal
              berdirinya, hanya ada enam sekolah kejuruan di Jawa Timur, dan SMK
              Negeri 1 Purwosari adalah salah satunya. Sekolah ini memiliki
              sejarah perkembangan yang cukup pesat, mulai dari hanya memiliki
              tiga jurusan utama, yakni Pertanian, Mesin, dan Teknologi
              Informasi (TI). Meskipun jumlah kelas awalnya hanya tujuh, yang
              berasal dari ketiga  tersebut, sekolah ini mampu menarik perhatian
              masyarakat sejak awal berdirinya.
            </span>
            <span>
              Dengan moto "Mandiri dan Prestasi", SMK Negeri 1 Purwosari telah
              mengukuhkan dirinya sebagai pusat pendidikan yang berfokus pada
              kemandirian dan prestasi anak didiknya. Awalnya, sekolah ini
              mengadopsi sistem IGI (Indonesia German Institute) yang berbasis
              IT, berkolaborasi dengan Jerman. Namun, seiring berjalannya waktu,
              sistem ini berubah menjadi RSBI (Rintisan Sekolah Berbasis
              Internasional) dengan fokus pada bidang bahasa Inggris, IPA, dan
              Matematika. Perubahan ini menuntut para guru untuk memiliki
              kualifikasi lebih tinggi, dengan persyaratan minimal lulusan S2.
              Untuk memenuhi standar ini, Provinsi Jawa Timur menginisiasi
              program khusus untuk kelas RSBI. Meskipun pada awalnya jumlah guru
              PNS masih sangat terbatas, semangat untuk mencapai kualitas
              pendidikan yang unggul tetap menjadi prioritas. <br />
            </span>
            <span>
              SMK Negeri 1 Purwosari dahulunya merupakan proyek pemerintah
              pusat, guna melakukan pemerataan infrastruktur penunjang
              pendidikan. Oleh sebab itu, kriteria seleksi siswa juga sangat
              ketat, namun antusiasme masyarakat terhadap pendidikan yang
              berkualitas mendorong pertumbuhan pesat sekolah ini. Tanggapan
              masyarakat terhadap keberadaan SMK Negeri 1 Purwosari sangat
              positif, dan bahkan sekolah-sekolah lain (SD-SMP) di sekitarnya
              memanfaatkan fasilitas yang tersedia di SMK Negeri 1 Purwosari,
              seperti komputer dan alat-alat lainnya untuk mendukung
              pembelajaran siswa mereka.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHistory;
