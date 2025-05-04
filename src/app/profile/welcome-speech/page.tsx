import React from "react";
import Image from "next/image";
import ProfileLayout from "@/layouts/profile-layout";
import { Paragraph } from "@/components/ui/typography";

export const metadata = {
  title: "School Welcome Speech",
  description: "SMKN 1 Purwosari School Welcome Speech",
};

const ProfileHistory = () => {
  return (
    <ProfileLayout
      title="Sambutan Kepala Sekolah"
      subtitle="Sambutan resmi dari kepala sekolah SMK Negeri 1 Purwosari"
      classNameWrapper="pt-[70px]"
    >
      <Image
        src={"/assets/profile/welcome-speech/profile-welcome-speech.png"}
        alt="welcome-speech"
        draggable={false}
        className="w-full rounded-[10px] mt-10"
        width={800}
        height={800}
      />
      <Paragraph
        className={
          "flex flex-col items-start  gap-10 text-blue-base"
        }
      >
        <span>
          Assalamualaikum warahmatullahi wabarakatuh. Dengan mengucapkan segala
          puji kepada Tuhan Yang Maha Esa, disertai rasa syukur atas rahmat dan
          karunia-Nya. Perkembangan era revolusi industri 4.0 (era digital) dan
          pesatnya kemajuan teknologi dan informasi saat ini, membuat keberadaan
          sebuah website untuk dunia pendidikan, khususnya sekolah, menjadi
          sangat penting. Website sangat penting dalam upaya mengedepankan
          prinsip transparansi informasi dan perkembangan terkini sekolah.
        </span>
        <span>
          Masyarakat dapat dengan mudah mengakses berbagai informasi yang harus
          diketahui oleh setiap shareholder dan stakeholder secara nyata.
          Website dapat menjadi ajang promosi sekolah yang cukup efektif.
          Berbagai kegiatan dan progres sekolah dapat disampaikan secara faktual
          dan aktual sehingga masyarakat dapat mengetahui prestasi-prestasi yang
          telah berhasil diraih oleh SMK Negeri 1 Purwosari. Sebagai media
          pembelajaran, website sekolah juga dapat dimanfaatkan untuk memuat
          artikel dan informasi kegiatan yang diadakan di SMK Negeri 1
          Purwosari. Berbagai artikel tentang pembelajaran dan kejuruan yang
          terkait dengan kegiatan pembelajaran di kelas dapat dipublikasikan
          melalui website. Website ini dapat menunjang sarana kegiatan
          pembelajaran berbasis Teknologi dan Informasi.{" "}
        </span>
        <span>
          Selain itu, website ini juga menampilkan sejarah berdirinya sekolah
          SMK Negeri 1 Purwosari yang bertujuan agar khalayak umum dapat
          mengetahuinya. Kehadiran website juga dijadikan sebagai media
          koordinasi dengan unsur komite sekolah. Kerjasama dan komunikasi
          intensif sekolah dengan unsur komite sangat menentukan kesuksesan
          sekolah dalam mewujudkan pendidikan yang maju untuk menuju Generasi
          Emas.
        </span>
        <span>
          Cukup sekian mengenai pembukaan website baru yang telah kami buat.
          Terima kasih atas kerjasama semua pihak yang terlibat dalam
          pengembangan website ini. Dengan prinsip transparan, faktual, dan
          aktual, pendidikan di SMK Negeri 1 Purwosari akan jauh lebih maju.
          Harapan kita semua adalah sekolah semakin berkualitas dan sukses dalam
          mencerdaskan kehidupan anak bangsa Indonesia menuju Generasi Emas.
          Amin. Wassalamu’alaikum warahmatullahi wabarakatuh.
        </span>
      </Paragraph>
    </ProfileLayout>
  );
};

export default ProfileHistory;
