import React from "react";
import { Heading, List, Paragraph } from "@/components/ui/typography";
import ProfileLayout from "@/layouts/profile-layout";

export const metadata = {
  title: "School Vision & Mision",
  description: "SMKN 1 Purwosari School Vision and Mision",
};

const ProfileVisionMision = () => {
  return (
    <ProfileLayout
      title="Visi dan Misi Sekolah"
      subtitle="Informasi mengenai visi dan misi sekolah SMK Negeri 1 Puworsari"
      className="items-start"
      classNameWrapper="pt-[70px]"
    >
      <span className="flex flex-col items-start gap-4 mt-10">
        <Heading type="h3">Visi SMK Negeri 1 Purwosari adalah</Heading>
        <Paragraph>
          Terwujudnya Tamatan yang Beriman dan Bertaqwa kepada Tuhan Yang Maha
          Esa, berbudi pekerti luhur, berdaya saing tinggi, peduli dan berbudaya
          lingkungan
        </Paragraph>
      </span>
      <span className="flex flex-col items-start gap-4">
        <Heading type="h3">Misi SMK Negeri 1 Purwosari adalah</Heading>

        <List className="flex flex-col gap-2 mx-2">
          <li>
            Menerapkan nilai-nilai Agama, Pancasila dan Undang-undang Dasar 1945
          </li>
          <li>
            Mengembangkan pengetahuan, keterampilan, disiplin diri, etos kerja
            yang tinggi, aktif, kreatif, inovatif, dan budaya santun sesuai
            bidangnya
          </li>
          <li>
            Meningkatkan profesionalisme melalui penguasaan teknologi dan bahasa
            Internasional
          </li>
          <li>
            Mengembangkan budaya sekolah untuk melestarikan fungsi lingkungan,
            mencegah pencemaran dan kerusakan lingkungan
          </li>
          <li>
            Memahami peran dan fungsi masing-masing dalam pergaulan sesama warga
            sekolah dalam suasana kekeluargaan
          </li>
          <li>Mengembangkan pola kemitraan dengan masyarakat dan industri</li>
          <li>
            Mampu memanfaatkan potensi wilayah untuk pengembangan sekolah
            sebagai pusat budaya, pelatihan, produksi dan jasa berbasis teaching
            factory dan pendidikan lingkungan hidup.
          </li>
        </List>
      </span>
      <span className="flex flex-col items-start gap-4">
        <Heading type="h3">Motto</Heading>
        <p className="font-[500] text-[18px]">
          SMK Negeri 1 Purwosari memiliki motto yakni, “AKTIF, KREATIF,
          INOVATIF, PRESTASI” dan berikut ini adalah penjabarannya:
        </p>

        <List className="flex flex-col gap-2  mx-2">
          <li>Aktif : Giat bekerja, giat berusaha</li>
          <li>
            Kreatif : Memiliki daya cipta, memiliki kemampuan untuk menciptakan
          </li>
          <li>
            Inovatif : Bersifat pembaruan yang berbeda dengan yang sudah ada
          </li>
          <li>Prestasi : hasil yang telah di capai(yang telah di kerjakan)</li>
        </List>
      </span>
      <span className="flex flex-col items-start gap-4">
        <Heading type="h3">Tujuan Sekolah</Heading>
        <List className="flex flex-col gap-2 mx-2">
          <li>
            Menghasilkan lulusan yang kompeten dan bersetifikasi serta mampu
            berproduksi
          </li>
          <li>Meningkatkan kualitas proses belajar mengajar</li>
          <li>
            Menyiapkan peserta didik agar mampu mengembangkan sikap profesional,
            mampu beradaptasi di lingkungan kerja, gigih dalam berkompetisi,
            berdisiplin dan ulet serta mampu bersaing di ERAGLOBALISASI
          </li>
          <li>
            Meningkatkan kepuasan masyarakat untuk memperoleh layanan pendidikan
            dan pelatihan kejuruan sesuai program keahlian
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
        </List>
      </span>
    </ProfileLayout>
  );
};

export default ProfileVisionMision;
