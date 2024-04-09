import Image from "next/image";
import React from "react";

const ProfileHistory = () => {
  return (
    <div className="w-full lg:pt-24 px-3 rounded-[10px] text-[#081B34]">
      <div className="relative  bg-white flex flex-col items-center  pt-10 pb-20">
        <div className="flex flex-col lg:items-center gap-4 w-[80%] lg:w-2/3 lg:text-center">
          <h1 className="font-[700] lg:text-[46px] text-[24px] ">
            Visi dan Misi Sekolah
          </h1>
          <p className="font-[500] text-[18px] text-[#696969]">
            Informasi mengenai visi dan misi sekolah SMK Negeri 1 Puworsari
          </p>
          <hr className="w-full border mt-8" />
        </div>
        <div className="flex flex-col items-start gap-8 mt-10  w-[80%]">
          <h2 className="font-[600] text-[20px] lg:text-[24px]">
            Visi SMK Negeri 1 Purwosari adalah
          </h2>
          <p className="font-[500] text-[18px]">
            Terwujudnya Tamatan yang Beriman dan Bertaqwa kepada Tuhan Yang Maha
            Esa, berbudi pekerti luhur, berdaya saing tinggi, peduli dan
            berbudaya lingkungan
          </p>
          <h2 className="font-[600] text-[20px] lg:text-[24px]">
            Misi SMK Negeri 1 Purwosari adalah
          </h2>
          <ul className="font-[500] lg:text-[18px] flex flex-col gap-1 list-disc list-inside mx-2">
            <li>
              Menerapkan nilai-nilai Agama, Pancasila dan Undang-undang Dasar
              1945
            </li>
            <li>
              Mengembangkan pengetahuan, keterampilan, disiplin diri, etos kerja
              yang tinggi, aktif, kreatif, inovatif, dan budaya santun sesuai
              bidangnya
            </li>
            <li>
              Meningkatkan profesionalisme melalui penguasaan teknologi dan
              bahasa Internasional
            </li>
            <li>
              Mengembangkan budaya sekolah untuk melestarikan fungsi lingkungan,
              mencegah pencemaran dan kerusakan lingkungan
            </li>
            <li>
              Memahami peran dan fungsi masing-masing dalam pergaulan sesama
              warga sekolah dalam suasana kekeluargaan
            </li>
            <li>Mengembangkan pola kemitraan dengan masyarakat dan industri</li>
            <li>
              Mampu memanfaatkan potensi wilayah untuk pengembangan sekolah
              sebagai pusat budaya, pelatihan, produksi dan jasa berbasis
              teaching factory dan pendidikan lingkungan hidup.
            </li>
          </ul>
          <span>
            <h2 className="font-[600] text-[20px] lg:text-[24px]">Motto</h2>
            <p className="font-[500] text-[18px]">
              SMK Negeri 1 Purwosari memiliki motto yakni, “AKTIF, KREATIF,
              INOVATIF, PRESTASI” dan berikut ini adalah penjabarannya:
            </p>
          </span>
          <ul className="font-[500] lg:text-[18px] flex flex-col gap-1 list-disc list-inside mx-2">
            <li>Aktif : Giat bekerja, giat berusaha</li>
            <li>
              Kreatif : Memiliki daya cipta, memiliki kemampuan untuk
              menciptakan
            </li>
            <li>
              Inovatif : Bersifat pembaruan yang berbeda dengan yang sudah ada
            </li>
            <li>
              Prestasi : hasil yang telah di capai(yang telah di kerjakan)
            </li>
          </ul>
          <h2 className="font-[600] text-[20px] lg:text-[24px]">
            Tujuan Sekolah
          </h2>
          <ul className="font-[500] lg:text-[18px] flex flex-col gap-1 list-disc list-inside mx-2">
            <li>
              Menghasilkan lulusan yang kompeten dan bersetifikasi serta mampu
              berproduksi
            </li>
            <li>Meningkatkan kualitas proses belajar mengajar</li>
            <li>
              Menyiapkan peserta didik agar mampu mengembangkan sikap
              profesional, mampu beradaptasi di lingkungan kerja, gigih dalam
              berkompetisi, berdisiplin dan ulet serta mampu bersaing di
              ERAGLOBALISASI
            </li>
            <li>
              Meningkatkan kepuasan masyarakat untuk memperoleh layanan
              pendidikan dan pelatihan kejuruan sesuai program keahlian
            </li>
            <li>
              Konsistensi pelaksanaan aktifitas, kendali mutu dan jaminan mutu
              sekolah
            </li>
            <li>Meningkatkan kesejahteraan warga sekolah</li>
            <li>
              Meningkatkan kualitas komunikasi Internasional dengan bahasa
              Internasional
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileHistory;
